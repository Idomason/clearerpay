import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";
import { SiteHeader } from "@/components/site-header";
import { Bell } from "lucide-react";
import FxRate from "@/components/fxRate/fx-rate";

export default function Page() {
  return (
    <section className="bg-muted-foreground/5">
      <SiteHeader />

      <div className="mt-2 sm:px-5 px-4 md:px-6 font-sans">
        <div className="pt-3">
          <div className=" flex flex-col sm:flex-row items-center justify-between w-full lg:w-3/4">
            <p className="py-2.5">Welcome Andy 👋</p>
            <p className="p-2 bg-orange-100 text-neutral-500 w-fit text-center rounded-lg text-xs lg:text-sm">
              <Bell className="stroke-orange-500 fill-orange-500 mr-2 inline-block size-4.5" />
              Your account has been setup for OTC trade, please{" "}
              <strong className="text-neutral-700">Contact OTC</strong> to
              transact
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            {/* Section Cards */}
            <SectionCards />

            {/* Fix Rate */}
            <FxRate />

            {/* Data Table */}
            <div className="px-4 lg:px-6 flex flex-col gap-5 lg:flex-row md:items-start">
              <div className="w-full lg:w-3/5">
                <DataTable />
              </div>
              <div className="w-full lg:w-2/5">
                <ChartAreaInteractive />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
