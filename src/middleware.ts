import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/', '/auth(.*)', '/portal(.*)', '/images(.*)', '/favicon.ico', '/chatbot', '/blogs/7', "/blogs/15", "/blogs/17", "/blogs/19", '/blogs/', '/contacto'],
});

export const config = {
  matcher: [
    '/', 
    '/((?!_next/static|_next/image|favicon.ico|api|trpc).*)',
  ],
};
