import { NextRequest } from 'next/server';
import { query, execute } from '@/lib/db';
import { getAuthFromRequest } from '@/lib/auth';
import { successResponse, errorResponse } from '@/lib/utils';
import { SiteSetting } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const settings = await query<SiteSetting>(
      'SELECT * FROM site_settings ORDER BY setting_key ASC'
    );
    return successResponse(settings);
  } catch (error) {
    console.error('[GET /api/settings]', error);
    return errorResponse('Internal server error', 500);
  }
}

export async function PUT(request: NextRequest) {
  try {
    const auth = getAuthFromRequest(request);
    if (!auth) return errorResponse('Unauthorized', 401);

    const body = await request.json();
    const { settings } = body as { settings: Record<string, string> };

    if (!settings || typeof settings !== 'object') {
      return errorResponse('Settings must be an object', 400);
    }

    // Upsert each setting
    for (const [key, value] of Object.entries(settings)) {
      await execute(
        `INSERT INTO site_settings (setting_key, setting_value, setting_type)
         VALUES (?, ?, 'text')
         ON DUPLICATE KEY UPDATE setting_value = ?`,
        [key, value, value]
      );
    }

    const updated = await query<SiteSetting>('SELECT * FROM site_settings ORDER BY setting_key ASC');
    return successResponse(updated, 'Settings updated');
  } catch (error) {
    console.error('[PUT /api/settings]', error);
    return errorResponse('Internal server error', 500);
  }
}
