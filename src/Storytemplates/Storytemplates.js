import React, { useState } from "react";
import Sidebar from "../component/Sidebar";
import Search from "../component/Search";
import PostCard from "../component/PostCard";
import data from "../data/Storyidea.json";
import { useNavigate } from "react-router";

const Storyideas = () => {
  const [selectedDay, setSelectedDay] = useState("All");
  const navigate = useNavigate();
  const handlechangeDay = (day) => {
    setSelectedDay(day);
  };
  const handleItemClick = (id) => {
    navigate(`/storytemplates/${id}`);
  };
  return (
    <div className="flex gap-x-[80px]  bg-bg-grey      ">
      <Sidebar />
      <div className=" flex flex-col  w-full px-8 ">
        <div className="flex pt-4 justify-between flex-col">
          <div className="flex justify-between mb-4">
            <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
              Story Template
            </p>
            <Search SearchClass={`mx-auto`} />
          </div>

          <div className="flex justify-between w-[80%]">
            <p
              className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8 w-full ${selectedDay ===
                "All" && "!text-green !border-b-green !border-b-4"}`}
              onClick={() => handlechangeDay("All")}
            >
              All
            </p>
            <p
              className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8 w-full ${selectedDay ===
                " Lead Gen" && "!text-green !border-b-green !border-b-4"}`}
              onClick={() => handlechangeDay(" Lead Gen")}
            >
              Lead Gen
            </p>
            <p
              className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8 w-full ${selectedDay ===
                "Engagement" && "!text-green !border-b-green !border-b-4"}`}
              onClick={() => handlechangeDay("Engagement")}
            >
              Engagement
            </p>
            <p
              className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8 w-full ${selectedDay ===
                "Local" && "!text-green !border-b-green !border-b-4"}`}
              onClick={() => handlechangeDay("Local")}
            >
              Local
            </p>
            <p
              className={`flex items-center  gap-4 font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8 w-full ${selectedDay ===
                "More Categories" &&
                "!text-green !border-b-green !border-b-4"}`}
              onClick={() => handlechangeDay("More Categories")}
            >
              More&nbsp;&nbsp;Categories
              <svg
                width="16"
                height="9"
                viewBox="0 0 16 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1L8 8L1 1"
                  stroke="#828282"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </div>
        </div>
        <div className=" mt-10">
          <div className="flex gap-4 flex-wrap w-full ">
            {data?.map((item) => {
              return (
                <PostCard
                  CustomclassName="!w-[30%]"
                  key={item.id}
                  id={item.id}
                  status={item.status}
                  title={item.title}
                  para={item.para}
                  handleItemClick={handleItemClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storyideas;
