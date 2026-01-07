'use client'
import Container from '@/components/Container'
import HomeBanner from '@/components/HomeBanner'
import ProductsGrid from '@/components/ProductsGrid'
import { Button } from '@/components/ui/button'
import React from 'react'

const Home = () => {
  return (
    <Container>
     <HomeBanner/>
     <div className='py-12'>
      <ProductsGrid/> 
     </div>
    </Container>
  )
}

export default Home