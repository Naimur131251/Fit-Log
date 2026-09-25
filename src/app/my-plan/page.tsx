import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MyPlanPage = () => {
  return (
    <div>
      <section className="flex flex-col gap-6 container mx-auto mt-10">
        <div>
          <h2 className="font-bold text-3xl mb-2">MY PLAN</h2>
          <p className={`${inter.className} text-sm text-[#8A92A0]`}>
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div className="bg-[#13161D] border border-[#232732] p-6 pt-8.5 rounded-2xl grid grid-cols-3">
          <div>
            <p
              className={`${inter.className} font-sans text-[#8A92A0] text-xs`}
            >
              Exercises
            </p>
            <p className="text-[#CCFF00] font-bold text-4xl">2</p>
          </div>
          <div className="border border-l-[#232732] border-y-0 border-r-0 pl-8">
            <p
              className={`${inter.className} font-sans text-[#8A92A0] text-xs`}
            >
              Minutes
            </p>
            <p className="font-bold text-4xl">23</p>
          </div>
          <div className="border border-l-[#232732] border-y-0 border-r-0 pl-8">
            <p
              className={`${inter.className} font-sans text-[#8A92A0] text-xs`}
            >
              Calories
            </p>
            <p className="font-bold text-4xl">190</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div
            className={`${inter.className} bg-[#151921] border border-[#232732] rounded-xl p-1 gap-1 text-xs`}
          >
            <button className="text-[#8A92A0] px-4 py-1.5">Todays Plan</button>
            <button className="bg-[#1F242D] border border-[#2B303D] text-white rounded-lg px-4 py-1.5">
              Saved
            </button>
          </div>

          <div className={`${inter.className} gap-3 text-xs`}>
            <span className="text-[#8A92A0] px-4 py-1.5">Sort By</span>
            <select className="bg-[#13161D] border border-[#232732] text-white rounded-lg w-23.5 h-8.5 appearance-none text-center">
              <option value="">Duration 🔻</option>
            </select>
          </div>
        </div>

        <div className="border border-dashed border-[#474747] rounded-xl bg-[#111317] py-24.5 flex flex-col justify-center items-center">
          <h2 className="text-[20px] font-bold">NOTHING HERE YET</h2>
          <p className={`${inter.className} text-xs text-[#A1A1AA]`}>
            Browse the library and add a lift to get today moving.
          </p>
          <button
            className={`${inter.className} bg-[#C2F10D] text-black font-semibold text-xs mt-6 px-6 py-2.5 rounded-full`}
          >
            Go to workouts
          </button>
        </div>
      </section>
    </div>
  );
};

export default MyPlanPage;