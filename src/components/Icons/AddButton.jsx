import * as React from "react";

function AddButton(props) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="currentColor"  // Utilizando currentColor para permitir controle via CSS
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M14.666 17.333h-8v-2.666h8v-8h2.667v8h8v2.666h-8v8h-2.666v-8z"
      />
    </svg>
  );
}

export default AddButton;
