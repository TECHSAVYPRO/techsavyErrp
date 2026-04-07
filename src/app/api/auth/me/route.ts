import { NextRequest } from 'next/server';
import { getOne } from '@/lib/db';
import { getAuthFromRequest } from '@/lib/auth';
import { successResponse, errorResponse } from '@/lib/utils';
import { AdminUserPublic } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const payload = getAuthFromRequest(request);
    if (!payload) {
      return errorResponse('Unauthorized', 401);
    }

    const user = await getOne<AdminUserPublic>(
      'SELECT id, username, email, full_name, role, is_active, last_login, created_at FROM admin_users WHERE id = ? AND is_active = TRUE',
      [payload.id]
    );

    if (!user) {
      return errorResponse('User not found', 404);
    }

    return successResponse(user);
  } catch (error) {
    console.error('[GET /api/auth/me]', error);
    return errorResponse('Internal server error', 500);
  }
}
