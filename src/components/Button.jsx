import React from "react";

const Button = ({ children, containerClass, handleClick }) => {
  return (
    <button className={`btn ${containerClass}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
