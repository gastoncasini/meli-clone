import React from "react";
import "./styles.css";

export default function SalesModule() {
  return (
    <div className="sales">
      <div className="sales__payment-info">Hasta 12 cuotas sin interes</div>

      <div className="sales__quantity">
        <label htmlFor="" className="sales__quantity__label">
          Cantidad
        </label>
        <input
          type="number"
          min="1"
          max="99"
          value="1"
          className="sales__quantity__input"
        />
      </div>
      <button className="sales__btn sales__btn--with-bg-color">
        Comprar ahora
      </button>
      <button className="sales__btn sales__btn--with-border">
        Agregar al carrito
      </button>
    </div>
  );
}
