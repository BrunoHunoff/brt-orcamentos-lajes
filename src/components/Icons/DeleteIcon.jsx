import React from "react";

function DeleteIcon({width, height, onClick}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
      onClick={onClick}
    >
      <path
        fill="currentColor"
        d="M5.833 17.5c-.458 0-.85-.163-1.177-.49a1.605 1.605 0 01-.49-1.177V5h-.833V3.333H7.5V2.5h5v.833h4.167V5h-.834v10.833c0 .459-.163.851-.49 1.177-.325.327-.718.49-1.176.49H5.833zM14.168 5H5.834v10.833h8.333V5zM7.5 14.167h1.667v-7.5H7.5v7.5zm3.334 0H12.5v-7.5h-1.666v7.5z"
      ></path>
    </svg>
  );
}

export default DeleteIcon;