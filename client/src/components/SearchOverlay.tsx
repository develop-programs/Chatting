"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AppDispatch } from "@/services/Redux/store";
import { close } from "@/services/Redux/reducers/SearchToggle";

export default function SearchOverlay() {
  const dispatch = useDispatch<AppDispatch>();
  const Open = useSelector((state: any) => state.SearchToggle.value);
  return (
    <div
      className={`absolute ${
        Open ? "block" : "hidden"
      } inset-0 w-full h-screen bg-slate-900/30 backdrop-blur-md`}
    >
      <div className="container max-w-xl bg-white dark:bg-slate-950 mx-auto mt-12 rounded-md">
        <div className="flex gap-2 items-center py-2 border-b-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <Input
            placeholder="Search"
            className="focus-visible:outline-none border-none focus-visible:ring-0"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              dispatch(close());
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
        <div className="w-full h-44 grid place-content-center">
          <span className="text-base font-bold">No result</span>
        </div>
      </div>
    </div>
  );
}
