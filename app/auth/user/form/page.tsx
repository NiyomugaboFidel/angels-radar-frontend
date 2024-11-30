"use client";

import { Lock } from "lucide-react";
import Image from "next/image";
import { ChangeEventHandler, FormEvent, useState} from "react";
import useChooseAccountType from "@/app/hooks/users/useChooseAcountType";
import QuoteAnimation from "@/app/components/animations/quoteAnimation";
import Button from "@/app/components/common/Button";
import { motion, AnimatePresence } from "framer-motion";

import FormField from "@/app/components/common/InputField";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface UserProfileData {
  name:string,
  phone:number,
  mon:number,
  email: string;

}



const ChooseRole = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<number>(0);


  const titles = [
    "User Preference",
    "Personal Information", 
    "Project Details",
    "Funding Goals",
  ];
  const subTitles = [
    "For the purpose of giving you the best experience, these details are required",
    "Please provide your personal details for better identification.",
    "Describe your project to help us understand your work better.",
    "Specify your funding goals and additional information.",
  ];

  type FormFields = "name" | "email" | "phone" | "mon";

  const handleNext = async () => {

    if ( currentPage < titles.length - 1) {
      setDirection(1);
      setCurrentPage((prev) => prev + 1);
    }
  };
  

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const titleVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.3 
      }
    }
  };

  const pageVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    in: {
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: 0.3,
        ease: "easeInOut"
      }
    },
    out: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeInOut"
      }
    })
  };

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("Form submitted!");
  };


  return (
    <div className="min-h-screen h-full flex overflow-hidden bg-white p-8 lg:p-0">
      <div className="w-full flex">
        {/* Left side with background image and quote */}
        <div className="hidden lg:flex lg:w-1/2 bg-slate-700 relative">
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
        
          <div className="max-w-[427px] w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.h1 
                key={`title-${currentPage}`}
                variants={titleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-lg leading-lg font-[500] text-color1 mb-2"
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
             
                <Forms page={currentPage} />
           

              </motion.div>
            </AnimatePresence>
               
            <div className="flex gap-4 pt-[30px]">
              <Button
                onClick={handlePrev}
                disabled={currentPage === 0}
                type="button"
                variant="secondary"
              >
                Back
              </Button>
              <Button 
                onClick={currentPage === titles.length - 1 ? handleSubmit : handleNext}
                type={"submit"} 
                variant="primary"
              >
                {currentPage === titles.length - 1 ? "Submit" : "Save and continue"}
              </Button>
            </div>
            </form>
    
            <p className="pt-[15px] text-sm flex items-center justify-start gap-1 text-color2">
              <Lock className="text-sm w-[14px]" /> Your Info is safely secured
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


// Forms component remains the same as in previous version

export default ChooseRole;
// Forms Component to Render Forms Dynamically

export const Forms: React.FC<{
  page: number;
}> = ({ page,  }) => {

  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  // Handle button click
  const handleClick = (category: string) => {
    // Check if the category is already active
    if (activeCategories.includes(category)) {
      // Remove category if already active
      setActiveCategories((prev) => prev.filter((cat) => cat !== category));
    } else {
 
        setActiveCategories((prev) => [...prev, category]);
 
    }
  };


  const categories = [
    "Technology",
    "Healthcare",
    "Consumer Goods",
    "Energy",
    "Telecommunications",
    "Real Estate",
    "Transportation",
    "Retail",
    "Agriculture",
    "Financial Services",
    "Utilities",
    "Materials",
    "Industrial Goods and Services",
    "Consumer Services",
    "Big data",
    "Fashion",
    "Food & Drinks",
  ];
  
  
  switch (page) {
    case 0: // User Preference Form
      return (
        <div className="space-y-1">


        <div className="w-full flex flex-col items-center justify-center">
        
              <div className=" grid grid-cols-3 w-full  gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => handleClick(category)}
                    className={` py-2 px-1  rounded-full text-sm  leading-sm text-center font-[400]  transition-all duration-300 transform
                      ${
                        activeCategories.includes(category)
                          ? "bg-primaryColor text-white "
                          : "bg-gray-100 text-color1 hover:bg-gray-200"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
        
        
                </div>
      );
    case 1: // Personal Information Form
      return (
         <div className="space-y-1">

  <h3>Hello</h3>


        </div>
      );

    default:
      return null;
  }
};

