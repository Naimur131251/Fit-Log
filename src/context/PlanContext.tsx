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

  addToPlan: (book: IBook) => void;

  isInPlan: (bookId: number) => boolean;
}

const PlanContext = createContext<IPlanContext | undefined>(undefined);

interface IPlanProvider {
  children: ReactNode;
}

export const PlanProvider = ({ children }: IPlanProvider) => {
  const [plan, setPlan] = useState<IBook[]>([]);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPlan(storedPlan ? JSON.parse(storedPlan) : []);
    } catch {
      setPlan([]);
    }
  }, []);

  const addToPlan = (book: IBook) => {
    setPlan((currentPlan) => {
      const alreadyAdded = currentPlan.some((item) => item.id === book.id);

      if (alreadyAdded) {
        toast("❌ This workout is already in your plan!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });

        return currentPlan;
      }

      const updatedPlan = [...currentPlan, book];

      localStorage.setItem("fitlog-plan", JSON.stringify(updatedPlan));

      toast.success("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });

      return updatedPlan;
    });
  };

  const isInPlan = (bookId: number) => {
    return plan.some((book) => book.id === bookId);
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        addToPlan,
        isInPlan,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);

  if (!context) {
    throw new Error("usePlan must be used inside PlanProvider");
  }

  return context;
};

export default PlanContext;
