import React, { useEffect, useState } from "react";
import StoryCard from "../../component/StoryCard";
import Search from "../../component/Search";
import Sidebar from "../../component/Sidebar";
import data from "../../data/Reelsdata.json";
import { useNavigate, useParams } from "react-router";
const ReelSingleIdea = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataItem, setDataItem] = useState([]);
  const [wholedata, setWholeData] = useState(data);
  const [selectedDay, setSelectedDay] = useState("MONDAY");
  useEffect(() => {
    const temp = data?.filter((item) => item.id === parseInt(id));
    setDataItem(temp);
    const temp2 = data?.filter((item) => item.id !== parseInt(id)).slice(0, 6);
    setWholeData([...temp2]);
  }, [id]);

  const handlechangeDay = (day) => {
    setSelectedDay(day);
  };
  const handleItemClick = (id) => {
    navigate(`/reels/${id}`);
  };
  return (
    <div className="flex gap-x-[80px]  bg-bg-grey      ">
      <Sidebar />
      <div className=" flex flex-col  w-full px-8 ">
        <div className="flex pt-4 justify-between flex-col">
          <div className="flex justify-end mb-4">
            <Search SearchClass={`mx-auto`} />
          </div>

          <div className="flex justify-between items-center pr-8 my-8 w-full">
            <div className="flex justify-between w-full ">
              <p
                className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8 w-full ${
                  selectedDay === "MONDAY" &&
                  "!text-green !border-b-green !border-b-4"
                }`}
                onClick={() => handlechangeDay("MONDAY")}
              >
                MONDAY
              </p>
              <p
                className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8 w-full ${
                  selectedDay === "TUESDAY" &&
                  "!text-green !border-b-green !border-b-4"
                }`}
                onClick={() => handlechangeDay("TUESDAY")}
              >
                TUESDAY
              </p>
              <p
                className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8 w-full ${
                  selectedDay === "WEDNESDAY" &&
                  "!text-green !border-b-green !border-b-4"
                }`}
                onClick={() => handlechangeDay("WEDNESDAY")}
              >
                WEDNESDAY
              </p>
              <p
                className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8 w-full ${
                  selectedDay === "THURSDAY" &&
                  "!text-green !border-b-green !border-b-4"
                }`}
                onClick={() => handlechangeDay("THURSDAY")}
              >
                THURSDAY
              </p>
              <p
                className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8 w-full ${
                  selectedDay === "FRIDAY" &&
                  "!text-green !border-b-green !border-b-4"
                }`}
                onClick={() => handlechangeDay("FRIDAY")}
              >
                FRIDAY
              </p>
              <p
                className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8 w-full ${
                  selectedDay === "SATURDAY" &&
                  "!text-green !border-b-green !border-b-4"
                }`}
                onClick={() => handlechangeDay("SATURDAY")}
              >
                SATURDAY
              </p>
              <p
                className={`block font-semibold text-base leading-5  text-lite-gray active:text-green cursor-pointer  border-b-2 border-b-lite-gray pb-4 px-8 w-full ${
                  selectedDay === "SUNDAY" &&
                  "!text-green !border-b-green !border-b-4"
                }`}
                onClick={() => handlechangeDay("SUNDAY")}
              >
                SUNDAY
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
            Reels Ideas
          </p>
          <div className="flex gap-8">
            <div className="w-[65%]">
              <div className="w-full mb-4 ">
                <StoryCard
                  CustomclassName="!w-full"
                  id={dataItem[0]?.id}
                  status={dataItem[0]?.status}
                  title={dataItem[0]?.title}
                  para={dataItem[0]?.para}
                />
              </div>
              <div className="flex justify-between items-center pr-8 mt-6 py-6">
                <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
                  More Reel Ideas
                </p>
                <span className="block font-semibold text-base leading-5 text-green cursor-pointer">
                  View More
                </span>
              </div>
              <div className="flex gap-8 flex-wrap w-full ">
                {wholedata?.map((item) => {
                  return (
                    <StoryCard
                      CustomclassName="!w-[47%]"
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
            <div className="w-[33%] bg-white h-fit p-8">
              <p className="font-messiri font-normal text-2xl leading-9 text-sky-off mb-4">
                Reel Tips
              </p>
              <ul className="list-disc">
                {dataItem[0]?.tips?.map((tip) => {
                  return <li className="mb-4 text-lite-gray">{tip}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReelSingleIdea;
