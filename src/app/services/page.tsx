"use client";
import { Footer, NavBar } from "@/components/layout";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Page = () => {
  const currentRoute = usePathname();
  return (
    <div className=" flex min-h-screen justify-between flex-col gap-4">
      <NavBar currentRoute={currentRoute} />
      <div className=" flex flex-col gap-8 ">
        {/* <p className=" text-5xl text-center text-neutral-800 font-medium py-8 mb-8">
          {" "}
          Our Services
        </p> */}
        <ServicesHeroSection />

        <div className=" pb-8 max-w-5xl w-full mx-auto flex flex-col gap-16 px-4">
          {servicesData.map((data, index) => (
            <SingleServiceSection key={index} serviceData={data} />
          ))}
        </div>
      </div>
      <Footer currentRoute={currentRoute} />
    </div>
  );
};

export default Page;

function ServicesHeroSection() {
  return (
    <div className=" h-[24rem] md:h-[24em] w-full   bg-grid-black/[0.05]  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Our Services
      </p>
    </div>
  );
}

function SingleServiceSection({ serviceData }: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const [direction, setDirection] = useState(0);
  const handleNext = () => {
    if (currentImageIndex < serviceData.imgs.length - 1) {
      setDirection(1);
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setDirection(-1);
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex w-full select-none flex-col md:flex-row gap-8">
      <div className="max-w-96 w-full flex flex-col gap-2">
        <p className="text-3xl italic font-playfair  md:text-5xl font-medium h-fit">
          {serviceData.title}
        </p>
        <p className=" text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quae ab quidem velit, nobis ex sed?
        </p>
      </div>

      <div className="max-w-lg relative items-center h-72 mx-auto flex gap-4 w-full">
        <div onClick={handlePrev} className="">
          <ArrowLeft
            color="#666"
            className=" hover:scale-110 duration-200 hover:border-gray-600 cursor-pointer border rounded-full p-1"
          />
        </div>
        <div className=" rounded-md overflow-hidden w-full h-full">
          <motion.img
            initial={{
              x: direction === 1 ? "100%" : "-100%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            src={serviceData.imgs[currentImageIndex]}
            className=" w-full h-full object-cover"
            alt=""
          />
        </div>

        {/* Dots representing total images */}
        <div className=" absolute flex gap-0.5 -bottom-5 right-1/2 translate-x-1/2">
          {serviceData.imgs.map((_: any, index: number) => (
            <div
              key={index}
              className={cn(
                "w-2 h-2 rounded-full border border-gray-400",
                currentImageIndex === index && "w-2 bg-gray-400"
              )}
            ></div>
          ))}
        </div>

        {/* Next image handler */}
        <div onClick={handleNext} className="">
          <ArrowRight
            color="#666"
            className=" hover:scale-110 duration-200 hover:border-gray-600 cursor-pointer border rounded-full p-1"
          />
        </div>
      </div>
    </div>
  );
}

const servicesData = [
  {
    title: "Wedding",
    imgs: [
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/_YSP6842-min.jpg",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/_YSP7045-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/09-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04026-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04068-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04077-min.JPG",
    ],
  },
  {
    title: "Corporate",
    imgs: [
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/_YSP6842-min.jpg",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/_YSP7045-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/09-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04026-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04068-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04077-min.JPG",
    ],
  },
  {
    title: "Events",
    imgs: [
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/_YSP6842-min.jpg",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/_YSP7045-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/09-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04026-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04068-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04077-min.JPG",
    ],
  },
  {
    title: "Products",
    imgs: [
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/_YSP6842-min.jpg",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/_YSP7045-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/09-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04026-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04068-min.JPG",
      "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04077-min.JPG",
    ],
  },
];

const images = [
  "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/_YSP6842-min.jpg",
  "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/_YSP7045-min.JPG",
  "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/09-min.JPG",
  "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04026-min.JPG",
  "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04068-min.JPG",
  "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04077-min.JPG",
];
