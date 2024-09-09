'use client'
import { onGetBlogPosts } from '@/actions/landing'
import NavBar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards } from '@/constants/landing-page'
import clsx from 'clsx'
import { ArrowRightCircleIcon, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import parse from 'html-react-parser'
import { getMonthName } from '@/lib/utils'
import Footer from '@/components/landing-page/Footer'
import NuestrosServicios from '@/components/landing-page/nuestros-clientes'
import { AIFeatures } from '@/components/landing-page/features'
import Values from '@/components/landing-page/valor'
import PricingCards from '@/components/landing-page/pricing-cards'
import Hero from '@/components/landing-page/hero'
import Integrations from '@/components/landing-page/integraciones'


export default function Home() {
 
  return (
    <main>
      <NavBar />
      <section>
        <Hero/>
      </section>
      <section className="flex justify-center items-center flex-col gap-4 mt-28">
        <AIFeatures/>
      </section>
      <section id="pricing-section">
        <PricingCards/>
      </section>
     <Values/>
     <section id="integration-section">
      <Integrations/>
     </section>
       <NuestrosServicios/>
    <Footer/>
    </main>
  );
}
