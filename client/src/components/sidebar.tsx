"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const [Open, setOpen] = React.useState<boolean>(false);
  return (
    <div
      className={`container lg:hidden flex ${
        Open
          ? "w-80 justify-end duration-700 ease-in"
          : "w-12 justify-center duration-1000 ease-out"
      } h-full border-r-2 p-1 pt-4`}
    >
      <Button variant="ghost" size="icon" onClick={() => setOpen(!Open)}>
        {Open ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 duration-700 animate-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 duration-700 animate-in"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </>
        )}
      </Button>
    </div>
  );
}
