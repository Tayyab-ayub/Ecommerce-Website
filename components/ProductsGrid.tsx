
'use client'
import Link from 'next/link';
import React, {useState} from 'react';
import { products} from '@/app/constants/data';
import { Button } from './ui/button';
import HomeTab from './HomeTab';
const ProductsGrid = () => {
    const [items, setitems] = useState([]);
    const [loading,setLoading] = useState();
    const [selectedTab, setSelectedTab] = useState(products[0]?.title || "");
  return (
    <HomeTab onTabSelect={setSelectedTab} selectedTab = {selectedTab}/>
  
  )
}

export default ProductsGrid