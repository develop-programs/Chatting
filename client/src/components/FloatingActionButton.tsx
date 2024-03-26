"use client";
import React from "react";

export default function FloatingActionButton() {
  const [Open, setOpen] = React.useState<boolean>(false);
  return (
    <div
      className={`fixed bottom-4 left-4 ${Open ? "h-80" : "h-12"} bg-slate-800`}
    >
      <button
        onClick={() => setOpen(!Open)}
        className="bg-sky-500 rounded-full size-12 text-white"
      >
        +
      </button>
    </div>
  );
}
