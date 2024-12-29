import React from 'react';
import styles from './ShopHeader.module.css';
import Link from 'next/link';

const ShopHeader = (props: any) => {
  return (
    <div>
      <ul className={styles.shop_header}>
        <Link className={styles.link} href='/shop/phone'>Phone</Link>
        <Link className={styles.link} href='/shop/shirts'>Shirts</Link>
        <Link className={styles.link} href='/shop/accessories'>Accessories</Link>
        <Link className={styles.link} href='/shop/watches'>Watches</Link>
      </ul>
    </div>
  )
}

export default ShopHeader
