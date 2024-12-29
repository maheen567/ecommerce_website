import React from "react";
import styles from "./page.module.css";
import TopBanner from "@/components/TopBanner/TopBanner";
import { FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Newsletter from "@/components/Newsletter/Newsletter";
import Pagination from "@/components/Pagination/Pagination";
import ShopHeader from "@/components/ShopHeader/ShopHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoppy - Shop",
  description: "An Online E-commerce Website",
};

const products = [
  {
    id: 1,
    image: "/formal_1.jpg",
    brand: "Adidas",
    title: "Soft SkyBlue Shirt",
    rating: 5,
    price: 53,
  },
  {
    id: 2,
    image: "/formal_2.jpg",
    brand: "Nike",
    title: "Sporty Shirt",
    rating: 4,
    price: 49,
  },
  {
    id: 3,
    image: "/formal_3.jpg",
    brand: "Puma",
    title: "Casual Cotton Shirt",
    rating: 3,
    price: 72,
  },
  {
    id: 4,
    image: "/formal_4.jpg",
    brand: "Under Armour",
    title: "Performance Armour Shirt",
    rating: 4,
    price: 55,
  },
  {
    id: 5,
    image: "/formal_5.jpg",
    brand: "Reebok",
    title: "Denim Shirt",
    rating: 5,
    price: 74,
  },
  {
    id: 6,
    image: "/formal_6.jpg",
    brand: "Levi's",
    title: "Vintage Shorts",
    rating: 4,
    price: 25,
  },
  {
    id: 7,
    image: "/formal_7.jpg",
    brand: "H&M",
    title: "Classic Shirt",
    rating: 4,
    price: 36,
  },
  {
    id: 8,
    image: "/formal_8.jpg",
    brand: "Zara",
    title: "Minimalist Black Shirt",
    rating: 4,
    price: 47,
  },
  {
    id: 9,
    image: "/product_1.jpg",
    brand: "Adidas",
    title: "Cartoon Floral T-Shirts",
    rating: 5,
    price: 61,
  },
  {
    id: 10,
    image: "/product_2.jpg",
    brand: "Nike",
    title: "Sporty T-Shirts",
    rating: 4,
    price: 49,
  },
  {
    id: 11,
    image: "/product_3.jpg",
    brand: "Puma",
    title: "Casual Cotton T-Shirts",
    rating: 3,
    price: 35,
  },
  {
    id: 12,
    image: "/product_4.jpg",
    brand: "Under Armour",
    title: "Performance T-Shirts",
    rating: 4,
    price: 55,
  },
  {
    id: 13,
    image: "/product_5.jpg",
    brand: "Reebok",
    title: "Graphic Printed T-Shirts",
    rating: 5,
    price: 60,
  },
  {
    id: 14,
    image: "/product_6.jpg",
    brand: "Denim",
    title: "Vintage Denim T-Shirts",
    rating: 4,
    price: 50,
  },
  {
    id: 15,
    image: "/product_7.jpg",
    brand: "H&M",
    title: "Classic T-Shirts",
    rating: 4,
    price: 50,
  },
  {
    id: 16,
    image: "/product_8.jpg",
    brand: "Saffari",
    title: "Classic White T-Shirts",
    rating: 4,
    price: 38,
  },
];

const ShopSection = () => {
  return (
    <>
      <section className={styles.shop_section}>
        <ShopHeader />
        <TopBanner
          title="Welcome To Our Shop"
          link="/"
          label="Go To Home"
          description="Save more with coupons & upto 70% OFF!"
        />

        <div className={styles.product_container_div}>
          <div className={styles.product_container}>
            {products.map((product) => (
              <div key={product.id} className={styles.product_wrapper}>
                <img src={product.image} alt={product.title} />
                <div className={styles.product_details}>
                  <span>{product.brand}</span>
                  <h5>{product.title}</h5>
                  <div className={styles.star}>
                    {Array(product.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} />
                      ))}
                  </div>
                  <h4>${product.price}</h4>
                </div>
                <div className={styles.links}>
                  <a href="#" className={styles.view_details}>
                    View Details!
                  </a>
                  <a href="#" className={styles.shopping_cart}>
                    <FaShoppingCart size={22} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pagination />
        <Newsletter />
      </section>
    </>
  );
};

export default ShopSection;
