import React from 'react'
import { getSingleProduct } from './index';
import Image from 'next/image';
import ShopHeader from '@/components/ShopHeader/ShopHeader';
import styles from './page.module.css';
import Counter from '@/components/Counter/Counter';
import AddToCartBtn from '@/components/AddToCart/AddToCartBtn';

type Props = {
  searchParams: {
    [key: string]: string | string[] | undefined 
  };
}

const page = async ({searchParams}: Props) => {
  const _idString = searchParams._id;
  const _id = Number(_idString);
  const product = await getSingleProduct(_id)
  return (
    <section className={styles.single_product_display}>
      <ShopHeader />

      <div className={styles.single_product_details}>

        <Image src={product.image} alt='Product Image' width={500} height={500} className={styles.product_image}/>

        <div className={styles.details}>
          <i className={styles.brand_name}>Brand: {product.brand}</i>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h4>${product.price}</h4>
          <s> ${product.previousPrice} </s>
          <div className={styles.display}>
            <Counter />
            <AddToCartBtn />
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
