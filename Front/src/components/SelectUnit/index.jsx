import React from "react";
import "./styles.css";

export default function SelectUnit(props) {
  return (
    <select
      className="Selection"
      onChange={(event) => props.onSelect(event.target.value)}
    >
      {props.options &&
        props.options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
    </select>
  );
}
