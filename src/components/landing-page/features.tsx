import React from 'react';

const FeatureCard: React.FC<{ title: string; description: string[] }> = ({ title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <ul className="text-gray-600 list-disc pl-5 space-y-2">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export const AIFeatures: React.FC = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-nblue mb-8 text-center">
          MarIA es el Chatbot IA más innovador para tu negocio
        </h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Soluciones para Consultorios Médicos"
            description={[
              "Gestión de citas",
              "Respuestas a preguntas frecuentes",
              "Recordatorios personalizados",
              "Optimización de atención al cliente",
              "Mejora de satisfacción del paciente"
            ]}
          />
          <FeatureCard
            title="Innovación para Estéticas"
            description={[
              "Recomendaciones personalizadas",
              "Agendamiento de citas",
              "Respuestas a consultas sobre servicios",
              "Integración con plataformas existentes"
            ]}
          />
          <FeatureCard
            title="Impulsando el Real Estate"
            description={[
              "Asistente virtual 24/7",
              "Respuestas a consultas sobre propiedades",
              "Programación de visitas",
              "Guía para clientes potenciales",
              "Aumento de eficiencia operativa"
            ]}
          />
          <FeatureCard
            title="Soluciones B2B y B2C"
            description={[
              "Optimización de interacciones",
              "Gestión de consultas",
              "Procesamiento de pedidos",
              "Soporte postventa",
              "Captura de leads de alta calidad",
              "Adaptable a necesidades específicas"
            ]}
          />
        </div>
      </div>
    </div>
  );
};
