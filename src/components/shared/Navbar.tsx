"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import { Inter } from "next/font/google";
import PlanCounters from "./PlanCounters";
import { usePathname } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  const pathname = usePathname();

  const isWorkoutsActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  const Links = (
    <>
      <li>
        <Link
          href="/"
          className={`rounded-full px-4 py-2 ${
            isWorkoutsActive
              ? "bg-[#1A2312] text-[#C2F800]"
              : "text-[#9CA3AF] hover:text-white"
          }`}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className={`rounded-full px-4 py-2 ${
            isMyPlanActive
              ? "bg-[#1A2312] text-[#C2F800]"
              : "text-[#9CA3AF] hover:text-white"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b-2 border-[#1C1F26] bg-[#0F1115]">
      <div className="navbar container mx-auto min-h-16 px-3 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className={`${inter.className} menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box border border-[#232834] bg-[#151922] p-2 text-xs shadow-lg`}
            >
              {Links}
            </ul>
          </div>

          {/* Logo */}
          <Link
            href="/"
            className="btn btn-ghost flex items-center gap-2 px-1 text-base font-bold sm:text-xl"
          >
            <Image
              src={Logo}
              alt="FitLog Logo"
              className="h-8 w-8 object-contain sm:h-10 sm:w-10"
            />
            FITLOG
          </Link>
        </div>

        {/* Center - Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`${inter.className} menu menu-horizontal gap-2 px-1 text-xs`}
          >
            {Links}
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <PlanCounters />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;