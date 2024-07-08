import React from "react";
import Search from "../component/Search";
import Sidebar from "../component/Sidebar";
// import Customcalender from "./Customcalender";
const Contentcalendar = () => {
  return (
    <div className="flex gap-x-[80px]  bg-[#F9FAF5]      ">
      <Sidebar />
      <div className=" flex flex-col  w-full px-8 ">
        <div className="flex pt-4 justify-between flex-col">
          <div className="flex justify-end mb-4">
            <Search SearchClass={`mx-auto`} />
          </div>
          <div className="flex justify-between  h-48 w-full ">
            {/* <Customcalender /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contentcalendar;
