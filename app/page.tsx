"use client";

import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import { Bell,Search } from "lucide-react";
import DashboardPages from "./components/dashboard/dashboardPages";
import { useInvestor } from "./hooks/profile/useInvestor";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
   const {data, error} = useInvestor()
   const currentYear = new Date().getFullYear();
  //  console.log('investors:', data);
  return (
    <div className="w-full h-full  min-h-screen ">
      <div className=" relative w-full h-screen flex bg-[#F2F3F9]">
        <div
          className={` ${
            isOpen ? "left-0" : " -left-full"
          } lg:left-0 transition-all duration-500 ease-in-out fixed top-0 lg:relative h-full  z-[100]  lg:flex lg:w-2/5 xl:w-1/5  `}
        >
          <Sidebar
            setIsOpen={setIsOpen}
          />
        </div>

        <div className="flex flex-col w-full p-3 gap-3">
                {/* Search */}
      <div className="w-full h-[60px] bg-white border rounded-[10px] flex  items-center justify-between p-3 md:p-5 gap-10 ">
        <div className="flex items-center justify-center gap-5 w-full">
          <Search className="text-color2" />
          <input
            type="text"
            placeholder="Browse companies and investors..."
            className=" text-color1 placeholder:text-color2 border-none outline-none w-full p-2"
          />
        </div>

        <div className=" relative cursor-pointer">
          <span className=" text-center left-2 -top-3 text-sm leading-sm absolute bg-red-500 rounded-full text-white w-[20px] h-[20px]">
            {" "}
            3
          </span>
          <Bell />
        </div>
    
      </div>
      {<DashboardPages />}
      <div className="w-full ">
      <div className="w-full h-[30px] flex items-center justify-center gap-2 ">
        <p className="text-sm leading-sm text-color2">
          COPYRIGHT © {currentYear}
        </p>
        <p className="font-semibold text-primaryColor"> Angels Radar</p>
      </div>
    </div>
        </div>
         
      </div>
    </div>
  );
}
