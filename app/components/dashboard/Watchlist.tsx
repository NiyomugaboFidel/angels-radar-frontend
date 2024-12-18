'use client'
import { Bell, Search } from "lucide-react";
import { useState } from "react";
import CompanyCard from "../common/CompanyCard";
import Link from "next/link";

export const companies = [
  {
    logo: "/logo.svg", // Local image from the public folder
    companyName: "@Incpedia",
    tagline: "Innovating the Future of Education",
    description:
      "Incpedia is revolutionizing the way education is delivered, with a focus on interactive learning and digital classrooms.",
    tags: ["Education", "Technology", "Innovation"],
    valuation: "$10,000,000",
    stage: "Growth Stage",
    investmentType: "Debt",
    growthRate: "200%+",
    mrr: "$50,000",
    fundingRequired: "$2,000,000",
    background: 'https://res.cloudinary.com/dmosnjgob/image/upload/v1734416639/background_rqhrzq.png', // External background image
  },
  {
    logo: "/logo.svg", // Local image
    companyName: "EcoSustain",
    tagline: "Leading Sustainable Solutions",
    description:
      "EcoSustain is committed to providing sustainable and eco-friendly solutions for businesses looking to reduce their carbon footprint.",
    tags: ["Sustainability", "Energy", "Environment"],
    valuation: "$5,000,000",
    stage: "Seed Stage",
    investmentType: "Equity",
    growthRate: "150%+",
    mrr: "$20,000",
    fundingRequired: "$1,000,000",
    background: 'https://res.cloudinary.com/dmosnjgob/image/upload/v1734416639/background_rqhrzq.png', // External background image
  },
  {
    logo: "/logo.svg", // Local image
    companyName: "RealEstateX",
    tagline: "Transforming Property Investment",
    description:
      "RealEstateX is revolutionizing the real estate investment landscape with innovative technology that simplifies property transactions.",
    tags: ["Real Estate", "Investment", "Technology"],
    valuation: "$8,000,000",
    stage: "Expansion Stage",
    investmentType: "Equity",
    growthRate: "120%+",
    mrr: "$30,000",
    fundingRequired: "$1,500,000",
    background: 'https://res.cloudinary.com/dmosnjgob/image/upload/v1734416639/background_rqhrzq.png', // External background image
  },
  {
    logo: "/logo.svg", // Local image
    companyName: "Fashionistas",
    tagline: "Redefining Fashion Trends",
    description:
      "Fashionistas is a trend-setting clothing brand that combines high-quality fabrics with the latest designs to meet consumer demands.",
    tags: ["Fashion", "Retail", "E-commerce"],
    valuation: "$3,000,000",
    stage: "Seed Stage",
    investmentType: "Equity",
    growthRate: "250%+",
    mrr: "$15,000",
    fundingRequired: "$800,000",
    background: 'https://res.cloudinary.com/dmosnjgob/image/upload/v1734416639/background_rqhrzq.png', // External background image
  },
  {
    logo: "/logo.svg", // Local image
    companyName: "HealthTech Pro",
    tagline: "The Future of Healthcare",
    description:
      "HealthTech Pro is creating innovative healthcare solutions that leverage AI and machine learning to improve patient outcomes.",
    tags: ["Healthcare", "Technology", "AI"],
    valuation: "$12,000,000",
    stage: "Series A",
    investmentType: "Equity",
    growthRate: "300%+",
    mrr: "$100,000",
    fundingRequired: "$4,000,000",
    background: 'https://res.cloudinary.com/dmosnjgob/image/upload/v1734416639/background_rqhrzq.png', // External background image
  },
  {
    logo: "/logo.svg", // Local image
    companyName: "SmartFarm",
    tagline: "Technology for Agriculture",
    description:
      "SmartFarm is innovating agriculture with IoT and AI-driven solutions to improve crop yield and reduce waste.",
    tags: ["Agriculture", "Technology", "Sustainability"],
    valuation: "$7,000,000",
    stage: "Growth Stage",
    investmentType: "Debt",
    growthRate: "180%+",
    mrr: "$40,000",
    fundingRequired: "$2,500,000",
    background: 'https://res.cloudinary.com/dmosnjgob/image/upload/v1734416639/background_rqhrzq.png', // External background image
  },
  {
    logo: "/logo.svg", // Local image
    companyName: "AutoXpert",
    tagline: "Revolutionizing Car Repair",
    description:
      "AutoXpert provides innovative solutions for car repair and maintenance through an easy-to-use mobile platform.",
    tags: ["Automotive", "Technology", "Service"],
    valuation: "$4,000,000",
    stage: "Seed Stage",
    investmentType: "Equity",
    growthRate: "100%+",
    mrr: "$25,000",
    fundingRequired: "$1,200,000",
    background: 'https://res.cloudinary.com/dmosnjgob/image/upload/v1734416639/background_rqhrzq.png', // External background image
  },
  {
    logo: "/logo.svg", // Local image
    companyName: "FoodieTech",
    tagline: "Bringing Gourmet Food to Your Doorstep",
    description:
      "FoodieTech is disrupting the food delivery industry with cutting-edge technology that ensures quality and efficiency.",
    tags: ["Food Delivery", "Technology", "E-commerce"],
    valuation: "$6,000,000",
    stage: "Series A",
    investmentType: "Equity",
    growthRate: "230%+",
    mrr: "$50,000",
    fundingRequired: "$3,000,000",
    background: 'https://res.cloudinary.com/dmosnjgob/image/upload/v1734416639/background_rqhrzq.png', // External background image
  },
  {
    logo: "/logo.svg", // Local image
    companyName: "TravelSmart",
    tagline: "Smart Travel for Everyone",
    description:
      "TravelSmart uses AI to optimize travel experiences, offering personalized travel planning and recommendations.",
    tags: ["Travel", "Technology", "AI"],
    valuation: "$2,500,000",
    stage: "Seed Stage",
    investmentType: "Equity",
    growthRate: "140%+",
    mrr: "$12,000",
    fundingRequired: "$600,000",
    background: 'https://res.cloudinary.com/dmosnjgob/image/upload/v1734416639/background_rqhrzq.png', // External background image
  },
  {
    logo: "/logo.svg", // Local image
    companyName: "FinTechX",
    tagline: "Next-Gen Financial Services",
    description:
      "FinTechX is reshaping the finance industry with AI-powered tools that provide financial advice and investment solutions.",
    tags: ["Fintech", "AI", "Financial Services"],
    valuation: "$15,000,000",
    stage: "Series B",
    investmentType: "Equity",
    growthRate: "400%+",
    mrr: "$200,000",
    fundingRequired: "$8,000,000",
    background: 'https://res.cloudinary.com/dmosnjgob/image/upload/v1734416639/background_rqhrzq.png', // External background image
  }
];



const Watchlist = () => {
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

export default Watchlist