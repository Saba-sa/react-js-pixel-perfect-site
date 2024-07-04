import React from "react";

const Picwithtext = ({
  text,
  textBeforeSPan = "",
  span = " ",
  textAfterSpan = "",
  textBelowHeading = "",
}) => {
  const styleForBgImg = {
    background: `rgb(0,252,81) radial-gradient(circle, rgba(0,252,81,1) 12%, rgba(3,101,76,1) 70%, rgba(12,110,79,1) 79%)`,
  };
  return (
    <div className="w-[78%] bg-deep-green rounded-[10px] flex justify-around items-center ">
      <div className="relative">
        <img
          src={require("../asset/images/frame.png")}
          alt="Austin"
          className="absolute -left-6 -top-6 w-[200px] max-w-36 z-10 opacity-50"
        />
        <div
          className="absolute -left-10 -top-10 w-[350px] max-w-44 z-0 h-[170px] bg-green-light rounded-full "
          style={styleForBgImg}
        ></div>
        <img
          src={require("../asset/images/Austin.png")}
          alt="Austin"
          className="relative z-20"
        />
      </div>
      <div className="w-[70%]">
        <h2 className="font-semibold text-5xl  leading-10 text-white font-PlusJakartaSans ">
          {textBeforeSPan} <span className="text-green-light">{span}</span>{" "}
          {textAfterSpan} <br />{" "}
        </h2>
        <p className="font-normal text-sm text-white font-PlusJakartaSans pt-2.5">
          {textBelowHeading}
        </p>
      </div>
    </div>
  );
};

export default Picwithtext;
