import { NextRequest } from 'next/server';
import { getOne, execute } from '@/lib/db';
import { getAuthFromRequest } from '@/lib/auth';
import { successResponse, errorResponse, slugify } from '@/lib/utils';
import { Page } from '@/types';

type RouteParams = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const { id } = await params;
    const page = await getOne<Page>('SELECT * FROM pages WHERE id = ?', [id]);
    if (!page) return errorResponse('Page not found', 404);

    return successResponse(page);
  } catch (error) {
    console.error('[GET /api/pages/[id]]', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const { id } = await params;
    const page = await getOne<Page>('SELECT * FROM pages WHERE id = ?', [id]);
    if (!page) return errorResponse('Page not found', 404);

    const body = await request.json();
    const {
      title = page.title,
      slug = page.slug,
      meta_title = page.meta_title,
      meta_description = page.meta_description,
      is_published = page.is_published,
      sort_order = page.sort_order,
    } = body;

    const cleanSlug = slugify(slug);

    await execute(
      `UPDATE pages SET title = ?, slug = ?, meta_title = ?, meta_description = ?, is_published = ?, sort_order = ? WHERE id = ?`,
      [title, cleanSlug, meta_title || null, meta_description || null, is_published, sort_order, id]
    );

    const updated = await getOne<Page>('SELECT * FROM pages WHERE id = ?', [id]);
    return successResponse(updated, 'Page updated');
  } catch (error: unknown) {
    console.error('[PUT /api/pages/[id]]', error);
    if ((error as NodeJS.ErrnoException).code === 'ER_DUP_ENTRY') {
      return errorResponse('A page with this slug already exists', 409);
    }
    return errorResponse('Internal server error', 500);
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const { id } = await params;
    const page = await getOne<Page>('SELECT * FROM pages WHERE id = ?', [id]);
    if (!page) return errorResponse('Page not found', 404);

    await execute('DELETE FROM pages WHERE id = ?', [id]);
    return successResponse(null, 'Page deleted');
  } catch (error) {
    console.error('[DELETE /api/pages/[id]]', error);
    return errorResponse('Internal server error', 500);
  }
}
