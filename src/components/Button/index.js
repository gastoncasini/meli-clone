import React from "react";
import "./styles.css";

const Button = ({ className, clickHandler, innnerHTML }) => {
  className = className ? `button ${className}` : "button";

  return (
    <button className={className} onClick={clickHandler}>
      {innnerHTML}
    </button>
  );
};

export default Button;
