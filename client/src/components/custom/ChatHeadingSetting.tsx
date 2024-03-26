"use client";
import React from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ChatHeadingSetting() {
  const Data = [
    {
      name: "Overview",
      href: "#overview",
    },
    {
      name: "Media",
      href: "#media",
    },
    {
      name: "Files",
      href: "#files",
    },
    {
      name: "Links",
      href: "#links",
    },
  ];
  return (
    <div className="flex w-full h-auto">
      <div className="border-r-2 pe-4 space-y-3">
        {Data.map((item: any, index: any) => (
          <div key={index}>
            <Button variant="ghost" size="sm" asChild>
              <a href={item?.href}>
                {item?.svg}
                {item?.name}
              </a>
            </Button>
          </div>
        ))}
      </div>
      <div className="w-full h-[22rem] flex flex-col overflow-y-hidden">
        <div className=" w-full h-full" id="overview">
          <div className="relative w-full h-[22rem] px-2 space-y-2">
            <div>
              <Avatar className="w-16 h-16 shadow-lg">
                <AvatarImage src="" />
                <AvatarFallback>
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
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="w-full grid gap-2">
              <span className="text-base font-bold">@username</span>
              <span className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi, iure.
              </span>
            </div>
            <div className="w-full grid gap-2">
              <span className="text-base font-bold">Last Seen</span>
              <span className="text-sm">10:00 AM</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 w-full py-2 border-t-2 px-2 flex gap-2">
              <Button variant="outline"
              size="sm"
              className="flex-1 ">
                Block
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-rose-500 border-rose-500 hover:text-rose-400"
              >
                Report Contact
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full h-full pb-5" id="media">
          <div className="w-full h-96 px-4 space-y-6">media</div>
        </div>
        <div className="w-full h-full pb-6" id="files">
          <div className="w-full h-96 space-y-6 py-2 px-4">files</div>
        </div>
        <div className="w-full h-full pb-6" id="links">
          <div className="w-full h-96 space-y-6 py-2 px-4">links</div>
        </div>
      </div>
    </div>
  );
}
