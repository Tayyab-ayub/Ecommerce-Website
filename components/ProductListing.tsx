import React from 'react'
import { Button } from './ui/button'
import { Products } from '@/app/constants/data'
import Image from 'next/image'


interface ProductLisitng{
    title: string
    price: string | number
    image: string
    value: string
}
interface Props {
  product: Products;
}

const ProductListing = ({product} : Props) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
      <Image
       src={product.image} 
       alt={product.title}
       width={400}
       height={400}
        className="object-cover rounded-md" 
      />
      <h3 className="mt-3 font-semibold text-lg truncate">{product.title}</h3>
      <div className="mt-2 flex justify-between items-center">
        <span className="font-bold text-shop-dark-green">{product.price}</span>
        <Button size="sm">Buy</Button>
      </div>
    </div>
  )
}

export default ProductListing
