import Image from "next/image";
import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+36 30 123 1234</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="" height="60px" width="60px" />
          <li className={styles.listItem}>Contact</li>
          <li className={styles.listItem}>Delivery</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" height="30px" width="30px" />
        </div>
        <div className={styles.counter}>2</div>
      </div>
    </div>
  );
};

export default Navbar;
