import React from "react";
import Card from "../../../Card";

function ItemList() {
  return (
    <ul className="item-list">
      <Card>
        <li className="item-list__item">
          <img src="https://picsum.photos/50" alt="" className="item__img" />

          <div className="item__info">
            <div className="item__info__top">Producto 1</div>
            <div className="item__info__bottom">
              <div className="">1</div>
              <div className="">$ 100</div>
            </div>
          </div>
        </li>
      </Card>
      <Card>
        <li className="item-list__item">
          <img src="https://picsum.photos/50" alt="" className="item__img" />
          <div className="item__info">
            <div className="item__info__top">Producto 2</div>

            <div className="item__info__bottom">
              <div className="">1</div>
              <div className="">$ 100</div>
            </div>
          </div>
        </li>
      </Card>
    </ul>
  );
}

function Total() {
  return (
    <Card>
      <div className="info-block">
        <div className="info-block__field-container">
          <p className="info-block__field">producto 1 x 1</p>

          <p className="info-block__value">$99</p>
        </div>
        <div className="info-block__field-container">
          <p className="info-block__field">producto 2 x 2</p>

          <p className="info-block__value">$99</p>
        </div>
        <hr />
        <div className="info-block__field-container info-block__field-container--dark">
          <h2 className="info-block__field">Total:</h2>
          <p className="info-block__value">$99</p>
        </div>
      </div>
    </Card>
  );
}

export function ItemListWithTotal({ hidden }) {
  let className = hidden
    ? "ms-checkout__step ms-checkout__step--hidden"
    : "ms-checkout__step";

  return (
    <div className={className}>
      <ItemList />
      <Total />
    </div>
  );
}
