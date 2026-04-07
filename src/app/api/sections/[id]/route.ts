import { NextRequest } from 'next/server';
import { getOne, query, execute } from '@/lib/db';
import { getAuthFromRequest } from '@/lib/auth';
import { successResponse, errorResponse } from '@/lib/utils';
import { Section, SectionWithPage } from '@/types';

interface Params {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Params) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const [section] = await query<SectionWithPage>(
      `SELECT s.*, p.title as page_title, p.slug as page_slug
       FROM sections s JOIN pages p ON s.page_id = p.id WHERE s.id = ?`,
      [params.id]
    );

    if (!section) return errorResponse('Section not found', 404);
    return successResponse(section);
  } catch (error) {
    console.error('[GET /api/sections/[id]]', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function PUT(request: NextRequest, { params }: Params) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const section = await getOne<Section>('SELECT * FROM sections WHERE id = ?', [params.id]);
    if (!section) return errorResponse('Section not found', 404);

    const body = await request.json();
    const {
      title = section.title,
      subtitle = section.subtitle,
      content = section.content,
      section_type = section.section_type,
      is_visible = section.is_visible,
      sort_order = section.sort_order,
    } = body;

    await execute(
      `UPDATE sections SET title = ?, subtitle = ?, content = ?, section_type = ?, is_visible = ?, sort_order = ? WHERE id = ?`,
      [title, subtitle, content, section_type, is_visible, sort_order, params.id]
    );

    const [updated] = await query<SectionWithPage>(
      `SELECT s.*, p.title as page_title, p.slug as page_slug
       FROM sections s JOIN pages p ON s.page_id = p.id WHERE s.id = ?`,
      [params.id]
    );
    return successResponse(updated, 'Section updated');
  } catch (error) {
    console.error('[PUT /api/sections/[id]]', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const section = await getOne<Section>('SELECT * FROM sections WHERE id = ?', [params.id]);
    if (!section) return errorResponse('Section not found', 404);

    await execute('DELETE FROM sections WHERE id = ?', [params.id]);
    return successResponse(null, 'Section deleted');
  } catch (error) {
    console.error('[DELETE /api/sections/[id]]', error);
    return errorResponse('Internal server error', 500);
  }
}
