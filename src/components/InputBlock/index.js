import React from "react";
import "./styles.css";
export default function InputBlock({
  name,
  type,
  value,
  eventHandler,
  double
}) {
  let inputClasses = double ? "input-block input-block--inner" : "input-block";

  return (
    <div className={inputClasses}>
      <label htmlFor={name} className="input-block__label">
        {name}
      </label>
      <input
        className="input-block__input"
        type={type}
        name={name}
        value={value}
        onChange={eventHandler}
      />
    </div>
  );
}

export function DoubleInputBLock({ inputs }) {
  if (!inputs) {
    inputs = [
      {
        name: "Altura",
        type: "text"
      },
      {
        name: "C.P.",
        type: "text"
      }
    ];
  }
  return (
    <div className="input-block input-block--double">
      {inputs.map(input => (
        <InputBlock {...input} double={true} />
      ))}
    </div>
  );
}
