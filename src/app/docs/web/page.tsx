import React from 'react';

const WebsiteInstallationGuide = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Guía de Instalación de MarIA en tu Sitio Web</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Instalación General</h2>
        <p className="mb-4">
          Para instalar MarIA en tu sitio web, necesitarás insertar un fragmento de código JavaScript en tu página. Este código creará un iframe que cargará el chatbot de MarIA.
        </p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
          <code>
{`<script>
  const iframe = document.createElement("iframe");
  
  const iframeStyles = (styleString) => {
    const style = document.createElement('style');
    style.textContent = styleString;
    document.head.append(style);
  }
  
  iframeStyles(\`
    .chat-frame {
      position: fixed;
      bottom: 50px;
      right: 50px;
      border: none;
      z-index: 9999;
    }
  \`)
  
  iframe.src = "https://www.netfy-ai.mx/chatbot"
  iframe.classList.add('chat-frame')
  document.body.appendChild(iframe)
  
  window.addEventListener("message", (e) => {
    if(e.origin !== "https://www.netfy-ai.mx") return null
    let dimensions = JSON.parse(e.data)
    iframe.width = dimensions.width
    iframe.height = dimensions.height
    iframe.contentWindow.postMessage("TU_ID_AQUI", "https://www.netfy-ai.mx/")
  })
</script>`}
          </code>
        </pre>
        <p className="mt-4">
          Asegúrate de reemplazar &quot;TU_ID_AQUI&quot; con el ID único proporcionado por MarIA.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Instalación en WordPress</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Inicia sesión en tu panel de administración de WordPress.</li>
          <li>Ve a &quot;Apariencia&quot; &gt; &quot;Editor de temas&quot;.</li>
          <li>Selecciona &quot;footer.php&quot; en la lista de archivos de tema.</li>
          <li>Pega el código de MarIA justo antes de la etiqueta de cierre &lt;/body&gt;.</li>
          <li>Haz clic en &quot;Actualizar archivo&quot;.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Instalación en Shopify</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Desde tu panel de administración de Shopify, ve a &quot;Tienda online&quot; &gt; &quot;Temas&quot;.</li>
          <li>Haz clic en &quot;Acciones&quot; &gt; &quot;Editar código&quot; para tu tema actual.</li>
          <li>En la sección &quot;Diseño&quot;, abre el archivo &quot;theme.liquid&quot;.</li>
          <li>Pega el código de MarIA justo antes de la etiqueta de cierre &lt;/body&gt;.</li>
          <li>Haz clic en &quot;Guardar&quot;.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Instalación en Wix</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Desde el Editor de Wix, haz clic en el botón &quot;+&quot; en la barra lateral izquierda.</li>
          <li>Selecciona &quot;Más&quot; &gt; &quot;HTML personalizado&quot;.</li>
          <li>Haz clic en &quot;Agregar tu código&quot; y pega el código de MarIA.</li>
          <li>Haz clic en &quot;Aplicar&quot;.</li>
          <li>Posiciona el elemento HTML donde desees que aparezca el chatbot (generalmente en la esquina inferior derecha).</li>
          <li>Publica tu sitio para que los cambios sean visibles.</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Verificación de la Instalación</h2>
        <p>
          Después de instalar el código, visita tu sitio web y verifica que el chatbot de MarIA aparezca correctamente. Si encuentras algún problema, asegúrate de que:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Has reemplazado &quot;TU_ID_AQUI&quot; con tu ID único de MarIA.</li>
          <li>El código se ha insertado correctamente en tu sitio web.</li>
          <li>No hay conflictos con otros scripts o estilos en tu sitio.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Soporte</h2>
        <p>
          Si necesitas ayuda adicional con la instalación, no dudes en contactar con nuestro equipo de soporte en <a href="mailto:soporte@netfy.mx" className="text-blue-600 hover:underline">soporte@netfy.mx</a>.
        </p>
      </section>
    </div>
  );
};

export default WebsiteInstallationGuide;
