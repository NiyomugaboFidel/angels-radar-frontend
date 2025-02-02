import CompanyCard from "../common/CompanyCard";
import Link from "next/link";
import { useCompanyProfile } from "@/app/hooks/company/useCompanyProfile";
import CompanyCardSkeleton from "../skeleton/skeletonCardCompany";



const Watchlist = () => {
  const { data, isFetched, isFetching, isPending } = useCompanyProfile();
  return (
    <div className="w-full h-full flex flex-col gap-1">
      <div className="h-full">
        <div className="w-full bg-white h-[75vh] overflow-auto rounded-[10px] shadow border p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          {isFetching  && (
              Array.from({ length: 8 }).map((_, index) => (
                <CompanyCardSkeleton key={index} />
              ))
            )}
            {isFetched && data?.data.length === 0 && (
              <div className="col-span-full text-center text-gray-500">
                No companies match the current filters.
              </div>
            )}
            {isFetched &&
              data?.data.map((company: any, index: number) => {
          
                const {
                  _id:id,
                  logo,
                  tagline,
                  description,
                  background,
                  fundRaiseDetails: { stage, },
                  companyId: { companyName, interestedTags },
                  investmentsType: investmentType,
                  metrics: {
                    valuation: metricValuation,
                    evaluationScore,
                    growthRate,
                    mrr,
                    angelOffering,
                    fundingRequired,
                  },
                } = company;

                return (
                  <Link
                  href={`/?section=company&type=watchlist&profile=${encodeURIComponent(
                    companyName
                  )}&id=${encodeURIComponent(
                    id
                  )}`}
                  key={id}
                  >
                    <CompanyCard
                      logo={logo}
                      tagline={tagline}
                      description={description}
                      background={background}
                      fundRaiseDetails={{
                        stage: stage,
                      }}
                      companyId={{
                        companyName,
                        interestedTags,
                      }}
                      investmentsType={investmentType}
                      // Metrics data passed here
                      metrics={{
                        valuation: metricValuation,
                        growthRate,
                        mrr,
                        fundingRequired,
                      }}
                    />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
