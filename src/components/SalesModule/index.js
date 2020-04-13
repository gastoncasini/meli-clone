import React, { useState } from "react";
import { connect } from "react-redux";
import { addItemAction } from "../../redux/userDuck";
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

function SalesModule({ addItemAction }) {
  let [quantity, setQuantity] = useState(1);

  function selectQuantity(e) {
    setQuantity(e.target.value);
  }

  function addItem() {
    addItemAction(quantity);
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
      <button
        className="sales__btn sales__btn--with-bg-color"
        onClick={addItem}
      >
        Comprar ahora
      </button>
      <button className="sales__btn sales__btn--with-border" onClick={addItem}>
        Agregar al carrito
      </button>
    </div>
  );
}

function mapStateToProps({ products }) {
  return {};
}

export default connect(mapStateToProps, { addItemAction })(SalesModule);
