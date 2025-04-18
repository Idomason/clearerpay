import Image from "next/image";
import React from "react";

type fxData = {
  country: string;
  currency: string;
  flag: string;
  amount: number;
  symbol: string;
}[];

type fxDataProp = {
  first: fxData;
  second: fxData;
};

export default function FxImage({ first, second }: fxDataProp) {
  return (
    <div className="flex items-center justify-center -space-x-2">
      <div className="h-6 w-6 rounded-full border-1 bg-foreground overflow-hidden">
        {first.length > 0 ? (
          first.map((firstFX) => (
            <Image
              key={firstFX.country}
              className="w-full h-full object-cover"
              src={firstFX.flag}
              width={32}
              height={32}
              alt="Nigerian flag"
            />
          ))
        ) : (
          <p>No data yet</p>
        )}
      </div>
      <div className="h-6 w-6 rounded-full border-1 bg-foreground overflow-hidden">
        {second.length > 0 ? (
          second.map((secondFX) => (
            <Image
              key={secondFX.country}
              className="h-full w-full object-cover"
              src={secondFX.flag}
              width={32}
              height={32}
              alt="Nigerian flag"
            />
          ))
        ) : (
          <p>No data yet</p>
        )}
      </div>
    </div>
  );
}
