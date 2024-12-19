import React from "react";
import Button from "../common/Button";
import Link from "next/link";

const CoverPage = () => {
  return (
    <div className="relative flex  w-full  bg-cover bg-center bg-form-bg bg-black text-white rounded-[10px]">
      <div className="bg-black bg-opacity-[0.3] rounded-[10px] w-full">
        <div className="relative z-10 flex flex-col items-center gap-2 text-center w-full pt-5 py-3 ">
          {/* Header */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Welcome to Our Angels Radar
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300">
            Discover our vision and goals that drive us to achieve excellence.
          </p>

          {/* Goals Section */}
          <div className="w-full">
            <h2 className="text-[28px] font-semibold text-secondaryColor ">
              Our Goals
            </h2>
            <p className="mt-2 text-[20px] leading-[28px] text-white">
              We aim to deliver high-quality solutions that create meaningful{" "}
              <br />
              impacts for our clients and community.
            </p>
          </div>

          {/* Vision Section */}
          <div className="w-full">
            <h2 className="text-[28px] font-semibold text-secondaryColor ">
              Our Vision
            </h2>
            <div>
              <p className="mt-2 text-[20px] leading-[28px] text-white text-center">
                To be a leader in our industry by fostering innovation, <br />
                collaboration, and sustainability. <br />
                To inspire trust through transparency and excellence. <br />
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex  gap-4 mt-3 w-full items-center justify-center">
            <div>
              <Button>
                <Link href={"/?section=radar"}>Find Company</Link>
              </Button>
            </div>
            <div>
              <Button variant="secondary">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
