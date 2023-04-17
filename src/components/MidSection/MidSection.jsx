import React from "react";
import styles from "./MidSection.module.scss";

export default function MidSection() {
  return (
    <div className={styles.MidSection}>
      <div className={styles.DescriptionBoxDiv}>
        <div className={styles.DescriptionBox}>
          <h1>Beat the Fish</h1>
          <p>Like playing Texas Hold'em but can't seem to win?</p>
          <p>Practice with Beat the Fish</p>
          <p>Try to beat the player who literally never folds.</p>
        </div>
        <div className={styles.DescriptionBox}>
          <h1>pollUp</h1>
          <p>Canvassing for local office?</p>
          <p>Don't want to clutter your contacts?</p>
          <p>Let pollUp keep track for you.</p>
        </div>
        <div className={styles.DescriptionBox}>
          <h1>Ice Cream Shop</h1>
          <p>Trading in delectable dairy?</p>
          <p>Need a way to reach the people?</p>
          <p>Check out this demo ice cream shop.</p>
        </div>
        <div className={styles.DescriptionBox}>
          <h1>IKE PAC</h1>
          <p>Looking to add to the political noise?</p>
          <p>Need to make your astroturf look legit?</p>
          <p>See how I can help (for a fee).</p>
        </div>
      </div>
    </div>
  );
}
