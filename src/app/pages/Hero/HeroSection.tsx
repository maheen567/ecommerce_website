import React from "react";
import styles from "./Hero.module.css";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
       <div className={styles.heroImage}>
        <img src='/background_6.png' alt="Hero" />
       </div>

       <div className={styles.heroDetails}>
            <h4>Trade-in-offer</h4>
            <h2>Super Value Deals</h2>
            <h1>On All Products</h1>
            <pre> Save more with coupons and upto 70% off!</pre>
            <Link href={'/shop'} className={styles.shopNowBtn}>Shop now</Link>
       </div>
    </section>
  );
}
