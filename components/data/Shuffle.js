import styles from "./Shuffle.module.css";
import React from "react";
import Suffle from "@/components/icon/Suffle";

const Shuffle = (props) => {
  return (
    <div className={`cursor-pointer ${props.style}`} onClick={props.onClick}>
      <Suffle />
    </div>
  );
};

export default Shuffle;
