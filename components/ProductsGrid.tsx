
'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { gadgetsacessories, products } from '@/app/constants/data';
import { Button } from './ui/button';
import HomeTab from './HomeTab';
import { motion } from "motion/react"
import { Loader2 } from 'lucide-react';
import ProductListing from './ProductListing';
const ProductsGrid = () => {
  const [items, setitems] = useState<[]>([]);
  const [loading, setLoading] = useState();
  const [selectedTab, setSelectedTab] = useState(products[0]?.value|| "");
  return (
    <div>
      <HomeTab onTabSelect={setSelectedTab} selectedTab={selectedTab} />

      {loading ? (
        <div className='flex flex-col py-10 items-center justify-center min-h-80 bg-gray-100 mt-10 w-full'>
          <div className='space-x-2 flex items-center text-blue-600'>
            <Loader2 className='w-5 h-6 animate-spin' />
            <span>Product is loading</span>
          </div>
        </div>
      ) : products?.length > 0 ? (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10'>
          {gadgetsacessories?.map((product) => (
            <motion.div>
              <ProductListing product={product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className='text-gray-500 text-centermt-10'>No Products Found</p>

      )}
    </div>

  )

}



export default ProductsGrid;