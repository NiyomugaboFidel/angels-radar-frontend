"use client";

import { Lock } from "lucide-react";
import Image from "next/image";
import { useState} from "react";
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

import * as Yup from 'yup';
const formValidationSchema = Yup.object().shape({
  mon: Yup.number().required('Account type is required'),
  email:Yup.string().email('Email invalid').required('Email is required'),
  name:Yup.string().required('Name is required'),
  phone:Yup.number().required("phone is required")
 

  });

const ChooseRole = () => {
  const { mutate: acountType, } = useChooseAccountType();
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

  const handleSubmit = ()=>{


  }

  const methods = useForm({
    resolver: yupResolver(formValidationSchema),
    defaultValues: {
      email:"",
      name:"",
      phone: 0,
      mon: 0

    },
  });
  const onSubmit = async (data: UserProfileData | any) => {
    console.log("Form Data:", data);

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
          <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
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
            </FormProvider>
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



  switch (page) {
    case 0: // User Preference Form
      return (
        <div className="max-w-[427px] mx-auto ">
    <FormField
        type="text"
        name="name"
        placeholder="Name"
      />
      </div>
      );
    case 1: // Personal Information Form
      return (
        <div className="space-y-4">
        <FormField
        type="text"
        name="email"
        placeholder="Email"
      />
        </div>
      );
    case 2: // Project Details Form
      return (
        <div className="space-y-4">
       <FormField
        type="tel"
        name="phone"
        placeholder="Phone number"
      />
        </div>
      );
    case 3: // Funding Goals Form
      return (
        <div className="space-y-4">
       <FormField
        type="number"
        name="mon"
        placeholder="Money"
      />
        </div>
      );
    default:
      return null;
  }
};

