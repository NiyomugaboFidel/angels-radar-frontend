import React from "react";
import Image from "next/image";

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
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
      {/* Logo and Header */}
      <div className="flex items-center mb-4">
        <Image src={logo} alt={`${companyName} logo`} width={50} height={50} className="rounded-full" />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{companyName}</h3>
          <p className="text-sm text-gray-600">{tagline}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 mb-4">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <p><strong>Valuation:</strong> {valuation}</p>
          <p><strong>Stage:</strong> {stage}</p>
        </div>
        <div>
          <p><strong>Investment Type:</strong> {investmentType}</p>
          <p><strong>Growth Rate:</strong> {growthRate}</p>
        </div>
        <div>
          <p><strong>MRR:</strong> {mrr}</p>
          <p><strong>Funding:</strong> {fundingRequired}</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
