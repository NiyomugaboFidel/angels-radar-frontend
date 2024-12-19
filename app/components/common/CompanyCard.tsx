import React from "react";
import Image from "next/image";
import {
  FaMoneyBillWave,
  FaChartLine,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

interface FundRaiseDetails {
  stage: string;
}

interface Metrics {
  mrr: string | number;
  growthRate: string| number;
  valuation: number;
  fundingRequired: string | number;
}

interface CompanyId {
  companyName: string;
  interestedTags: string[];
}

interface CardProps {
  logo: string;
  tagline: string;
  description: string;
  background: string;
  fundRaiseDetails: FundRaiseDetails;
  companyId: CompanyId;
  metrics: Metrics;
  investmentsType: string;
}

const CompanyCard: React.FC<CardProps> = ({
  logo,
  tagline,
  description,
  background,
  fundRaiseDetails,
  companyId,
  investmentsType,
  metrics,
}) => {
  return (
    <div className="h-full flex flex-col gap-5 bg-white rounded-[10px] overflow-hidden border-[#ECEDEF] border-[1.5px] transition-shadow w-full">
      {/* Header */}
      <div>
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[55px]"
          style={{ backgroundImage: `url(${background})` }}
        >
          <span className="w-full flex items-center justify-end p-2">
            <FaBookmark className="text-secondaryColor" />
          </span>
          <div className="absolute top-10 left-4 flex items-end gap-3 justify-end">
            <Image
              src={logo}
              alt={`${companyId.companyName} logo`}
              width={50}
              height={50}
              className="rounded-full w-[50px] h-[50px] border-2 border-white shadow-md"
            />
            <div className="pt-1">
              <div className="flex items-center gap-2 pt-3">
                <p className="text-sm font-[500] text-color1">
                  {companyId.companyName}
                </p>
                <MdVerified className="text-secondaryColor" />
              </div>
              <p className="text-[12px] text-color">{tagline}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <div className="border-b-[1.5px] pt-4 border-[#ECEDEF]">
          <div className="p-2 pb-0">
            <p className="text-color2 text-[12px] mb-4 line-clamp-3">{description}</p>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 w-full">
              {companyId.interestedTags.slice(0,3).map((tag, index) => (
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
              ${metrics.valuation.toLocaleString()}{" "}
              <p className="text-[10px] text-color2">Valuation</p>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaRocket className="text-primaryColor" />
            <span className="text-gray-800 flex items-center gap-1">
              {fundRaiseDetails.stage}{" "}
              <p className="text-[10px] text-color2">Stage</p>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaHandshake className="text-primaryColor" />
            <span className="text-gray-800 flex items-center gap-1">
              {investmentsType}{" "}
              <p className="text-[10px] text-color2">Investment Type</p>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaChartLine className="text-primaryColor" />
            <span className="text-gray-800 flex items-center gap-1">
              {metrics.growthRate}{" "}
              <p className="text-[10px] text-color2">Growth Rate</p>
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaMoneyBillWave className="text-primaryColor" />
            <span className="text-gray-800 flex items-center gap-1">
              ${metrics.mrr.toLocaleString()}{" "}
              <p className="text-[10px] text-color2">MRR</p>
            </span>
          </div>
          <div className="flex items-start justify-start gap-1">
            <FaMoneyBillWave className="text-primaryColor" />
            <span className="text-gray-800 flex items-center gap-1">
              ${metrics.fundingRequired}{" "}
              <p className="text-[10px] text-color2">Funding Required</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
