import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const membersOnlyRoutes = ['/my-travel'];
const guestsOnlyRoutes = ['/sign-up', '/sign-in'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('accessToken');
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  if (!token && membersOnlyRoutes.includes(pathname)) {
    url.pathname = '/redirect';
    url.searchParams.set('mode', 'NOT_SIGNED_IN');
    return NextResponse.redirect(url);
  }

  if (token && guestsOnlyRoutes.includes(pathname)) {
    url.pathname = '/redirect';
    url.searchParams.set('mode', 'SIGNED_IN');
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [...membersOnlyRoutes, ...guestsOnlyRoutes],
};
