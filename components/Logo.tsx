import Link from 'next/link'
import { cn } from '@/lib/utils'
import React from 'react'

const Logo = ({className} : {className?: string}) => {
  return (
   <Link href={"/"}>
    <h2 className= {cn("text-2xl text-shop-btn-dark-green font-black tracking-wider uppercase cursor-pointer hover:text-shop-light-green font-sans ", className)}>
        Shopcar <span className='text-shop-light-green group-hover:text-shop-dark-green hoverEffect font-sans'>t</span></h2>
   </Link>
  )
}

export default Logo;