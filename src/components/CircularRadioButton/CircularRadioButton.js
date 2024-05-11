// CircularRadioButton.js
import React from "react";
import "./CircularRadioButton.css";

const CircularRadioButton = ({ checked, onChange }) => {
  return (
    <label className="circular-radio">
      <input type="radio" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
    </label>
  );
};

export default CircularRadioButton;
