import React, { useState, useEffect } from "react";
import Card from "../Card";
import Pagination from "../Pagination";
import styles from "./catalog.module.css";

//
const initialProps = {
  name: "shoes",
  image:
    "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2017/01/30/14857785587205.jpg"
};

const arr = Array(5).fill(initialProps);
//

function renderProducts(prods) {
  return prods.map(prod => {
    return <Card {...prod} />;
  });
}

export default function Catalog() {
  return (
    <div className="catalog">
      <h2 className={styles.title}>Products</h2>
      {renderProducts(arr)}

      <Pagination />
    </div>
  );
}
