import React from 'react';
import styles from './Pagination.module.css';
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";


const Pagination = () => {
  return (
    <section className={styles.pagination}>
        <Link className={styles.previous}  href='#'>
        <FaAngleLeft />
        </Link>
        <Link className={styles.link} href='#'>1</Link>
        <Link className={styles.link}  href='#'>2</Link>
        <Link className={styles.link}  href='#'>3</Link>
        <Link className={styles.next}  href='#'>
        <FaAngleRight />
        </Link>
    </section>
  )
}

export default Pagination
