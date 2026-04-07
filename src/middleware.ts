import { NextRequest, NextResponse } from 'next/server';

// Decode JWT payload without full verification in edge runtime
// Full verification is done in the Node.js API routes via @/lib/auth
function decodeJwtPayload(token: string): { id?: number; exp?: number } | null {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const payload = Buffer.from(parts[1], 'base64url').toString('utf8');
    return JSON.parse(payload);
  } catch {
    return null;
  }
}

function isTokenExpired(payload: { exp?: number }): boolean {
  if (!payload.exp) return false;
  return Date.now() >= payload.exp * 1000;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin/dashboard/* routes
  if (pathname.startsWith('/admin/dashboard')) {
    const token = request.cookies.get('admin_token')?.value;

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const payload = decodeJwtPayload(token);
    if (!payload || !payload.id || isTokenExpired(payload)) {
      const response = NextResponse.redirect(new URL('/admin/login', request.url));
      response.cookies.delete('admin_token');
      return response;
    }

    // Token appears valid — allow the request through
    return NextResponse.next();
  }

  // Redirect /admin to /admin/dashboard
  if (pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/dashboard/:path*'],
};

