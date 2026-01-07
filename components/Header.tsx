import React from 'react'
import Container from './Container';
import Logo from './Logo';
import { title } from 'process';
import { link } from 'fs';
import Link from 'next/link';
import { Heart, Search, ShoppingBag } from 'lucide-react';

const Header = () => {
const headerData: any[] = [
    {
        title : "Home",
        link : "/"
    },
    {
        title : "Shop",
        link : "/shop"
    },
     {
        title : "Contact",
        link : "/contact"
    },
     {
        title : "Hot deals",
        link : "/deals"
    }
]
const headerIcon: any[] = [
    {
        icon :  <Search className='h-5 w-5'/>,
        link : "/"
    },
    {
        icon: <ShoppingBag className='h-5 w-5'/>,
        link : "/shopping"
    },
    {
        icon: <Heart className='h-5 w-5'/>,
        link: "/"
    },
    
]
  return (
    <header className='bg-white py-5 border-b border-gray/50'>
        <Container className='flex items-center justify-between'>
            {/* Logo */}
            <Logo className='flex-1'/>
            {/* Navlinks */}
            <div className='hidden md:flex flex-1 justify-center gap-4 text-sm font-semibold text-lightColor'>
            {headerData.map((item)=>{
                return(
                <Link key={item?.title} href={item?.link} className='hover:text-shop-light-green'>
                    {item?.title}
              </Link>
            )})}
              
            </div>
            {/* Admin Logo */}
            <div className='flex-1 flex  justify-end items-center gap-4 '>
              {headerIcon.map((icons)=>{
                return(
                <Link key={icons?.icon} href={icons?.link} className='hover:text-shop-light-green'>
                    {icons?.icon}
              </Link>
            )})}
            <button className="md:hidden">
                     ☰
                  </button>
            </div>

        </Container>
    </header>
  )
}

export default Header;