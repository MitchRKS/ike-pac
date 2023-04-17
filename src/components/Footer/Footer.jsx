import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <nav>
      <ul className={styles.Footer}>
        <li>
          <a href="/">Mather Strategies</a>
        </li>
        <div className={styles.linksDiv}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
