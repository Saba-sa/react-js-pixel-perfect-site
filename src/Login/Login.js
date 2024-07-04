import React from "react";
import loginsvg from "../asset/icons/logosvg.svg";
import Button from "../component/Button";
import google from "../asset/icons/Google.svg";
import apple from "../asset/icons/apple.svg";

const Login = () => {
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
        <div className="button pt-10">
          <Button CustomclassName="font-Montserrat" text="Login" />
          <Button
            CustomclassName="bg-off-white !text-black mt-8 font-Montserrat"
            text="Sign Up"
          />
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
        />
        <Button
          CustomclassName="mt-4 bg-off-white !text-black !font-Montserrat"
          img={apple}
          text="Continue with Google"
        />
      </div>
    </div>
  );
};

export default Login;
