import React from 'react';
import Image from 'next/image';

const ConversationTriggers = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Disparadores de Conversación en WhatsApp para MarIA</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">¿Qué son los Disparadores de Conversación?</h2>
        <p className="mb-4">
          Los Disparadores de Conversación son frases o preguntas sugeridas al usuario al iniciar una nueva conversación en WhatsApp. 
          Facilitan a los clientes el inicio de una interacción con MarIA.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Configuración de Disparadores de Conversación</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            Acceda al gestor de números de teléfono Meta: 
            <a href="https://business.facebook.com/latest/whatsapp_manager/phone_numbers/" className="text-blue-600 hover:underline ml-1" target="_blank" rel="noopener noreferrer">
              Gestor de números de teléfono
            </a>
          </li>
          <li>
            Haga clic en el icono &quot;Configuración&quot;
            {/* Aquí puedes añadir una imagen del icono de configuración si la tienes */}
            {/* <Image src="/path-to-image/configuracion-icon.png" alt="Icono de Configuración" width={24} height={24} /> */}
          </li>
          <li>
            En la pestaña &quot;Automatizaciones&quot;, busque &quot;Iniciadores de conversación&quot; y haga clic en &quot;Editar&quot;
          </li>
          <li>
            En la ventana que se abre, añada las preguntas o frases que desee como disparadores
            {/* Aquí puedes añadir una imagen de ejemplo de la ventana de edición */}
            {/* <Image src="/path-to-image/edicion-disparadores.png" alt="Ventana de edición de disparadores" width={500} height={300} className="my-4" /> */}
          </li>
          <li>
            Visualice cómo quedarán los disparadores en el chat de WhatsApp
          </li>
          <li>
            Cuando haya terminado, haga clic en el icono &quot;Guardar&quot; en la parte inferior derecha
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Visualización de Disparadores Configurados</h2>
        <p>
          Después de guardar, podrá ver la lista de preguntas configuradas bajo el título &quot;Iniciadores de conversación&quot; en la página de configuración.
        </p>
        {/* Aquí puedes añadir una imagen de ejemplo de la lista de disparadores configurados */}
        {/* <Image src="/path-to-image/lista-disparadores.png" alt="Lista de disparadores configurados" width={500} height={300} className="my-4" /> */}
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Consejos para Crear Buenos Disparadores</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Mantenga las preguntas cortas y claras</li>
          <li>Use un lenguaje amigable y accesible</li>
          <li>Enfóquese en las necesidades más comunes de sus clientes</li>
          <li>Actualice los disparadores periódicamente según el feedback y las tendencias</li>
        </ul>
      </section>
    </div>
  );
};

export default ConversationTriggers;
