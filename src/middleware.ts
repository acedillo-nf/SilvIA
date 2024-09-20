import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/auth(.*)',
    '/integraciones',
    '/contacto',
    '/precios',
    '/nosotros',
    '/api(.*)'
  ],
});

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|_next|trpc).*)',
  ],
};
