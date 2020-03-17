import React from "react";
import Catalog from "../Catalog";
import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="banner">
        <h1 className="title">Header Title</h1>
      </div>

      <Catalog />
    </>
  );
}
