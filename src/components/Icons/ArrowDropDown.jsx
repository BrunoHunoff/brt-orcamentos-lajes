import React from "react";

function ArrowDropDown(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      fill="currentColor" /* Usa a cor definida no CSS */
      viewBox="0 0 36 36"
      className={props.className}
    >
      <path d="M18 22.5L10.5 15h15L18 22.5z"></path>
    </svg>
  );
}

export default ArrowDropDown;
