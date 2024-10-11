"use client";

import React from "react";
import Ribbon from "../components/ribbon";
import AutoCycleImageGallery from "../components/ad";

const IdlePage: React.FC = () => {
  return (
    <div className="mainlayout">
      <Ribbon status={"idle"} />
      <AutoCycleImageGallery />
    </div>
  );
};

export default IdlePage;
