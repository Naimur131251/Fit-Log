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

const Footer = () => {
  return (
    <footer className="bg-[#090A0D] mt-9 py-10 border border-x-0 border-b-0 border-t-[#1A1D24]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src={Logo} alt="Logo" className="-rotate-45 mr-2" /> FITLOG
          </Link>
        </div>
        <p className={`${inter.className} text-xs text-[#6B7280]`}>
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
