import React from 'react';
import Link from 'next/link';

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-gray-100 p-4">
        <nav>
          <h2 className="text-lg font-semibold mb-2">Guía de WhatsApp</h2>
          <ul className="space-y-2">
            <li><Link href="/docs/whatsapp/instalacion" className="text-blue-600 hover:underline">Instalación WhatsApp</Link></li>
            {/* Agrega más enlaces aquí */}
          </ul>
          <h2 className="text-lg font-semibold mt-4 mb-2">Guías</h2>
          <ul className="space-y-2">
            {/* Agrega enlaces a otras guías aquí */}
          </ul>
          <h2 className="text-lg font-semibold mt-4 mb-2">Instalación Web</h2>
          <ul className="space-y-2">
            {/* Agrega enlaces a la instalación web aquí */}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default DocsLayout;
