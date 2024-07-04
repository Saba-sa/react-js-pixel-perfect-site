import React from "react";
import Responsivesidebar from "../../component/Responsivesidebar";
import Texteditor from "../../editor/Texteditor";
const Branding = () => {
  return (
    <div className="flex gap-x-[80px]  bg-bg-grey      ">
      <Responsivesidebar />
      <div className=" flex flex-col  w-full ">
        <div className="flex p-4 items-center justify-between bg-deep-green text-white">
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-white text-green rounded-full">
              Exit
            </button>
            <button className="px-4 py-2 bg-white text-green rounded-full">
              Save
            </button>
            <p className="text-lite-gray">Last saved on June 29,2021</p>
          </div>
          <div className="flex ">
            <>
              <svg
                width="26"
                height="26"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5265 3.32004C16.7183 6.49414 14.2334 10.9931 11.9687 13.3625L10.5875 14.8079C10.41 14.9752 10.2305 15.1268 10.0223 15.2423C10.0035 15.1011 9.97479 14.9452 9.93144 14.7992C9.75752 14.1515 9.37797 13.579 8.78231 13.123C8.17776 12.6603 7.4847 12.4329 6.80617 12.4352C6.64818 12.4482 6.48914 12.4534 6.33427 12.49C6.38827 12.2352 6.49144 11.9899 6.63121 11.7797L7.65003 10.071C9.33793 7.26716 13.0455 3.67585 15.8917 2.07578C16.3317 1.84161 16.7957 1.90774 17.1168 2.16056C17.4536 2.4113 17.6543 2.83985 17.5265 3.32004Z"
                  stroke="white"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.0228 15.2424C10.1375 16.1057 9.91737 16.9735 9.38082 17.6837C8.96572 18.226 8.35816 18.6421 7.59479 18.8474L5.69241 19.3158C4.65646 19.5732 3.63511 18.7985 3.61886 17.7145L3.57423 15.7558C3.53421 14.0122 4.82435 12.7227 6.34264 12.489C6.49855 12.4603 6.66439 12.4462 6.81454 12.4343C7.49306 12.432 8.18509 12.6515 8.79068 13.1221C9.38634 13.578 9.76589 14.1505 9.9398 14.7982C9.96746 14.9463 10.003 15.0933 10.0228 15.2424Z"
                  stroke="white"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6837 12.373C12.4115 10.3248 10.5268 8.88214 8.47852 9.1543"
                  stroke="white"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
            <p className="text-xl">Kyndom Editor</p>
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-white text-green rounded-full">
              Download
            </button>
            <button className="px-4 py-2 bg-green-light text-white text-green rounded-full">
              Schedule
            </button>
          </div>
        </div>
        <div className="flex p-4 items-center justify-between  ">
          <div className="flex items-center gap-2 font-semibold">
            <>
              <svg
                width="19"
                height="12"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 1V5H15.17L11.59 1.41L13 0L19 6L13 12L11.59 10.59L15.17 7H0V1H2Z"
                  fill="#009580"
                />
              </svg>
            </>
            <p className="text-green">Run a test</p>
          </div>
          <div className="flex gap-8 ">
            <p className="font-semibold">Content </p>
            <p className="font-semibold ">Setting</p>
            <p className="font-semibold ">Optimization</p>
            <p className="font-semibold ">Schedule</p>
          </div>
          <button className="border-2 border-red-100 px-4 py-2 rounded-full">
            Preview
          </button>
        </div>
        <div className="flex p-4 items-center justify-between">
          <Texteditor />
        </div>
        <div className="flex p-4 items-center justify-between"></div>
      </div>
    </div>
  );
};

export default Branding;
