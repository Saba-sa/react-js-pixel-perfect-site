import React, { useState } from "react";
import loginsvg from "../asset/icons/logosvg.svg";
import Button from "../component/Button";
import google from "../asset/icons/Google.svg";
import apple from "../asset/icons/apple.svg";
import Input from "../component/Input";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "../component/Checkbox";

const Register = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const passwordtype = showPassword ? "text" : "password";
  const fonticon = showPassword ? faEye : faEyeSlash;

  const [inputValue, setInputValue] = useState({
    firstname: "",
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  };
  const handleButtonClick = () => {
    console.log("Button clicked!", inputValue);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(isChecked, "box");
  };

  return (
    <div className="flex p-1">
      <div>
        <img
          src={loginsvg}
          alt="alt"
          className="w-[667px] h-[100vh] rounded-[30px]" // Corrected typo here
        />
      </div>

      <div className="flex justify-center flex-col">
        <h1 className="font-semibold text-4xl font-messiri">
          Welcome Back, Austin
        </h1>
        <p className="font-poppin text-sm leading-6 font-normal text-black text-center">
          Welcome back! Please enter your details.
        </p>
        <div className="pt-10">
          <Input
            CustomclassName="text-sm font-normal bg-off-white !text-black"
            text="Full Name"
            name="firstname"
            type={"text"}
            value={inputValue.firstname}
            onChange={handleInputChange}
          />
          <Input
            CustomclassName="mt-8 text-sm font-normal bg-off-white !text-black"
            text="Email"
            name="email"
            type={"text"}
            value={inputValue.email}
            onChange={handleInputChange}
          />
          <Input
            CustomclassName="mt-8 text-sm font-normal bg-off-white !text-black"
            text="Password"
            name="password"
            type={passwordtype}
            icon={fonticon}
            value={inputValue.password}
            onChange={handleInputChange}
            togglePasswordVisibility={togglePasswordVisibility}
            showPassword={showPassword}
          />
          <div className="mt-8 flex justify-between">
            <Checkbox
              label="Remember me"
              defaultStyles={true}
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <p className="font-medium text-xs leading-6 text-black font-Montserrat">
              Forgot password?
            </p>
          </div>
        </div>
        <div className="relative pt-8">
          <hr className="bg-off-lite text-off-lite" />
          <p className="text-center text-off-gray bg-white font-normal text-base font-Montserrat absolute w-10 right-[50%] top-5">
            Or
          </p>
        </div>

        <Button
          CustomclassName="mt-8 bg-off-white !text-black !font-Montserrat"
          img={google}
          text="Continue with Google"
          onClick={handleButtonClick}
        />
        <Button
          CustomclassName="mt-4 bg-off-white !text-black !font-Montserrat"
          img={apple}
          text="Continue with Google"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default Register;
