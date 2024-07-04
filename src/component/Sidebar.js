import React from "react";
import { Link, NavLink } from "react-router-dom";
import Borderbottom from "./Borderbottom";

const Sidebar = () => {
  return (
    <div className="w-[261px] bg-green text-white rounded-[50%]  ">
      <aside
        className="container mx-auto flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-green  fixed-start loopple-fixed-start scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-track-deep-green scrollbar-thumb-dark-green overflow-y-scroll  h-[100vh]"
        id="sidenav-main"
      >
        <div className="flex items-center justify-between mt-[30px] mb-4">
          <div className="flex items-center mr-5 px-8 py-5">
            <div className="inline-block relative shrink-0 cursor-pointer mr-2">
              <img
                className="w-[40px] shrink-0 inline-block "
                src={require("../asset/logo/Frame.png")}
                alt="logo"
              />
            </div>
            <div className="mr-2 ">
              <Link
                to={"/"}
                className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out dark:text-neutral-400/90 text-secondary-inverse font-semibold
text-[20px] leading-[22.68px]"
              >
                Kyndom
              </Link>
            </div>
          </div>
          <div className="bg-[#065038] rounded-tl-3xl rounded-bl-3xl w-[44px] h-[32px] flex justify-center items-center">
            <Link
              to={"/"}
              className="cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out "
            >
              <img
                src={require("../asset/images/Frame 1.png")}
                alt="arrow icon"
                className=" w-[16px] h-[16px] "
              />
            </Link>
          </div>
        </div>
        <Borderbottom />

        <div className="relative flex flex-col  items-center font-medium w-full my-5 ">
          <div className=" w-full  ">
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M12 18V15"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.0693 2.82009L3.13929 8.37009C2.35929 8.99009 1.85929 10.3001 2.02929 11.2801L3.35929 19.2401C3.59929 20.6601 4.95929 21.8101 6.39929 21.8101H17.5993C19.0293 21.8101 20.3993 20.6501 20.6393 19.2401L21.9693 11.2801C22.1293 10.3001 21.6293 8.99009 20.8593 8.37009L13.9293 2.83009C12.8593 1.97009 11.1293 1.97009 10.0693 2.82009Z"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Dashboard
                    </span>
                  </>
                )}
              </NavLink>
            </span>
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/ContentCalendar"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M8 2V5"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 2V5"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.5 9.09009H20.5"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9945 13.7H12.0035"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.29529 13.7H8.30427"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.29529 16.7H8.30427"
                        stroke="white"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Content Calendar
                    </span>
                  </>
                )}
              </NavLink>
            </span>
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/Contentvault"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M13.8095 15.7299L10.2695 12.1899"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.7705 12.23L10.2305 15.77"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 11V17C22 21 21 22 17 22H7C3 22 2 21 2 17V7C2 3 3 2 7 2H8.5C10 2 10.33 2.44 10.9 3.2L12.4 5.2C12.78 5.7 13 6 14 6H17C21 6 22 7 22 11Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                      />
                    </svg>
                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Content vault
                    </span>
                  </>
                )}
              </NavLink>
            </span>
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/Favorites"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M11.62 18.8101C11.28 18.9301 10.72 18.9301 10.38 18.8101C7.48 17.8201 1 13.6901 1 6.6901C1 3.6001 3.49 1.1001 6.56 1.1001C8.38 1.1001 9.99 1.9801 11 3.3401C12.01 1.9801 13.63 1.1001 15.44 1.1001C18.51 1.1001 21 3.6001 21 6.6901C21 13.6901 14.52 17.8201 11.62 18.8101Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Favorites
                    </span>
                  </>
                )}
              </NavLink>
            </span>
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/UsedContent"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M7.48047 18.35L10.5805 20.75C10.9805 21.15 11.8805 21.35 12.4805 21.35H16.2805C17.4805 21.35 18.7805 20.45 19.0805 19.25L21.4805 11.95C21.9805 10.55 21.0805 9.34997 19.5805 9.34997H15.5805C14.9805 9.34997 14.4805 8.84997 14.5805 8.14997L15.0805 4.94997C15.2805 4.04997 14.6805 3.04997 13.7805 2.74997C12.9805 2.44997 11.9805 2.84997 11.5805 3.44997L7.48047 9.54997"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M2.38086 18.3499V8.5499C2.38086 7.1499 2.98086 6.6499 4.38086 6.6499H5.38086C6.78086 6.6499 7.38086 7.1499 7.38086 8.5499V18.3499C7.38086 19.7499 6.78086 20.2499 5.38086 20.2499H4.38086C2.98086 20.2499 2.38086 19.7499 2.38086 18.3499Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Used Content
                    </span>
                  </>
                )}
              </NavLink>
            </span>
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/UsedContent"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Setting
                    </span>
                  </>
                )}
              </NavLink>
            </span>

            <div>
              <span className="select-none flex items-center px-4 py-2 cursor-pointer my-[.4rem] rounded-[.95rem]"></span>
            </div>
          </div>
        </div>
        <Borderbottom />
        <div className="flex flex-col  items-center font-medium w-full my-5 ">
          <div className=" w-full  ">
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/SocialMedia"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 8.25C8 9.25 9.63 9.25 10.64 8.25"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.3594 8.25C14.3594 9.25 15.9894 9.25 16.9994 8.25"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.4 13H15.6C16.1 13 16.5 13.4 16.5 13.9C16.5 16.39 14.49 18.4 12 18.4C9.51 18.4 7.5 16.39 7.5 13.9C7.5 13.4 7.9 13 8.4 13Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Social Media
                    </span>
                  </>
                )}
              </NavLink>
            </span>
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/reels"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="18"
                      height="22"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M17 6V16C17 20 16 21 12 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H12C16 1 17 2 17 6Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 4.5H7"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.99922 18.1C9.85526 18.1 10.5492 17.406 10.5492 16.55C10.5492 15.694 9.85526 15 8.99922 15C8.14318 15 7.44922 15.694 7.44922 16.55C7.44922 17.406 8.14318 18.1 8.99922 18.1Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Reels Ideas
                    </span>
                  </>
                )}
              </NavLink>
            </span>
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/Storyideas"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.30001C8.46018 6.45001 8.70018 5.71001 9.00018 5.10001C10.1702 2.68001 12.1602 2.03001 15.5002 2.82001L17.1702 3.21001C21.3602 4.19001 22.6402 6.26001 21.6602 10.44Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.0603 19.3901C14.4403 19.8101 13.6603 20.1601 12.7103 20.4701L11.1303 20.9901C7.16034 22.2701 5.07034 21.2001 3.78034 17.2301L2.50034 13.2801C1.22034 9.3101 2.28034 7.2101 6.25034 5.9301L7.83034 5.4101C8.24034 5.2801 8.63034 5.1701 9.00034 5.1001C8.70034 5.7101 8.46034 6.4501 8.26034 7.3001L7.28034 11.4901C6.30034 15.6701 7.59034 17.7301 11.7603 18.7201L13.4403 19.1201C14.0203 19.2601 14.5603 19.3501 15.0603 19.3901Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.6406 8.53003L17.4906 9.76003"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.6602 12.3999L14.5602 13.1399"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Story Ideas
                    </span>
                  </>
                )}
              </NavLink>
            </span>
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/storytemplates"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
                        stroke="white"
                        strokewidth="{1.5}"
                        strokelinecap="round"
                        strokelinejoin="round"
                      />
                      <path
                        d="M16.0399 3.02001L8.15988 10.9C7.85988 11.2 7.55988 11.79 7.49988 12.22L7.06988 15.23C6.90988 16.32 7.67988 17.08 8.76988 16.93L11.7799 16.5C12.1999 16.44 12.7899 16.14 13.0999 15.84L20.9799 7.96001C22.3399 6.60001 22.9799 5.02001 20.9799 3.02001C18.9799 1.02001 17.3999 1.66001 16.0399 3.02001Z"
                        stroke="white"
                        strokewidth="{1.5}"
                        strokemiterlimit="{10}"
                        strokelinecap="round"
                        strokelinejoin="round"
                      />
                      <path
                        d="M14.9102 4.1499C15.5802 6.5399 17.4502 8.4099 19.8502 9.0899"
                        stroke="white"
                        strokewidth="{1.5}"
                        strokemiterlimit="{10}"
                        strokelinecap="round"
                        strokelinejoin="round"
                      />
                    </svg>

                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Story Template
                    </span>
                  </>
                )}
              </NavLink>
            </span>
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/SocialMedia"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M7.25 7H16.75V5C16.75 3 16 2 13.75 2H10.25C8 2 7.25 3 7.25 5V7Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 15V19C16 21 15 22 13 22H11C9 22 8 21 8 19V15H16Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 10V15C21 17 20 18 18 18H16V15H8V18H6C4 18 3 17 3 15V10C3 8 4 7 6 7H18C20 7 21 8 21 10Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17 15H15.79H7"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 11H10"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Printable
                    </span>
                  </>
                )}
              </NavLink>
            </span>
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/SocialMedia"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                        stroke="white"
                        strokewidth="{1.5}"
                        strokemiterlimit="{10}"
                        strokelinecap="round"
                        strokelinejoin="round"
                      />
                      <path
                        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                        stroke="white"
                        strokewidth="{1.5}"
                        strokemiterlimit="{10}"
                        strokelinecap="round"
                        strokelinejoin="round"
                      />
                    </svg>

                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Email/Text Marketing{" "}
                    </span>
                  </>
                )}
              </NavLink>
            </span>
            <span className="select-none flex items-center py-2 cursor-pointer my-[.4rem] rounded-[.95rem] ">
              <NavLink
                to="/branding"
                className="flex items-center flex-grow gap-2  text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark py-2 font-medium px-4"
                style={({ isActive }) => {
                  return isActive
                    ? { background: "white", color: "green" }
                    : {};
                }}
              >
                {({ isActive }) => (
                  <>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ stroke: isActive ? "green" : "white" }}
                    >
                      <path
                        d="M12 15C15.7279 15 18.75 12.0899 18.75 8.5C18.75 4.91015 15.7279 2 12 2C8.27208 2 5.25 4.91015 5.25 8.5C5.25 12.0899 8.27208 15 12 15Z"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.51974 13.5201L7.50977 20.9001C7.50977 21.8001 8.13977 22.2401 8.91977 21.8701L11.5998 20.6001C11.8198 20.4901 12.1898 20.4901 12.4098 20.6001L15.0998 21.8701C15.8698 22.2301 16.5098 21.8001 16.5098 20.9001V13.3401"
                        stroke="white"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span style={{ color: isActive ? "green" : "inherit" }}>
                      Branding
                    </span>
                  </>
                )}
              </NavLink>
            </span>

            <div className="mt-28 px-6">
              <div className="flex item-center gap-2">
                <div className="flex items-center justify-center border border-white rounded-full w-12 cursor-pointer">
                  <img
                    src={require("../asset/navIcons/Ellipse 3.png")}
                    alt="user "
                  />
                </div>
                <div className="flex flex-col">
                  <span>Hello,</span>
                  <span className="cursor-pointer font-bold">John Dewol</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
