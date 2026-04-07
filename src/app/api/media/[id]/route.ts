import { NextRequest } from 'next/server';
import { getOne, execute } from '@/lib/db';
import { getAuthFromRequest } from '@/lib/auth';
import { successResponse, errorResponse } from '@/lib/utils';
import { Media } from '@/types';
import { unlink } from 'fs/promises';
import { join } from 'path';

interface Params {
  params: { id: string };
}

export async function DELETE(request: NextRequest, { params }: Params) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const media = await getOne<Media>('SELECT * FROM media WHERE id = ?', [params.id]);
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
    await execute('DELETE FROM media WHERE id = ?', [params.id]);
    return successResponse(null, 'Media deleted');
  } catch (error) {
    console.error('[DELETE /api/media/[id]]', error);
    return errorResponse('Internal server error', 500);
  }
}
