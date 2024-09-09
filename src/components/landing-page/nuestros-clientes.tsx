import React from 'react';
import { Home, ShoppingCart, Stethoscope, Truck, Laptop } from 'lucide-react';

const NuestrosServicios = () => {
  const icons = [
    { Icon: Home, text: 'Bienes Raíces' },
    { Icon: ShoppingCart, text: 'Venta al por Menor' },
    { Icon: Stethoscope, text: 'Doctores' },
    { Icon: Truck, text: 'Logística' },
    { Icon: Laptop, text: 'Tecnología' },
  ];

  return (
    <>
      <h2 className="text-4xl text-center">Donde te podemos ayudar</h2>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
            {icons.map(({ Icon, text }, index) => (
              <div key={index} className="flex flex-col items-center">
                <Icon className="w-16 h-16 text-nblue mb-4" />
                <p className="text-center text-gray-700 font-semibold">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NuestrosServicios;