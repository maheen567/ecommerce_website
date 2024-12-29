import React from 'react';
import styles from './OfferBanners.module.css';

const OfferBanners = () => {
  return (
    <section className={styles.offerBanners}>
        <div className={styles.seasonal_sale_banner}>
           <h4>Seasonal Sale</h4>
           <p>Winter Collections 50% OFF</p>
        </div>
        <div className={styles.tshirts_banner}>
           <h4>T-Shirts</h4>
           <p>Effortless style, unmatched comfort, and versatile designs for every occasion.</p>
        </div>
        <div className={styles.footwears_banner}>
           <h4>Footwear Collection</h4>
           <p>Elevate Your Steps</p>
        </div>
    </section>
  )
}

export default OfferBanners
