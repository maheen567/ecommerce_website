import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import styles from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const socialLinks = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: '#'
  },
  {
    id: 2,
    icon: <FaTwitter />,
    link: '#'
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: '#'
  },
  {
    id: 4,
    icon: <FaPinterestP />,
    link: '#'
  },
  {
    id: 5,
    icon: <FaYoutube />,
    link: '#'
  },
]

const ContactFooter = () => {
  return (
    <div className={styles.contact_column}>
      <div className={styles.contact_info}>
        <h2 className={styles.logoText}>
          <Link href="/">Shoppy</Link>
          <FaShoppingBag height={48} />
        </h2>
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> 561 Wellington Road, street 42, Los Angeles
        </p>
        <p>
          <strong>Phone:</strong>+1 (312) 3456789
        </p>
        <p>
          <strong>Hours:</strong>10:00 - 19:00 Mon-Sat
        </p>
      </div>

      <div>
        <h4>Follow Us</h4>
        <ul className={styles.social_links}>
        <li>
          <Link href="#" className={styles.social_item}>
          <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.social_item}>
          <FaTwitter />
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.social_item}>
          <FaInstagram />
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.social_item}>
          <FaPinterestP />
          </Link>
        </li>
        <li>
          <Link href="#" className={styles.social_item}>
          <FaYoutube />
          </Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default ContactFooter;
