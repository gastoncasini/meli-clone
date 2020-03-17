import React from "react";
import styles from "./card.module.css";

export default function Card({ name, image }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img alt="" src={image} />
        <p className={styles.name}>{name}</p>
        <p className={"price"}> $100</p>
      </div>
    </div>
  );
}
