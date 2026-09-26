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

  const removeFromPlan = (bookId: number) => {
    setPlan((currentPlan) => {
      const updatedPlan = currentPlan.filter((book) => book.id !== bookId);

      localStorage.setItem("fitlog-plan", JSON.stringify(updatedPlan));

      toast.success("Workout removed from your plan.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      return updatedPlan;
    });
  };

  const saveForLater = (book: IBook) => {
    setSaved((currentSaved) => {
      const alreadySaved = currentSaved.some((item) => item.id === book.id);

      if (alreadySaved) {
        toast.error("This workout is already saved.");

        return currentSaved;
      }

      const updatedSaved = [...currentSaved, book];

      localStorage.setItem("fitlog-saved", JSON.stringify(updatedSaved));

      toast.success("Workout saved for later", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      return updatedSaved;
    });
  };

  const isInPlan = (bookId: number) => {
    return plan.some((book) => book.id === bookId);
  };

  const isSaved = (bookId: number) => {
    return saved.some((book) => book.id === bookId);
  };

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,

        addToPlan,
        removeFromPlan,

        saveForLater,

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
    throw new Error("usePlan must be used inside PlanProvider");
  }

  return context;
};

export default PlanContext;
