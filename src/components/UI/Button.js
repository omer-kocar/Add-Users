import React from "react";
import style from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <button
        className={style.button}
        type={props.type}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
