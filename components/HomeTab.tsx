import React, { useState } from 'react'
import { products } from '@/app/constants/data'
import { Button } from './ui/button'
import Link from 'next/link';

interface Props  {
    selectedTab: string;
    onTabSelect: (tab:string) => void;

}


const HomeTab = ({selectedTab , onTabSelect} : Props) => {
  return (
     <div  className='flex items-center justify-between flex-wrap gap-5'>
        <div className='flex items-center gap-1.5'>
            {products?.map((item)=>(
                <Button
                onClick={()=> onTabSelect(item.title)}
                 key = {item?.title} className={`bg-transparent px-4 py-1.5 md:px-6 md:py-2 font-semibold border border-gray-200 rounded-full text-black hover:bg-shop-light-green hover:border-shop-light-green hover:text-white hover:shadow-md ${selectedTab === item?.title ? "" : "bg-shop-light-green/20"}`}>
                    {item?.title}
                </Button>
            ))}
        </div>
        <Link href={"/shop"} className='bg-transparent px-4 py-1.5 md:px-6 md:py-2 font-semibold border border-gray-200 rounded-full text-black hover:bg-shop-light-green hover:border-shop-light-green hover:text-white hover:shadow-md'>See all</Link>
    </div>
  )
}

export default HomeTab