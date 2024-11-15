"use client";

import React from "react";
import { nunitoSans } from "@/lib/font";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Dropdown = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const currentRegion = searchParams.get("region") || "Filter by Region";

  function dropdownSelect(data: string) {
    const params = new URLSearchParams(searchParams);
    if (data && data !== "Filter by Region") {
      params.set("region", data);
    } else {
      params.delete("region");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`
          bg-white dark:bg-darkBlue dark:text-white text-sm
          py-3 xs:p-3 md:w-[230px] border rounded-md
          flex justify-between items-center gap-x-3
          shadow-lg xs:self-start xs:text-xs sm:text-sm px-4
          ${nunitoSans.className} border-none
        `}
      >
        {currentRegion}
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:w-[190px] border-none shadow-md p-4 bg-white dark:bg-darkBlue dark:text-white">
        {regions.map((region) => (
          <DropdownMenuItem
            key={region}
            className="bg-white dark:bg-darkBlue hover:dark:bg-veryDarkBlue dark:text-white cursor-pointer"
            onClick={() => dropdownSelect(region)}
          >
            {region}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// Wrap in Suspense when exporting
export default function DropdownWrapper() {
  return (
    <React.Suspense
      fallback={
        <div className="w-[230px] h-12 bg-white dark:bg-darkBlue rounded-md animate-pulse" />
      }
    >
      <Dropdown />
    </React.Suspense>
  );
}
