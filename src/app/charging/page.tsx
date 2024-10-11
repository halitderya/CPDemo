"use client";

import React from "react";
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

export default ChargingPage;
