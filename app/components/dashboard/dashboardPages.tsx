'use client'
import { useSearchParams } from "next/navigation"
import About from "./About"
import Plan from "./Plan"
import Profile from "./Profile"
import Radar from "./Radar"
import Watchlist from "./Watchlist"
import CompanyProfile from "../layout/companyProfile"
import CoverPage from "./CoverPage"
export const companyData = {
    companyName:"Micro Ai ",
    investmentsType: "Equity",
    companyStage: "Seed",
    ticketSize: 50000,
    interestedTags: ["Tech", "SaaS", "AI"],
    logo: "/logo.svg",
    tagline: "Innovating for the future",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    background: "https://res.cloudinary.com/dmosnjgob/image/upload/v1733260926/wu89rstt75dgjo8rkqcw.webp",
  
    fundRaiseDetails: {
      raiseGoal: 100000,
      amountRaised: 80000,
      round: "Pre-seed",
      stage: "Pre-Revenue",
    },
  
    capTable: [
      { shareholder: "John Doe", sharesOwned: 1000, equityPercentage: "10%" },
      { shareholder: "Anonymous", sharesOwned: 1000, equityPercentage: "10%" },
      { shareholder: "Ayo Balogun", sharesOwned: 1000, equityPercentage: "10%" },
    ],
  
    metrics: {
      valuation: "$1m",
      evaluationScore: "6.3/10",
      mrr: "$6k",
      growthRate: "130%+",
      foundedDate: "June, 2020",
      angelOffering: "April, 2023",
    },
  
    documents: [
      { name: "Founders intro", type: "video", url: "#" },
      { name: "Product demo", type: "video", url: "#" },
      { name: "Company's deck", type: "pdf", url: "#" },
    ],
  
    teamMembers: [
      { name: "John Doe", role: "CEO", imageUrl: "/images/team1.jpg" },
      { name: "Jane Smith", role: "CTO", imageUrl: "/images/team2.jpg" },
      { name: "Michael Johnson", role: "COO", imageUrl: "/images/team3.jpg" },
    ],
  };
  

const DashboardPages = () => {
    const searchParams = useSearchParams();
    const section = searchParams.get('section');
    switch(section){
      case 'watchlist':
       return  <Watchlist />
       break
      case 'radar':
       return  <Radar />
       break
      case 'profile':
       return  <Profile />
       break
      case 'plans':
       return  <Plan />
       break
      case 'about':
       return  <About />
       break
      case 'company':
       return  <CompanyProfile />
       break
    default:
       return <CoverPage />   

    }
}

export default DashboardPages