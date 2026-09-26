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
    <div className={`${inter.className} flex items-center gap-2 sm:gap-4`}>
      {/* Plan */}
      <Link
        href="/my-plan?tab=plan"
        className="inline-flex items-center gap-1.5 text-xs text-[#D1D5DB] sm:gap-2"
      >
        Plan
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C2F800] text-[10px] font-bold text-black sm:h-6 sm:w-6 sm:text-xs">
          {plan.length}
        </span>
      </Link>

      {/* Saved */}
      <Link
        href="/my-plan?tab=saved"
        className="inline-flex items-center gap-1.5 text-xs text-[#9CA3AF] sm:gap-2"
      >
        Saved
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#2D313B] text-[10px] font-bold text-[#D1D5DB] sm:h-6 sm:w-6 sm:text-xs">
          {saved.length}
        </span>
      </Link>
    </div>
  );
};

export default PlanCounters;
