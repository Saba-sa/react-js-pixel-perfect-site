import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Search from "../component/Search";
import Accountdetail from "./Accountdetail";
import Mysubscription from "./Mysubscription";
import Paymentmethod from "./Paymentmethod";
const Setting = () => {
  const [selectedDay, setSelectedDay] = useState("AccountDetails");
  const handlechangeDay = (day) => {
    setSelectedDay(day);
  };
  return (
    <div className="flex gap-x-[80px]  bg-bg-grey      ">
      <Sidebar />
      <div className=" flex flex-col  w-full px-8 ">
        <div className="flex justify-end mb-4">
          <Search SearchClass={`mx-auto`} />
        </div>
        <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
          Account Settings
        </p>
        <div className="flex gap-8 w-[80%] mt-8">
          <p
            className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer pb-4  ml-2 ${selectedDay ===
              "AccountDetails" && "!text-green !border-b-green !border-b-4"}`}
            onClick={() => handlechangeDay("AccountDetails")}
          >
            Account Details{" "}
          </p>

          <p
            className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer   pb-4   ${selectedDay ===
              "MySubscription" && "!text-green !border-b-green !border-b-4"}`}
            onClick={() => handlechangeDay("MySubscription")}
          >
            My Subscription
          </p>
          <p
            className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer   pb-4   ${selectedDay ===
              "PaymentMethod" && "!text-green !border-b-green !border-b-4"}`}
            onClick={() => handlechangeDay("PaymentMethod")}
          >
            Payment Method
          </p>
        </div>
        <div className=" mt-10">
          <div className="flex gap-4 flex-wrap w-full ">
            {selectedDay === "AccountDetails" && <Accountdetail />}
            {selectedDay === "MySubscription" && <Mysubscription />}
            {selectedDay === "PaymentMethod" && <Paymentmethod />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
