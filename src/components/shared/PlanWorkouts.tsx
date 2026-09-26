"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { usePlan } from "@/context/PlanContext";
import { IBook } from "@/types/bookstype";
import { Inter } from "next/font/google";
import Image from "next/image";
import RemoveFromPlanButton from "./RemoveFromPlanButton";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillFire } from "react-icons/ai";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import RemoveFromSavedButton from "./RemoveFromSavedButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const PlanWorkouts = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [sortBy, setSortBy] = useState("duration");

  const { plan = [], saved = [], loading } = usePlan();

  const tab = searchParams.get("tab");

  const activeTab = tab === "plan" ? "plan" : "saved";

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const sortedWorkouts = [...currentWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }

    if (sortBy === "equipment") {
      return a.equipment.localeCompare(b.equipment);
    }

    return 0;
  });

  const handleTabChange = (newTab: "plan" | "saved") => {
    router.push(`/my-plan?tab=${newTab}`);
  };

  const totalWorkouts = currentWorkouts.length;

  const totalDuration = currentWorkouts.reduce(
    (total, book) => total + book.duration,
    0,
  );

  const totalCalories = currentWorkouts.reduce(
    (total, book) => total + book.caloriesBurned,
    0,
  );

  return (
    <section className="flex flex-col gap-6">
      {/* Statistics */}
      <div className="bg-[#13161D] border border-[#232732] p-4 pt-6 sm:p-6 sm:pt-8.5 rounded-2xl grid grid-cols-3">
        <div className="min-w-0">
          <p
            className={`${inter.className} font-sans text-[#8A92A0] text-[10px] sm:text-xs`}
          >
            Exercises
          </p>
          <p className="text-[#CCFF00] font-bold text-2xl sm:text-4xl">
            {totalWorkouts}
          </p>
        </div>

        <div className="border border-l-[#232732] border-y-0 border-r-0 pl-3 sm:pl-8">
          <p
            className={`${inter.className} font-sans text-[#8A92A0] text-[10px] sm:text-xs`}
          >
            Minutes
          </p>
          <p className="font-bold text-2xl sm:text-4xl">{totalDuration}</p>
        </div>

        <div className="border border-l-[#232732] border-y-0 border-r-0 pl-3 sm:pl-8">
          <p
            className={`${inter.className} font-sans text-[#8A92A0] text-[10px] sm:text-xs`}
          >
            Calories
          </p>
          <p className="font-bold text-2xl sm:text-4xl">{totalCalories}</p>
        </div>
      </div>

      {/* Tabs and Sort */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <div
          className={`${inter.className} bg-[#151921] border border-[#232732] rounded-xl p-1 gap-1 text-xs flex w-full sm:w-fit`}
        >
          <button
            onClick={() => handleTabChange("plan")}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 rounded-lg cursor-pointer ${
              activeTab === "plan"
                ? "bg-[#1F242D] border border-[#2B303D] text-white"
                : "text-[#8A92A0]"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => handleTabChange("saved")}
            className={`flex-1 sm:flex-none px-3 sm:px-4 py-1.5 rounded-lg cursor-pointer ${
              activeTab === "saved"
                ? "bg-[#1F242D] border border-[#2B303D] text-white"
                : "text-[#8A92A0]"
            }`}
          >
            Saved
          </button>
        </div>

        {/* Sort */}
        <div
          className={`${inter.className} relative flex items-center gap-2 sm:gap-3 text-xs`}
        >
          <span className="text-[#8A92A0] sm:px-2 py-1.5">Sort By</span>

          <div className="relative flex-1 sm:flex-none">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#13161D] border border-[#232732] cursor-pointer text-white rounded-lg w-full sm:w-32 h-8.5 appearance-none pl-3 pr-8"
            >
              <option value="duration">Duration</option>
              <option value="name">Name</option>
              <option value="calories">Calories</option>
              <option value="equipment">Equipment</option>
              <option value="rating">Rating</option>
            </select>

            <IoIosArrowDown className="pointer-events-none absolute right-3 top-2.5 text-sm" />
          </div>
        </div>
      </div>

      {/* Empty State */}
      {loading ? (
        <div className="border border-dashed border-[#474747] rounded-xl bg-[#111317] px-4 py-16 sm:py-24.5 flex flex-col justify-center items-center text-center">
          <p className={`${inter.className} text-xs text-[#A1A1AA]`}>
            Loading workouts…
          </p>
        </div>
      ) : currentWorkouts.length === 0 ? (
        <div className="border border-dashed border-[#474747] rounded-xl bg-[#111317] px-4 py-16 sm:py-24.5 flex flex-col justify-center items-center text-center">
          <h2 className="text-lg sm:text-[20px] font-bold">NOTHING HERE YET</h2>

          <p className={`${inter.className} text-xs text-[#A1A1AA] mt-2`}>
            Browse the library and add a lift to get today moving.
          </p>

          <Link
            href="/"
            className="bg-[#C2F10D] text-black font-semibold text-xs mt-6 px-6 py-2.5 rounded-full"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {sortedWorkouts.map((book: IBook) => (
            <div key={book.id}>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 bg-[#14171E] border border-[#232732] rounded-2xl">
                {/* Workout Details */}
                <div className="flex min-w-0 gap-3 sm:gap-4">
                  <Image
                    src={book.image}
                    alt={book.name}
                    width={144}
                    height={80}
                    className="w-24 h-20 sm:w-36 sm:h-20 shrink-0 object-cover rounded-xl"
                  />

                  <div className="min-w-0 space-y-2">
                    <h2 className="font-bold text-sm sm:text-[16px] wrap-break-word">
                      {book.name}
                    </h2>

                    <p
                      className={`${inter.className} font-semibold text-xs text-[#8A92A0]`}
                    >
                      {book.equipment}
                    </p>

                    <p
                      className={`${inter.className} text-xs text-[#CCFF00] flex flex-wrap items-center gap-y-2`}
                    >
                      <FaRegClock className="mr-1 shrink-0" />

                      <span className="text-[#D1D5DB] mr-3">
                        {book.duration} min
                      </span>

                      <AiFillFire className="rotate-y-180 mr-1 shrink-0" />

                      <span className="text-[#D1D5DB] mr-3">
                        {book.caloriesBurned} kcal
                      </span>

                      <FaRegStar className="mr-1 shrink-0" />

                      <span className="text-[#D1D5DB]">{book.rating}</span>
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div
                  className={`${inter.className} text-xs flex flex-wrap gap-2 sm:gap-3 items-center sm:shrink-0`}
                >
                  <Link
                    href={`/book-details/${book.id}`}
                    className="flex-1 sm:flex-none text-center border border-[#374151] rounded-full px-4 sm:px-6 py-2.5 sm:py-3"
                  >
                    View Details
                  </Link>

                  {activeTab === "plan" ? (
                    <RemoveFromPlanButton bookId={book.id} showMarkAsDone />
                  ) : (
                    <RemoveFromSavedButton bookId={book.id} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PlanWorkouts;
