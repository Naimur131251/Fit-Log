"use client";

import React from "react";

import { IBook } from "@/types/bookstype";
import { usePlan } from "@/context/PlanContext";
import { FaRegBookmark } from "react-icons/fa";

interface ISaveForLaterButton {
  book: IBook;
}

const SaveForLaterButton = ({ book }: ISaveForLaterButton) => {
  const { saveForLater, isSaved } = usePlan();

  const alreadySaved = isSaved(book.id);

  return (
    <button
      type="button"
      onClick={() => saveForLater(book)}
      disabled={alreadySaved}
      className={`rounded-lg px-6 py-3 flex items-center gap-1.5 ${
        alreadySaved
          ? "cursor-not-allowed bg-[#2B3038] text-[#8A92A0]"
          : "text-[#E5E7EB] font-medium border border-[#374151] cursor-pointer"
      }`}
    >
      {alreadySaved ? (
        "Saved ✔"
      ) : (
        <>
          <FaRegBookmark />
          Save for later
        </>
      )}
    </button>
  );
};

export default SaveForLaterButton;
