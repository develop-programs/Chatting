"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Setting from "@/components/Setting";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/services/Redux/store";
import { open } from "@/services/Redux/reducers/SearchToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { closeToggle } from "@/services/Redux/reducers/GroupToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserHeaderAvatar from "./custom/UserHeaderAvatar";

export default function User() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="container hidden lg:block lg:max-w-sm xl:max-w-lg h-full border-r-2 overflow-hidden p-1">
      <div className="w-full py-[.90rem] px-2 flex justify-end items-center border-b-2 cursor-default">
        <div className="flex-1 flex flex-col gap-1">
          <span className="text-sm font-bold">@username</span>
          <span className="text-xs text-muted-foreground">
            Lorem ipsum dolor sit amet.
          </span>
        </div>
        <UserHeaderAvatar />
      </div>
      <div className="w-full border-b py-2 flex items-center gap-2 pe-4">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="focus:outline-none focus:ring-0 outline-none"
            >
              <Button variant="ghost" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="text-xs text-muted-foreground">
                Filter By
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  id="unread"
                  fill="currentColor"
                  className="w-5 h-5 mr-2"
                  strokeWidth={1}
                >
                  <path
                    fillRule="evenodd"
                    d="M17 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-4.5 1h-11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm0 5h-11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm0 5h-11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Unread
              </DropdownMenuItem>
              <DropdownMenuItem>
                <svg
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>{" "}
                Groups
              </DropdownMenuItem>
              <DropdownMenuItem>
                <svg
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
                Draft
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div
          className="flex-1 border-2 px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer select-none"
          onClick={() => dispatch(open())}
        >
          <div className="flex-1">Search</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100vh-8.5rem)] divide-y-2 overflow-y-auto">
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className="w-full flex items-center py-[1.35rem] gap-3 px-4 pe-6 hover:bg-slate-200 dark:hover:bg-slate-900/90 rounded-md cursor-default"
          >
            <Avatar className="border shadow-md">
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
            <div className="flex-1 flex flex-col gap-1">
              <span className="text-sm font-bold">@username</span>
              <span className="text-xs text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
            <div className="size-8 bg-slate-300 dark:bg-slate-700 grid place-content-center rounded-full border shadow-sm">
              {index}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
