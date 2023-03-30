import styles from "./Pause.module.css";
import React from "react";

const Pause = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="51"
        height="50"
        fill="none"
        viewBox="0 0 51 50"
        onClick={props.onClick}
        className={styles.pause}
      >
        <rect width="50" height="50" x="0.5" fill="currentColor" rx="25"></rect>
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M23.5 17h-4v16h4V17zM31.5 17h-4v16h4V17z"
        ></path>
      </svg>
    </>
  );
};

export default Pause;
