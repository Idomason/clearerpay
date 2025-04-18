import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowDown,
  ArrowRightLeft,
  ArrowUp,
  ChevronDown,
  EllipsisVertical,
  Plus,
} from "lucide-react";
import { Button } from "./ui/button";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 @5xl/main:grid-cols-2">
      {/* Column 1 */}
      <Card className="@container/card bg-white font-sans h-full shadow-none">
        <CardHeader>
          <CardDescription>
            <div className="flex items-center space-x-1.5">
              <span className="font-semibold text-primary">NGN</span>
              <span>.</span>
              <span className="text-xs">Naira</span>
              <ChevronDown className="size-4 stroke-primary/25" />
            </div>
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            ₦34,650,233
          </CardTitle>
          <CardAction>
            <Badge variant={"secondary"} className="bg-white">
              <Plus /> Deposit
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-primary flex flex-wrap items-center gap-4 md:justify-between">
            <Button
              className="bg-muted-foreground/10 cursor-pointer"
              variant={"outline"}
            >
              <ArrowUp />
              <span>Send</span>
            </Button>
            <Button
              className="bg-muted-foreground/10 cursor-pointer"
              variant={"outline"}
            >
              <ArrowDown />
              <span>Recieve</span>
            </Button>
            <Button
              className="bg-muted-foreground/10 cursor-pointer"
              variant={"outline"}
            >
              <ArrowRightLeft />
              <span>Swap</span>
            </Button>

            <span className="bg-muted-foreground/5 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer">
              <EllipsisVertical className="text-muted-foreground" />
            </span>
          </div>
        </CardFooter>
      </Card>

      {/* Column 2 */}
      <Card className="@container/card font-sans bg-white h-full shadow-none">
        <CardHeader>
          <CardDescription className="text-primary font-semibold">
            Merchants
          </CardDescription>

          <CardAction>
            <Badge className="bg-white" variant="secondary">
              <Plus />
              Add Merchants
            </Badge>
          </CardAction>
        </CardHeader>

        {/* Merchant Cards */}
        <div className=" flex items-center flex-wrap justify-center gap-2 sm:gap-4 px-5 sm:justify-between">
          <div className="flex flex-col items-center justify-center">
            <div className="h-11 w-11 bg-muted-foreground/10 rounded-full flex items-center justify-center">
              <p>AD</p>
            </div>
            <div className="py-2">
              <Badge variant={"outline"}>Adisa Debo...</Badge>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-11 w-11 bg-muted-foreground/10 rounded-full flex items-center justify-center">
              <p>AD</p>
            </div>
            <div className="py-2">
              <Badge variant={"outline"}>Adisa Debo...</Badge>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-11 w-11 bg-muted-foreground/10 rounded-full flex items-center justify-center">
              <p>AD</p>
            </div>
            <div className="py-2">
              <Badge variant={"outline"}>Adisa Debo...</Badge>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-11 w-11 bg-muted-foreground/10 rounded-full flex items-center justify-center">
              <p>AD</p>
            </div>
            <div className="py-2">
              <Badge variant={"outline"}>Adisa Debo...</Badge>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-11 w-11 bg-muted-foreground/10 rounded-full flex items-center justify-center">
              <p>AD</p>
            </div>
            <div className="py-2">
              <Badge variant={"outline"}>Adisa Debo...</Badge>
            </div>
          </div>
        </div>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="text-muted-foreground ml-auto">See all</div>
        </CardFooter>
      </Card>
    </div>
  );
}
