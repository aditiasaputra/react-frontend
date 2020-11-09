  import React from "react";
import "./button.scss";

const Button = ({ title, color, type, ...rest }) => {
  return (
    <div>
      <button
        type={type}
        className={`bg-${color}-500 hover:bg-${color}-700 text-white font-bold py-2 px-4`}
        {...rest}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
