import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const membersOnlyRoutes = ['/my-travel'];
const guestsOnlyRoutes = ['/sign-up', '/sign-in'];

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get('access_token');
  const { pathname } = request.nextUrl;

  if (!token && membersOnlyRoutes.includes(pathname)) {
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
  matcher: [...membersOnlyRoutes, ...guestsOnlyRoutes],
};
