import styles from "./Play.module.css";
import React from "react";

const Play = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="50"
      fill="none"
      viewBox="0 0 51 50"
      onClick={props.onClick}
      className={styles.play}
    >
      <rect width="50" height="50" x="0.5" fill="currentColor" rx="25"></rect>
      <path fill="currentColor" d="M20 14l17 11-17 11V14z"></path>
    </svg>
  );
};

export default Play;
