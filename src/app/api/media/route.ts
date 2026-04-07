import { NextRequest } from 'next/server';
import { query, execute } from '@/lib/db';
import { getAuthFromRequest } from '@/lib/auth';
import { successResponse, errorResponse, generateFilename, isAllowedMimeType } from '@/lib/utils';
import { Media } from '@/types';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const media = await query<Media>(
      'SELECT * FROM media ORDER BY created_at DESC'
    );
    return successResponse(media);
  } catch (error) {
    console.error('[GET /api/media]', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function POST(request: NextRequest) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const formData = await request.formData();
    const files = formData.getAll('files') as File[];

    if (!files || files.length === 0) {
      return errorResponse('No files provided', 400);
    }

    const maxSize = parseInt(process.env.MAX_FILE_SIZE || '5242880', 10);
    const uploadDir = process.env.UPLOAD_DIR || 'public/uploads';
    const uploadPath = join(process.cwd(), uploadDir);

    // Ensure upload directory exists
    await mkdir(uploadPath, { recursive: true });

    const uploaded: Media[] = [];

    for (const file of files) {
      // Validate MIME type
      if (!isAllowedMimeType(file.type)) {
        return errorResponse(`File type "${file.type}" is not allowed`, 400);
      }

      // Validate file size
      if (file.size > maxSize) {
        return errorResponse(`File "${file.name}" exceeds the maximum size`, 400);
      }

      // Generate unique filename
      const filename = generateFilename(file.name);
      const filepath = join(uploadPath, filename);

      // Write file
      const bytes = await file.arrayBuffer();
      await writeFile(filepath, Buffer.from(bytes));

      // Get dimensions if possible (we'll use sharp for this in production)
      let width: number | null = null;
      let height: number | null = null;

      try {
        const sharp = (await import('sharp')).default;
        const metadata = await sharp(filepath).metadata();
        width = metadata.width || null;
        height = metadata.height || null;
      } catch {
        // Sharp not available, skip dimensions
      }

      // Save to database
      const result = await execute(
        `INSERT INTO media (filename, original_name, mime_type, file_size, width, height, alt_text, folder, uploaded_by)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [filename, file.name, file.type, file.size, width, height, null, 'general', auth.id]
      );

      const [newMedia] = await query<Media>('SELECT * FROM media WHERE id = ?', [result.insertId]);
      uploaded.push(newMedia);
    }

    return successResponse(uploaded.length === 1 ? uploaded[0] : uploaded, 'Files uploaded', 201);
  } catch (error) {
    console.error('[POST /api/media]', error);
    return errorResponse('Internal server error', 500);
  }
}
