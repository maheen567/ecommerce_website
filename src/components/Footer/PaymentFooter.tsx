import React from 'react';
import styles from './Footer.module.css';

const PaymentFooter = () => {
  return (
    <div className={styles.payment_column}>
      <h4>Install App</h4>
      <br />
      <p>From App Store Or Play Store</p>
      <div className={styles.app_play_imgs}>
        <img src="/app_store.jpg" alt="App Store" />
        <img src="/play_store.jpg" alt="Play Store" />
      </div>
      <br />
      <p>Secured Payment Gateways</p>
      <img src="/payment_methods.png" alt="Payment Methods" />
    </div>
  )
}

export default PaymentFooter
