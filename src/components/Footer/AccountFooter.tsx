import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const AccountFooter = () => {
  return (
    <div className={styles.account_column}>
      <h4>Account</h4>
      <Link href="#" className={styles.account_links}>Sign In</Link>
      <Link href="/cart" className={styles.account_links}>View Cart</Link>
      <Link href="#" className={styles.account_links}>My Wishlist</Link>
      <Link href="#" className={styles.account_links}>Track Order</Link>
      <Link href="#" className={styles.account_links}>Help</Link>
    </div>
  )
}

export default AccountFooter
