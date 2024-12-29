import React from "react";
import styles from "./page.module.css";
import TopBanner from "@/components/TopBanner/TopBanner";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FeaturesBannerSection from "@/components/FeaturesBanner/FeaturesBannerSection";
import Image from "next/image";
import Pagination from "@/components/Pagination/Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoppy - About Us",
  description: "An Online E-commerce Website",
};

export default function about() {
  return (
    <section className={styles.about_section}>
      <TopBanner
        title="Behind Every Product is a Story–Discover Ours!"
        link="/"
        label="Go To Home"
        description="Learn about our journey, values, and the passion that drives us to deliver excellence every day."
      />
      <div className={styles.about_container}>
        <img src="/about_image.jpeg" alt="About Image" />
        <div className={styles.about_details}>
          <h2>Who Are We?</h2>
          <p>
            Shoppy is more than just an online store—it’s a shopping destination
            made for you! With an ever-growing range of products, from stylish
            clothing to innovative tech, we offer everything you need to elevate
            your life. Our mission is to provide exceptional quality and
            service, ensuring that every order arrives with care and every
            customer is satisfied. Explore our easy-to-use website, enjoy fast
            shipping, and find everything you love in one place at Shoppy!
          </p>
          <div className={styles.social_links}>
            <Link href={"#"} className={styles.link}>
              <FaFacebookF />
            </Link>
            <Link href={"#"} className={styles.link}>
              <FaTwitter />
            </Link>
            <Link href={"#"} className={styles.link}>
              <FaInstagram />
            </Link>
            <Link href={"#"} className={styles.link}>
              <FaPinterestP />
            </Link>
            <Link href={"#"} className={styles.link}>
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
      <FeaturesBannerSection />
      <h2 className={styles.heading}>Read Our Daily Blogs!</h2>
      <p className={styles.text}>Get to know about us through our blogs!</p>
      <div className={styles.blog_box}>
        <div className={styles.blog_image}>
          <Image
            src="/blog_1.jpg"
            alt="Blog Image"
            width={360}
            height={280}
            className={styles.display}
          />
        </div>
        <div className={styles.blog_details}>
          <h4>Inside Our Brand</h4>
          <p>
            {" "}
            Take a peek behind the curtain to see how our products are designed,
            crafted, and brought to life.
          </p>
          <Link className={styles.link} href="#">
            Continue Reading...
          </Link>
        </div>
      </div>
      <div className={styles.blog_box}>
        <div className={styles.blog_image}>
          <Image
            src="/blog_5.jpg"
            alt="Blog Image"
            width={360}
            height={280}
            className={styles.display}
          />
        </div>
        <div className={styles.blog_details}>
          <h4>Learn with Us</h4>
          <p>
            Get step-by-step guidance on how to use, style, and care for your
            favorite products.
          </p>
          <Link className={styles.link} href="#">
            Continue Reading...
          </Link>
        </div>
      </div>
      <Pagination />
    </section>
  );
}
