"use client";
import Link from "next/link";
import React from "react";
import styles from "./Product.module.css";
import { FaShoppingCart } from "react-icons/fa";

interface ProductProps {
  _id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  previousPrice: number;
  isNew: boolean;
  category: string;
  brand: string;
}

interface Props {
  products: ProductProps[];
}

const Products = ({ products }: Props) => {
  return (
    <div className={styles.product_container_div}>
        <div className={styles.product_container}>
         {products.map((product) => (
          <div className={styles.product_wrapper}>
            <img src={product.image} alt={product.title} />

            <div className={styles.product_details}>
              <span>{product.brand}</span>
              <h5>{product.title}</h5>
              <h4>${product.price}</h4>
            </div>

            <div className={styles.links}>
                <Link href={{pathname: './phone/singleproduct', query: {_id: product._id}}} className={styles.view_details}>
                    View Details!
                </Link>
                <Link href="#" className={styles.shopping_cart}>
                    <FaShoppingCart size={22}/>
                </Link>
            </div>

          </div>
         ))}
        </div>
      </div>



);
};

export default Products;
