"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Ribbon from "../components/ribbon";
import AutoCycleImageGallery from "../components/ad";
import Faulty from "../components/faulty";

const ChargingPage: React.FC = () => {
  const searchParams = useSearchParams();

  return (
    <div className="mainlayout">
      <Ribbon status="faulty" />
      <Faulty></Faulty>
    </div>
  );
};

export default ChargingPage;
