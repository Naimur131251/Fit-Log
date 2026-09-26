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
    <footer className="mt-9 border-t border-[#1A1D24] bg-[#090A0D] py-8 sm:py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold sm:text-xl"
        >
          <Image
            src={Logo}
            alt="FitLog Logo"
            className="h-8 w-8 -rotate-45 object-contain sm:h-10 sm:w-10"
          />
          FITLOG
        </Link>

        {/* Copyright */}
        <p
          className={`${inter.className} text-xs leading-relaxed text-[#6B7280]`}
        >
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
