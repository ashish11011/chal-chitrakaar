"use client";
import { cn } from "@/lib/utils";

export function ImageWithBottomTitle({ img, alt, title, className }: any) {
  return (
    <div
      className={cn(
        " bg-white shadow shrink-0 p-6 pb-8 flex flex-col -rotate-2 gap-4 max-w-96 h-auto",
        className
      )}
    >
      <img
        className=" w-full h-full max-h-96 object-cover"
        src={img}
        alt={alt || title}
      />
      <p className=" text-right text-3xl font-dancingScript">{title}</p>
    </div>
  );
}
