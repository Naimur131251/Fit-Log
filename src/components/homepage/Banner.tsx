import React from "react";
import BannerImage from "@/assets/banner.png";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Banner = () => {
  return (
    <div className="container mx-auto mt-24 px-4 sm:mt-28 sm:px-6 lg:mt-32 lg:px-8">
      <section className="flex flex-col items-center gap-8 rounded-xl border border-[#222630] bg-[#15171D] p-5 sm:p-8 md:p-10 lg:flex-row lg:justify-between lg:gap-12 lg:p-14">
        {/* Left Content */}
        <div className="w-full space-y-5 lg:w-1/2">
          <p
            className={`${inter.className} text-xs font-bold uppercase tracking-wider text-[#C2F800]`}
          >
            Workout Library
          </p>

          <h1 className="max-w-125 lg:min-w-150 text-3xl font-bold uppercase text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Train with intent. Log every set.
          </h1>

          <p
            className={`${inter.className} max-w-105 lg:min-w-130 text-sm leading-relaxed tracking-wide text-[#9CA3AF] sm:text-base`}
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the weeks&apos; work add up.
          </p>

          <button
            className={`${inter.className} rounded-md bg-[#C2F800] px-6 py-3 text-xs font-bold uppercase text-black transition hover:opacity-90`}
          >
            Browse Workouts
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={BannerImage}
            alt="Banner"
            priority
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
