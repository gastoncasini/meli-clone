import React from "react";
import styles from "./card.module.css";

export default function Card(props) {
  return (
    <div className={styles.container} to={"/product/id"}>
      <div className={styles.card}>{props.children}</div>
    </div>
  );
}
