"use client";

import React from "react";

import { usePlan } from "@/context/PlanContext";

interface IRemoveFromSavedButton {
  bookId: number;
}

const RemoveFromSavedButton = ({ bookId }: IRemoveFromSavedButton) => {
  const { removeFromSaved } = usePlan();

  const handleRemove = () => {
    removeFromSaved(bookId);
  };

  return (
    <button
      type="button"
      onClick={handleRemove}
      className="rounded-lg border border-[#374151] px-4 py-2 text-xs font-semibold uppercase text-[#9CA3AF] transition hover:border-red-500 hover:text-red-500"
    >
      Remove
    </button>
  );
};

export default RemoveFromSavedButton;
