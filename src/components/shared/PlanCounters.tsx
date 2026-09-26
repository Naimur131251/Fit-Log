"use client";

import React from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const PlanCounters = () => {
  const { plan, saved } = usePlan();

  return (
    <div className="flex items-center gap-4">
      <Link
        href="/my-plan?tab=plan"
        className={`${inter.className} text-[#D1D5DB] text-xs mr-3 inline-flex items-center gap-1.5`}
      >
        Plan{" "}
        <span className="text-black bg-[#C2F800] rounded-full inline-flex w-5 h-5 justify-center items-center font-bold align-middle">
          {plan.length}
        </span>
      </Link>

      <Link
        href="/my-plan?tab=saved"
        className={`${inter.className} text-[#9CA3AF] text-xs mr-3 inline-flex items-center gap-1.5 ml-2`}
      >
        Saved{" "}
        <span className="text-[#D1D5DB] border border-[#2D313B] rounded-full inline-flex w-6 h-6 justify-center items-center font-bold align-middle">
          {saved.length}
        </span>
      </Link>
    </div>
  );
};

export default PlanCounters;
