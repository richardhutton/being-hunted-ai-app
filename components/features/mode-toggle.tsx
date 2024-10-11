"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();


  return (
    <>
    <div className="flex gap-10 text-4xl mt-10">
      <button onClick={() => setTheme("dark")}><MoonIcon/></button>
      <button onClick={() => setTheme("light")}><SunIcon/></button>
    </div>
    </>
  )
}