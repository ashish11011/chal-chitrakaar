"use client";
import { Footer, NavBar } from "@/components/layout";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const currentRoute = usePathname();
  return (
    <div className=" flex min-h-screen justify-between  flex-col gap-4">
      <NavBar currentRoute={currentRoute} />
      <div className=" py-32 text-white text-3xl text-center ">
        Comming Soon...
      </div>
      <Footer currentRoute={currentRoute} />
    </div>
  );
};

export default Page;
