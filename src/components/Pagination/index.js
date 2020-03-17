import React from "react";
import styles from "./pagination.module.css";
import { NavLink } from "react-router-dom";
export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <NavLink className={styles.item} to={"/products/1"}>
        1
      </NavLink>
      <NavLink className={styles.item} to={"/products/2"}>
        2
      </NavLink>
      <NavLink className={styles.item} to={"/products/3"}>
        3
      </NavLink>
    </div>
  );
}
