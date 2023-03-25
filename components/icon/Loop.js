import React from "react";

function Loop() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
    >
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        opacity="0.4"
      >
        <path d="M17.5 2l4 4-4 4"></path>
        <path d="M3.5 11v-1a4 4 0 014-4h14M7.5 22l-4-4 4-4"></path>
        <path d="M21.5 13v1a4 4 0 01-4 4h-14"></path>
      </g>
    </svg>
  );
}

export default Loop;
