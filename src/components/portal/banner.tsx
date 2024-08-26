import Image from 'next/image'
import React from 'react'

export const PortalBanner = () => {
  return (
    <div className="w-full bg-muted flex justify-center py-5">
      <Image
        src="/images/logo-netfy2.png"
        alt="LOGO"
        sizes="100vw"
        style={{
          width: '100px',
          height: 'auto',
        }}
        width={0}
        height={0}
      />
    </div>
  )
}