import React from "react";
import ProductList from "../../components/ProductList";
import NavBar from "../../components/NavBar";
import "./styles.css";

export default function Home() {
  return (
    <>
      <NavBar />

      <div className="banner">
        <h1 className="banner__title">Header Title</h1>
      </div>
    </>
  );
}
