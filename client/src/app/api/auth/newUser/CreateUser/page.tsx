"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const AvatarData = [
  {
    name: "Avatar1",
    url: "/avatar-svgrepo-com.svg",
  },
  {
    name: "Avatar2",
    url: "/avatar-svgrepo-com (1).svg",
  },
  {
    name: "Avatar3",
    url: "/avatar-svgrepo-com (2).svg",
  },
  {
    name: "Avatar4",
    url: "/avatar-svgrepo-com (3).svg",
  },
  {
    name: "Avatar5",
    url: "/avatar-svgrepo-com (4).svg",
  },
  {
    name: "Avatar6",
    url: "/avatar-svgrepo-com (5).svg",
  },
  {
    name: "Avatar7",
    url: "/avatar-svgrepo-com (6).svg",
  },
  {
    name: "Avatar8",
    url: "/avatar-svgrepo-com (7).svg",
  },
];

export default function page() {
  const [Hover, setHover] = React.useState(false);
  return (
    <div className="h-screen w-full grid place-content-center">
      <div className="flex flex-col justify-center items-center space-y-4">
        <div
          className="relative size-32 rounded-full bg-slate-600"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="absolute inset-0 w-full h-full grid place-content-center">
            <svg
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
          <div
            className={`${
              Hover ? "visible" : "hidden"
            } absolute inset-0 w-full h-full bg-black/20 rounded-full flex justify-center items-center`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hover:bg-transparent"
                  onClick={() => setHover(false)}
                >
                  Choose
                </Button>
              </DialogTrigger>
              <DialogContent className="flex gap-3 items-center">
                {AvatarData.map((item) => (
                  <div
                    key={item.name}
                    className="w-16 h-16 grid place-content-center cursor-pointer"
                  >
                    <img
                      src={item.url}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                ))}
                <div className="px-3 py-4 rounded-full grid place-content-center border">
                  <Label htmlFor="avatar" className="text-xs">
                    Add
                  </Label>
                  <input type="file" name="avatar" id="avatar" hidden />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div>
          <Input placeholder="@example" className="w-72" />
        </div>
        <div>
          <Button variant="primary" size="lg">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
