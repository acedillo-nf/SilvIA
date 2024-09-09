import Image from "next/image";
import { Button } from '@/components/ui/button'
import Link from "next/link";
import { BackgroundLines } from "../ui/background-lines";


export default function Hero() {
  return (
    <section>

        <div className="flex items-center justify-center flex-col mt-[80px] gap-4 ">
         <Image src="/images/logo-netfy2.png" alt="Logo" width={300} height={300} />
          
          <p className="text-center text-2xl  max-w-[500px]">
            Tu asistente de ventas con IA
          </p>
          <div className="relative max-w-lg">
            <video
              src="/images/hero-maria.mp4"
              width={400}
              height={100}
              autoPlay
              loop
              muted
              playsInline
              className="object-contain"
            />
          
          </div>

          <div className="flex gap-4">
            <Button className="bg-nblue font-bold text-white px-4">
              <Link href="/dashboard">Empieza Gratis</Link>
            </Button>
            <Button className="bg-nblue font-bold text-white px-4" asChild>
              <Link href="/contacto">Demo</Link>
            </Button>
          </div>
          
        </div>

      </section>
      
  );
}