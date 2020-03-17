import React from "react";
import Card from "../Card";
import styles from "../Card/card.module.css";

export default function ProductCard({ image, name }) {
  const initialProps = {
    name: "shoes",
    image:
      "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/01/30/14857785587205.jpg"
  };

  image = image ? image : initialProps.image;
  name = name ? name : initialProps.name;
  return (
    <Card>
      <img alt="" src={image} />
      <p className={styles.name}>{name}</p>
    </Card>
  );
}
