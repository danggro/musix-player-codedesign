import React from "react";

const Next = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      className="cursor-pointer hover:text-blue"
      onClick={props.onClick}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.5 4l10 8-10 8V4zM19.5 5v14"
      ></path>
    </svg>
  );
};

export default Next;
