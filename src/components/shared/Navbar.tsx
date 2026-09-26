'use client';

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
    // <nav className="border border-t-0 border-l-0 border-r-0 border-b-[#1C1F26] border-b-2 ">
    <nav className="fixed top-0 left-0 z-999 w-full border border-t-0 border-x-0 border-b-[#1C1F26] border-b-2 bg-[#0F1115]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className={`${inter.className} menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-xs`}
            >
              {Links}
            </ul>
          </div>

          <div className="flex items-center text-xl">
            <Link href="/" className="btn btn-ghost text-xl">
              <Image src={Logo} alt="Logo" /> FITLOG
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`${inter.className} menu menu-horizontal px-1 text-xs`}
          >
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
          <PlanCounters />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
