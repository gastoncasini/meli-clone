import React, { useState } from "react";
import "./styles.css";

function Select({ options, label, classes, onChange }) {
  return (
    <>
      <label htmlFor="" className={classes.label}>
        {label}
      </label>

      <select name="" id="" className={classes.select} onChange={onChange}>
        {options.map((value) => (
          <option value={value}>{value}</option>
        ))}
      </select>
    </>
  );
}

export default function SalesModule() {
  let [quantity, setQuantity] = useState(1);

  function selectQuantity(e) {
    setQuantity(e.target.value);
  }

  return (
    <div className="sales">
      <div className="sales__payment-info">Hasta 12 cuotas sin interes</div>

      <div className="sales__quantity">
        <Select
          value={quantity}
          options={[1, 2, 3, 4]}
          label={"cantidad"}
          classes={{
            label: "sales__quantity__label",
            select: "sales__quantity__select"
          }}
          onChange={selectQuantity}
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
