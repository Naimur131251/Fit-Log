"use client";

import React from "react";

import { IBook } from "@/types/bookstype";
import { usePlan } from "@/context/PlanContext";

interface IAddToPlanButton {
  book: IBook;
}

const AddToPlanButton = ({
  book,
}: IAddToPlanButton) => {
  const {
    addToPlan,
    isInPlan,
  } = usePlan();

  const alreadyInPlan =
    isInPlan(book.id);

  return (
    <button
      onClick={() => addToPlan(book)}
      disabled={alreadyInPlan}
      className={`rounded-lg px-4 py-2 text-xs font-bold uppercase transition ${
        alreadyInPlan
          ? "cursor-not-allowed bg-[#2B3038] text-[#8A92A0]"
          : "bg-[#C2F800] text-black hover:opacity-90 cursor-pointer"
      }`}
    >
      {alreadyInPlan
        ? "Added to plan ✔"
        : "💭 Add to todays plan"}
    </button>
  );
};

export default AddToPlanButton;