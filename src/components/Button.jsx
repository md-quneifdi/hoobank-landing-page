import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      className={`font-poppins font-medium py-4 px-6 bg-blue-gradient 
    ${styles} text-primary rounded-[10px] cursor-pointer text-[18px] outline-none`}
    >
      Get Started
    </button>
  );
};

export default Button;
