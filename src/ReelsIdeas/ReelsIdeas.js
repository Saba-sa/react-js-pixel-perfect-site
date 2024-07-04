import React from "react";
import StoryCard from "../component/StoryCard";
import Picwithtext from "../component/Picwithtext";
import Search from "../component/Search";
import Sidebar from "../component/Sidebar";
import Openccallender from "../component/Openccallender";
import data from "../data/Reelsdata.json";
import { useNavigate } from "react-router";
const ReelsIdeas = () => {
  const navigate = useNavigate();
  const handleItemClick = (id) => {
    navigate(`/reels/${id}`);
  };
  return (
    <div className="flex gap-x-[80px]  bg-[#F9FAF5]      ">
      <Sidebar />
      <div className=" flex flex-col  w-full px-8 ">
        <div className="flex pt-4 justify-between flex-col">
          <div className="flex justify-end mb-4">
            <Search SearchClass={`mx-auto`} />
          </div>
          <div className="flex justify-between  h-48 w-full ">
            <Picwithtext
              textBeforeSPan="Let’s create a "
              span="Script"
              textAfterSpan="for your next Reel"
              textBelowHeading=""
            />
            <Openccallender />
          </div>

          <div className="flex justify-between items-center pr-8 my-8 w-full">
            <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
              Reels Ideas
            </p>
            <div className="flex ">
              <p className="block font-semibold text-base leading-5 text-green cursor-pointer  border-b-4 border-b-green pb-4 px-8">
                Lead generators
              </p>
              <p className="block font-semibold text-base leading-5 text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8">
                Engagement
              </p>
              <p className="block font-semibold text-base leading-5 text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8">
                Local
              </p>
              <p className="block font-semibold text-base leading-5 text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8">
                Add tags here
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap w-full  justify-between">
          {data?.map((item) => {
            return (
              <StoryCard
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
  );
};

export default ReelsIdeas;
