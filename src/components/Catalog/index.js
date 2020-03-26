import React from "react";
import LinkCard from "../LinkCard";
import Pagination from "../Pagination";
import styles from "./catalog.module.css";

//
const arr = Array(5).fill("");
//

function renderProducts(prods) {
  return prods.map(prod => {
    return <LinkCard {...prod} />;
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
