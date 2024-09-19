import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: ['/', '/auth(.*)',"/integraciones",'/contacto', '/precios', '/nosotros','/api(.*)', '/api/twilio', '/api/twilio/[userId]', ],
});

export const config = {
  matcher: [
    '/', 
    '/((?!_next/static|_next/image|favicon.ico|api|trpc).*)',
  ],
};

