import React from 'react';
import styles from './FeaturesBanner.module.css';


const FeaturesBannerSection = () => {
  return (
    <section className={styles.featuresSection}>
            <div className={styles.featuresBox}>
                <img src="/free_shipping_1.png" alt=""/>
                <h6>Free Shipping</h6>
            </div>
            <div className={styles.featuresBox}>
                <img src="/free_shipping_2.png" alt=""/>
                <h6>Online Order</h6>
            </div>
            <div className={styles.featuresBox}>
                <img src="/free_shipping_3.png" alt=""/>
                <h6>Save Money</h6>
            </div>
            <div className={styles.featuresBox}>
                <img src="/free_shipping_4.png" alt=""/>
                <h6>Promotions</h6>
            </div>
            <div className={styles.featuresBox}>
                <img src="/free_shipping_5.png" alt=""/>
                <h6>Happy Seller</h6>
            </div>
            <div className={styles.featuresBox}>
                <img src="/free_shipping_6.png" alt=""/>
                <h6>24/7 Support</h6>
            </div>
        </section>
  )
}

export default FeaturesBannerSection
