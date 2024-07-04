import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Search from "../../component/Search";
import StoryCard from "../../component/StoryCard";
import { useNavigate, useParams } from "react-router";
import data from "../../data/Storyidea.json";
import heart from "../../asset/icons/heart.svg";
import tickarrow from "../../asset/icons/tickarrow.svg";
import PostCard from "../../component/PostCard";

const Storysingleideas = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [wholedata, setWholeData] = useState(data);
  useEffect(() => {
    const dataFourOnly = data
      ?.filter((item) => item.id !== parseInt(id))
      .slice(0, 4);
    setWholeData([...dataFourOnly]);
  }, [id]);
  const handleItemClick = (id) => {
    navigate(`/storytemplates/${id}`);
  };
  return (
    <div className="flex gap-x-[80px]  bg-bg-grey      ">
      <Sidebar />
      <div className=" flex flex-col  w-full px-8 ">
        <div className="flex pt-4 justify-between flex-col">
          <div className="flex justify-end mb-4">
            <Search SearchClass={`mx-auto`} />
          </div>
        </div>
        <div className="flex flex-col  h-[100vh]">
          <div className="flex items-center justify-between">
            <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
              This or That: Valentine's Day
            </p>
            <div className="flex items-center gap-4">
              <img src={tickarrow} alt="alt" className="border border-1 p-2" />
              <img src={heart} alt="alt" className="border border-1 p-2" />
              <button className="py-2 px-4 bg-green text-white">
                Open In Canva
              </button>
            </div>
          </div>
          <div className="flex gap-8 mt-8">
            <div className="w-[65%]">
              <div className=" h-[65%] grid grid-cols-4 grid-rows-3 gap-2 overflow-hidden ">
                <div className="col-span-3 row-span-3 relative">
                  <img
                    src="https://images.unsplash.com/photo-1719952167449-33940005b007?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="1"
                    className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                  />
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1719370281932-299f40a5d8ee?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="2"
                    className="w-full h-full object-cover  rounded-[20px]"
                  />
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1693057205719-e439be478b33?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="3"
                    className="w-full h-full object-cover  rounded-[20px]"
                  />
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1698190457854-e507c7427595?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="4"
                    className="w-full h-full object-cover  rounded-[20px]"
                  />
                </div>
              </div>
            </div>
            <div className="w-[33%] bg-white h-fit p-8">
              <div className="flex flex-col  mb-2">
                <p className="font-messiri font-normal text-xl leading-9 text-sky-off mb-4">
                  Content Type:
                </p>
                <button className="py-2 px-4 bg-green text-white w-[60%] rounded">
                  Story Set
                </button>
              </div>

              <div className="flex flex-col  mb-2">
                <p className="font-messiri font-normal text-xl leading-9 text-sky-off mb-4">
                  Content Pillars:
                </p>
                <button className="py-2 px-4 bg-green-light text-white w-[60%] rounded">
                  Local
                </button>
              </div>

              <div className="flex flex-col  ">
                <p className="font-messiri font-normal text-xl leading-9 text-sky-off mb-4">
                  Add Captions
                </p>
                <textarea
                  rows={10}
                  className="w-[95%] border bg-bg-grey rounded-[5%]"
                ></textarea>
              </div>
              <button className="w-[60%] bg-bg-grey py-2 px-4 border rounded mt-2">
                Copy Text
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center pr-8 ">
            <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
              More Story Ideas
            </p>
            <span className="block font-semibold text-base leading-5 text-green cursor-pointer">
              View More
            </span>
          </div>
          <div className="flex gap-4 flex-wrap w-full ">
            {wholedata?.map((item) => {
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

export default Storysingleideas;
