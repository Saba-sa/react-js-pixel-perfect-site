import React from "react";
import Sidebar from "../component/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="flex gap-16">
      <Sidebar />
      <div className="flex flex-col w-full pr-[30px] container">
        <main className="flex-grow p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
