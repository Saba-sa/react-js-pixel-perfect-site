import React, { useEffect, useState } from "react";
import Search from "../component/Search";
import Searchcions from "../asset/search icon/search.svg";
import Austin from "../asset/images/Austin.png";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostCard from "../component/PostCard";
import data from "../data/Storyidea.json";
import StoryCard from "../component/StoryCard";
import Sidebar from "../component/Sidebar";
import Picwithtext from "../component/Picwithtext";
import Openccallender from "../component/Openccallender";

const Homepage = () => {
  const [data1, setdata1] = useState([...data]);
  const [data2, setdata2] = useState([...data]);
  useEffect(() => {
    const temp = data1.slice(0, 4);
    const temp2 = data2.slice(0, 3);
    setdata1(temp);
    setdata2(temp2);
  }, []);

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
              textBeforeSPan="Hi Austin, "
              span="Sunny"
              textAfterSpan="fweek
in texas right!"
              textBelowHeading="What are we posting this week?"
            />
            <Openccallender />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center pr-8 my-8 w-full">
              <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
                Todays Posts
              </p>
              <p className="block font-semibold text-base leading-5 text-green cursor-pointer  pb-4 px-8">
                View More{" "}
              </p>
            </div>
            <div className="flex gap-5 flex-wrap w-full  justify-between">
              {data1?.map((item) => {
                return (
                  <PostCard
                    key={item.id}
                    id={item.id}
                    status={item.status}
                    title={item.title}
                    para={item.para}
                    // handleItemClick={handleItemClick}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center pr-8 my-8 w-full">
            <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
              Story Idea
            </p>
            <p className="block font-semibold text-base leading-5 text-green cursor-pointer  pb-4 px-8">
              View More{" "}
            </p>
          </div>
          <div className="flex gap-5 flex-wrap w-full  justify-between">
            {data2?.map((item) => {
              return (
                <StoryCard
                  key={item.id}
                  id={item.id}
                  status={item.status}
                  title={item.title}
                  para={item.para}
                  // handleItemClick={handleItemClick}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
