import React from 'react'
import Title from './ui/title'
import Link from 'next/link'
import Image from 'next/image'


const HomeBanner = () => {
  return (
    <div className='py-16 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex items-center justify-between'>
        <div className='space-y-5'>
           <Title>
            Grab Upto 50% Off <br/>
            on all acessories
           </Title>
           <Link href={"/shop"} className='bg-shop-dark-green text-white/90 px-5 py-2 mt-5 rounded-md text-sm'>Buy Now</Link>
        </div>
        {/* Image */}
        <div className='hidden md:flex items-center'>
        <Image
        src={"/hero-section/banner_1.webp"}
        alt='banner_image'
        className='object-contain'
        width={260}
        height={260}
        />
        </div>
        
        </div>
  )
}

export default HomeBanner
