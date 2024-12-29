import TopBanner from "@/components/TopBanner/TopBanner";
import styles from "./page.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoppy - Blog",
  description: "An Online E-commerce Website",
};

const BlogPage = () => {
  return (
    <section className={styles.blog_section}>
      <TopBanner
        title="Welcome To Our Blog Page"
        link="/"
        label="Go To Home"
        description="Read all case stories about our products!"
      />

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
            src="/blog_2.jpeg"
            alt="Blog Image"
            width={360}
            height={280}
            className={styles.display}
          />
        </div>
        <div className={styles.blog_details}>
          <h4>Real Stories, Real Customers</h4>
          <p>
            Hear how our products have made a difference in the lives of our
            customers
          </p>
          <Link className={styles.link} href="#">
            Continue Reading...
          </Link>
        </div>
      </div>
      <div className={styles.blog_box}>
        <div className={styles.blog_image}>
          <Image
            src="/blog_3.jpg"
            alt="Blog Image"
            width={360}
            height={280}
            className={styles.display}
          />
        </div>
        <div className={styles.blog_details}>
          <h4>Live the Lifestyle</h4>
          <p>
            Explore fun, inspiring content that adds joy and creativity to your
            everyday life.
          </p>
          <Link className={styles.link} href="#">
            Continue Reading...
          </Link>
        </div>
      </div>
      <div className={styles.blog_box}>
        <div className={styles.blog_image}>
          <Image
            src="/blog_4.jpg"
            alt="Blog Image"
            width={360}
            height={280}
            className={styles.display}
          />
        </div>
        <div className={styles.blog_details}>
          <h4>Exclusive Deals & New Arrivals</h4>
          <p>
            Be the first to know about our latest products, special offers, and
            upcoming sales.
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
    </section>
  );
};

export default BlogPage;
