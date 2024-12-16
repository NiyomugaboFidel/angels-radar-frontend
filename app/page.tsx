'use client'


import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import CompanyCard from "./components/common/CompanyCard";
import { Menu } from "lucide-react";


const companies = [
  {
    logo: "/logo.svg",
    companyName: "@Incpedia",
    tagline: "The Internet classroom - pedia LTD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Technology", "Real estate", "Fashion"],
    valuation: "$1,000,000",
    stage: "Idea Stage",
    investmentType: "Equity",
    growthRate: "130%+",
    mrr: "$6,000",
    fundingRequired: "$500,000",
  },
  {
    logo: "/logo.svg",
    companyName: "@Incpedia",
    tagline: "The Internet classroom - pedia LTD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Technology", "Real estate", "Fashion"],
    valuation: "$1,000,000",
    stage: "Idea Stage",
    investmentType: "Equity",
    growthRate: "130%+",
    mrr: "$6,000",
    fundingRequired: "$500,000",
  },
  {
    logo: "/logo.svg",
    companyName: "@Incpedia",
    tagline: "The Internet classroom - pedia LTD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["Technology", "Real estate", "Fashion"],
    valuation: "$1,000,000",
    stage: "Idea Stage",
    investmentType: "Equity",
    growthRate: "130%+",
    mrr: "$6,000",
    fundingRequired: "$500,000",
  },
  // Add more companies here
];

export default function Home() {
  const [isActive, setIsActive] = useState("watchlist")
  const [isOpen , setIsOpen] = useState(true);

  return (
    <div className="w-full h-full  min-h-screen ">
        <div className="w-full flex justify-between items-center px-5 py-3 lg:px-0 lg:py-0">
        <button className="lg:hidden p-2 bg-[#c3dcf3af] rounded-full" onClick={()=> setIsOpen(true)}>
          <Menu className="text-primaryColor" />
        </button>
        </div>
      <div className=" relative w-full h-full flex items-center bg-[#F2F3F9]">

        <div className={` ${isOpen ? 'left-0':' -left-full'} transition-all duration-500 ease-in-out fixed top-0 lg:relative h-screen  z-[100]  lg:flex lg:w-1/5  `}>
          <Sidebar setIsOpen={setIsOpen}  isActive={isActive} setIsActive={setIsActive} />
        </div>
        <div className="bg-[#F2F3F9] items-start justify-start  flex w-full h-full p-5">
        <div className="grid grid-cols-1 h-full sm:grid-cols-2 xl:grid-cols-3 gap-2">
      {companies.map((company, index) => (
        <CompanyCard key={index} {...company} />
      ))}
    </div>
        </div>
      </div>
    </div>
  );
}
