import { NextRequest } from 'next/server';
import { query, execute } from '@/lib/db';
import { getAuthFromRequest } from '@/lib/auth';
import { successResponse, errorResponse } from '@/lib/utils';
import { SectionWithPage, CreateSectionInput } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const { searchParams } = new URL(request.url);
    const pageId = searchParams.get('page_id');

    let sql = `
      SELECT s.*, p.title as page_title, p.slug as page_slug
      FROM sections s
      JOIN pages p ON s.page_id = p.id
    `;
    const params: unknown[] = [];

    if (pageId) {
      sql += ' WHERE s.page_id = ?';
      params.push(pageId);
    }

    sql += ' ORDER BY s.page_id ASC, s.sort_order ASC';

    const sections = await query<SectionWithPage>(sql, params);
    return successResponse(sections);
  } catch (error) {
    console.error('[GET /api/sections]', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const body: CreateSectionInput = await request.json();
    const {
      page_id,
      section_key,
      title,
      subtitle,
      content,
      section_type = 'custom',
      is_visible = true,
      sort_order = 0,
    } = body;

    if (!page_id || !section_key) {
      return errorResponse('page_id and section_key are required', 400);
    }

    const result = await execute(
      `INSERT INTO sections (page_id, section_key, title, subtitle, content, section_type, is_visible, sort_order)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [page_id, section_key, title || null, subtitle || null, content || null, section_type, is_visible, sort_order]
    );

    const [newSection] = await query<SectionWithPage>(
      `SELECT s.*, p.title as page_title, p.slug as page_slug
       FROM sections s JOIN pages p ON s.page_id = p.id WHERE s.id = ?`,
      [result.insertId]
    );

    return successResponse(newSection, 'Section created', 201);
  } catch (error: unknown) {
    console.error('[POST /api/sections]', error);
    if ((error as NodeJS.ErrnoException).code === 'ER_DUP_ENTRY') {
      return errorResponse('A section with this key already exists on this page', 409);
    }
    return errorResponse('Internal server error', 500);
  }
}
