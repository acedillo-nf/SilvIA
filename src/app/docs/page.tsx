import React from 'react';

const DocsIndexPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Documentación</h1>
      <p className="mb-4">Bienvenido a la sección de documentación. Por favor, seleccione una categoría del menú lateral para comenzar.</p>
      <ul className="list-disc list-inside">
        <li>Guía de WhatsApp</li>
        <li>Guías</li>
        <li>Instalación Web</li>
      </ul>
    </div>
  );
};

export default DocsIndexPage;