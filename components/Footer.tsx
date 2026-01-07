import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import { Facebook, LinkedinIcon , Search, SearchAlert, Twitter, Youtube} from 'lucide-react'
import { categories, quickLinkData } from '@/app/constants/data'
import Link from 'next/link'
import { Input } from './ui/input'
import { Button } from './ui/button'



type SocialLinks ={
  name: string;
  url:string;
  icon: React.ReactNode;
  enabled: boolean;
}


export const socialLinks: SocialLinks[] = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: <Facebook className="h-5 w-5" />,
    enabled: true,
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com",
    icon: <LinkedinIcon className="h-5 w-5" />,
    enabled: true,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <Twitter className="h-5 w-5" />,
    enabled: true,
  },
   {
    name: "Youtube",
    url: "https://youtube.com",
    icon: <Youtube className="h-5 w-5" />,
    enabled: true,
  },
];

const Footer = () => {
  return (
    <footer className='bg-white border-t'>
    <Container>
        <FooterTop/>     
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='space-y-4'>
            <Logo/>
            <p className='text-gray-600 text-sm'>Discover curated furniture collections at Shopcart, blending style and comfort to elevate your living spaces.</p>
          
          <div className='flex items-center gap-2'>
            {socialLinks
              .filter(link => link.enabled)
              .map(link => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border hover:bg-gray-100 transition text-gray-600"
                >
                  {link.icon}
                </a>
              ))}
            </div>
             
           
          </div>
          <div>
              <h3 className='font-semibold  mb-2'>Quick Links</h3>
              <ul className='space-y-2 text-gray-600 text-sm'>
                {quickLinkData?.map((item)=>(
                  <li key={item?.title}>
                    <Link href={item?.href}> {item?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='font-semibold  mb-2'>Categories</h3>
              <ul className='space-y-2 text-gray-600 text-sm'>
                {categories?.map((item)=>(
                  <li key={item?.title}>
                    <Link href={item?.href}> {item?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-2'>NewsLetter</h3>
              <p className='text-sm text-gray-500'>Subscribe to our newsletter to receive updates and exclusive offers</p>
              <div className='relative mt-2'>
                <Search className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-600'/>
              <Input
              placeholder='Enter accessories to search...'
              className='pl-10'
              />
             
              
              </div>
               <Button className='mt-2 w-full cursor-pointer'>
                Subscribe
              </Button>
            </div>
         
        </div>
        <div className='py-6 border-t text-center text-sm text-gray-600'>
          <p>
            © {new Date().getFullYear()} {""}
            <span className='text-shop-btn-dark-green font-medium tracking-wider uppercase hover:text-shop-dark-green hoverEffect group font-sans'>
              Shopcar
           
            <span className='text-shop-dark-green group-hover:text-darkColor hoverEffect'>
              t
            </span>
             </span>
             . All rights reserved
          </p>

        </div>
        </Container>
            </footer>  
      
  )
}

export default Footer