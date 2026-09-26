import React from "react";
import { Inter } from "next/font/google";
import PlanWorkouts from "@/components/shared/PlanWorkouts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MyPlanPage = () => {
  return (
    <div>
      <section className="flex flex-col gap-6 container mx-auto mt-30">
        <div>
          <h2 className="font-bold text-3xl mb-2">MY PLAN</h2>
          <p className={`${inter.className} text-sm text-[#8A92A0]`}>
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div>
          <PlanWorkouts />
        </div>
      </section>
    </div>
  );
};

export default MyPlanPage;