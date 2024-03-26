"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "@/services/Redux/store";
import { closeToggle } from "@/services/Redux/reducers/GroupToggle";
import { Input } from "./ui/input";

export default function Group() {
  const [phoneNumber, setPhoneNumber] = React.useState<any>("");
  const dispatch = useDispatch<AppDispatch>();
  const Open = useSelector((state: any) => state.GroupToggle.value);
  return (
    <div
      className={`absolute ${
        Open ? "block w-full" : "hidden w-0"
      } inset-0 h-full bg-white dark:bg-slate-950`}
    >
      <div className="top-0 w-full flex gap-4 items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => dispatch(closeToggle())}
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Button>
        <span className="text-lg font-bold">Phone Number</span>
      </div>
      <div className="h-full px-2 py-2">
        <Input
          defaultValue="+91 "
          className="w-full focus-visible:ring-0 outline-none border-none focus-visible:outline-none bg-slate-700/60 placeholder:text-slate-100"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setPhoneNumber(event.target.value);
          }}
        />
        <div className="w-full text-center py-4">
          <span className="text-xs font-semibold">
            Enter Phone Number to start chat
          </span>
        </div>
        <div className="w-full grid grid-flow-row grid-cols-3 gap-2">
          <Button
            variant="outline"
            size="icon"
            className="col-span-1 w-full h-12 text-lg font-semibold"
            onClick={() => setPhoneNumber(phoneNumber + 1)}
          >
            1
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="col-span-1 w-full h-12 text-lg font-semibold"
            onClick={() => setPhoneNumber(phoneNumber + 2)}
          >
            2
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="col-span-1 w-full h-12 text-lg font-semibold"
            onClick={() => setPhoneNumber(phoneNumber + 3)}
          >
            3
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="col-span-1 w-full h-12 text-lg font-semibold"
            onClick={() => setPhoneNumber(phoneNumber + 4)}
          >
            4
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="col-span-1 w-full h-12 text-lg font-semibold"
            onClick={() => setPhoneNumber(phoneNumber + 5)}
          >
            5
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="col-span-1 w-full h-12 text-lg font-semibold"
            onClick={() => setPhoneNumber(phoneNumber + 6)}
          >
            6
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="col-span-1 w-full h-12 text-lg font-semibold"
            onClick={() => setPhoneNumber(phoneNumber + 7)}
          >
            7
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="col-span-1 w-full h-12 text-lg font-semibold"
            onClick={() => setPhoneNumber(phoneNumber + 8)}
          >
            8
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="col-span-1 w-full h-12 text-lg font-semibold"
            onClick={() => setPhoneNumber(phoneNumber + 9)}
          >
            9
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="col-span-1 w-full h-12 text-lg font-semibold"
            onClick={() => setPhoneNumber(phoneNumber + "+")}
          >
            +
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="col-span-1 w-full h-12 text-lg font-semibold"
            onClick={() => setPhoneNumber(phoneNumber + 0)}
          >
            0
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="col-span-1 w-full h-12 text-lg font-semibold"
            onClick={() => setPhoneNumber(phoneNumber.slice(0, -1))}
          >
            <svg
              width="31"
              height="23"
              viewBox="0 0 31 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M11 5.5L17 11.5M17 11.5L23 17.5M17 11.5L23 5.5M17 11.5L11 17.5M1.45328 13.352L7.33859 20.852C7.9073 21.5767 8.77746 22 9.6987 22H27C28.6569 22 30 20.6569 30 19V4C30 2.34315 28.6569 1 27 1H9.6987C8.77746 1 7.9073 1.42326 7.33859 2.14801L1.45328 9.648C0.600088 10.7353 0.600089 12.2647 1.45328 13.352Z"
                stroke="black"
                strokeWidth={2}
              />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
}
