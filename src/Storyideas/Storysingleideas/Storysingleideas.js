import React, { useEffect, useState } from "react";
import Sidebar from "../../component/Sidebar";
import Search from "../../component/Search";
import StoryCard from "../../component/StoryCard";
import { useNavigate, useParams } from "react-router";
import data from "../../data/Storyidea.json";
const Storysingleideas = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataItem, setDataItem] = useState([]);
  const [wholedata, setWholeData] = useState(data);
  useEffect(() => {
    const temp = data?.filter((item) => item.id === parseInt(id));
    setDataItem(temp);
    const temp2 = data?.filter((item) => item.id !== parseInt(id)).slice(0, 6);
    setWholeData([...temp2]);
  }, [id]);
  const handleItemClick = (id) => {
    navigate(`/Storyideas/${id}`);
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
        <div className="flex flex-col">
          <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
            Story Ideas
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
                  More Story Ideas
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

export default Storysingleideas;
