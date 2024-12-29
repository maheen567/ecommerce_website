import React from 'react';
import styles from './Footer.module.css';

const CopyrightFooter = () => {
  return (
    <div className={styles.copyright_footer}>
      <p>&#169; 2024 | <a href="https://www.linkedin.com/in/maheen-hussain-931388301/" target='_blank'>Maheen Hussain</a> | All Rights Reserved</p>
      <p>E-Commerce Website made with Next.js</p>
    </div>
  )
}

export default CopyrightFooter
