import React from 'react';
import styles from './Banner1.module.css';
import Link from 'next/link';

const Banner1 = () => {
  return (
    <section className={styles.bannerSection}>
        <h4>Repair Services</h4>
        <h2>Upto <span>70% OFF</span> - All T-shirts & Accessories</h2>
        <Link className={styles.link} href={'/shop'}>Explore More</Link>
    </section>
  )
}

export default Banner1
