"use client";

import Button from "@/app/components/common/Button";
import FormField from "@/app/components/common/InputField";
import useVerifyEmail from "@/app/hooks/users/useVerifyEmail";
import VerifyCodeValidationSchema from "@/app/validation/OtpValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";


const EmailVerification = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: verify, isPending } = useVerifyEmail();
  const isLoading = isPending;
  const searchParams = useSearchParams()


  const methods = useForm({
    resolver: yupResolver(VerifyCodeValidationSchema),
  });






  const onSubmit = async (data: any) => {

    const token = searchParams.get('evt')
    if (token !== null || token !== undefined) {
      const values = { token: token ?? '', otp: Number(data.otp) }
      // console.log(values)
      verify(values)
    }

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
                  <div className="pt-12  w-full  flex  max-w-[473px] items-center justify-start">
                    <Image width={50} height={50} src="/logo.svg" alt="Angels Radar Logo" className="h-[50px] w-[50px]" />
                  </div>
                </div>

                <div className="h-full flex items-center justify-center ">

                  {/* Quote section */}
                  <div className="mb-20 max-w-[473px]">
                    <div className="text-white text-4xl mb-4">
                      <Image width={20} height={20} src="/quote.svg" alt="quote" />
                    </div>
                    <p className="text-white  text-[18px] font-medium leading-[38px]">
                      The passage experienced a surge in popularity during the 1960s
                      when Letraset used it on their dry-transfer sheets, and again
                      during the 90s as desktop publishers bundled the text with
                      their software.
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
                        <Image width={33} height={33} className="w-[33px] h-[33px]" src="/right-angle.svg" alt="Bottom corner" />
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
              Verify your email
            </h1>
            <p className="text-color2 text-[18px] leading-[27px] mb-8">
              Enter the 6 digit code sent to your email address to verify your
              account
            </p>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <div className="relative">
                    <FormField
                      label="One Time Password"
                      name="otp"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Your Code"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-8 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="mb-6 text-sm">
                  <span className="text-color2 leading-sm ">Didn't get the email? </span>
                  <button
                    type="button"
                    className="text-sm leading-sm text-primaryColor font-medium"
                  >
                    Resend Code
                  </button>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="secondary"
                  >
                    Cancel
                  </Button>
                  <Button
                   disabled ={isLoading}

                    type="submit"
                    variant="primary"
                  >
                  {isLoading ? "  Verify...":"Verify" }
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;
