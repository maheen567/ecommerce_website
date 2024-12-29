import React from 'react';
import styles from './page.module.css';
import Products from '@/components/Productsaccessories/Products';
import ShopHeader from '@/components/ShopHeader/ShopHeader';
import Pagination from '@/components/Pagination/Pagination';
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Shoppy - Shop/Accessories",
  description: "An Online E-commerce Website",
};



const getData = async () => {
  const res = await fetch('https://jsonserver.reactbd.com/accessories');
  if (!res){
    throw new Error('Failed To Fetch Data');
  }
  return res.json();
};

const page = async () => {
  const products = await getData();

  return (
    <section className={styles.accessories_section}>
      <ShopHeader />
      <div className={styles.accessories_container}>
      <Products products={products} />  
      <Pagination />  
    </div>
    </section>
    
  )
}

export default page
