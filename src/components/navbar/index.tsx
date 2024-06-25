import Image from 'next/image'
import * as React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

function NavBar() {
  return (
    <div className="flex gap-5 justify-between items-center px-7 py-1 font-bold border-b border-solid border-zinc-100 leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="flex gap-1.5 justify-center self-stretch my-auto text-2xl tracking-tighter text-neutral-700">
      <Link className="flex font-bold flex-row " href="/">
        <Image
          src="/images/logo-netfy.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: '100px',
            height: 'auto',
          }}
          width={0}
          height={0}
        />
        </Link>
      </div>
      <div className="hidden lg:flex">
        <a href="/precios" className="p-2 text-md font-bold leading-6 text-nmarino">
          Precios
        </a>
        <a href="/nosotros" className="p-2 text-md font-bold leading-6 text-nmarino">
         Nosotros
        </a>
        <a href="/contacto" className="p-2 text-md font-bold leading-6 text-nmarino">
          Contacto
        </a>
       
      </div>
      <Link
        href="/dashboard"
        className="bg-nblue px-4 py-2 rounded-sm text-white"
      >
        Prueba Gratis
      </Link>
    </div>
  )
}

export default NavBar