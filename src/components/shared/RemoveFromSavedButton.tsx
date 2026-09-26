"use client";

import React from "react";
import { usePlan } from "@/context/PlanContext";
import { RxCross2 } from "react-icons/rx";

interface IRemoveFromSavedButton {
  bookId: number;
}

const RemoveFromSavedButton = ({ bookId }: IRemoveFromSavedButton) => {
  const { removeFromSaved } = usePlan();

  const handleRemove = () => {
    removeFromSaved(bookId);
  };

  return (
    <button type="button" onClick={handleRemove} className="cursor-pointer">
      <RxCross2 className="text-[#6B7280] text-lg" />
    </button>
  );
};

export default RemoveFromSavedButton;
