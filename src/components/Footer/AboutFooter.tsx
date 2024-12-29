import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const AboutFooter = () => {
  return (
    <div className={styles.about_column}>
      <h4>About</h4>
      <Link href="/about" className={styles.about_links}>About Us</Link>
      <Link href="#" className={styles.about_links}>Delivery Information</Link>
      <Link href="#" className={styles.about_links}>Privacy Policy</Link>
      <Link href="#" className={styles.about_links}>Terms & Conditions</Link>
      <Link href="/contact" className={styles.about_links}>Contact Us</Link>
    </div>
  )
}

export default AboutFooter
