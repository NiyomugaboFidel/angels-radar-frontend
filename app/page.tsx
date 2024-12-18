"use client";

import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import { Menu } from "lucide-react";
import DashboardPages from "./components/dashboard/dashboardPages";
import { useInvestor } from "./hooks/profile/useInvestor";

export default function Home() {
  const [isActive, setIsActive] = useState("watchlist");
  const [isOpen, setIsOpen] = useState(false);
   const {data, error} = useInvestor()
   console.log('investors:', data);
  return (
    <div className="w-full h-full  min-h-screen ">
      <div className=" relative w-full h-screen flex bg-[#F2F3F9]">
        <div
          className={` ${
            isOpen ? "left-0" : " -left-full"
          } lg:left-0 transition-all duration-500 ease-in-out fixed top-0 lg:relative h-full  z-[100]  lg:flex lg:w-1/5  `}
        >
          <Sidebar
            setIsOpen={setIsOpen}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        </div>

        {<DashboardPages page={isActive} />}
      </div>
    </div>
  );
}
