import React from "react";
import styles from "./GuiNotes.module.css";
function GuiNotes({ text, time, date }) {
  return (
    <div className={styles.GuiContainer}>
      {text}
      <div className={styles.GuiSpan}>
        <span>{date}</span> •<span style={{ marginLeft: "5px" }}>{time}</span>
      </div>
    </div>
  );
}

export default GuiNotes;
