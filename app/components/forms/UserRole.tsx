"use client";

import { Lock } from "lucide-react";
import Account from "../common/AccountCard";
import Button from "../common/Button";
import Image from "next/image";
import { useState, useEffect } from "react";
import useChooseAccountType from "@/app/hooks/users/useChooseAcountType";
import Cookies from "js-cookie";
import QuoteAnimation from "../animations/quoteAnimation";

const ChooseRole = () => {
  const { mutate: acountType, isPending } = useChooseAccountType();
  const [isActive, setIsActive] = useState<string>("");

  useEffect(() => {
    // Safely access localStorage and Cookies here
    const storedRole =
      localStorage.getItem("role") || Cookies.get("role") || "";
    console.log({ storedRole });
    setIsActive(storedRole);
  }, []);

  const handlerIsActive = (role: string) => {
    setIsActive(role);
    acountType({ role });
  };
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
                    <Image
                      width={50}
                      height={50}
                      src="/logo.svg"
                      alt="Angels Radar Logo"
                      className="h-[50px] w-[50px]"
                    />
                  </div>
                </div>

                <div className="h-full flex items-center justify-center ">
                  {/* Quote section */}

                  <QuoteAnimation />
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
            {/* Account  Card  */}
            <div className="max-w-[427px] mx-auto ">
              <button onClick={() => handlerIsActive("owner")}>
                <Account
                  icon={
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0914 9.59169C12.9084 8.94891 13.5047 8.06746 13.7975 7.06997C14.0902 6.07249 14.0647 5.00858 13.7246 4.02625C13.3845 3.04391 12.7466 2.19202 11.8998 1.58907C11.053 0.986122 10.0393 0.662109 8.99975 0.662109C7.96021 0.662109 6.94652 0.986122 6.09969 1.58907C5.25287 2.19202 4.61504 3.04391 4.27493 4.02625C3.93482 5.00858 3.90935 6.07249 4.20205 7.06997C4.49476 8.06746 5.09109 8.94891 5.90809 9.59169C4.50815 10.1526 3.28666 11.0828 2.37383 12.2833C1.461 13.4838 0.891056 14.9094 0.724753 16.4084C0.712715 16.5178 0.72235 16.6285 0.753108 16.7342C0.783865 16.8399 0.835143 16.9386 0.904013 17.0245C1.0431 17.1979 1.24541 17.309 1.46642 17.3334C1.68743 17.3577 1.90905 17.2932 2.08252 17.1541C2.256 17.015 2.36711 16.8127 2.39142 16.5917C2.57441 14.9627 3.35116 13.4582 4.57327 12.3657C5.79538 11.2732 7.37717 10.6692 9.01642 10.6692C10.6557 10.6692 12.2375 11.2732 13.4596 12.3657C14.6817 13.4582 15.4584 14.9627 15.6414 16.5917C15.6641 16.7965 15.7618 16.9856 15.9157 17.1225C16.0696 17.2595 16.2687 17.3346 16.4748 17.3334H16.5664C16.7849 17.3082 16.9845 17.1978 17.1219 17.0261C17.2593 16.8544 17.3232 16.6353 17.2998 16.4167C17.1327 14.9135 16.5596 13.4842 15.6421 12.2819C14.7246 11.0795 13.4972 10.1496 12.0914 9.59169ZM8.99975 9.00002C8.34048 9.00002 7.69602 8.80453 7.14785 8.43825C6.59969 8.07198 6.17245 7.55139 5.92015 6.9423C5.66786 6.33321 5.60185 5.66299 5.73047 5.01639C5.85909 4.36979 6.17656 3.77584 6.64273 3.30967C7.10891 2.84349 7.70285 2.52602 8.34945 2.39741C8.99606 2.26879 9.66628 2.3348 10.2754 2.58709C10.8845 2.83938 11.405 3.26662 11.7713 3.81479C12.1376 4.36295 12.3331 5.00742 12.3331 5.66669C12.3331 6.55074 11.9819 7.39859 11.3568 8.02371C10.7317 8.64883 9.88381 9.00002 8.99975 9.00002Z"
                        fill={`${isActive === "owner" ? "white" : "#073763"}`}
                      />
                    </svg>
                  }
                  isActive={isActive === "owner"}
                  title="Founder account"
                  description="I want to register and manage my start up"
                />
              </button>
              <div className="mt-4">
                <button onClick={() => handlerIsActive("investor")}>
                  <Account
                    icon={
                      <svg
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8337 3.41665H12.3337V2.58331C12.3337 1.92027 12.0703 1.28439 11.6014 0.815546C11.1326 0.346705 10.4967 0.083313 9.83366 0.083313H8.16699C7.50395 0.083313 6.86807 0.346705 6.39923 0.815546C5.93038 1.28439 5.66699 1.92027 5.66699 2.58331V3.41665H3.16699C2.50395 3.41665 1.86807 3.68004 1.39923 4.14888C0.930384 4.61772 0.666992 5.2536 0.666992 5.91665V13.4166C0.666992 14.0797 0.930384 14.7156 1.39923 15.1844C1.86807 15.6533 2.50395 15.9166 3.16699 15.9166H14.8337C15.4967 15.9166 16.1326 15.6533 16.6014 15.1844C17.0703 14.7156 17.3337 14.0797 17.3337 13.4166V5.91665C17.3337 5.2536 17.0703 4.61772 16.6014 4.14888C16.1326 3.68004 15.4967 3.41665 14.8337 3.41665ZM7.33366 2.58331C7.33366 2.3623 7.42146 2.15034 7.57774 1.99406C7.73402 1.83778 7.94598 1.74998 8.16699 1.74998H9.83366C10.0547 1.74998 10.2666 1.83778 10.4229 1.99406C10.5792 2.15034 10.667 2.3623 10.667 2.58331V3.41665H7.33366V2.58331ZM15.667 13.4166C15.667 13.6377 15.5792 13.8496 15.4229 14.0059C15.2666 14.1622 15.0547 14.25 14.8337 14.25H3.16699C2.94598 14.25 2.73402 14.1622 2.57774 14.0059C2.42146 13.8496 2.33366 13.6377 2.33366 13.4166V9.20831H4.83366V10.0833C4.83366 10.3043 4.92146 10.5163 5.07774 10.6726C5.23402 10.8288 5.44598 10.9166 5.66699 10.9166C5.88801 10.9166 6.09997 10.8288 6.25625 10.6726C6.41253 10.5163 6.50033 10.3043 6.50033 10.0833V9.20831H11.5003V10.0833C11.5003 10.3043 11.5881 10.5163 11.7444 10.6726C11.9007 10.8288 12.1126 10.9166 12.3337 10.9166C12.5547 10.9166 12.7666 10.8288 12.9229 10.6726C13.0792 10.5163 13.167 10.3043 13.167 10.0833V9.20831H15.667V13.4166ZM15.667 7.58331H2.33366V5.91665C2.33366 5.69563 2.42146 5.48367 2.57774 5.32739C2.73402 5.17111 2.94598 5.08331 3.16699 5.08331H14.8337C15.0547 5.08331 15.2666 5.17111 15.4229 5.32739C15.5792 5.48367 15.667 5.69563 15.667 5.91665V7.58331Z"
                          fill={`${
                            isActive === "investor" ? "white" : "#073763"
                          }`}
                        />
                      </svg>
                    }
                    isActive={isActive === "investor"}
                    title="Investor account"
                    description="I want to invest in start ups, this is for you"
                  />
                </button>
              </div>
              <div className="mt-4 text-[18px] leading-[27px]">
                <p className="text-color2">
                  Company not listed yet?{" "}
                  <a href="#" className="text-primaryColor">
                    Create company profile
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-[30px]">
              <Button
                onClick={() => handlerIsActive("")}
                type="button"
                variant="secondary"
              >
                Back
              </Button>
              <Button onClick={() => {}} type="submit" variant="primary">
                Save and continue
              </Button>
            </div>
            <p className="pt-[15px] text-sm flex items-center justify-start gap-1 text-color2">
              {" "}
              <Lock className="text-sm w-[14px]" /> Your Info is safely secured{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
