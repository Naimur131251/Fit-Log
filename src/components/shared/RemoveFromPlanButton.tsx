"use client";

import React from "react";

import { usePlan } from "@/context/PlanContext";

interface IRemoveFromPlanButton {
  bookId: number;
  showMarkAsDone?: boolean;
}

const RemoveFromPlanButton = ({
  bookId,
  showMarkAsDone = true,
}: IRemoveFromPlanButton) => {
  const { removeFromPlan } = usePlan();

  const handleRemove = () => {
    removeFromPlan(bookId);
  };

  return (
    <>
      {showMarkAsDone && (
        <button
          type="button"
          onClick={handleRemove}
          className="font-semibold text-black bg-[#CCFF00] rounded-full px-6 py-3 cursor-pointer"
        >
          ✔ Mark as Done
        </button>
      )}
      <button type="button" onClick={handleRemove} className="cursor-pointer">
        ❌
      </button>
    </>
  );
};

export default RemoveFromPlanButton;
