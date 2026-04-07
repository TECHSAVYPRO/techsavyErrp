import { NextRequest } from 'next/server';
import { getOne, execute } from '@/lib/db';
import { getAuthFromRequest } from '@/lib/auth';
import { successResponse, errorResponse } from '@/lib/utils';
import { Media } from '@/types';
import { unlink } from 'fs/promises';
import { join } from 'path';

type RouteParams = { params: Promise<{ id: string }> };

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const { id } = await params;
    const media = await getOne<Media>('SELECT * FROM media WHERE id = ?', [id]);
    if (!media) return errorResponse('Media not found', 404);

    // Delete file from disk
    const uploadDir = process.env.UPLOAD_DIR || 'public/uploads';
    const filepath = join(process.cwd(), uploadDir, media.filename);

    try {
      await unlink(filepath);
    } catch {
      // File may not exist on disk, continue with DB deletion
    }

    // Delete from database
    await execute('DELETE FROM media WHERE id = ?', [id]);
    return successResponse(null, 'Media deleted');
  } catch (error) {
    console.error('[DELETE /api/media/[id]]', error);
    return errorResponse('Internal server error', 500);
  }
}
