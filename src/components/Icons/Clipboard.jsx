import React from "react";

function Clipboard(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none" // Define que a cor do preenchimento será controlada via CSS
      stroke="currentColor" // Permite que a cor do traço seja controlada pela propriedade `color` do CSS
      viewBox="0 0 32 32"
      className={props.className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M21.333 5.333H24A2.667 2.667 0 0126.667 8v18.667A2.667 2.667 0 0124 29.333H8a2.667 2.667 0 01-2.667-2.666V8A2.667 2.667 0 018 5.333h2.667M12 2.667h8c.736 0 1.333.597 1.333 1.333v2.667C21.333 7.403 20.736 8 20 8h-8a1.333 1.333 0 01-1.333-1.333V4c0-.736.597-1.333 1.333-1.333z"
      ></path>
    </svg>
  );
}

export default Clipboard;
