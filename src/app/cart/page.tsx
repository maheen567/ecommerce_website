import React from "react";
import styles from "./page.module.css";
import TopBanner from "@/components/TopBanner/TopBanner";
import { MdDelete } from "react-icons/md";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoppy - Shopping Cart",
  description: "An Online E-commerce Website",
};

const page = () => {
  return (
    <section className={styles.cart_section}>
      <TopBanner
        title="Your Cart"
        link="/shop"
        label="Go To Shop"
        description="Your cart is ready—let’s make these goodies yours today!"
      />
      <h2 className={styles.heading}>Your Shopping Cart</h2>

      <div className={styles.cart_table}>
        <table width={"100%"} className={styles.table_whole}>
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
              <td>...</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className={styles.product}>
                <img src="/product_3.jpg" alt="Product" />
                <div className={styles.product_info}>
                  <h4>Casual Cotton T-Shirts</h4>
                </div>
              </td>
              <td>$35</td>
              <td>
                <input type="number" placeholder="1" />
              </td>
              <td>$35</td>
              <td>
                <button>
                  <MdDelete className={styles.delete_icon} />
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles.product}>
                <img src="/product_5.jpg" alt="Product" />
                <div className={styles.product_info}>
                  <h4>Graphic Printed T-Shirts</h4>
                </div>
              </td>
              <td>$60</td>
              <td>
                <input type="number" placeholder="1" />
              </td>
              <td>$60</td>
              <td>
                <button>
                  <MdDelete className={styles.delete_icon} />
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles.product}>
                <img src="/product_4.jpg" alt="Product" />
                <div className={styles.product_info}>
                  <h4>Performance T-Shirts</h4>
                </div>
              </td>
              <td>$55</td>
              <td>
                <input type="number" placeholder="1" />
              </td>
              <td>$55</td>
              <td>
                <button>
                  <MdDelete className={styles.delete_icon} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.bottom_portion_div}>
        <div className={styles.coupon_info}>
          <h2>Apply Coupon</h2>
          <input type="text" placeholder="Enter your coupon id" />
          <button>Apply</button>
        </div>

        <div className={styles.order_container}>
          <button className={styles.place_order_btn}>Place your order</button>
          <p className={styles.agreement_text}>
            By placing your order, you agree to Shoppy.com's
            <Link href="#"> privacy notice </Link>
            and
            <Link href="#"> conditions of use</Link>.
          </p>
          <hr />
          <div className={styles.order_summary}>
            <h4>Order Summary</h4>
            <p>
              <strong>Items (3):</strong> $155
            </p>
            <p>
              <strong>Shipping & handling:</strong> $0.00
            </p>
            <hr />
            <p>
              <strong>Total before tax:</strong> $150
            </p>
            <p>
              <strong>Estimated tax to be collected:</strong> $8.75
            </p>
            <hr />
            <p className={styles.order_total}>
              <strong>Order total:</strong> <span>$158.75</span>
            </p>
          </div>
          <p className={styles.shipping_note}>
            <Link href="#">How are shipping costs calculated? </Link>
            Prime shipping benefits have been applied to your order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
