"use client";
import { Lock } from "lucide-react";
import AccountCard from "../common/AccountCard";
import Button from "../common/Button";
import Image from "next/image";
function ChooseRole() {
  return (
    <div className=" min-h-screen h-full flex overflow-hidden bg-white p-8 lg:p-0">
      <div className="w-full flex">
        {/* Left side with background image and quote */}
        <div className="hidden   lg:flex lg:w-1/2 bg-slate-700 relative">
          <div className="absolute inset-0">
            <div className="min-h-screen  h-full w-full bg-form-bg bg-cover bg-no-repeat bg-black ">
              <div className="min-h-screen h-full w-full  bg-black bg-opacity-[0.3]">
                <div className="w-full flex items-center justify-center">
                  {/* Top logo */}
                  <div className="pt-12  w-full  flex max-w-[473px] items-center justify-start">
                    <Image width={50} height={50}
                      src="/logo.svg"
                      alt="Angels Radar Logo"
                      className="h-[50px] w-[50px]"
                    />
                  </div>
                </div>

                <div className="h-full flex items-center justify-center ">
                  {/* Quote section */}
                  <div className="mb-20 max-w-[473px]">
                    <div className="text-white text-4xl mb-4">
                      <Image width={20} height={20} src="/quote.svg" alt="quote" />
                    </div>
                    <p className="text-white  text-[18px] font-medium leading-[38px]">
                      The passage experienced a surge in popularity during the
                      1960s when Letraset used it on their dry-transfer sheets,
                      and again during the 90s as desktop publishers bundled the
                      text with their software.
                    </p>
                    <div className="w-full flex justify-between items-center  mt-6">
                      <div className="flex items-center">
                        <span className="text-white font-medium">
                          Onele Augustine
                        </span>
                        <div className="ml-2 w-4 h-4 rounded-full bg-secondaryColor text-white flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            className="w-3 h-3"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                      {/* Bottom corner decoration */}
                      <div className="">
                        <Image width={20} height={20} src="/right-angle.svg" alt="Bottom corner" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with form */}
        <div className="w-full h-full overflow-hidden lg:w-1/2 flex pt-20 justify-center">
          <div className="max-w-[427px] w-full ">
            <h1 className="text-lg leading-lg font-[500] text-color1 mb-2">
              Welcome to Angels radar
            </h1>
            <p className="text-color2 text-[18px] leading-[27px] mb-8">
              To begin this journey, tell us what type of account you’d be
              opening.
            </p>
            <AccountCard />
            <div className="flex gap-4 pt-[30px]">
              <Button
                type="button"
                variant="secondary"
              >
                Back
              </Button>
              <Button
                type="submit"
                variant="primary"
              >
                Save and continue
              </Button>
            </div>
            <p className="pt-[15px] text-sm flex items-center justify-start gap-1 text-color2"> <Lock className="text-sm w-[14px]" /> Your Info is safely secured </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseRole;
