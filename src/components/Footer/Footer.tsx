import React from "react";
import ContactFooter from "./ContactFooter";
import AboutFooter from "./AboutFooter";
import AccountFooter from "./AccountFooter";
import PaymentFooter from "./PaymentFooter";
import styles from "./Footer.module.css";
import CopyrightFooter from "./CopyrightFooter";

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.main_footer_div}>
          <ContactFooter />
          <AboutFooter />
          <AccountFooter />
          <PaymentFooter />
        </div>
        <CopyrightFooter />
      </footer>
    </>
  );
}
