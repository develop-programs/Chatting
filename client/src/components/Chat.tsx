"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { PopoverClose } from "@radix-ui/react-popover";
import ChatHeaderUserAvatar from "./custom/ChatHeaderUserAvatar";

const Data = [
  {
    senderId: 1,
    receiverId: 2,
    message: "Dark ball start budget.",
    time: "01:10 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Black person address type.",
    time: "07:05 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Civil usually together public.",
    time: "02:16 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Situation above something south official.",
    time: "10:49 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Either house community trial cover image.",
    time: "06:35 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Follow let actually look beyond.",
    time: "03:48 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Practice bad forget say southern even take.",
    time: "04:34 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "State nation fish song sound series anything.",
    time: "01:17 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Manage choose million difference including lot.",
    time: "09:30 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Window such left foot sit.",
    time: "07:06 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Mr head stay physical church collection contain.",
    time: "09:14 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Cultural however leg choice.",
    time: "12:20 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Eye yeah mouth arm sit.",
    time: "04:50 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Economic performance top.",
    time: "06:35 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Hand throughout west region happen measure.",
    time: "07:30 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "News talk forward open education table tree.",
    time: "03:25 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Food check budget trial experience.",
    time: "03:39 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "We common ground respond class happy page.",
    time: "12:18 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Conference themselves nothing she property set.",
    time: "11:33 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Law man soon society computer common success.",
    time: "09:39 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Understand nation painting range character life.",
    time: "02:35 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Everybody marriage race claim through against economy.",
    time: "07:16 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Level both common if.",
    time: "06:02 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Result little practice nothing outside hold firm soon.",
    time: "01:35 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "People arm final tend it window almost.",
    time: "09:04 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Level yes heavy modern occur available.",
    time: "01:58 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Level beyond country full.",
    time: "07:36 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Him wish decision party hospital experience.",
    time: "08:34 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Work yard figure.",
    time: "08:51 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Huge establish remain family knowledge.",
    time: "10:34 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Discussion generation we.",
    time: "06:34 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Letter lay year outside commercial drug.",
    time: "12:06 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Speak knowledge share little anyone.",
    time: "05:06 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Computer peace its big.",
    time: "01:50 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Apply mouth Congress off successful.",
    time: "08:47 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Purpose vote others citizen behind.",
    time: "12:21 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Believe knowledge role should small.",
    time: "03:10 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Interest certain edge front attention most red.",
    time: "06:23 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "He soldier accept material.",
    time: "05:12 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Wonder short generation report herself thank.",
    time: "05:51 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Well personal not family.",
    time: "09:56 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Drug low western task fund.",
    time: "06:39 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Never will theory last.",
    time: "01:55 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Eye less hard herself toward.",
    time: "11:16 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Weight me true by between red central.",
    time: "11:26 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Size vote half provide.",
    time: "01:47 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Half environment every despite move woman could.",
    time: "10:01 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Ago theory beat family us.",
    time: "11:44 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "State ok building.",
    time: "01:49 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Debate thus coach college around glass perform.",
    time: "12:57 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "However argue although option.",
    time: "02:58 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Federal particular receive tend interest.",
    time: "12:18 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "State subject later effect research leave through.",
    time: "06:59 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Item boy threat keep change effort discover later.",
    time: "05:33 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Pressure build support realize Mrs.",
    time: "08:12 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Pressure able central.",
    time: "10:34 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Particular film might than reach including race.",
    time: "05:25 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Body community bed direction really like establish.",
    time: "07:22 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Section believe general realize foreign.",
    time: "07:09 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Kitchen present recent daughter chair but.",
    time: "12:34 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Last bank between see whose turn.",
    time: "07:49 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Necessary maintain prepare sea.",
    time: "07:25 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Factor authority option choose smile right.",
    time: "05:49 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Treatment guess individual some may however listen.",
    time: "07:49 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Be fear cell current.",
    time: "01:19 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Hot heavy maybe everything help.",
    time: "10:25 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Specific officer audience international.",
    time: "07:02 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Option group democratic.",
    time: "11:06 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Should end option past focus hope.",
    time: "05:40 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Run attention mother center.",
    time: "02:40 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Couple want within economy.",
    time: "11:44 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Citizen development west.",
    time: "08:01 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Them dream personal.",
    time: "06:20 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Rest him bit.",
    time: "05:39 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Of move commercial dark debate power during.",
    time: "07:44 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Agree southern its foot born board worker.",
    time: "10:16 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Leg event clearly pretty successful.",
    time: "01:49 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Way tend employee back view wish.",
    time: "06:32 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Whole everybody task effect including discuss.",
    time: "02:30 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Name live but ground.",
    time: "04:48 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "All long toward whom its.",
    time: "02:22 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Part large few nor.",
    time: "09:10 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Improve American factor so side.",
    time: "03:03 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Leg from sing reach.",
    time: "08:12 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Wife civil reality cold however.",
    time: "11:46 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Color TV yard house.",
    time: "10:43 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Use than leave.",
    time: "01:08 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Final sure notice.",
    time: "10:55 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Direction resource listen.",
    time: "03:47 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Area money job company foot enter card.",
    time: "05:56 AM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Candidate morning set.",
    time: "03:35 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Admit tell someone western.",
    time: "11:56 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Plant around bring interview pressure quickly.",
    time: "03:49 PM",
  },
  {
    senderId: 2,
    receiverId: 1,
    message: "Degree put factor statement against local win.",
    time: "08:07 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Page during hundred choice while.",
    time: "04:56 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Change hard ever step.",
    time: "08:29 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Every baby young apply side lose.",
    time: "07:23 AM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Station dinner might wide significant air song.",
    time: "06:32 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Suddenly town more different environmental into beautiful.",
    time: "09:03 PM",
  },
  {
    senderId: 1,
    receiverId: 2,
    message: "Since court general effort.",
    time: "08:42 AM",
  },
];
export default function Chat() {
  function OpenWindow() {
    if (typeof window === "undefined") return null;
    window.open(
      "/calls",
      "_blank",
      "popup=yes,left=600,top=250,width=700,height=500"
    );
  }

  return (
    <>
      <section id="chat_heading">
        <div className="top-0 left-0 w-full grid grid-flow-row grid-cols-2 px-1 sm:px-4 py-4 border-b-2 bg-white dark:bg-slate-950 z-50">
          <div className="col-span-1 flex items-center gap-1 sm:gap-4">
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-transparent"
              >
                <svg
                  fill="none"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                  />
                </svg>
              </Button>
            </div>
            <ChatHeaderUserAvatar />
            <div className="flex flex-col ms-1">
              <span className="text-sm font-bold">@username</span>
              <span className="hidden sm:block text-xs text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </span>
            </div>
          </div>
          <div className="col-span-1 flex justify-end items-center gap-3">
            <div className="border flex items-center gap-2 divide-x-2 rounded-md">
              <Button variant="ghost" size="icon">
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
                    d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </Button>
              <Button variant="ghost" size="icon" onClick={OpenWindow}>
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </Button>
            </div>
            <div>
              <Popover>
                <PopoverTrigger asChild>
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
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  align="end"
                  side="bottom"
                  className="flex gap-2 px-2 py-1"
                >
                  <Input
                    placeholder="Search..."
                    className="text-xs focus-visible:outline-none focus-visible:ring-0 border-none"
                  />
                  <PopoverClose asChild>
                    <Button variant="ghost" size="icon">
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
                          d="M6 18 18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                  </PopoverClose>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </section>
      <section id="chat_body">
        <div className="w-full h-[calc(100vh-10rem)] overflow-y-auto pe-1 sm:pe-2 lg:pe-4 cursor-default">
          {Data.map((data, index) => {
            return (
              <div
                className={`w-full flex ${
                  data.receiverId === 1 ? "justify-start" : "justify-end"
                } py-6`}
                key={index}
              >
                <div className="relative min-w-24 h-20 max-w-96 border-2 px-2 pe-8 py-4 rounded-md">
                  <span className="text-sm">{data.message}</span>
                  <span className="absolute flex items-center gap-2 right-2 bottom-0 text-[.7rem]">
                    {data.time}
                    <svg
                      width="25"
                      height="15"
                      viewBox="0 0 25 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                    >
                      <path
                        d="M6.20238 8.63043L11.4048 14L24 1M1 8.63043L6.20238 14L18.7976 1"
                        stroke="currentColor"
                        strokeWidth="1"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
