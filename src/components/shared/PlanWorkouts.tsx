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

  const { plan = [], saved = [] } = usePlan();

  const tab = searchParams.get("tab");

  const activeTab = tab === "saved" ? "saved" : "plan";

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
      <div className="bg-[#13161D] border border-[#232732] p-6 pt-8.5 rounded-2xl grid grid-cols-3">
        <div>
          <p className={`${inter.className} font-sans text-[#8A92A0] text-xs`}>
            Exercises
          </p>
          <p className="text-[#CCFF00] font-bold text-4xl">{totalWorkouts}</p>
        </div>
        <div className="border border-l-[#232732] border-y-0 border-r-0 pl-8">
          <p className={`${inter.className} font-sans text-[#8A92A0] text-xs`}>
            Minutes
          </p>
          <p className="font-bold text-4xl">{totalDuration}</p>
        </div>
        <div className="border border-l-[#232732] border-y-0 border-r-0 pl-8">
          <p className={`${inter.className} font-sans text-[#8A92A0] text-xs`}>
            Calories
          </p>
          <p className="font-bold text-4xl">{totalCalories}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div
          className={`${inter.className} bg-[#151921] border border-[#232732] rounded-xl p-1 gap-1 text-xs`}
        >
          {/* <button className="text-[#8A92A0] px-4 py-1.5">Todays Plan</button> */}
          <button
            onClick={() => handleTabChange("plan")}
            className={`px-4 py-1.5 rounded-lg cursor-pointer ${
              activeTab === "plan"
                ? "bg-[#1F242D] border border-[#2B303D] text-white"
                : "text-[#8A92A0]"
            }`}
          >
            Todays Plan
          </button>
          {/* <button className="bg-[#1F242D] border border-[#2B303D] text-white rounded-lg px-4 py-1.5">
            Saved
          </button> */}
          <button
            onClick={() => handleTabChange("saved")}
            className={`px-4 py-1.5 rounded-lg cursor-pointer ${
              activeTab === "saved"
                ? "bg-[#1F242D] border border-[#2B303D] text-white"
                : "text-[#8A92A0]"
            }`}
          >
            Saved
          </button>
        </div>

        <div className={`${inter.className} relative gap-3 text-xs`}>
          <span className="text-[#8A92A0] px-4 py-1.5">Sort By</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#13161D] border border-[#232732] cursor-pointer text-white rounded-lg w-24 h-8.5 appearance-none pl-3"
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

      {currentWorkouts.length === 0 ? (
        <div className="border border-dashed border-[#474747] rounded-xl bg-[#111317] py-24.5 flex flex-col justify-center items-center">
          <h2 className="text-[20px] font-bold">NOTHING HERE YET</h2>

          <p className={`${inter.className} text-xs text-[#A1A1AA]`}>
            Browse the library and add a lift to get today moving.
            {/* {activeTab === "plan"
              ? "Browse the library and add a lift to get today moving."
              : "Save worouts that you want to try later."} */}
          </p>

          {activeTab === "plan" && (
            <Link
              href="/"
              className="bg-[#C2F10D] text-black font-semibold text-xs mt-6 px-6 py-2.5 rounded-full"
            >
              Go to workouts
            </Link>
          )}
        </div>
      ) : (
        <div className="flex flex-col">
          {sortedWorkouts.map((book: IBook) => (
            <div key={book.id}>
              {/* <BookCard book={book} /> */}
              <div className="flex justify-between items-center p-4 bg-[#14171E] border border-[#232732] rounded-2xl">
                <div className="flex gap-4">
                  <Image
                    src={book.image}
                    alt={book.name}
                    width={144}
                    height={80}
                    className="h-20 object-cover rounded-xl"
                  />
                  <div className="space-y-2">
                    <h2 className="font-bold text-[16px]">{book.name}</h2>
                    <p
                      className={`${inter.className} font-semibold text-xs text-[#8A92A0]`}
                    >
                      {book.equipment}
                    </p>
                    <p
                      className={`${inter.className} text-xs text-[#CCFF00] flex items-center`}
                    >
                      <FaRegClock className="mr-1" />
                      <span className="text-[#D1D5DB] mr-3">
                        {book.duration} min
                      </span>
                      <AiFillFire className="rotate-y-180 mr-1" />
                      <span className="text-[#D1D5DB] mr-3">
                        {book.caloriesBurned} kcal
                      </span>
                      <FaRegStar className="mr-1 " />
                      <span className="text-[#D1D5DB]">{book.rating}</span>
                    </p>
                  </div>
                </div>
                <div
                  className={`${inter.className} text-xs flex gap-3 h-8.5 items-center`}
                >
                  <Link
                    href={`/book-details/${book.id}`}
                    className="border border-[#374151] rounded-full px-6 py-3"
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
