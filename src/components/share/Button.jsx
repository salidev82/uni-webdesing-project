import React from "react";

const Button = ({ children, className, type }) => {
  return (
    <div>
      <button
        href="#"
        type={type}
        className={`bg-main text-white ml-4 py-3 px-8 rounded-md ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
