"use client";

import { ArrowRightLeft } from "lucide-react";
import { useState } from "react";
import FxImage from "./fx-image";
import { firstFxData, secondFxData } from "@/data/fxRate-data";
import "./fx-rate.css";

export default function FxRate() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-5 font-sans">
      <div className="pt-5 px-6 bg-white border-1 rounded-lg mx-auto">
        <div className="flex items-center">
          <h2 className="font-semibold text-primary mb-4">FX Rates</h2>
        </div>
        <div
          className="relative overflow-hidden w-full h-[80px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`marquee flex items-center gap-4 absolute top-0 ${
              isHovered ? "marquee-paused" : ""
            }`}
            style={{ width: "max-content" }}
          >
            {secondFxData.length > 0 ? (
              <>
                {secondFxData.map((data, index) => (
                  <div
                    key={data.country}
                    className="flex-shrink-0 px-3 py-2 flex items-center justify-center space-x-2 rounded-lg bg-muted-foreground/15 min-w-[200px]"
                  >
                    <FxImage
                      first={[firstFxData[index % firstFxData.length]]}
                      second={[data]}
                    />

                    {firstFxData.length > 0 ? (
                      <div className="flex flex-col justify-center text-xs sm:text-sm">
                        <p className="text-neutral-500/75 font-sans">
                          {firstFxData[index % firstFxData.length].currency}
                        </p>
                        <strong>
                          {firstFxData[index % firstFxData.length].symbol}
                          {firstFxData[
                            index % firstFxData.length
                          ].amount.toLocaleString()}
                        </strong>
                      </div>
                    ) : (
                      <p>No data yet</p>
                    )}
                    <ArrowRightLeft size={14} className="text-neutral-500" />

                    <div className="flex flex-col justify-center text-xs sm:text-sm">
                      <p className="text-neutral-500/75 font-sans">
                        {data.currency}
                      </p>
                      <strong>
                        {data.symbol}
                        {data.amount.toLocaleString()}
                      </strong>
                    </div>
                  </div>
                ))}
                {/* Duplicate items for seamless loop */}
                {secondFxData.map((data, index) => (
                  <div
                    key={`duplicate-${data.country}`}
                    className="flex-shrink-0 px-3 py-2 flex items-center justify-center space-x-2 rounded-lg bg-muted-foreground/15 min-w-[200px]"
                  >
                    <FxImage
                      first={[firstFxData[index % firstFxData.length]]}
                      second={[data]}
                    />

                    {firstFxData.length > 0 ? (
                      <div className="flex flex-col justify-center text-xs sm:text-sm">
                        <p className="text-neutral-500/75 font-sans">
                          {firstFxData[index % firstFxData.length].currency}
                        </p>
                        <strong>
                          {firstFxData[index % firstFxData.length].symbol}
                          {firstFxData[
                            index % firstFxData.length
                          ].amount.toLocaleString()}
                        </strong>
                      </div>
                    ) : (
                      <p>No data yet</p>
                    )}
                    <ArrowRightLeft size={14} className="text-neutral-500" />

                    <div className="flex flex-col justify-center text-xs sm:text-sm">
                      <p className="text-neutral-500/75 font-sans">
                        {data.currency}
                      </p>
                      <strong>
                        {data.symbol}
                        {data.amount.toLocaleString()}
                      </strong>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p>No data yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
