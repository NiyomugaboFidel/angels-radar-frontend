'use client'

import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import CompanyCard from "./components/common/CompanyCard";


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
  return (
    <div className="w-full h-full  min-h-screen ">
      <div className="w-full h-full flex items-center bg-[#F2F3F9]">
        <div className=" min-h-screen hidden lg:flex lg:w-1/5 h-full ">
          <Sidebar isActive={isActive} setIsActive={setIsActive} />
        </div>
        <div className="bg-[#F2F3F9] min-h-screen hidden lg:flex lg:w-4/5 h-full p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {companies.map((company, index) => (
        <CompanyCard key={index} {...company} />
      ))}
    </div>
        </div>
      </div>
    </div>
  );
}
