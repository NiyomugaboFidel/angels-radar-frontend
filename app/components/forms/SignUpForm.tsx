"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeOff } from "lucide-react";
import SignupValidationSchema from "@/app/validation/SignupValidationSchema";
import FormField from "../common/InputField";
import Button from "../common/Button";
import useSignup from "@/app/hooks/users/useSignup";
import Image from "next/image";


interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}


const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: signup, isPending } = useSignup();
  const isLoading = isPending;
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
    console.log("Form Data:", data);
    signup(data);
  };

  return (
    <div className=" bg-white min-h-[70vh] w-full md:w-[440px] rounded-[10px] p-[30px]">
      <div className="w-full h-full">
        <div className="flex items-center justify-center flex-col gap-[20px]">
          {/* Logo */}
          <div className="flex justify-center items-center gap-1 ">
            <Image width={50} height={50} src="/logo.svg" alt="Angels Radar Logo" className="" />
            <span className=" text-[20px] leading-[30px] font-bold">Angels Radar</span>
          </div>

          <div className="flex items-center justify-center flex-col pb-[50px]">
            <h1 className="text-[30px] leading-[40px] font-[500] text-center text-color1 ">
              Create an account
            </h1>
            <p className="text-center text-[18px] leading-[27px] text-color2 font-[450] ">
              Already joined?{" "}
              <Link href="/auth/login" className="text-primaryColor hover:underline">
                Sign in
              </Link>
            </p>
          </div>
          
        </div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="First name" name="firstName" placeholder="Enter your first name" />
              <FormField label="Last name" name="lastName" placeholder="Enter your last name" />
            </div>

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
              {isLoading ? "Signing up..." : "Sign up"}
            </Button>

            <Button
              type="button"
              variant="secondary"
              className="w-full   py-2 px-4 rounded-md flex items-center justify-center space-x-2  transition-colors"
            >
              <Image
               width={20}
               height={20}
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

export default SignUpForm;
