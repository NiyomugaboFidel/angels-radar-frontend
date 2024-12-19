import { File, Info, Video } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import ProfileHeader from "../common/ProfileHeader";
import { useCompanyProfileById } from "@/app/hooks/company/useCompanyProfile";
import CompanyProfileSkeleton from "../skeleton/CompanyProfileSkeleton";
import Link from "next/link";

interface Document {
  name: string;
  type: "video" | "pdf";
  url: string;
}

interface CapTable {
  shareholder: string;
  sharesOwned: number;
  equityPercentage: string;
}

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

interface Metrics {
  valuation: string;
  evaluationScore: string;
  mrr: string;
  growthRate: string;
  foundedDate: string;
  angelOffering: string;
  fundingRequired:string
}

interface FundRaiseDetails {
  raiseGoal: number;
  amountRaised: number;
  round: string;
  stage: string;
}

interface CompanyData {
  companyName: string;
  investmentsType: string;
  companyStage: string;
  ticketSize: number;
  interestedTags: string[];
  logo: string;
  tagline: string;
  description: string;
  background: string;
  fundRaiseDetails: FundRaiseDetails;
  capTable: CapTable[];
  metrics: Metrics;
  documents: Document[];
  teamMembers: TeamMember[];
}

interface ApiResponse {
  company: {
    companyId: {
      companyName: string;
      interestedTags: string[];
    };
    investmentsType: string;
    companyStage: string;
    ticketSize: number;
    logo: string;
    tagline: string;
    description: string;
    background: string;
    fundRaiseDetails: FundRaiseDetails;
    metrics: {
      valuation: number;
      evaluationScore: number;
      mrr: number;
      growthRate: number;
      angelOffering: string;
      fundingRequired:string
      foundedDate:string
    };
    createdAt: string;
  };
  teamMember: TeamMember | null;
  shareholder: {
    shareholder: string;
    sharesOwned: number;
    equityPercentage: string;
  } | null;
}

const SectionHeader = ({ title }: { title: string }) => (
  <p className="text-[18px] leading-[22px] font-semibold mb-4 text-color1 flex gap-2 items-center">
    {title} <Info className="text-color2 text-sm w-[16px]" />
  </p>
);

const GridItem = ({ label, value }: { label: string; value: string }) => (
  <div className="w-full border border-[#ECEDEF] rounded-[5px] p-2 flex flex-col gap-1">
    <p className="w-full uppercase text-[12px] leading-[18px] text-color2 font-semibold">
      {label}
    </p>
    <p className="w-full uppercase text-[12px] leading-[18px] text-color1 font-semibold">
      {value}
    </p>
  </div>
);

const transformCompanyData = (inputData: ApiResponse): CompanyData => {
  const { company, teamMember, shareholder } = inputData;

  return {
    companyName: company?.companyId.companyName ?? "",
    investmentsType: company?.investmentsType ?? "",
    companyStage: company?.companyStage ?? "",
    ticketSize: company?.ticketSize ?? 0,
    interestedTags: company?.companyId.interestedTags ?? [],
    logo: company?.logo ?? "",
    tagline: company?.tagline ?? "",
    description: company?.description ?? "",
    background: company?.background ?? "",
    fundRaiseDetails: {
      raiseGoal: company?.fundRaiseDetails.raiseGoal ?? 0,
      amountRaised: company?.fundRaiseDetails.amountRaised ?? 0,
      round: company?.fundRaiseDetails.round ?? "",
      stage: company?.fundRaiseDetails.stage ?? "",
    },
    capTable: shareholder ? [{
      shareholder: shareholder.shareholder,
      sharesOwned: shareholder.sharesOwned,
      equityPercentage: shareholder.equityPercentage
    }] : [],
    metrics: {
      valuation: `$${company?.metrics.valuation ?? 0}`,
      evaluationScore: `${company?.metrics.evaluationScore ?? 0}/10`,
      mrr: `$${company?.metrics.mrr ?? 0}k`,
      growthRate: `${company?.metrics.growthRate ?? 0}%+`,
      fundingRequired: `$${company?.metrics.fundingRequired ?? 0}`,
      foundedDate: company?.metrics.foundedDate
        ? new Date(company?.metrics.foundedDate).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) 
        : '',
      angelOffering: company?.metrics.angelOffering ?? 'None',
    },
    documents: [
      { name: "Founders intro", type: "video", url: "#" },
      { name: "Product demo", type: "video", url: "#" },
      { name: "Company's deck", type: "pdf", url: "#" },
    ],
    teamMembers: teamMember ? [{
      name: teamMember.name,
      role: teamMember.role,
      imageUrl: teamMember.imageUrl,
    }] : [],
  };
};

const CompanyProfile = () => {
  const searchParams = useSearchParams();
  const section = searchParams.get("type");
  const companyProfile = searchParams.get("profile");
  const companyId = searchParams.get("id");

  if (!companyId) return null;

  const { data, isFetched , isFetching, isPending, isError} = useCompanyProfileById(companyId);
  
  if (!isFetched || !data || isFetching || isPending || isError) {
    return <CompanyProfileSkeleton />;
  }


  const companyData = transformCompanyData(data?.data);
  const {
    description,
    fundRaiseDetails,
    capTable,
    metrics,
    documents,
    teamMembers,
    investmentsType,
    companyStage,
  } = companyData;

  const progress = Math.round(
    (fundRaiseDetails.amountRaised / fundRaiseDetails.raiseGoal) * 100
  );

  const fundRaiseItems = [
    { label: "Raise goal", value: `$${fundRaiseDetails.raiseGoal}` },
    { label: "Round", value: fundRaiseDetails.round },
    { label: "Investment type", value: investmentsType },
    { label: "Stage", value: companyStage },
  ];

  const metricsItems = [
    { label: "Valuation", value: metrics.valuation },
    { label: "Evaluation score", value: metrics.evaluationScore },
    { label: "MRR", value: metrics.mrr },
    { label: "Growth rate", value: metrics.growthRate },
    { label: "Founded", value: metrics.foundedDate},
    { label: "Initial Angel Offering", value: metrics.angelOffering },
  ];

  return (
    <div className="flex flex-col gap-2 h-[75vh]">
      <div className="flex items-center gap-2 text-color2">
          <Link href={`/?section=${section}`} className="hover:underline">
          <p className="text-sm leading-sm text-primaryColor font-semibold">
          {section}
        </p>{" "}
        </Link>
        / <p className="text-sm leading-sm text-color2">{companyProfile}</p>
      </div>
      <div className="w-full flex flex-col gap-4 overflow-auto">
        <div>
          <ProfileHeader {...companyData} />
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {/* About Company */}
          <div className="bg-white p-6 border border-[#ECEDEF] rounded-[10px]">
            <SectionHeader title="About Company" />
            <p className="text-color1 text-sm leading-[18px]">{description}</p>
          </div>

          {/* Cap Table */}
          <div className="bg-white p-6 border border-[#ECEDEF] rounded-[10px]">
            <SectionHeader title="Cap Table" />
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  {["Shareholder", "Shares Owned", "Equity %"].map((header) => (
                    <th
                      key={header}
                      className="p-2 uppercase text-[12px] leading-[18px] text-color2 font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {capTable.map((cap, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{cap.shareholder}</td>
                    <td className="p-2">{cap.sharesOwned}</td>
                    <td className="p-2">{cap.equityPercentage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fund Raising Details */}
          <div className="bg-white p-6 border border-[#ECEDEF] rounded-[10px]">
            <SectionHeader title="Fund Raising Details" />
            <div className="grid grid-cols-2 md:grid-cols-4 text-sm gap-[12px] pb-6">
              {fundRaiseItems.map((item) => (
                <GridItem
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
            <div className="w-full bg-white border rounded-[5px] flex items-center gap-4">
              <div
                className="h-[40px] bg-green-500 rounded-l-[5px]"
                style={{ width: `${progress}%` }}
              ></div>
              <p className="text-sm leading-sm font-semibold text-color1">
                {101 - progress}% left
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="bg-white p-6 border border-[#ECEDEF] rounded-[10px]">
            <SectionHeader title="Metrics" />
            <div className="grid grid-cols-2 md:grid-cols-4 text-sm gap-[12px] pb-2">
              {metricsItems.map((item) => (
                <GridItem
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </div>

          {/* Documents and Files */}
          <div className="bg-white p-6 border border-[#ECEDEF] rounded-[10px]">
            <SectionHeader title="Documents and Files" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.url}
                  className="w-full flex items-center p-2 border rounded-[5px] transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col gap-2 w-full">
                    <span className="mr-2 text-blue-500">
                      {doc.type === "video" ? (
                        <Video className="w-[100px] text-[100px] h-[100px]" />
                      ) : (
                        <File className="w-[100px] text-[100px] h-[100px]" />
                      )}
                    </span>
                    <p>{doc.name}</p>
                  </div>
                </a>
              ))}
            </div>
            <button className="text-sm leading-sm text-primaryColor py-4 text-center w-full font-semibold">
              View all documents
            </button>
          </div>

          {/* Team Members */}
          <div className="bg-white p-6 border border-[#ECEDEF] rounded-[10px]">
            <SectionHeader title="Team Members" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="h-[200px] text-start border rounded-[5px] p-2 w-full flex flex-col"
                >
                  <div className="w-full h-full min-h-[100px] min-w-[100px] px-1 sm:px-0">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={150}
                      height={150}
                      priority
                      className="w-full h-full rounded-[5px] object-cover object-center"
                    />
                  </div>
                  <div className="flex flex-col gap-1 pt-2">
                    <p className="font-bold text-color1 text-sm leading-sm">
                      {member.name}
                    </p>
                    <p className="text-sm text-color2">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-sm leading-sm text-primaryColor py-4 text-center w-full font-semibold">
              View all teams
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;