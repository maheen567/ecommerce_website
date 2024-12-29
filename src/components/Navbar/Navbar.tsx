'use client';
import React from 'react';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { RiMenuUnfold3Fill } from "react-icons/ri";
import { TbShoppingBag } from "react-icons/tb";
import { GrCart } from "react-icons/gr";

import Link from 'next/link';


export default function Navbar() {
    let [showMenu, setShowMenu] = useState(false);

    const handleButtonToggle = () => {
      setShowMenu(!showMenu)
    }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <a href="/" className={styles.navLogo}>
            <h2 className={styles.logoText}>
              Shoppy
              <FaShoppingBag height={48} />
            </h2>
          </a>

          <ul className={`${styles.navMenu} ${showMenu ? styles.mobile_menu : styles.web_menu}`}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navlink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/shop" className={styles.navlink}>
                Shop
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog" className={styles.navlink}>
                Blog
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navlink}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navlink}>
                Contact
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/cart" className={styles.navlink}>
                <GrCart className={styles.cartIcon} />
              </Link>
            </li>
          </ul>

          <div className={styles.menu_icon_div}>
            <TbShoppingBag className={styles.menu_icon}/>
            <button onClick={handleButtonToggle}>
              <RiMenuUnfold3Fill className={styles.menu_icon}/>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
