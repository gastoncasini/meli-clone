import React from "react";
import Catalog from "../../components/Catalog";
import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="banner">
        <h1 className="banner__title">Header Title</h1>
      </div>

      <Catalog />
    </>
  );
}
