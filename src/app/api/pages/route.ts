import { NextRequest } from 'next/server';
import { query, execute } from '@/lib/db';
import { getAuthFromRequest } from '@/lib/auth';
import { successResponse, errorResponse, slugify } from '@/lib/utils';
import { Page, CreatePageInput } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const pages = await query<Page>('SELECT * FROM pages ORDER BY sort_order ASC, created_at DESC');
    return successResponse(pages);
  } catch (error) {
    console.error('[GET /api/pages]', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const body: CreatePageInput = await request.json();
    const { title, slug, meta_title, meta_description, is_published = false, sort_order = 0 } = body;

    if (!title || !slug) {
      return errorResponse('Title and slug are required', 400);
    }

    const cleanSlug = slugify(slug);

    const result = await execute(
      `INSERT INTO pages (title, slug, meta_title, meta_description, is_published, sort_order)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [title, cleanSlug, meta_title || null, meta_description || null, is_published, sort_order]
    );

    const newPage = await query<Page>('SELECT * FROM pages WHERE id = ?', [result.insertId]);
    return successResponse(newPage[0], 'Page created', 201);
  } catch (error: unknown) {
    console.error('[POST /api/pages]', error);
    if ((error as NodeJS.ErrnoException).code === 'ER_DUP_ENTRY') {
      return errorResponse('A page with this slug already exists', 409);
    }
    return errorResponse('Internal server error', 500);
  }
}
