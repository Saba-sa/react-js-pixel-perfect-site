import React from "react";
import heart from "../asset/icons/heart.svg";
import crossarrow from "../asset/icons/crossarrow.svg";
import tickarrow from "../asset/icons/tickarrow.svg";
import img from "../asset/images/cardimg.png";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
const PostCard = ({ id, icon, status, title, para, handleItemClick }) => {
  return (
    <div className="" onClick={() => handleItemClick(id)}>
      <div className="">
        <div className="flex justify-end items-center relative right-2.5 top-9 gap-[3px]">
          <p
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.67) 0%, rgba(255, 255, 255, 0.49) 99.99%, rgba(255, 255, 255, 0) 100%)",
            }}
            className="flex justify-center items-center w-7 h-[26px] rounded-[3px]"
          >
            <img src={tickarrow} alt="alt" className="" />
          </p>
          <p className="LinearGradient flex justify-center items-center w-7 h-[26px] rounded-[3px]">
            <img src={crossarrow} alt="alt" className="" />
          </p>
          <p
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.67) 0%, rgba(255, 255, 255, 0.49) 99.99%, rgba(255, 255, 255, 0) 100%)",
            }}
            className="flex justify-center items-center w-7 h-[26px] rounded-[3px]"
          >
            <img src={heart} alt="alt" className="" />
          </p>
        </div>
        <img src={img} alt="alt" />
        <div
          className="flex justify-center mx-auto flex-col items-center mb-4 bg-white pb-4"
          style={{ boxShadow: "0px 4px 22px 0px #00000026" }}
        >
          <p className="pt-2.5 mr-14 pb-4 text-start font-messiri font-normal text-[13px] leading-5 text-sky-off">
            This or That: Valentine's Day
          </p>

          <div
            className={`h-[42px] w-[261px] rounded-[5px] ${
              icon ? "bg-green" : " bg-deep-brownish"
            } flex justify-center items-center gap-[6px]`}
          >
            <FontAwesomeIcon
              icon={faEdit}
              className="text-white w-[14px] h-[14px]"
            />
            <p className=" font-semibold text-[11px] leading-3 font-PlusJakartaSans text-white">
              Local
            </p>
          </div>
          <div
            className={`h-[42px] w-[261px] rounded-[5px] ${
              icon ? " bg-deep-brownish" : "bg-green"
            } flex justify-center items-center gap-[6px] mt-3`}
          >
            <p className="font-semibold text-[11px] leading-3 font-PlusJakartaSans text-white">
              Story Set
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
