import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { BiGlobe } from 'react-icons/bi';
import { SiHubspot, SiOdoo } from 'react-icons/si';

const Integrations: React.FC = () => {
  const integrations = [
    { name: 'WhatsApp', Icon: FaWhatsapp },
    { name: 'Web', Icon: BiGlobe },
    { name: 'HubSpot', Icon: SiHubspot },
    { name: 'Odoo', Icon: SiOdoo },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-nblue text-center mb-8">
          Nuestras Integraciones
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {integrations.map(({ name, Icon }) => (
            <div key={name} className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md">
                <Icon size={48} className="text-nblue" />
              </div>
              <p className="mt-4 text-lg font-medium text-gray-900">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrations;
