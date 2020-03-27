import React from "react";
import Card from "../Card";
import "./styles.css";

export default function ProductCard({ image, name, price, discount }) {
  return (
    <Card>
      <img alt="product description" src={image} />
      <div className="product">
        <p className="product__price">{`$${price}`}</p>
        <p className="product__discount">{discount ? discount : ""}</p>
        <p className="product__desc">{name}</p>
      </div>
    </Card>
  );
}
