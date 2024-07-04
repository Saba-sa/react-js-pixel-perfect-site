import React from "react";
import Search from "../component/Search";
import Searchcions from "../asset/search icon/search.svg";
import Austin from "../asset/images/Austin.png";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostCard from "../component/PostCard";
import StoryCard from "../component/StoryCard";
import Sidebar from "../component/Sidebar";
const Homepage = () => {
  return (
    // <>
    //   <div className="px-[34px]">

    //     <div className="flex pt-[32px] justify-between">
    //       <div></div>
    //       <Search SearchClass={`mx-auto`} Searchcions={Searchcions} />
    //     </div>

    //     <div>
    //       <div className="bg-deep-green flex">
    //         <div className="w-[146px] h-[146px]">
    //           <img src={Austin} alt="Austin" />
    //         </div>
    //         <div >
    //           <h2 className=" text-white font-PlusJakartaSans">
    //             Hi Austin, <span className="text-green-light">Sunny</span> week{" "}
    //             <br /> in texas right!
    //           </h2>
    //           <p className=" text-white font-PlusJakartaSans">
    //             What are we posting this week?
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </>
    <div className="flex gap-20">
      <Sidebar />
      <div className="flex flex-col">
        <div className="flex pt-8 justify-between flex-col">
          <div className="flex justify-between mb-6">
            <div></div>
            <Search SearchClass={`mx-auto`} Searchcions={Searchcions} />
          </div>

          <div className="flex gap-3 h-44">
            <div className="w-[794px] bg-deep-green rounded-[10px] flex justify-around items-center">
              <div>
                <img src={Austin} alt="Austin" />
              </div>
              <div>
                <h2 className="font-semibold text-3xl leading-7 text-white font-PlusJakartaSans">
                  Hi Austin, <span className="text-green-light">Sunny</span>{" "}
                  week <br /> in texas right!
                </h2>
                <p className="font-normal text-sm text-white font-PlusJakartaSans pt-2.5">
                  What are we posting this week?
                </p>
              </div>
            </div>

            <div className="bg-[#FFFFFF] shadow pt-2.5 pb-2 pr-7 pl-3 rounded-[10px]">
              <div className="h-11 rounded-md bg-deep-brownish flex justify-center items-center gap-2">
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="text-white w-[25px] h-[24px]"
                />
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
          </div>

          <div className="flex justify-between items-center pr-8 mt-6">
            <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
              Todays Posts
            </p>
            <span className="block font-semibold text-base leading-5 text-green">
              View More
            </span>
          </div>
        </div>
        <div className="flex gap-5">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <div>
          <div className="flex justify-between items-center pr-8 mt-6 mb-4">
            <p className="font-messiri font-normal text-2xl leading-9 text-sky-off">
              Story Idea
            </p>
            <span className="block font-semibold text-base leading-5 text-green">
              View More
            </span>
          </div>
          <div className="flex gap-5">
            <StoryCard />
            <StoryCard />
            <StoryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
