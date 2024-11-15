"use client";

import React from "react";
import { nunitoSans } from "../layout";
import {
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Dropdown = () => {
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const { replace } = useRouter();

  function dropdownSelect(data: string) {
    const url = new URLSearchParams(searchParam);
    if (data) {
      url.set("region", data);
    } else {
      url.delete("region");
    }
    replace(`${pathname}?${url.toString()}`);
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`bg-white dark:bg-darkBlue dark:text-white text-sm py-3 xs:p-3 md:w-[230px] border rounded-md flex justify-between items-center gap-x-3 shadow-lg xs:self-start xs:text-xs sm:text-sm px-4 ${nunitoSans} border-none`}
      >
        Filter by Region
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:w-[190px] border-none shadow-md p-4 g-white dark:bg-darkBlue dark:text-white cursor-pointer">
        <DropdownMenuItem
          className="bg-white dark:bg-darkBlue hover:dark:bg-veryDarkBlue dark:text-white cursor-pointer"
          onClick={(e) => dropdownSelect(e.target.innerText)}
        >
          Africa
        </DropdownMenuItem>
        <DropdownMenuItem
          className="bg-white dark:bg-darkBlue hover:dark:bg-veryDarkBlue dark:text-white cursor-pointer"
          onClick={(e) => dropdownSelect(e.target.innerText)}
        >
          America
        </DropdownMenuItem>
        <DropdownMenuItem
          className="bg-white dark:bg-darkBlue hover:dark:bg-veryDarkBlue dark:text-white cursor-pointer"
          onClick={(e) => dropdownSelect(e.target.innerText)}
        >
          Asia
        </DropdownMenuItem>
        <DropdownMenuItem
          className="bg-white dark:bg-darkBlue hover:dark:bg-veryDarkBlue dark:text-white cursor-pointer"
          onClick={(e) => dropdownSelect(e.target.innerText)}
        >
          Europe
        </DropdownMenuItem>
        <DropdownMenuItem
          className="bg-white dark:bg-darkBlue hover:dark:bg-veryDarkBlue dark:text-white cursor-pointer"
          onClick={(e) => dropdownSelect(e.target.innerText)}
        >
          Oceania
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
