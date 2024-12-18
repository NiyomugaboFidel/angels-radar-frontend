'use client'
import { Bell, Search } from "lucide-react";
import { useState } from "react";
import { companies } from "./Watchlist";
import CompanyCard from "../common/CompanyCard";
import Link from "next/link";

const Radar = () => {
    const [isOpen, setIsOpen] = useState(false);
      const currentYear = new Date().getFullYear();
  return (
    <div className="lg:w-5/6  h-full flex  flex-col gap-1">
    <div className="w-full p-2 pb-0">
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
    </div>
    <div className="p-2 h-full">
      <div className=" w-full bg-white h-[75vh]  overflow-auto rounded-[10px] shadow border p-5 ">
        <div className="  grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 ">
          {companies.map((company, index) => (
           <Link href={`/company/profile/${company.companyName}`} key={index}  >
                <CompanyCard  {...company} />
          </Link>
          ))}
        </div>
      </div>
    </div>
    <div className="w-full ">
      <div className="w-full h-[30px] flex items-center justify-center gap-2 ">
        <p className="text-sm leading-sm text-color2">
          COPYRIGHT © {currentYear}
        </p>
        <p className="font-semibold text-primaryColor"> Angels Radar</p>
      </div>
    </div>
  </div>
  )
}

export default Radar