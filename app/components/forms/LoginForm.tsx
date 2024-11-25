"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import SignupValidationSchema from "@/app/validation/SiginuoValidationSchema";
import FormField from "../common/InputField";
import Button from "../common/Button";

// Validation Schema

// Types
interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}

// Main SignUp Component
const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(SignupValidationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
  });
  const termsAccepted = methods.watch("terms");
  const onSubmit = async (data: SignupData | any) => {
    setIsLoading(true);
    console.log("Form Data:", data);
    // Handle signup logic here
    setIsLoading(false);
  };

  return (
    <div className=" bg-white min-h-[70vh] w-full md:w-[440px] rounded-[10px] p-[30px]">
      <div className="w-full h-full">
        <div className="flex items-center justify-center flex-col gap-[20px]">
          {/* Logo */}
          <div className="flex justify-center items-center gap-1 ">
            <img src="/logo.svg" alt="Angels Radar Logo" className="h-8" />
            <span className=" text-[20px] leading-[30px] font-bold">Angels Radar</span>
          </div>

          <div className="flex items-center justify-center flex-col pb-[50px]">
            <h1 className="text-[30px] leading-[40px] font-[500] text-center text-color1 ">
            Welcome back
            </h1>
            <p className="text-center text-[18px] leading-[27px] text-color2 font-[450] ">
            Don’t have an account?{" "}
              <Link href="/auth/signup" className="text-primaryColor hover:underline">
                Sign up
              </Link>
            </p>
          </div>
          
        </div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />

            <div className="relative">
              <FormField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />
              <button
                type="button"
                className="absolute right-3 top-8 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                {...methods.register("terms")}
                className="mt-1 outline-none"
              />
              <label htmlFor="terms" className="ml-2 text-[14px] leading-[17px] text-color2">
                I agree to all statements included in{" "}
                <a href="#" className="text-primaryColor hover:underline">
                  Terms of Use
                </a>
              </label>
            </div>
            {methods.formState.errors.terms && (
              <p className="text-red-500 text-sm">
                {methods.formState.errors.terms.message}
              </p>
            )}

            <Button
              type="submit"
              variant="primary"
              disabled={isLoading || !termsAccepted}
              className="w-full hover:bg-[#052666] text-white py-2  transition-colors disabled:bg-primaryColor"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>

            <Button
              type="button"
              variant="secondary"
              className="w-full   py-2 px-4 rounded-md flex items-center justify-center space-x-2  transition-colors"
            >
              <img
                src="/google.svg"
                alt="Google logo"
                className="h-5 w-5"
              />
              <span>Sign up with Google</span>
            </Button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default LoginForm;
