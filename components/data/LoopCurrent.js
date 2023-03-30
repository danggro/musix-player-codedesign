import Loop from "@/components/icon/Loop";
import React from "react";

const LoopCurrent = (props) => {
  return (
    <div className={`cursor-pointer ${props.style}`} onClick={props.onClick}>
      <Loop />
    </div>
  );
};

export default LoopCurrent;
