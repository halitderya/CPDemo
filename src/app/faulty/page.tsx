"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Ribbon from "../components/ribbon";
import AutoCycleImageGallery from "../components/ad";

const ChargingPage: React.FC = () => {
  const searchParams = useSearchParams();

  return (
    <div className="mainlayout">
      <Ribbon status="faulty" />
      <AutoCycleImageGallery />
    </div>
  );
};

export default ChargingPage;
