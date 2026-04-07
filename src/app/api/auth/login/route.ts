import { NextRequest } from 'next/server';
import { getOne, execute } from '@/lib/db';
import { signToken, comparePassword, setAuthCookie } from '@/lib/auth';
import { successResponse, errorResponse, isValidEmail } from '@/lib/utils';
import { AdminUser } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return errorResponse('Username/email and password are required.', 400);
    }

    // Find user by username or email
    const field = isValidEmail(username) ? 'email' : 'username';
    const user = await getOne<AdminUser>(
      `SELECT * FROM admin_users WHERE ${field} = ? AND is_active = TRUE`,
      [username]
    );

    if (!user) {
      return errorResponse('Invalid credentials.', 401);
    }

    // Verify password
    const isValid = await comparePassword(password, user.password_hash);
    if (!isValid) {
      return errorResponse('Invalid credentials.', 401);
    }

    // Update last_login
    await execute('UPDATE admin_users SET last_login = NOW() WHERE id = ?', [user.id]);

    // Create JWT
    const token = signToken({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    });

    // Set cookie
    setAuthCookie(token);

    return successResponse({
      id: user.id,
      username: user.username,
      email: user.email,
      full_name: user.full_name,
      role: user.role,
    }, 'Login successful');
  } catch (error) {
    console.error('[POST /api/auth/login]', error);
    return errorResponse('Internal server error.', 500);
  }
}
