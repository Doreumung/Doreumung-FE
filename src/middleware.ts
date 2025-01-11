import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const membersOnlyRoutes = [
  '/my-travel',
  '/confirm-password',
  '/edit-profile',
  '/travel-reviews/create',
  '/travel-reviews/edit',
];
const guestsOnlyRoutes = ['/sign-up', '/sign-in'];

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get('access_token');
  const { pathname } = request.nextUrl;

  if (!token && membersOnlyRoutes.some(route => pathname.startsWith(route))) {
    const response = NextResponse.redirect(`${request.nextUrl.origin}/redirect`);
    response.cookies.set('redirectMode', 'NOT_SIGNED_IN');
    return response;
  }

  if (token && guestsOnlyRoutes.includes(pathname)) {
    const response = NextResponse.redirect(`${request.nextUrl.origin}/redirect`);
    response.cookies.set('redirectMode', 'SIGNED_IN');
    return response;
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/my-travel',
    '/confirm-password',
    '/edit-profile',
    '/travel-reviews/create/:path*',
    '/travel-reviews/edit/:path*',
    '/sign-up',
    '/sign-in',
  ],
};
