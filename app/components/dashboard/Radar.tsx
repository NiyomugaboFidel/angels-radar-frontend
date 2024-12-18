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
    <div className="w-full  h-full flex  flex-col gap-1">
    <div className="h-full">
      <div className=" w-full bg-white h-[75vh]  overflow-auto rounded-[10px] shadow border p-5 ">
        <div className="  grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 ">
          {companies.map((company, index) => (
          <Link href={`/?section=company&type=radar&profile=${company.companyName}`} key={index}  >
                <CompanyCard  {...company} />
          </Link>
          ))}
        </div>
      </div>
    </div>

  </div>
  )
}

export default Radar