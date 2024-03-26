import React from "react";
import InputFeild from "@/components/input";
import Chat from "@/components/Chat";

export default function page() {
  return (
    <>
      <div className="container max-w-8xl h-full p-0 space-y-2 px-2 overflow-hidden">
        <Chat />
        <div className="hidden lg:block">
          <InputFeild className="flex gap-4 w-full h-auto py-4 shadow-lg border-t-2 px-4 bg-white dark:bg-slate-950" />
        </div>
      </div>
      <div className="lg:hidden">
        <InputFeild className="absolute bottom-0 left-0 flex gap-4 w-full h-auto py-4 shadow-lg border-t-2 px-4 bg-white dark:bg-slate-950" />
      </div>
    </>
  );
}
