import React from 'react';

const DocsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Documentación: Crear y Usar Plantillas de WhatsApp</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Crear plantillas de WhatsApp</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Ir a: <a href="https://business.facebook.com/wa/manage/message-templates/" className="text-blue-600 hover:underline">https://business.facebook.com/wa/manage/message-templates/</a></li>
          <li>Haga clic en: &quot;Crear plantilla&quot;</li>
          <li>Elija la opción Utilizar una plantilla en blanco haciendo clic en &quot;Crear plantilla&quot;.</li>
        </ol>

        <div className="mt-4">
          <p className="italic">Las opciones de este ejemplo se recomiendan, pero no son necesariamente obligatorias.</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Categoría: Marketing | Personalizado</li>
            <li>Nombre: (utilice un nombre descriptivo)</li>
            <li>Cabecera: Comienzo del mensaje</li>
            <li>Cuerpo: Mensaje principal</li>
            <li>Botones: Siempre es recomendable añadir el botón &quot;Desactivar Marketing&quot; porque WhatsApp valora que respondamos correctamente a las peticiones de &quot;No Molestar&quot; de los usuarios.</li>
          </ul>
        </div>

        <p className="mt-4">Verás una vista previa de tu mensaje en la parte derecha de la pantalla.</p>
        <p className="mt-2">Estas plantillas se sincronizarán automáticamente con Gloria AI</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Para iniciar una nueva conversación desde Gloria AI</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>Vaya a &quot;Conversaciones&quot; -&gt; &quot;Nueva conversación&quot;.</li>
          <li>Actualice la lista de plantillas haciendo clic en &quot;Actualizar&quot;.</li>
          <li>Seleccione la plantilla que desea enviar</li>
          <li>Escriba el número de teléfono</li>
          <li>Y luego haga clic en &quot;Enviar&quot;.</li>
        </ol>
      </section>
    </div>
  );
};

export default DocsPage;
