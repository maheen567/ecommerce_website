import React from 'react';
import styles from './AddToCart.module.css';
import { IoCartOutline } from "react-icons/io5";


const AddToCartBtn = () => {
  return (
    <div className={styles.button_container}>
      <button>
      <IoCartOutline className={styles.cart_icon}/>
      <span>Add to cart</span>
      </button>
    </div>
  )
}

export default AddToCartBtn
