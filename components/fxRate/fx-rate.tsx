"use client";

import { ArrowRightLeft } from "lucide-react";
import { useEffect, useState } from "react";
import FxImage from "./fx-image";
import { firstFxData, secondFxData } from "@/data/fxRate-data";
import { cn } from "@/lib/utils";

export default function FxRate() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-5 font-sans">
      <div className="py-5 px-6 bg-white border-1 rounded-lg mx-auto w-full">
        <div className="flex items-center">
          <h2 className="font-semibold text-primary mb-2">FX Rates</h2>
        </div>
        <div
          className="relative overflow-hidden w-full h-[100px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <style jsx>{`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .marquee {
              animation: slide 20s linear infinite;
              animation-play-state: ${isHovered ? "paused" : "running"};
            }
          `}</style>
          <div
            className="marquee flex items-center gap-4 absolute top-0"
            style={{ width: "max-content" }}
          >
            {secondFxData.length > 0 ? (
              <>
                {secondFxData.map((data) => (
                  <div
                    key={data.country}
                    className="flex-shrink-0 px-3 py-2 flex items-center justify-center space-x-2 rounded-lg bg-muted-foreground/15 min-w-[200px]"
                  >
                    <FxImage first={firstFxData} second={secondFxData} />

                    {firstFxData.length > 0 ? (
                      firstFxData.map((data) => (
                        <div
                          key={data.country}
                          className="flex flex-col justify-center text-xs sm:text-sm"
                        >
                          <p className="text-neutral-500/75 font-sans">
                            {data.currency}
                          </p>
                          <strong>
                            {data.symbol}
                            {data.amount.toLocaleString()}
                          </strong>
                        </div>
                      ))
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
                {secondFxData.map((data) => (
                  <div
                    key={`duplicate-${data.country}`}
                    className="flex-shrink-0 px-3 py-2 flex items-center justify-center space-x-2 rounded-lg bg-muted-foreground/15 min-w-[200px]"
                  >
                    <FxImage first={firstFxData} second={secondFxData} />

                    {firstFxData.length > 0 ? (
                      firstFxData.map((data) => (
                        <div
                          key={`duplicate-${data.country}`}
                          className="flex flex-col justify-center text-xs sm:text-sm"
                        >
                          <p className="text-neutral-500/75 font-sans">
                            {data.currency}
                          </p>
                          <strong>
                            {data.symbol}
                            {data.amount.toLocaleString()}
                          </strong>
                        </div>
                      ))
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
