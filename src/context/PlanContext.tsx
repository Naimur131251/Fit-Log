"use client";

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { Bounce, toast } from "react-toastify";

import { IBook } from "@/types/bookstype";

interface IPlanContext {
  plan: IBook[];
  saved: IBook[];

  addToPlan: (book: IBook) => void;
  removeFromPlan: (bookId: number) => void;

  saveForLater: (book: IBook) => void;
  removeFromSaved: (bookId: number) => void;

  isInPlan: (bookId: number) => boolean;
  isSaved: (bookId: number) => boolean;
}

const PlanContext = createContext<IPlanContext | undefined>(undefined);

interface IPlanProvider {
  children: ReactNode;
}

export const PlanProvider = ({ children }: IPlanProvider) => {
  const [plan, setPlan] = useState<IBook[]>([]);
  const [saved, setSaved] = useState<IBook[]>([]);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlan(storedPlan ? JSON.parse(storedPlan) : []);
      setSaved(storedSaved ? JSON.parse(storedSaved) : []);
    } catch {
      setPlan([]);
      setSaved([]);
    }
  }, []);

  const addToPlan = (book: IBook) => {
    const alreadyAdded = plan.some(
      (item) => item.id === book.id,
    );

    if (alreadyAdded) {
      toast.error(
        "❌ This workout is already in your plan!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        },
      );

      return;
    }

    const updatedPlan = [...plan, book];

    setPlan(updatedPlan);

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(updatedPlan),
    );

    toast.success(
      "Workout added to today's plan!",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      },
    );
  };

  const removeFromPlan = (bookId: number) => {
    const updatedPlan = plan.filter(
      (book) => book.id !== bookId,
    );

    setPlan(updatedPlan);

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(updatedPlan),
    );

    toast.success(
      "Workout removed from your plan.",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      },
    );
  };

  const saveForLater = (book: IBook) => {
    const alreadySaved = saved.some(
      (item) => item.id === book.id,
    );

    if (alreadySaved) {
      toast.error(
        "This workout is already saved.",
        {
          position: "top-right",
          autoClose: 5000,
          theme: "colored",
          transition: Bounce,
        },
      );

      return;
    }

    const updatedSaved = [...saved, book];

    setSaved(updatedSaved);

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(updatedSaved),
    );

    toast.success(
      "Workout saved for later!",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      },
    );
  };

  const removeFromSaved = (bookId: number) => {
    const updatedSaved = saved.filter(
      (book) => book.id !== bookId,
    );

    setSaved(updatedSaved);

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(updatedSaved),
    );

    toast.success(
      "Workout removed from saved.",
      {
        position: "top-right",
        autoClose: 5000,
        transition: Bounce,
      },
    );
  };

  const isInPlan = (bookId: number) => {
    return plan.some(
      (book) => book.id === bookId,
    );
  };

  const isSaved = (bookId: number) => {
    return saved.some(
      (book) => book.id === bookId,
    );
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,

        addToPlan,
        removeFromPlan,

        saveForLater,
        removeFromSaved,

        isInPlan,
        isSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error(
      "usePlan must be used inside PlanProvider",
    );
  }

  return context;
};

export default PlanContext;