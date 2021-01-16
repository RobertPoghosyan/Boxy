import React from "react";

const Button = (props) => {
  const { type, onClick, className,children } = props;
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
