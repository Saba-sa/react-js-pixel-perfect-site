import React from "react";

const Openccallender = () => {
  return (
    <div className="w-30%] bg-[#FFFFFF] shadow pt-2.5 pb-2 pr-7 pl-3 rounded-[10px] ">
      <div className="h-11 rounded-md bg-deep-brownish flex justify-center items-center gap-2">
        <>
          <svg
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.3623 2V5"
              stroke="white"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.7236 2V5"
              stroke="white"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.6582 9.09009H21.4274"
              stroke="white"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.9502 8.5V17C21.9502 20 20.3824 22 16.724 22H8.36199C4.70362 22 3.13574 20 3.13574 17V8.5C3.13574 5.5 4.70362 3.5 8.36199 3.5H16.724C20.3824 3.5 21.9502 5.5 21.9502 8.5Z"
              stroke="white"
              strokeWidth={1.5}
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5384 13.7H12.5478"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66923 13.7H8.67862"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66923 16.7H8.67862"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </>

        <p className="font-medium text-xs leading-4 font-PlusJakartaSans text-white py-[10px] px-[21px]">
          Open Content Calendar
        </p>
      </div>
      <hr className=" text-wheat-lite w-[206px] mx-auto mt-2" />

      <div className="flex justify-between items-center">
        <p className="font-light text-[39px] font-Montserrat leading-[96px] text-sky-off">
          06
        </p>
        <div>
          <p className="font-bold text-[11px] leading-3 font-Montserrat text-sky-off text-end">
            10:25pm <br />
            Wednesday
          </p>
          <p className="font-light text-lg leading-7 font-poppin">
            June / 2023
          </p>
        </div>
      </div>
    </div>
  );
};

export default Openccallender;
