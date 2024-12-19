"use client";
import { Lock } from "lucide-react";
import Image from "next/image";
import React, { useState, FormEvent, useCallback } from "react";
import QuoteAnimation from "@/app/components/animations/quoteAnimation";
import Button from "@/app/components/common/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Forms2} from "./Tools";
import toast from "react-hot-toast";
import useCreateCompany from "@/app/hooks/company/useCreateCompany";

const AccountInvestor = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const route = useRouter();
  const {mutate:company, error, isPending} = useCreateCompany()
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    interestedTags:"[]"

  });
  const titles = ["Select your Industry", "Company Information"];
  const titleTags = ["Interests", "Company info"];
  const pageLength = titles.length - 1;

  const subTitles = [
    "Choose what best describes your company. You can easily modify your selection at any time from settings.",
    "For the purpose to giving you the best experience, these details are required.",
  ];

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleNext = () => {
    if (currentPage < titles.length - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    } else {
      route.push("/user/role");
    }
  };

  const handleFinalSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every((value) => value !== "");
    if (isFormValid) {
      const data = {
        interestedTags: JSON.parse(formData.interestedTags),
        companyName: formData.companyName,
        jobTitle: formData.jobTitle,
   
      };
      // console.log("Form submitted with data:", data);
      company(data);
    } else {
      toast("ℹ️ Please fill in all required fields before submitting.");
    }
  };
  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const pageVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    in: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.3,
        ease: "easeInOut",
      },
    },
    out: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      <div className="min-h-screen h-full flex overflow-hidden bg-white p-8 lg:p-0">
        <div className="w-full flex">
          {/* Left side with background image and quote */}
          <div className="hidden lg:flex lg:w-1/2 bg-slate-700 relative">
            <div className="absolute inset-0">
              <div className="min-h-screen h-full w-full bg-form-bg bg-cover bg-no-repeat bg-black ">
                <div className="min-h-screen h-full w-full bg-black bg-opacity-[0.3]">
                  <div className="w-full flex items-center justify-center">
                    {/* Top logo */}
                    <div className="pt-12 w-full flex max-w-[473px] items-center justify-start">
                      <Image
                        width={50}
                        height={50}
                        src="/logo.svg"
                        alt="Angels Radar Logo"
                        className="h-[50px] w-[50px]"
                      />
                    </div>
                  </div>

                  <div className="h-full flex items-center justify-center">
                    {/* Quote section */}
                    <QuoteAnimation />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side with form */}
          <div className="w-full h-full overflow-hidden lg:w-1/2 flex pt-5 justify-center items-center">
            <div className=" md:max-w-[600px] lg:max-w-[500px] xl:max-w-[500px] 2xl:max-w-[650px] w-full">
              {/* page count */}
              <div className="flex justify-end items-center ">
                <div className=" transition-all ease-in-out duration-300 ">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`subtitle-${currentPage}`}
                      variants={titleVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className=""
                    >
                      <p className="text-color1 text-[16px] leading-[27px]">
                        <span> Step </span> 0{currentPage + 1}/0{titles.length}
                      </p>
                      <p className="text-sm leading-sm text-color2">
                        {titleTags[currentPage]}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <form
                onSubmit={
                  currentPage === pageLength ? handleFinalSubmit : handleNext
                }
              >
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={`title-${currentPage}`}
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-[32px] leading-[40px] font-[500] text-color1"
                  >
                    {titles[currentPage]}
                  </motion.h1>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={`subtitle-${currentPage}`}
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="text-color2 text-[18px] leading-[27px] mb-8"
                  >
                    {subTitles[currentPage]}
                  </motion.p>
                </AnimatePresence>

                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={currentPage}
                    custom={direction}
                    variants={pageVariants}
                    initial="initial"
                    animate="in"
                    exit="out"
                    className="relative"
                  >
                    {/* Form  */}
                    <Forms2
                      onChange={handleInputChange}
                      formData={formData}
                      page={currentPage}
                      setFormData={setFormData}
                    />

                    <div className="flex gap-4 pt-[30px]">
                      <Button
                        onClick={handlePrev}
                        // disabled={currentPage === 0}
                        type="button"
                        variant="secondary"
                      >
                        Back
                      </Button>
                      <Button
                        // onClick={handleNext}
                        isLoading={isPending}
                        type={"button"}
                        variant="primary"
                        onClick={handleFinalSubmit}
                        className={`${
                          currentPage === pageLength ? "block" : "hidden"
                        }`}
                      >
                        {"Submit"}
                      </Button>
                      <Button
                        onClick={handleNext}
                        type={"button"}
                        variant="primary"
                        className={`${
                          currentPage === pageLength ? "hidden" : "block"
                        }`}
                      >
                        {"Save and continue"}
                      </Button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </form>

              <p className="pt-[15px] text-sm flex items-center justify-start gap-1 text-color2">
                <Lock className="text-sm w-[14px]" /> Your Info is safely
                secured
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountInvestor;
