import React from "react";
import Checkbox from "./Checkbox";
const StoryCard = ({
  id,
  status,
  title,
  para,
  handleItemClick,
  CustomclassName,
}) => {
  return (
    <>
      <div
        className={`${
          CustomclassName ? CustomclassName : ""
        }  w-[32%] h-[232px]  p-5 flex justify-center flex-col items-center cursor-pointer bg-white`}
        onClick={() => handleItemClick(id)}
      >
        <div className="flex justify-between mb-4 w-full ">
          <button className="w-[80px] h-[25px] flex items-center justify-center text-white bg-deep-brownish py-[5px] px-[8px] rounded-full">
            Insight
          </button>

          <Checkbox status={status} />
        </div>
        <div>
          <p className="text-[20px] font-PlusJakartaSans font-semibold leading-[25.2px] mb-2 tracking-wide">
            {title}
          </p>
          <p className="font-PlusJakartaSans text-[12px] font-normal text-lite-gray">
            {para}
          </p>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
