import Image from "next/image";

type fxData = {
  country: string;
  currency: string;
  flag: string;
  amount: number;
  symbol: string;
}[];

type FxImageProps = {
  first: fxData;
  second: fxData;
};

export default function FxImage({ first, second }: FxImageProps) {
  return (
    <div className="flex items-center -space-x-2">
      {/* First flag */}
      {first.length > 0 ? (
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <Image
            className="h-full w-full object-cover"
            src={first[0].flag}
            width={32}
            height={32}
            alt={`${first[0].country} flag`}
          />
        </div>
      ) : (
        <div className="h-8 w-8 rounded-full bg-muted-foreground/10" />
      )}

      {/* Second flag */}
      {second.length > 0 ? (
        <div className="h-8 w-8 overflow-hidden rounded-full">
          <Image
            className="h-full w-full object-cover"
            src={second[0].flag}
            width={32}
            height={32}
            alt={`${second[0].country} flag`}
          />
        </div>
      ) : (
        <div className="h-8 w-8 rounded-full bg-muted-foreground/10" />
      )}
    </div>
  );
}
