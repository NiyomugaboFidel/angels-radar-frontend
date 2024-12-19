import React from "react";

const CompanyCardSkeleton: React.FC = () => {
  return (
    <div className="h-full flex flex-col gap-5 bg-white rounded-[10px] overflow-hidden border-[#ECEDEF] border-[1.5px] transition-shadow w-full animate-pulse">
      {/* Header Skeleton */}
      <div>
        <div className="relative bg-gray-200 h-[55px]">
          <span className="w-full flex items-center justify-end p-2">
            <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
          </span>
          <div className="absolute top-10 left-4 flex items-end gap-3 justify-end">
            <div className="bg-gray-300 w-[50px] h-[50px] rounded-full border-2 border-white shadow-md"></div>
            <div className="pt-1">
              <div className="flex items-center gap-2 pt-3">
                <div className="bg-gray-300 h-4 w-24 rounded"></div>
              </div>
              <div className="bg-gray-300 h-3 w-20 mt-1 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Skeleton */}
      <div>
        <div className="border-b-[1.5px] pt-4 border-[#ECEDEF]">
          <div className="p-2 pb-0">
            <div className="bg-gray-300 h-3 w-full rounded mb-2"></div>
            <div className="bg-gray-300 h-3 w-3/4 rounded mb-4"></div>
            {/* Tags Skeleton */}
            <div className="flex flex-wrap gap-2 mb-4 w-full">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 text-xs font-medium px-3 py-2 rounded-full w-20 h-6"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Details Skeleton */}
        <div className="p-2 py-4 grid grid-cols-2 gap-2 text-sm">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
              <div className="bg-gray-300 h-3 w-3/4 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCardSkeleton;
