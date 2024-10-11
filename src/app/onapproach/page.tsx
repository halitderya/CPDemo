"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import Ribbon from "../components/ribbon";
import OnApproachComponent from "../components/onapproach";

const OnApproach: React.FC = () => {
  return (
    <div className="mainlayout">
      <Ribbon status={"idle"} />
      <OnApproachComponent></OnApproachComponent>
    </div>
  );
};

export default OnApproach;
