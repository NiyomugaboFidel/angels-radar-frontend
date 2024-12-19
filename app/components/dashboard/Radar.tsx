import CompanyCard from "../common/CompanyCard";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import Button from "../common/Button";
import { useState, useEffect } from "react";
import {useCompanyProfileFiter } from "@/app/hooks/company/useCompanyProfile";
import CompanyCardSkeleton from "../skeleton/skeletonCardCompany";

type SortingOption = {
  key: string;
  label: string;
  values: { key: string; label: string }[];
};

const sortingOptions: SortingOption[] = [
  { 
    key: "companyStage", 
    label: "Stage", 
    values: [
      { key: "Startup", label: "Startup" },
      { key: "Seed", label: "Seed" },
      { key: "Pre-Seed", label: "Pre-Seed" },
      { key: "Growth", label: "Growth" },
      { key: "Mature", label: "Mature" },
    ],
  },
  { 
    key: "investmentType", 
    label: "Investment Types", 
    values: [
      { key: "Equity", label: "Equity" },
      { key: "Debt", label: "Debt" },
      { key: "Angel", label: "Angel" },
    ],
  },
  { 
    key: "valuationRange", 
    label: "Valuation", 
    values: [
      { key: "0-1000000", label: "< $1M" },
      { key: "1000000-5000000", label: "$1M - $5M" },
      { key: "5000000-999999999", label: "> $5M" },
    ],
  },
  { 
    key: "growthRateRange", 
    label: "Growth Rate", 
    values: [
      { key: "0-20", label: "0-20%" },
      { key: "20-50", label: "20-50%" },
      { key: "50-100", label: "50%+" },
    ],
  },
  { 
    key: "mrrRange", 
    label: "MRR", 
    values: [
      { key: "0-10000", label: "Below $10k" },
      { key: "10000-50000", label: "$10k - $50k" },
      { key: "50000-999999999", label: "Above $50k" },
    ],
  },
  { 
    key: "fundingRequiredRange", 
    label: "Funding Required", 
    values: [
      { key: "0-100000", label: "Below $100k" },
      { key: "100000-1000000", label: "$100k - $1M" },
      { key: "1000000-999999999", label: "Above $1M" },
    ],
  },
];

interface Filters {
  [key: string]: string;
}

type CompanyData = {
  _id: string;
  logo: string;
  tagline: string;
  description: string;
  background: string;
  fundRaiseDetails: { stage: string };
  companyId: { companyName: string; interestedTags: string[] };
  investmentsType: string;
  metrics: {
    valuation: number;
    growthRate: number;
    mrr: number;
    angelOffering: number;
    fundingRequired: number;
  };
};

interface SortingSectionProps {
  onSearch: (query: string) => void;
  onFilterChange: (key: string, value: string) => void;
}

function SelectComponent({
  label,
  values,
  onSelect,
}: {
  label: string;
  values: { key: string; label: string }[];
  onSelect: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap items-center gap-1">
      <Select onValueChange={onSelect}>
        <SelectTrigger className="w-[120px] border-none bg-gray-50">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent>
          {values.map((value) => (
            <SelectItem key={value.key} value={value.key}>
              {value.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

function SortingSection({ onSearch, onFilterChange }: SortingSectionProps) {
  const handleFilterSelect = (key: string, value: string) => {
    onFilterChange(key, value);
  };

  return (
    <div className="flex gap-2 items-center pb-2">
      <div className="flex items-center gap-2 rounded-[5px] px-2 bg-gray-50 w-full">
        <Search className="text-[10px] text-color2 " />
        <Input
          className="outline-none py-2 border-none bg-transparent"
          placeholder="Browse companies"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
      <div className="hidden lg:flex items-center gap-2">
        <p className="text-color1 font-semibold">SortBy:</p>
        {sortingOptions.map((option) => (
          <SelectComponent
            key={option.key}
            label={option.label}
            values={option.values}
            onSelect={(value) => handleFilterSelect(option.key, value)}
          />
        ))}
      </div>
    </div>
  );
}


const Radar = () => {
  const [filters, setFilters] = useState<Filters>({});
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { data, isFetched, isFetching, refetch } = useCompanyProfileFiter(filters, searchQuery);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const resetFilters = () => {
    setFilters({});
    setSearchQuery("");
  };

  useEffect(() => {
    refetch();
  }, [filters, searchQuery, refetch]);

  return (
    <div className="w-full h-full flex flex-col gap-1">
      <div className="h-full">
        <div className="flex flex-col gap-2 w-full bg-white h-[75vh] overflow-auto rounded-[10px] shadow border p-5">
          <div className="flex items-center gap-3 w-full">
             <div className=" hidden sm:flex">
             <Button className="  w-auto" >
            Initial Angel Offering {" "} <span className="font-semibold">20</span>
            </Button>
             </div>

             <div>
             <Button className="w-auto" variant="secondary">
            Explore {" "} <span className="font-semibold">{ data?.data?.length ? data?.data.length + 1 : 0}</span>
            </Button>
             </div>
            <div>
            <Button className="w-auto" onClick={resetFilters}>
              Reset Filters
            </Button>
            </div>
          </div>
          <SortingSection onSearch={handleSearch} onFilterChange={handleFilterChange} />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
            {isFetching && (
              Array.from({ length: 8 }).map((_, index) => (
                <CompanyCardSkeleton key={index} />
              ))
            )}
            {isFetched && data?.data.length === 0 && (
              <div className="col-span-full flex items-center justify-center w-full text-center text-gray-500">
                 <div className="text-center w-full flex flex-col items-center justify-center gap-2">
                 No companies match the current filters.
                <Button className="w-auto" onClick={resetFilters}>
              Reset Filters
             </Button>
                 </div>
              </div>
            )}
            {isFetched &&
              data?.data.map((company: any) => {
                const {
                  _id: id,
                  logo,
                  tagline,
                  description,
                  background,
                  fundRaiseDetails: { stage },
                  companyId: { companyName, interestedTags },
                  investmentsType: investmentType,
                  metrics: { valuation: metricValuation, growthRate, mrr, fundingRequired },
                } = company;

                return (
                  <Link
                    href={`/?section=company&type=watchlist&profile=${encodeURIComponent(companyName)}&id=${encodeURIComponent(id)}`}
                    key={id}
                  >
                    <CompanyCard
                      logo={logo}
                      tagline={tagline}
                      description={description}
                      background={background}
                      fundRaiseDetails={{ stage }}
                      companyId={{ companyName, interestedTags }}
                      investmentsType={investmentType}
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

export default Radar;

