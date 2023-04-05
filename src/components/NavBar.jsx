import React from "react";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.NavBar}>
        <li>
          <a href="/">Ike PAC</a>
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
