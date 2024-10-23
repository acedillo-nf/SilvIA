import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/auth(.*)',
    '/integraciones',
    '/contacto',
    '/precios',
    '/nosotros',
    '/api/(.*)',
    '/docs(.*)'  // Changed from "/docs/(.*)" to '/docs(.*)'
  ],
});

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|_next|trpc).*)',
  ],
};
