import React, { useState } from "react";
import "../App.css";

const Checkbox = ({
  status,
  defaultStyles = false,
  label,
  checked,
  onChange,
}) => {
  const [checkedStatus, setcheckedStatus] = useState(status);
  return (
    <div
      className={`flex items-center space-x-2 cursor-pointer ${
        !defaultStyles && "custom"
      }`}
    >
      <label htmlFor={label} className="checkbox custom-checkbox-label">
        <input
          type="checkbox"
          id={label}
          // checked={checked}
          checked={checkedStatus}
          className="hidden-checkbox"
          onChange={(e) => {
            e.stopPropagation();
            setcheckedStatus(!checkedStatus);
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
        <span className="check custom-checkbox"></span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
