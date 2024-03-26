"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Group from "./Group";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/services/Redux/store";
import { openToggle } from "@/services/Redux/reducers/GroupToggle";
import { useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Setting() {
  if (typeof window === "undefined") {
    return null;
  }
  const theme = window.localStorage.getItem("theme");

  const { setTheme } = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const Data = [
    {
      id: 1,
      svg: (
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
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      ),
      name: "NewChat",
      href: "#NewChat",
    },
    {
      id: 2,
      svg: (
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
      ),
      name: "General",
      href: "#Genral",
    },
    {
      id: 3,
      svg: (
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
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          />
        </svg>
      ),
      name: "Personalization",
      href: "#personal",
    },
  ];
  return (
    <div className="flex w-full h-auto">
      <div className="border-r-2 pe-4 space-y-3">
        {Data.map((item: any, index: any) => (
          <div key={index}>
            <Button variant="ghost" size="sm" asChild>
              <a href={item.href}>
                {item.svg}
                {item.name}
              </a>
            </Button>
          </div>
        ))}
      </div>
      <div className="w-full h-[22rem] flex flex-col overflow-y-hidden">
        <div className=" w-full h-96" id="NewChat">
          <div className="w-full px-4 space-y-6">
            <Input
              placeholder="Search..."
              className="w-full focus-visible:ring-0 outline-none border-none focus-visible:outline-none"
            />
            <div className="flex flex-col gap-2 items-start">
              <Button variant={"ghost"} size="sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
                New Group
              </Button>
              <Button
                variant={"ghost"}
                size="sm"
                onClick={() => {
                  dispatch(openToggle());
                }}
              >
                <svg
                  width="54"
                  height="74"
                  viewBox="0 0 54 74"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    d="M0 6.5C0 2.91015 2.91015 0 6.5 0C10.0899 0 13 2.91015 13 6.5C13 10.0899 10.0899 13 6.5 13C2.91015 13 0 10.0899 0 6.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21 6.5C21 2.91015 23.9101 0 27.5 0C31.0899 0 34 2.91015 34 6.5C34 10.0899 31.0899 13 27.5 13C23.9101 13 21 10.0899 21 6.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M41 6.5C41 2.91015 43.9101 0 47.5 0C51.0899 0 54 2.91015 54 6.5C54 10.0899 51.0899 13 47.5 13C43.9101 13 41 10.0899 41 6.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0 26.5C0 22.9101 2.91015 20 6.5 20C10.0899 20 13 22.9101 13 26.5C13 30.0899 10.0899 33 6.5 33C2.91015 33 0 30.0899 0 26.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21 26.5C21 22.9101 23.9101 20 27.5 20C31.0899 20 34 22.9101 34 26.5C34 30.0899 31.0899 33 27.5 33C23.9101 33 21 30.0899 21 26.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M41 26.5C41 22.9101 43.9101 20 47.5 20C51.0899 20 54 22.9101 54 26.5C54 30.0899 51.0899 33 47.5 33C43.9101 33 41 30.0899 41 26.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M0 46.5C0 42.9101 2.91015 40 6.5 40C10.0899 40 13 42.9101 13 46.5C13 50.0899 10.0899 53 6.5 53C2.91015 53 0 50.0899 0 46.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21 46.5C21 42.9101 23.9101 40 27.5 40C31.0899 40 34 42.9101 34 46.5C34 50.0899 31.0899 53 27.5 53C23.9101 53 21 50.0899 21 46.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M41 46.5C41 42.9101 43.9101 40 47.5 40C51.0899 40 54 42.9101 54 46.5C54 50.0899 51.0899 53 47.5 53C43.9101 53 41 50.0899 41 46.5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M21 67.5C21 63.9101 23.9101 61 27.5 61C31.0899 61 34 63.9101 34 67.5C34 71.0899 31.0899 74 27.5 74C23.9101 74 21 71.0899 21 67.5Z"
                    fill="currentColor"
                  />
                </svg>
                Phone Number
              </Button>
            </div>
            <div className="w-full h-52">
              <span className="text-xs font-bold">No result found</span>
            </div>
          </div>
          <Group />
        </div>
        <div className="w-full h-full pb-5" id="Genral">
          <div className="w-full px-4 space-y-6">
            <Avatar className="border shadow-md size-16">
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
            </Avatar>{" "}
            <div className="flex-1 flex flex-col gap-1">
              <div className="w-full flex-1 flex items-center gap-4">
                <Input
                  className="w-full focus-visible:outline-none border-none focus-visible:ring-0"
                  placeholder="@username"
                />
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
              <div className="w-full flex-1 flex items-center gap-4">
                <Input
                  className="w-full focus-visible:outline-none border-none focus-visible:ring-0"
                  placeholder="Lorem ipsum dolor sit amet."
                />
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-2 border-b pb-2">
              <span className="text-sm">Phone</span>
              <span className="text-xs">+91 987654321</span>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start">
              <Button variant="outline" size="lg">
                Log Out
              </Button>
              <span className="text-xs tracking-tight leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur, dolorum.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-full pb-6" id="personal">
          <div className="w-full h-96 space-y-6 py-2 px-4">
            <Select
              onValueChange={(value) => setTheme(value)}
              defaultValue={`${theme}`}
            >
              <SelectTrigger className="w-44 focus:ring-0 focus:outline-none">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-palette"
                  >
                    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                  </svg>
                  <SelectValue placeholder="System default" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">
                  <div className="flex items-center">
                    <svg
                      fill="none"
                      strokeWidth={1}
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                      />
                    </svg>
                    <span className="text-xs">Light</span>
                  </div>
                </SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
