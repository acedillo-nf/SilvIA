'use client'
import React from 'react';
import NavBar from '@/components/navbar';
import { cn } from '@/lib/utils';
import Footer from '@/components/landing-page/Footer';
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import Link from 'next/link';

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
    </div>
        
      </div>
      <Footer/>
    </main>
  );
}
export default Nosotros;