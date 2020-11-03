import React from "react";
import "./button.scss";

const Button = ({ title, ...rest }) => {
  return (
    <div>
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        {...rest}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
