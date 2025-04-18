import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col  items-center justify-center">
      <h1 className="py-4 mb-3 text-lg font-bold">
        Oops! Sorry Page Not Found
      </h1>
      <div>
        <Button>
          <Link href={"/"}>Go Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
