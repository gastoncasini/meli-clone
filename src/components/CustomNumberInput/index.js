import React from "react";
import "./styles.css";

export default function CustomNumberInput({ value, controler, item }) {
  function add() {
    controler("+", item);
  }
  function remove() {
    if (value > 1) {
      controler("-", item);
    }
  }

  return (
    <div className="number-input">
      <label for="cantidad" className="number-input__label">
        cantidad
      </label>
      <div className="number-input__container">
        <button
          className="number-input__btn  number-input__btn--left"
          onClick={add}
          aria-label="agregar item"
        >
          +
        </button>

        <input
          aria-label="cantidad de items"
          type="text"
          value={value}
          name="cantidad"
          className="number-input__display"
          readOnly
        />
        <button
          className="number-input__btn"
          onClick={remove}
          aria-label="remover item"
        >
          -
        </button>
      </div>
    </div>
  );
}
