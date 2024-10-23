import React from 'react';

const WhatsAppInstallationGuide = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Guía de Instalación de WhatsApp para MarIA</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Requisitos Previos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Número de teléfono sin WhatsApp (para verificación SMS)</li>
          <li>Información de la empresa (nombre, dirección, teléfono, sitio web)</li>
          <li>Tipo de empresa (Sociedad unipersonal, LLC, Corp o equivalente)</li>
          <li>NIF/NIE (Opcional)</li>
          <li>Enlace a política de privacidad en su sitio web</li>
          <li>Cuenta Meta Business verificada</li>
          <li>Método de pago configurado</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Paso 1: Crear una cuenta de empresa Meta (Facebook)</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Ir a <a href="https://business.facebook.com" className="text-blue-600 hover:underline">https://business.facebook.com</a></li>
          <li>Crear una cuenta o iniciar sesión</li>
          <li>Configurar la autenticación de dos factores (2FA)</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Paso 2: Crear una nueva aplicación para desarrolladores de Facebook</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Ir a <a href="https://developers.facebook.com/" className="text-blue-600 hover:underline">https://developers.facebook.com/</a></li>
          <li>Crear una nueva aplicación</li>
          <li>Seleccionar caso de uso &quot;Otros&quot; y tipo de aplicación &quot;Negocios&quot;</li>
          <li>Proporcionar datos de la aplicación</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Paso 3: Vincular la aplicación con la cuenta de WhatsApp</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>En el panel de control, añadir WhatsApp como producto</li>
          <li>Seleccionar la cuenta Meta Business</li>
          <li>Configurar la URL de política de privacidad</li>
          <li>Cambiar el modo de la aplicación a &quot;En directo&quot;</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Paso 4: Generar token de WhatsApp</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Crear un &quot;Usuario del sistema&quot; en Meta Business Suite</li>
          <li>Añadir activos (la aplicación creada) al usuario del sistema</li>
          <li>Generar token de acceso con permisos de WhatsApp</li>
          <li>Guardar el token de forma segura</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Paso 5: Añadir un número de teléfono</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>En el Panel de WhatsApp para desarrolladores, añadir número de teléfono</li>
          <li>Verificar el número con el código recibido</li>
          <li>Añadir método de pago válido</li>
          <li>Probar el número de empresa para WhatsApp</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Paso 6: Configurar los ajustes de WhatsApp API Webhook</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Verificar la devolución de llamada de WhatsApp Webhook</li>
          <li>Configurar campos de suscripción Webhook (mensajes)</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Paso 7: Recopilar información para MarIA</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Copiar token de verificación y URL de devolución de llamada</li>
          <li>Recuperar información de la cuenta de WhatsApp:
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Secreto de la aplicación</li>
              <li>Token de acceso permanente</li>
              <li>Número de teléfono, ID del número de teléfono e ID de la cuenta de WhatsApp Business</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Paso 8: Enviar información a MarIA</h2>
        <p>Elija una de las siguientes opciones:</p>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>Opción 1: Enviar por correo electrónico a <a href="mailto:soporte@netfy.mx" className="text-blue-600 hover:underline">soporte@netfy.mx</a></li>
          <li>Opción 2: Rellenar el formulario en Netfy Back office (Configuración &gt; Conexiones)</li>
        </ul>
      </section>
    </div>
  );
};

export default WhatsAppInstallationGuide;
