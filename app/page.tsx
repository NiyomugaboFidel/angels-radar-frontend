"use client";

import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import { Bell, Search, Menu } from "lucide-react";
import DashboardPages from "./components/dashboard/dashboardPages";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full h-full min-h-screen">
      <div className="relative w-full h-screen flex bg-[#F2F3F9]">
        {/* Sidebar */}
        <div
          className={`${
            isOpen ? "left-0" : "-left-full"
          } lg:left-0 fixed lg:relative top-0 h-full transition-all duration-500 ease-in-out z-[100] lg:flex lg:w-2/5 xl:w-1/5 bg-white`}
        >
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* Overlay for Small Screens */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[90] lg:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <div className="flex flex-col w-full p-3 gap-3">
          {/* Header */}
          <div className="flex items-center justify-between w-full h-[60px] bg-white border rounded-[10px] p-3 md:p-5 gap-10">
            {/* Menu Icon for Sidebar */}
            <Menu
              className="lg:hidden text-color1 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />

            {/* Search Bar */}
            <div className="flex items-center gap-5 w-full">
              <Search className="text-color2" />
              <input
                type="text"
                placeholder="Browse companies and investors..."
                className="w-full p-2 text-color1 placeholder:text-color2 border-none outline-none"
              />
            </div>

            {/* Notification Icon */}
            <div className="relative cursor-pointer">
              <span className="absolute left-2 -top-3 w-[20px] h-[20px] text-sm leading-sm text-center text-white bg-red-500 rounded-full">
                3
              </span>
              <Bell />
            </div>
          </div>

          {/* Dashboard Pages */}
          <DashboardPages />

          {/* Footer */}
          <div className="w-full">
            <div className="flex items-center justify-center w-full h-[30px] gap-2">
              <p className="text-sm text-color2">COPYRIGHT © {currentYear}</p>
              <p className="font-semibold text-primaryColor">Angels Radar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
