import { File, Info, Video } from "lucide-react";
import ProfileHeader from "../common/ProfileHeader";

const SectionHeaderSkeleton = ({ title }: { title: string }) => (
  <p className="text-[18px] leading-[22px] font-semibold mb-4 text-color1 flex gap-2 items-center">
    {title} <Info className="text-color2 text-sm w-[16px]" />
  </p>
);

const SkeletonBox = ({ height }: { height: string }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${height}`}></div>
);

const GridSkeleton = ({ columns, rows }: { columns: number; rows: number }) => (
  <div className={`grid grid-cols-${columns} gap-4`}>
    {Array.from({ length: columns * rows }).map((_, index) => (
      <SkeletonBox key={index} height="h-6" />
    ))}
  </div>
);

const CompanyProfileSkeleton = () => (
  <div className="flex flex-col gap-2 h-[75vh]">
    <div className="flex items-center gap-2 text-color2">
      <SkeletonBox height="h-4 w-20" />
      <SkeletonBox height="h-4 w-24" />
    </div>
    <div className="w-full flex flex-col gap-4 overflow-auto">
      <div>
        <SkeletonBox height="h-40" />
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        {/* About Company */}
        <div className="bg-white p-6 border border-[#ECEDEF] rounded-[10px]">
          <SectionHeaderSkeleton title="About Company" />
          <SkeletonBox height="h-24" />
        </div>

        {/* Cap Table */}
        <div className="bg-white p-6 border border-[#ECEDEF] rounded-[10px]">
          <SectionHeaderSkeleton title="Cap Table" />
          <SkeletonBox height="h-32" />
        </div>

        {/* Fund Raising Details */}
        <div className="bg-white p-6 border border-[#ECEDEF] rounded-[10px]">
          <SectionHeaderSkeleton title="Fund Raising Details" />
          <GridSkeleton columns={2} rows={2} />
          <SkeletonBox height="h-10 w-full" />
        </div>

        {/* Metrics */}
        <div className="bg-white p-6 border border-[#ECEDEF] rounded-[10px]">
          <SectionHeaderSkeleton title="Metrics" />
          <GridSkeleton columns={2} rows={2} />
        </div>

        {/* Documents and Files */}
        <div className="bg-white p-6 border border-[#ECEDEF] rounded-[10px]">
          <SectionHeaderSkeleton title="Documents and Files" />
          <GridSkeleton columns={3} rows={2} />
          <SkeletonBox height="h-8 w-full" />
        </div>

        {/* Team Members */}
        <div className="bg-white p-6 border border-[#ECEDEF] rounded-[10px]">
          <SectionHeaderSkeleton title="Team Members" />
           <div className="flex flex-col gap-2">
             <div className="flex gap-2 justify-between w-full">
             <SkeletonBox height="h-[200px] w-full" />
             <SkeletonBox height="h-[200px] w-full" />
             <SkeletonBox height="h-[200px] w-full" />
             </div>
           <GridSkeleton columns={1} rows={1} />
           </div>
        </div>
      </div>
    </div>
  </div>
);

export default CompanyProfileSkeleton;
