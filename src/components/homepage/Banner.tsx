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
    <div className="container mx-auto mt-32">
      <section className="flex items-center justify-between p-14 rounded-xl border border-[#222630] bg-[#15171D]">
        {/* Left Content */}
        <div className="space-y-5">
          <p
            className={`${inter.className} text-xs font-bold uppercase tracking-wider text-[#C2F800]`}
          >
            Workout Library
          </p>

          <h1 className="max-w-125 text-6xl font-bold uppercase text-white sm:text-5xl">
            Train with intent. Log every set.
          </h1>

          <p
            className={`${inter.className} max-w-105 text-[16px] tracking-wider leading-relaxed text-[#9CA3AF] sm:text-xs`}
          >
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into todays plan, and watch the weeks work add up.
          </p>

          <button
            className={`${inter.className} rounded-md bg-[#C2F800] px-6 py-3 text-xs font-bold uppercase text-black`}
          >
            Browse Workouts
          </button>
        </div>

        {/* Right Image */}
        <div>
          <Image src={BannerImage} alt="Banner" />
        </div>
      </section>
    </div>
  );
};

export default Banner;
