import React from "react";
import Card from "../Card";
import SalesModule from "../SalesModule";
import "./styles.css";

// aux
function priceWithDiscount(price, discount) {
  return Math.round(price - (price * discount) / 100);
}

//

function Price({ value, discount }) {
  let realValue = discount ? priceWithDiscount(value, discount) : value;

  return (
    <div className="price-block">
      <div className="price-block__price-container">
        {/* shows the original price if it has a discount */}
        {value !== realValue && (
          <p className="price-block__old-value">
            <s>{`$ ${value}`}</s>
          </p>
        )}

        <p className="price-block__real-value">{`$ ${realValue}`}</p>
      </div>
      <p className="price-block__discount">
        {discount ? `${discount}% OFF` : ""}
      </p>
    </div>
  );
}

export default function ProductCard({ image, name, price, discount, unique }) {
  return (
    <Card>
      <img alt="product description" src={image} />
      <div className="product">
        <Price value={price} discount={discount} />
        <p className="product__desc">{name}</p>
      </div>
      {unique && <SalesModule />}
    </Card>
  );
}
