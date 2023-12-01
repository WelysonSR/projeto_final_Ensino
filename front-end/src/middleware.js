import { NextResponse } from 'next/server'

export async function middleware(request) {
  const user = request.cookies.get('user')?.value
  if (!user) {
    if (request.nextUrl.pathname === '/') return NextResponse.next()
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: ['/', '/home', '/user/:path*', '/platform/:path*', '/game/:path*'],
}