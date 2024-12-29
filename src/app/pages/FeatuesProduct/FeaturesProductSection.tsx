import React from "react";
import styles from "./FeatuesProduct.module.css";
import { FaStar } from "react-icons/fa";
import product_1 from "../../public/product_1.jpg";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    image: "/product_1.jpg",
    brand: "Adidas",
    title: "Cartoon Floral T-Shirts",
    rating: 5,
    price: 61,
  },
  {
    id: 2,
    image: "/product_2.jpg",
    brand: "Nike",
    title: "Sporty T-Shirts",
    rating: 4,
    price: 49,
  },
  {
    id: 3,
    image: "/product_3.jpg",
    brand: "Puma",
    title: "Casual Cotton T-Shirts",
    rating: 3,
    price: 35,
  },
  {
    id: 4,
    image: "/product_4.jpg",
    brand: "Under Armour",
    title: "Performance T-Shirts",
    rating: 4,
    price: 55,
  },
  {
    id: 5,
    image: "/product_5.jpg",
    brand: "Reebok",
    title: "Graphic Printed T-Shirts",
    rating: 5,
    price: 60,
  },
  {
    id: 6,
    image: "/product_6.jpg",
    brand: "Levi's",
    title: "Vintage Denim T-Shirts",
    rating: 4,
    price: 50,
  },
  {
    id: 7,
    image: "/product_7.jpg",
    brand: "H&M",
    title: "Classic Striped T-Shirts",
    rating: 4,
    price: 50,
  },
  {
    id: 8,
    image: "/product_8.jpg",
    brand: "Zara",
    title: "Minimalist White T-Shirts",
    rating: 4,
    price: 38,
  },
];

const FeaturesProductSection = () => {
  return (
    <section className={styles.featuresProductSection}>
      <h2>Featured Products</h2>
      <p>Summer Collection new modern designs!</p>

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
                    <FaShoppingCart size={22}/>
                </a>
            </div>
          </div>
         ))}
      </div>
    </section>
  );
};

export default FeaturesProductSection;
