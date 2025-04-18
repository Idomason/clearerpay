"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowDown,
  ArrowRightLeft,
  ArrowUp,
  ArrowUpDown,
  EllipsisVertical,
  MoreHorizontal,
  MoveRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

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

            {/* <TableRow>
                 <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow> */}
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
