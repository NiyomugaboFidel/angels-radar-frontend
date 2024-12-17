"use client";

import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import CompanyCard from "./components/common/CompanyCard";
import { Bell, Menu, Search } from "lucide-react";

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
  const [isActive, setIsActive] = useState("watchlist");
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full h-full  min-h-screen ">
      {/* <div className="w-full flex justify-between items-center px-5 py-3 lg:px-0 lg:py-0">
        <button className="lg:hidden p-2 bg-[#c3dcf3af] rounded-full" onClick={()=> setIsOpen(true)}>
          <Menu className="text-primaryColor" />
        </button>
        </div> */}
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

        <div className="lg:w-5/6  h-full flex  flex-col gap-1">
          <div className="w-full p-2 pb-0">
            {/* Search */}
            <div className="w-full h-[60px] bg-white border rounded-[10px] flex  items-center justify-between p-3 md:p-5 gap-10 ">
                  <div className="flex items-center justify-center gap-5 w-full">
                    <Search className="text-color2" />
                    <input type="text" placeholder="Browse companies and investors..."  className=" text-color1 placeholder:text-color2 border-none outline-none w-full p-2" />
                  </div>

                  <div className=" relative cursor-pointer">
                    <span className=" text-center left-2 -top-3 text-sm leading-sm absolute bg-red-500 rounded-full text-white w-[20px] h-[20px]"> 3</span>
                  <Bell />
                  </div>
            </div>
          </div>
          <div className="p-2 h-full">
            <div className=" w-full bg-white h-[75vh]  overflow-auto rounded-[10px] shadow border p-5 ">
              <div className="  grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 ">
                {companies.map((company, index) => (
                  <CompanyCard key={index} {...company} />
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
      </div>
    </div>
  );
}
