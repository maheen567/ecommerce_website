import React from 'react';
import styles from './TopBanner.module.css';
import Link from 'next/link';

const TopBanner = (props: any) => {
  return (
    <div className={styles.top_banner}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <Link className={styles.link} href={props.link}>{props.label}</Link>
    </div>
  )
}

export default TopBanner;
