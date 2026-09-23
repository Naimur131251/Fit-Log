import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/logo.png";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  const Links = (
    <>
      <li>
        <Link href="/" className="text-[#C2F800] bg-[#1A2312] rounded-full px-4">Workouts</Link>
      </li>
      <li>
        <Link href="/" className="text-[#9CA3AF]">My Plan</Link>
      </li>
    </>
  );

  return (
    <nav className="border border-t-0 border-l-0 border-r-0 border-b-[#1C1F26] border-b-2">
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
          <ul className={`${inter.className} menu menu-horizontal px-1 text-xs`}>{Links}</ul>
        </div>
        <div className="navbar-end">
          <button 
            className={`${inter.className} text-[#D1D5DB] text-xs mr-3 inline-flex items-center gap-1.5`}
          >Plan 
            <span 
              className="text-black bg-[#C2F800] rounded-full inline-flex w-5 h-5 justify-center items-center font-bold align-middle"
            >0</span>
          </button>
          <button 
            className={`${inter.className} text-[#9CA3AF] text-xs mr-3 inline-flex items-center gap-1.5 ml-2`}
          >Saved
            <span 
              className="text-[#D1D5DB] border border-[#2D313B] rounded-full inline-flex w-6 h-6 justify-center items-center font-bold align-middle"
            >0</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;