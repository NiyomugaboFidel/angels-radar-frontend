"use client";
import { Lock } from "lucide-react";
import Image from "next/image";
import React, { useState, FormEvent, useCallback } from "react";
import QuoteAnimation from "@/app/components/animations/quoteAnimation";
import Button from "@/app/components/common/Button";
import { motion, AnimatePresence } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const ChooseRole = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<number>(0);
  const [formData, setFormData] = useState({
    selectedCategories: "[]", // Initialize as a JSON string
    theme: "",
    mode: "",
    option: "",
    // ... other existing fields
  });

  const titles = [
    "User Preference",
    "Personal Information", 
  ];

  const subTitles = [
    "For the purpose of giving you the best experience, these details are required",
    "Please provide your personal details for better identification.",
  ];

  // Memoized input change handler to prevent unnecessary re-renders
  const handleInputChange = useCallback((
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

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
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if(titles.length -1 === currentPage){
      console.log("Form submitted with data:", formData);
    }
    // Add your submission logic here
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

  return (
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
        <div className="w-full h-full overflow-hidden lg:w-1/2 flex pt-20 justify-center">
          <div className="max-w-[427px] w-full">
            <form onSubmit={currentPage === titles.length - 1 ? handleSubmit : ()=>{}} className="space-y-4">
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
                  <Forms 
                    onChange={handleInputChange} 
                    formData={formData} 
                    page={currentPage} 
                  />
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
                  type={currentPage === titles.length - 1 ? "submit" : "button"} 
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

export default ChooseRole;


export const Forms: React.FC<{
  page: number;
  formData: any;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}> = ({ page, formData, onChange }) => {
  // Parse categories safely
  const initialCategories = formData.selectedCategories 
    ? JSON.parse(formData.selectedCategories) 
    : [];

  const categories = [
    "Technology", "Healthcare", "Consumer Goods", "Energy", "Telecommunications", 
    "Real Estate", "Transportation", "Retail", "Agriculture", "Financial Services", 
    "Utilities", "Materials", "Industrial Goods and Services", "Consumer Services", 
    "Big data", "Fashion", "Food & Drinks",
  ];

  const handleCategoryClick = useCallback((category: string) => {
    const currentCategories = initialCategories;
    let newCategories;

    // If category is already selected, remove it
    if (currentCategories.includes(category)) {
      newCategories = currentCategories.filter((cat: string) => cat !== category);
    }
    // Limit to max 5 categories
    else if (currentCategories.length < 5) {
      newCategories = [...currentCategories, category];
    }
    // If already at max, replace the first selected category
    else {
      newCategories = [...currentCategories.slice(1), category];
    }

    // Trigger onChange with the new categories
    onChange({
      target: {
        name: "selectedCategories",
        value: JSON.stringify(newCategories),
        type: 'select-multiple'
      }
    } as React.ChangeEvent<HTMLSelectElement>);
  }, [initialCategories, onChange]);
  
  switch (page) {
    case 0: // User Preference Form
      return (
        <div className="space-y-4">
          <p className="text-sm text-gray-600 mb-2">
            Select up to 5 categories of interest 
            {initialCategories.length > 0 ? ` (${initialCategories.length} selected)` : ""}
          </p>
          <div className="grid grid-cols-3 w-full gap-2">
            {categories.map((category, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`py-2 px-1 rounded-full text-sm leading-sm text-center font-[400] transition-all duration-300 transform
                  ${
                    initialCategories.includes(category)
                      ? "bg-primaryColor text-white"
                      : "bg-gray-100 text-color1 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      );
    case 1: // Personal Information Form
      return (
        <div className="flex w-full flex-col gap-4">
          {/* First Select */}
          <div className="flex flex-col gap-2">
            <label htmlFor="theme-select-1" className="text-sm font-medium text-gray-700">
              Select Theme
            </label>
            <Select 
              value={formData.theme || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "theme",
                    value: value,
                    type: 'select-one'
                  }
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger id="theme-select-1" className="w-full outline-none focus:right-0">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        
          {/* Second Select */}
          <div className="flex flex-col gap-2">
            <label htmlFor="theme-select-2" className="text-sm font-medium text-gray-700">
              Select Mode
            </label>
            <Select 
              value={formData.mode || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "mode",
                    value: value,
                    type: 'select-one'
                  }
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger id="theme-select-2" className="w-full outline-none focus:right-0">
                <SelectValue placeholder="Mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        
          {/* Third Select */}
          <div className="flex flex-col gap-2">
            <label htmlFor="theme-select-3" className="text-sm font-medium text-gray-700">
              Select Option
            </label>
            <Select 
              value={formData.option || ""}
              onValueChange={(value) => {
                onChange({
                  target: {
                    name: "option",
                    value: value,
                    type: 'select-one'
                  }
                } as React.ChangeEvent<HTMLSelectElement>);
              }}
            >
              <SelectTrigger id="theme-select-3" className="w-full outline-none focus:right-0">
                <SelectValue placeholder="Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      );

    default:
      return null;
  }
};