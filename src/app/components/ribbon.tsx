"use client";
import React, { useEffect, useState } from "react";
import BatteryGauge from "react-battery-gauge";

type RibbonProps = {
  status: "idle" | "faulty" | "occupied";
  charging?: boolean;
  percentage?: number;
};

const Ribbon: React.FC<RibbonProps> = ({
  status,
  charging,
  percentage = 0,
}) => {
  const ribbonClass = `ribbon ribbon--${status}`;

  const heightStyle = {
    height: status === "occupied" ? "75%" : "100%",
  };

  return (
    <div className="ribbon-container">
      <div className={`ribbonbody ${ribbonClass}`} style={heightStyle}></div>

      {status === "occupied" && (
        <div className="charging">
          {charging ? (
            <>
              {percentage} %
              <BatteryGauge
                value={percentage}
                width={"300px"}
                height={"50%"}
                animated={true}
                charging={charging}
                customization={{
                  batteryBody: {
                    strokeWidth: 2,
                    cornerRadius: 5,
                    fill: "#ffc600",
                    strokeColor: "#000",
                  },
                  batteryCap: {
                    fill: "#000",
                    strokeWidth: 2,
                    strokeColor: "#000",
                  },
                  batteryMeter: {
                    noOfCells: 10,
                    lowBatteryValue: 15,
                    lowBatteryFill: "#ff0000",
                    fill: "#008557",
                    gradFill: [],
                  },
                  readingText: {
                    lightContrastColor: "#fff",
                    darkContrastColor: "#000",
                    fontFamily: "Arial",
                    fontSize: 24,
                  },
                }}
              ></BatteryGauge>
            </>
          ) : (
            <div>{percentage} %</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Ribbon;
