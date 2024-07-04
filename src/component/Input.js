import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Input({
  CustomclassName,
  text,
  name,
  type,
  value,
  onChange,
  icon,
  togglePasswordVisibility,
}) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={text}
        className={`${
          CustomclassName ? CustomclassName : ""
        } w-[372px] h-[51px] flex items-center rounded-lg pl-5 outline-none text-black`}
      />
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
      )}
    </div>
  );
}

export default Input;
