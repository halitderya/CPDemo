"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Ribbon from "../components/ribbon";
import Faulty from "../components/faulty";

const ChargingPage: React.FC = () => {
  return (
    <div className="mainlayout">
      <Ribbon status="faulty" />
      <Faulty></Faulty>
    </div>
  );
};

export default ChargingPage;
