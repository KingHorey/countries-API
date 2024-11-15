"use client";

import React from "react";
import { MoonIcon } from "@heroicons/react/24/outline";
import { nunitoSans } from "../layout";

import { useTheme } from "next-themes";
import Link from "next/link";

const NavBar = () => {
  const { setTheme } = useTheme();

  const switchTheme = () => {
    if (typeof window !== "undefined") {
      const result = localStorage.getItem("theme")?.includes("dark")
        ? "light"
        : "dark";
      localStorage.setItem("theme", result);
      setTheme(result);
    }
  };

  return (
    <header className={`${nunitoSans.className} mx-auto `}>
      <nav className="w-full flex justify-center py-5 mx-auto ">
        <div className="w-full mx-auto flex justify-between">
          <Link href="/" className={`font-bold ${nunitoSans}`}>
            Where in the world?
          </Link>
          <div
            className="flex items-center justify-center gap-x-3 cursor-pointer"
            onClick={() => switchTheme()}
          >
            <MoonIcon width={18} height={18} />
            <p>Dark Mode</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
