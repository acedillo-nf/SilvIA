'use client'
import React from 'react';
import NavBar from '@/components/navbar';
import { cn } from '@/lib/utils';
import Footer from '@/components/landing-page/Footer';
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import Link from 'next/link';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const Nosotros: React.FC = async () => {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow relative flex flex-col items-center justify-center overflow-hidden bg-background p-8 md:p-20">
        <div className="z-10 text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-black dark:text-white mb-6">
            Nosotros
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Somos una empresa dedicada a proporcionar soluciones innovadoras para nuestros clientes. Con años de experiencia y un equipo apasionado, estamos comprometidos a ofrecer servicios de alta calidad que superan las expectativas.
          </p>
          <Link href="/contacto" className="bg-nblue hover:bg-nmarino text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Contáctanos
          </Link>
        </div>
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "absolute inset-0 h-full w-full",
          )}
        />
      </div>
      <Footer/>
    </main>
  );
}
export const projects = [
    {
      title: "RPA",
      description:
        "En Netfy, nos enorgullece estar a la vanguardia de la Automatización de Procesos Robóticos (RPA), donde la eficiencia se encuentra con la innovación.",
      link: "https://stripe.com",
    },
    {
      title: "Blockchain",
      description:
        "Desarrollo de Smart Contracts, soluciones de criptomonedas, creación de NFTs",
      link: "https://netflix.com",
    },
    {
      title: "SilvIA",
      description:
        "Nuestra asistente ideal para empresas de amplios rangos, para venta, prospección, agendar citas y soporte.",
      link: "https://google.com",
    },
    {
      title: "IA",
      description:
        "Utilizamos nuestro conocimiento para sumergirnos en las necesidades de tu negocio y desarrollar el agente adecuado para tu organización.",
      link: "https://meta.com",
    },
    {
      title: "Broki",
      description:
        "Un asistente para agentes de bienes raíces, el cual tiene información de tus desarrollos, guarda leads y agenda citas",
      link: "https://amazon.com",
    },
    {
      title: "MarIA",
      description:
        "El asistente ideal para hoteles y para turismo. Maneja la información de tus huéspedes, como el check-in, reservaciones, etc.",
      link: "https://microsoft.com",
    },
  ];
export default Nosotros;