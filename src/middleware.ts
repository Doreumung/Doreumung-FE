import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get('accessToken');
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  if (!token && membersOnlyRoutes === pathname) {
    url.pathname = '/redirect';
    url.searchParams.set('mode', 'NOT_SIGNED_IN');
    return NextResponse.redirect(url);
  }

  if (token && guestsOnlyRoutes.some(route => pathname.startsWith(route))) {
    url.pathname = '/redirect';
    url.searchParams.set('mode', 'SIGNED_IN');
    return NextResponse.redirect(url);
  }
};

const membersOnlyRoutes = '/my-travel';
const guestsOnlyRoutes = ['/sign-up', '/sign-in'];

export const config = {
  matcher: ['/my-travel', '/sign-up', '/sign-in'],
};
