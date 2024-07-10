'use client'
import React from 'react';
import NavBar from '@/components/navbar';
import { cn } from '@/lib/utils';
import Footer from '@/components/landing-page/Footer';
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card'
import { pricingCards } from '@/constants/landing-page'
import { HoverEffect } from '@/components/ui/card-hover-effect';
import clsx from 'clsx';
import { Check } from 'lucide-react';

const Precios: React.FC = async () => {
  return (
    <main className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow relative flex flex-col items-center justify-center overflow-hidden bg-background p-8 md:p-20">
        <div className="z-10 text-center max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-black dark:text-white mb-6">
            Precios
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
      <div className="flex  justify-center gap-4 flex-wrap mt-6">
        {pricingCards.map((card) => (
          <Card
            key={card.title}
            className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited',
            })}
          >
            <CardHeader>
              <CardTitle className="text-nmarino">{card.title}</CardTitle>
              <CardDescription>
                {pricingCards.find((c) => c.title === card.title)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <span className="text-4xl font-bold">{card.price}</span>
              <span className="text-muted-foreground">
                <span>/ mes</span>
              </span>
            </CardContent>
            <CardFooter className="flex flex-col items-start gap-4">
              <div>
                {card.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex gap-2"
                  >
                    <Check />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <Link
                href={`/dashbord?plan=${card.title}`}
                className="bg-nblue border-nmarino border-2 p-2 w-full text-center font-bold rounded-md"
              >
                Empieza ahora
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Footer/>
    </main>
  );
}
export default Precios;