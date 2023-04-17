import React from "react";
import DisplayBox from "../DisplayBox/Advert";
import styles from "./TopBody.module.scss";

export default function TopBody() {
  return (
    <div className={styles.TopBody}>
      <div className={styles.DisplayBoxDiv}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KmmFQeaY3YM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <div className={styles.DescriptionBox}>
          <h1>Kansans First.</h1>
          <h1>Kansans Always.</h1>
          <p>Politicians say they're for the people.</p>
          <p>Right before they cave to special interests.</p>
          <p>We think the people of Kansas are a pretty special interest.</p>
          <p>And it's time they listen to us.</p>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/fnx-SqMYknI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
