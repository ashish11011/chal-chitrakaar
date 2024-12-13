import { cn } from "@/lib/utils";
import React from "react";

const GradientButton = ({ children, link, className }: any) => {
  return (
    <div
      className={cn(
        " border bg-gradient-to-r w-fit mx-auto cursor-pointer rounded-3xl px-2.5 border-gray-400 py-0.5 text-gray-600 text-xs font-semibold from-teal-100 to-sky-100 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GradientButton;
