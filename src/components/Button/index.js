import React from "react";
import "./styles.css";

const Button = ({ className, clickHandler, innerHTML }) => {
  className = className ? `button ${className}` : "button";

  return (
    <button className={className} onClick={clickHandler}>
      {innerHTML}
    </button>
  );
};

export default Button;
