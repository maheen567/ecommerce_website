import React from "react";
import styles from "./page.module.css";
import TopBanner from "@/components/TopBanner/TopBanner";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoppy - Contact",
  description: "An Online E-commerce Website",
};

const page = () => {
  return (
    <section className={styles.contact_section}>
      <TopBanner
        title="Let's Talk!"
        link="/"
        label="Go To Home"
        description="We would love to hear from you!"
      />
      <h2 className={styles.contactUs_heading}>Contact Us</h2>
      <p className={styles.contactUs_description}>
        Reach out to us with your questions, feedback, or supportneeds—we’re
        here to help!
      </p>
      <div className={styles.contact_container}>
        <div className={styles.contact_info}>
          <div className={styles.box}>
            <div className={styles.icon}>
              <MdLocationOn />
            </div>
            <div className={styles.info_div}>
              <h4>Address</h4>
              <p>
                461 Sugar Camp Street, <br /> California, 56600.
              </p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.icon}>
              <FaPhoneAlt />
            </div>
            <div className={styles.info_div}>
              <h4>Phone</h4>
              <p>+21 312456789</p>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.icon}>
              <MdEmail />
            </div>
            <div className={styles.info_div}>
              <h4>Email</h4>
              <p>shoppy@temporary.com</p>
            </div>
          </div>
        </div>

        <div className={styles.contact_form}>
          <form action="#">
            <h2>Send Message</h2>
            <div className={styles.input_box}>
              <label>Your Name:</label>
              <input type="text" placeholder="Enter your name" required />
            </div>
            <div className={styles.input_box}>
              <label>Your Email:</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className={styles.input_box}>
              <label>Your Message:</label>
              <textarea
                rows={5}
                placeholder="Write your message here"
              ></textarea>
            </div>
            <div className={styles.input_box}>
              <input type="submit" value={"Send"} className={styles.send} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
