import React from 'react';
import styles from './Banner2.module.css';

const Banner2 = () => {
  return (
    <section className={styles.small_banner}>
        <div className={styles.small_banner1}>
            <h4>Crazy Deals</h4>
            <h2>Buy 1 Get 1 Free!</h2>
            <span>The best classic dresses are on sale at Shoppy</span>
            <button>Learn More</button>
        </div>
        <div className={styles.small_banner2}>
            <h4>Spring/Summer Collections</h4>
            <h2>Bright and Breezy Styles</h2>
            <span>Stay cool and stylish with Shoppy's exclusive collection</span>
            <button>Learn More</button>
        </div>
    </section>
  )
}

export default Banner2
