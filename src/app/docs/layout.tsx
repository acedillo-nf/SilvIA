import React from 'react';
import Link from 'next/link';

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-nblue p-4">
        <Link href="/" className="text-white hover:text-gray-200 font-semibold">
          ← Regresar al inicio
        </Link>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 bg-gray-100 p-4 overflow-y-auto">
          <nav>
            <h2 className="text-lg font-semibold mb-2">Guía de WhatsApp</h2>
            <ul className="space-y-2">
              <li><Link href="/docs/whatsapp/instalacion" className="text-nmarino hover:text-nblue">Instalación WhatsApp</Link></li>
              <li><Link href="/docs/whatsapp/plantilla" className="text-nmarino hover:text-nblue">Planillas WhatsApp</Link></li>
              <li><Link href="/docs/whatsapp/disparadores" className="text-nmarino hover:text-nblue">Añadir disparadores</Link></li>
            </ul>
            <h2 className="text-lg font-semibold mt-4 mb-2">Guías</h2>
            <ul className="space-y-2">
              <li><Link href="/docs/web" className="text-nmarino hover:text-nblue">Web</Link></li>
              {/* Agrega enlaces a otras guías aquí */}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DocsLayout;
