import React from 'react';
import { FaRobot, FaUserClock, FaClock, FaPuzzlePiece } from 'react-icons/fa';

const ValueItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-4xl text-nblue mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Values: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-nmarino mb-12">
         ¿Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <ValueItem
            icon={<FaRobot />}
            title="Automatización inteligente"
            description="Reduce la carga de trabajo manual y mejora la precisión en la gestión de interacciones."
          />
          <ValueItem
            icon={<FaUserClock />}
            title="Personalización en tiempo real"
            description="Responde a las necesidades específicas de cada cliente de manera rápida y eficiente."
          />
          <ValueItem
            icon={<FaClock />}
            title="Disponibilidad 24/7"
            description="Nunca pierda una oportunidad de negocio; nuestro chatbot está siempre listo para interactuar con sus clientes."
          />
          <ValueItem
            icon={<FaPuzzlePiece />}
            title="Fácil integración"
            description="Compatible con sus sistemas actuales, asegurando una implementación fluida y sin complicaciones."
          />
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforme la manera en que su negocio interactúa con sus clientes. Con nuestro chatbot impulsado por IA, eleve sus servicios a un nuevo nivel de excelencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;