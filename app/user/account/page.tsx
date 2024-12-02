"use client"; // Ensures this is a client-side component

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

import { useRouter } from "next/navigation";
import AccountInvestor from "@/app/components/Account/AccountInvestor";
import AccountFounder from "@/app/components/Account/AccountFounder";
import Loading from "@/app/components/common/loading";

const Page = () => {
  const [role, setRole] = useState<string | undefined>(undefined); // State to track role
  const router = useRouter();

  useEffect(() => {
    const userRole = Cookies.get("role");
    setRole(userRole);

    if (!userRole) {
 
      router.push("/auth/user");
    }
  }, [router]);

  if (role === undefined) {
    return <div>
      <Loading />
    </div>;
  }

  if (role === "investor") {
    return <AccountInvestor />;
  }

  if (role === "owner") {
    return <AccountFounder />
  }


  return <div>Error: Invalid role</div>;
};

export default Page;
