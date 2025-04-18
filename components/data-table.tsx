"use client";

import {
  ArrowDown,
  ArrowRightLeft,
  ArrowUp,
  EllipsisVertical,
  MoveRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export function DataTable() {
  return (
    <div className="w-full font-sans ">
      <div className="rounded-md border bg-white">
        <div className="py-4 px-4 flex items-center justify-between">
          <h2 className=" font-semibold font-sans">Recent Transactions</h2>
          <p className="text-xs sm:text-sm text-foreground/30 font-sans">
            See all
          </p>
        </div>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="border-b flex items-center justify-between ml-2 text-xs font-sans">
                <div className="flex items-center space-x-2">
                  <Button
                    size={"sm"}
                    variant={"secondary"}
                    className="bg-red-100 size-7"
                  >
                    <ArrowUp className="stroke-red-500" />
                  </Button>

                  <p className="py-2 font-semibold font-sans">Sent GBP</p>
                </div>

                <p className="flex items-center space-x-1 text-foreground/30">
                  <span className="font-sans text-foreground/70">
                    Sent to John Doe
                  </span>
                  <span className="text-lg font-sans inline-block px-0.5">
                    &#183;
                  </span>
                  <span>Today, 13:30</span>
                </p>

                <div className="flex items-center space-x-1.5">
                  <span className="font-sans text-red-500 font-semibold">
                    -N1, 000, 000
                  </span>
                  <EllipsisVertical />
                </div>
              </TableCell>
              <TableCell className="border-b flex items-center justify-between ml-2 text-xs font-sans">
                <div className="flex items-center space-x-2">
                  <Button
                    size={"sm"}
                    variant={"secondary"}
                    className="bg-orange-100 size-7"
                  >
                    <ArrowRightLeft className="stroke-orange-500" />
                  </Button>

                  <p className="py-2  font-semibold font-sans flex flex-col sm:flex-row items-center space-x-1">
                    <span className="">Exchanged GBP</span>
                    <MoveRight size={14} className="inline-block" />
                    <span>NGN</span>
                  </p>
                </div>

                <p className="flex items-center space-x-1 text-foreground/30">
                  <span className="font-sans text-foreground/70">
                    Sent to John Doe
                  </span>
                  <span className="text-lg font-sans inline-block px-0.5">
                    &#183;
                  </span>
                  <span>Today, 13:30</span>
                </p>

                <div className="flex items-center space-x-1.5">
                  <span className="font-sans text-red-500 font-semibold">
                    - £1000 /
                  </span>
                  <span className="font-sans text-primary font-semibold">
                    + ₦200,000
                  </span>
                  <EllipsisVertical />
                </div>
              </TableCell>
              <TableCell className="border-b flex items-center justify-between ml-2 text-xs font-sans">
                <div className="flex items-center space-x-2">
                  <Button
                    size={"sm"}
                    variant={"secondary"}
                    className="bg-green-100 size-7"
                  >
                    <ArrowUp className="stroke-green-500" />
                  </Button>

                  <p className="py-2  font-semibold font-sans flex flex-col sm:flex-row items-center space-x-1">
                    <span className="">Recieved GBP</span>
                    <MoveRight size={14} className="inline-block" />
                    <span>NGN</span>
                  </p>
                </div>

                <p className="flex items-center space-x-1 text-foreground/30">
                  <span className="font-sans text-foreground/70">
                    Sent to John Doe
                  </span>
                  <span className="text-lg font-sans inline-block px-0.5">
                    &#183;
                  </span>
                  <span>Today, 13:30</span>
                </p>

                <div className="flex items-center space-x-1.5">
                  <span className="font-sans text-primary font-semibold">
                    + ₦200,000
                  </span>
                  <EllipsisVertical />
                </div>
              </TableCell>
              <TableCell className="border-b flex items-center justify-between ml-2 text-xs font-sans">
                <div className="flex items-center space-x-2">
                  <Button
                    size={"sm"}
                    variant={"secondary"}
                    className="bg-gray-100 size-7"
                  >
                    <ArrowDown className="stroke-gray-500" />
                  </Button>

                  <p className="py-2  font-semibold font-sans flex flex-col sm:flex-row items-center space-x-1">
                    <span className="">Withdraw GBP</span>
                  </p>
                </div>

                <p className="flex items-center space-x-1 text-foreground/30">
                  <span className="font-sans text-foreground/70">
                    Sent to John Doe
                  </span>
                  <span className="text-lg font-sans inline-block px-0.5">
                    &#183;
                  </span>
                  <span>Today, 13:30</span>
                </p>

                <div className="flex items-center space-x-1.5">
                  <span className="font-sans text-primary font-semibold">
                    + ₦200,000
                  </span>
                  <EllipsisVertical />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          4 of 10 pages.
        </div>
        <div className="space-x-2">
          <Button variant="outline" size="sm">
            Previous
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
