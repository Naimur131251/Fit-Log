import React, { Suspense } from "react";
import { Inter } from "next/font/google";
import PlanWorkouts from "@/components/shared/PlanWorkouts";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MyPlanPage = () => {
  return (
    <div className="min-h-screen">
      <section className="container mx-auto mt-24 flex flex-col gap-6 px-4 sm:mt-28 sm:px-6 lg:mt-30 lg:px-8">
        <div>
          <h2 className="mb-2 text-2xl font-bold sm:text-3xl">MY PLAN</h2>

          <p className={`${inter.className} text-xs text-[#8A92A0] sm:text-sm`}>
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <PlanWorkouts />
          </Suspense>
        </div>
      </section>
    </div>
  );
};

export default MyPlanPage;
