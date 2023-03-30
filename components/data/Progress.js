import styles from "./Progress.module.css";
import React from "react";

const Progress = (props) => {
  return (
    <div className={styles.container}>
      <input
        type="range"
        min="1"
        max="100"
        step="0.01"
        value={props.value}
        className={styles.slider}
        id="myRange"
        onChange={props.onChange}
        onMouseUp={props.onMouseUp}
        onTouchEnd={props.onTouchEnd}
        style={{
          background: `linear-gradient(90deg, #71C6FF ${Math.floor(
            props.value
          )}%, #b0b0b0 ${Math.floor(props.value)}%)`,
        }}
      />
    </div>
  );
};

export default Progress;
