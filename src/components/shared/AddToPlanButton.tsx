"use client";

import React from "react";

import { IBook } from "@/types/bookstype";
import { usePlan } from "@/context/PlanContext";
import { LuCalendarPlus2 } from "react-icons/lu";

interface IAddToPlanButton {
  book: IBook;
}

const AddToPlanButton = ({ book }: IAddToPlanButton) => {
  const { addToPlan, isInPlan } = usePlan();

  const alreadyInPlan = isInPlan(book.id);

  return (
    <button
      onClick={() => addToPlan(book)}
      disabled={alreadyInPlan}
      className={`rounded-lg px-4 py-2 text-xs font-bold flex items-center gap-1.5 transition ${
        alreadyInPlan
          ? "cursor-not-allowed bg-[#2B3038] text-[#8A92A0]"
          : "bg-[#C2F800] text-black hover:opacity-90 cursor-pointer"
      }`}
    >
      {alreadyInPlan ? (
        "Added to plan ✔"
      ) : (
        <>
          <LuCalendarPlus2 className="text-[16px] mb-0.5" />
          Add to today&apos;s plan
        </>
      )}
    </button>
  );
};

export default AddToPlanButton;
