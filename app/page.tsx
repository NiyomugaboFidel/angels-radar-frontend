'use client'

import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";

export default function Home() {
  const [isActive, setIsActive] = useState("watchlist")
  return (
    <div className="w-full h-full  min-h-screen ">
      <div className="w-full h-full">
        <div className=" bg-white min-h-screen hidden lg:flex lg:w-1/5 h-full ">
          <Sidebar isActive={isActive} setIsActive={setIsActive} />
        </div>
      </div>
    </div>
  );
}
