import React from "react";
import Image from "next/image";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
interface CardProps {
  logo: string;
  companyName: string;
  tagline: string;
  description: string;
  tags: string[];
  valuation: string;
  stage: string;
  investmentType: string;
  background: string;
  growthRate: string;
  mrr: string;
  fundingRequired: string;
}

const CompanyCard: React.FC<CardProps> = ({
  logo,
  companyName,
  tagline,
  description,
  tags,
  valuation,
  stage,
  investmentType,
  growthRate,
  mrr,
  fundingRequired,
  background,
}) => {
  return (
    <div className="h-full flex flex-col gap-5 bg-white  rounded-[10px] overflow-hidden border-[#ECEDEF] border-[1.5px]  transition-shadow w-full">
      {/* Header */}
      <div>
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[55px]"
          style={{ backgroundImage: `url(${background})` }}
        >
          <span className="w-full flex items-center justify-end p-2">
            {/* <FaRegBookmark className="text-white" /> */}
            <FaBookmark className="text-secondaryColor" />
          </span>
          <div className="absolute top-10 left-4 flex items-end gap-3 justify-end">
            <Image
              src={logo}
              alt={`${companyName} logo`}
              width={50}
              height={50}
              className="rounded-full border-2 border-white shadow-md"
            />
            <div className="">
              <div className="flex items-center gap-2">
              <p className=" text-sm leading-sm font-[500] text-color1">
                {companyName}
              </p>
             <MdVerified className="text-secondaryColor" />
              </div>
              <p className="text-[12px] leading-[14px] text-color">{tagline}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Description */}
      <div className="">
        <div className=" border-b-[1.5px] pt-4 border-[#ECEDEF]  ">
          <div className="p-2 pb-0">
            <p className="text-color2 text-[12px] leading-[15px] mb-4">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-primaryColor text-xs font-medium px-3 py-2 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="p-2 py-4 grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-start justify-start gap-2">
            <FaMoneyBillWave className="text-primaryColor" />
            <span className="text-gray-800 flex items-center gap-1">
              {valuation} <p className="text-[10px] text-color2">valuation</p>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaRocket className="text-primaryColor" />
            <span className="text-gray-800 flex items-center gap-1">
              {stage}
              <p className="text-[10px] text-color2"> Stage</p>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaHandshake className="text-primaryColor" />
            <span className="text-gray-800 flex items-center gap-1">
              {investmentType}{" "}
              <p className="text-[10px] text-color2">InvestmentType</p>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaChartLine className="text-primaryColor" />
            <span className="text-gray-800 flex items-center gap-1">
              {growthRate}
              <p className="text-[10px] text-color2"> GrowthRate </p>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaMoneyBillWave className="text-primaryColor" />
            <span className="text-gray-800 flex items-center gap-1">
              {mrr} <p className="text-[10px] text-color2">MRR</p>
            </span>
          </div>
          <div className="flex items-start justify-start gap-1">
            <FaMoneyBillWave className="text-primaryColor" />
            <span className="text-gray-800 flex items-center gap-1">
              {fundingRequired}{" "}
              <p className="text-[10px] text-color2">fundingRequired</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
