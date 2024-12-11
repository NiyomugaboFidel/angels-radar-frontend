import React from "react";
import Image from "next/image";
import { FaMoneyBillWave, FaChartLine, FaHandshake, FaRocket } from "react-icons/fa";

interface CardProps {
  logo: string;
  companyName: string;
  tagline: string;
  description: string;
  tags: string[];
  valuation: string;
  stage: string;
  investmentType: string;
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
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className="relative">
        <Image
          src="/images/background.png" // Placeholder for the card header background
          alt="Card Background"
          layout="responsive"
          width={300}
          height={100}
          className="object-cover"
        />
        <div className="absolute top-4 left-4 flex items-center gap-3">
          <Image
            src={logo}
            alt={`${companyName} logo`}
            width={60}
            height={60}
            className="rounded-full border-4 border-white shadow-md"
          />
          <div>
            <h3 className="text-lg font-bold text-white">{companyName}</h3>
            <p className="text-sm text-gray-300">{tagline}</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="p-6">
        <p className="text-gray-700 text-sm mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-blue-600" />
            <span className="text-gray-800">{valuation}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRocket className="text-blue-600" />
            <span className="text-gray-800">{stage}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaHandshake className="text-blue-600" />
            <span className="text-gray-800">{investmentType}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaChartLine className="text-blue-600" />
            <span className="text-gray-800">{growthRate}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-blue-600" />
            <span className="text-gray-800">{mrr}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-blue-600" />
            <span className="text-gray-800">{fundingRequired}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
