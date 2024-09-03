import React from "react";

function Add(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"  // Usa currentColor para permitir que a cor seja controlada por CSS
      viewBox="0 0 32 32"
      className={props.className}
    >
      <path
        d="M14.667 22.667h2.666v-5.334h5.334v-2.666h-5.334V9.333h-2.666v5.334H9.333v2.666h5.334v5.334zM16 29.333c-1.844 0-3.578-.344-5.2-1.033a13.7 13.7 0 01-4.233-2.867A13.7 13.7 0 013.7 21.2c-.689-1.622-1.033-3.356-1.033-5.2 0-1.845.344-3.578 1.033-5.2a13.7 13.7 0 012.867-4.233c1.2-1.2 2.61-2.145 4.233-2.834 1.622-.71 3.356-1.066 5.2-1.066 1.845 0 3.578.355 5.2 1.066a13.236 13.236 0 014.233 2.834c1.2 1.2 2.145 2.61 2.834 4.233.71 1.622 1.066 3.355 1.066 5.2 0 1.844-.355 3.578-1.066 5.2a13.236 13.236 0 01-2.834 4.233A13.7 13.7 0 0121.2 28.3c-1.622.689-3.355 1.033-5.2 1.033zm0-2.666c2.978 0 5.5-1.034 7.567-3.1 2.066-2.067 3.1-4.59 3.1-7.567 0-2.978-1.034-5.5-3.1-7.567-2.067-2.066-4.59-3.1-7.567-3.1-2.978 0-5.5 1.034-7.567 3.1-2.066 2.067-3.1 4.59-3.1 7.567 0 2.978 1.034 5.5 3.1 7.567 2.067 2.066 4.59 3.1 7.567 3.1z"
      ></path>
    </svg>
  );
}

export default Add;
