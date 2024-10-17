"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Ribbon from "../components/ribbon";
import AutoCycleImageGallery from "../components/ad";

const ChargingPage: React.FC = () => {
  const searchParams = useSearchParams();

  const status = searchParams.get("status") as "idle" | "faulty" | "occupied";
  const charging = searchParams.get("charging") === "true";
  const percentage = Number(searchParams.get("percentage")) || 0;

  return (
    <div className="mainlayout">
      <Ribbon status={status} charging={charging} percentage={percentage} />
      <AutoCycleImageGallery />
    </div>
  );
};

const ChargingPageWithSuspense = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ChargingPage />
  </Suspense>
);

export default ChargingPageWithSuspense;
