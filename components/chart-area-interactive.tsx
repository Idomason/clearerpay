"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Square } from "lucide-react";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", moneyIn: 300000, moneyOut: 200000 },
  { date: "2024-04-02", moneyIn: 320000, moneyOut: 210000 },
  { date: "2024-04-03", moneyIn: 350000, moneyOut: 230000 },
  { date: "2024-04-04", moneyIn: 380000, moneyOut: 240000 },
  { date: "2024-04-05", moneyIn: 400000, moneyOut: 260000 },
  { date: "2024-04-06", moneyIn: 420000, moneyOut: 270000 },
  { date: "2024-04-07", moneyIn: 450000, moneyOut: 280000 },
  { date: "2024-04-08", moneyIn: 480000, moneyOut: 300000 },
  { date: "2024-04-09", moneyIn: 510000, moneyOut: 310000 },
  { date: "2024-04-10", moneyIn: 540000, moneyOut: 320000 },
  { date: "2024-04-11", moneyIn: 570000, moneyOut: 340000 },
  { date: "2024-04-12", moneyIn: 600000, moneyOut: 350000 },
  { date: "2024-04-13", moneyIn: 630000, moneyOut: 370000 },
  { date: "2024-04-14", moneyIn: 650000, moneyOut: 380000 },
  { date: "2024-04-15", moneyIn: 680000, moneyOut: 390000 },
  { date: "2024-04-16", moneyIn: 700000, moneyOut: 410000 },
  { date: "2024-04-17", moneyIn: 730000, moneyOut: 420000 },
  { date: "2024-04-18", moneyIn: 760000, moneyOut: 430000 },
  { date: "2024-04-19", moneyIn: 790000, moneyOut: 450000 },
  { date: "2024-04-20", moneyIn: 820000, moneyOut: 460000 },
  { date: "2024-04-21", moneyIn: 850000, moneyOut: 470000 },
  { date: "2024-04-22", moneyIn: 880000, moneyOut: 480000 },
  { date: "2024-04-23", moneyIn: 910000, moneyOut: 490000 },
  { date: "2024-04-24", moneyIn: 940000, moneyOut: 510000 },
  { date: "2024-04-25", moneyIn: 970000, moneyOut: 520000 },
  { date: "2024-04-26", moneyIn: 1000000, moneyOut: 540000 },
  { date: "2024-04-27", moneyIn: 1030000, moneyOut: 550000 },
  { date: "2024-04-28", moneyIn: 1060000, moneyOut: 570000 },
  { date: "2024-04-29", moneyIn: 1090000, moneyOut: 580000 },
  { date: "2024-04-30", moneyIn: 1120000, moneyOut: 600000 },
  { date: "2024-05-01", moneyIn: 1150000, moneyOut: 610000 },
  { date: "2024-05-02", moneyIn: 1180000, moneyOut: 630000 },
  { date: "2024-05-03", moneyIn: 1210000, moneyOut: 640000 },
  { date: "2024-05-04", moneyIn: 1240000, moneyOut: 660000 },
  { date: "2024-05-05", moneyIn: 1270000, moneyOut: 670000 },
  { date: "2024-05-06", moneyIn: 1300000, moneyOut: 690000 },
  { date: "2024-05-07", moneyIn: 1330000, moneyOut: 700000 },
  { date: "2024-05-08", moneyIn: 1360000, moneyOut: 720000 },
  { date: "2024-05-09", moneyIn: 1390000, moneyOut: 730000 },
  { date: "2024-05-10", moneyIn: 1420000, moneyOut: 750000 },
  { date: "2024-05-11", moneyIn: 1450000, moneyOut: 760000 },
  { date: "2024-05-12", moneyIn: 1480000, moneyOut: 780000 },
  { date: "2024-05-13", moneyIn: 1510000, moneyOut: 790000 },
  { date: "2024-05-14", moneyIn: 1540000, moneyOut: 810000 },
  { date: "2024-05-15", moneyIn: 1570000, moneyOut: 820000 },
  { date: "2024-05-16", moneyIn: 1600000, moneyOut: 840000 },
  { date: "2024-05-17", moneyIn: 1630000, moneyOut: 850000 },
  { date: "2024-05-18", moneyIn: 1660000, moneyOut: 870000 },
  { date: "2024-05-19", moneyIn: 1690000, moneyOut: 880000 },
  { date: "2024-05-20", moneyIn: 1720000, moneyOut: 900000 },
  { date: "2024-05-21", moneyIn: 1750000, moneyOut: 910000 },
  { date: "2024-05-22", moneyIn: 1780000, moneyOut: 930000 },
  { date: "2024-05-23", moneyIn: 1810000, moneyOut: 940000 },
  { date: "2024-05-24", moneyIn: 1840000, moneyOut: 960000 },
  { date: "2024-05-25", moneyIn: 1870000, moneyOut: 970000 },
  { date: "2024-05-26", moneyIn: 1900000, moneyOut: 990000 },
  { date: "2024-05-27", moneyIn: 1930000, moneyOut: 1000000 },
  { date: "2024-05-28", moneyIn: 1960000, moneyOut: 1020000 },
  { date: "2024-05-29", moneyIn: 1990000, moneyOut: 1030000 },
  { date: "2024-05-30", moneyIn: 2020000, moneyOut: 1050000 },
  { date: "2024-05-31", moneyIn: 2050000, moneyOut: 1060000 },
  { date: "2024-06-01", moneyIn: 2080000, moneyOut: 1080000 },
];

const chartConfig = {
  transactions: {
    label: "Transactions",
  },
  moneyIn: {
    label: "Money In",
    color: "var(--chart-5)",
  },
  moneyOut: {
    label: "Money Out",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  const totalIn = filteredData
    .reduce((sum, item) => sum + item.moneyIn, 0)
    .toLocaleString();
  const totalOut = filteredData
    .reduce((sum, item) => sum + item.moneyOut, 0)
    .toLocaleString();

  return (
    <Card className="@container/card shadow-none bg-white">
      <CardHeader>
        <CardTitle>Money out/Money in</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Total for the last 3 months
          </span>
        </CardDescription>

        <CardAction>
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="90d">Last 3 months</ToggleGroupItem>
            <ToggleGroupItem value="30d">Last 30 days</ToggleGroupItem>
            <ToggleGroupItem value="7d">Last 7 days</ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <div className="px-6 w-full flex items-center justify-between">
        <p className="text-[10px] flex items-center space-x-0.5">
          <Square className="fill-amber-500 h-2.5 w-2.5 stroke-0" />
          Money in{" "}
          <span className="@[540px]/card:hidden font-sans font-semibold text-primary ml-2">
            ₦{totalIn}
          </span>
        </p>
        <p className="text-[10px] flex items-center space-x-0.5">
          <Square className="fill-red-500 h-2.5 w-2.5 inline-block stroke-0" />
          Money out{" "}
          <span className="@[540px]/card:hidden font-sans font-semibold text-primary ml-2">
            ₦{totalOut}
          </span>
        </p>
      </div>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="moneyIn" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-chart-5)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-chart-5)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="moneyOut" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-chart-1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-chart-1)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <YAxis
              orientation="right"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, "dataMax"]} // Dynamically adjust the Y-Axis range based on data
              tickFormatter={(value) => {
                if (value >= 1000000) {
                  // Show values in millions (N20m, N30m, etc.)
                  const formattedValue = (value / 1000000).toFixed(0); // Convert to millions and remove decimals
                  return `N${formattedValue}m`;
                } else {
                  // Show values in hundreds of thousands (N100k, N200k, etc.)
                  const formattedValue = (value / 1000).toFixed(0); // Convert to thousands (N100k, N200k, etc.)
                  return `N${formattedValue}k`;
                }
              }}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="moneyOut"
              type="monotone"
              fill="url(#moneyOut)"
              stroke="var(--color-chart-1)"
              stackId="a"
            />
            <Area
              dataKey="moneyIn"
              type="monotone"
              fill="url(#moneyIn)"
              stroke="var(--color-chart-5)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
