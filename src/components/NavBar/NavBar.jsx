import React from "react";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.NavBar}>
        <li>
          <a href="/">Kansans First PAC</a>
        </li>
        <div className={styles.linksDiv}>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/about">Blog</a>
          </li>
          <li>
            <a href="/services">Contribute</a>
          </li>
          <li>
            <a href="/contact">Signup</a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
