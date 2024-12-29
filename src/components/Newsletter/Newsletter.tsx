import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <section className={styles.newsletter_section}>
        <div className={styles.news_text}>
            <h4>Sign in for Newsletters</h4>
            <p>Get e-mail updates about our latest shop & special offers.</p>
        </div>
        <div className={styles.form}>
            <input type="text" placeholder='Your email address' />
            <button>Sign Up</button>
        </div>
    </section>
  )
}

export default Newsletter
