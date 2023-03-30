import React from "react";

function Bookmark(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill={props.active}
      viewBox="0 0 24 24"
      className="cursor-pointer hover:text-blue"
      onClick={props.onClick}
    >
      <path
        className={props.color}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2v16z"
      ></path>
    </svg>
  );
}

export default Bookmark;
