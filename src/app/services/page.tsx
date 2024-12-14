"use client";
import { Footer, NavBar } from "@/components/layout";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Page = () => {
  const currentRoute = usePathname();
  return (
    <div className=" flex min-h-screen justify-between  flex-col gap-4">
      <NavBar currentRoute={currentRoute} />
      <div className=" flex flex-col gap-8 ">
        <p className=" text-5xl text-center text-neutral-800 font-medium py-8 mb-8">
          {" "}
          Our Services
        </p>
        <div className=" max-w-5xl w-full mx-auto flex flex-col gap-16 px-4">
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
    <div className="flex w-full flex-col md:flex-row gap-8">
      <div className="max-w-96 w-full flex flex-col gap-2">
        <p className="text-3xl md:text-5xl font-medium h-fit">
          {serviceData.title}
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          quae ab quidem velit, nobis ex sed?
        </p>
      </div>

      <div className="w-full overflow-hidden relative">
        {currentImageIndex > 0 && (
          <div
            onClick={handlePrev}
            className=" -z-10 w-5/6 absolute overflow-hidden rounded-xl top-1/2 left-0 h-5/6 -translate-y-1/2"
          >
            <motion.img
              initial={{
                opacity: 0.6,
              }}
              animate={{
                opacity: 1,
              }}
              className=" w-full h-full object-cover"
              src={serviceData.imgs[currentImageIndex - 1]}
              alt=""
            />
          </div>
        )}

        <div className="z-20 w-5/6 mx-auto h-72">
          {/* <AnimatePresence> */}
          <motion.img
            key={serviceData.imgs[currentImageIndex]}
            initial={{
              opacity: 0.6,
              x: direction > 0 ? 80 : -80, // Slightly larger offset for smoother entry
              scale: 0.95, // Subtle scaling effect
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            // exit={{
            //   opacity: 0,
            //   x: direction > 0 ? -80 : 80, // Opposite exit direction
            //   scale: 0.95, // Complementary scaling for exit
            // }}
            transition={{
              duration: 0.6, // Slightly longer for smoothness
              ease: [0.25, 0.1, 0.25, 1], // Bezier curve for smooth easing
            }}
            className="w-full h-full object-cover rounded-xl"
            src={serviceData.imgs[currentImageIndex]}
            alt="current image"
          />
          {/* </AnimatePresence> */}
        </div>

        {currentImageIndex < serviceData.imgs.length - 1 && (
          <div
            onClick={handleNext}
            className=" -z-10 w-5/6 absolute overflow-hidden rounded-xl top-1/2 right-0 h-5/6 -translate-y-1/2"
          >
            <motion.img
              initial={{
                opacity: 0.6,
              }}
              animate={{
                opacity: 1,
              }}
              className=" w-full h-full object-cover "
              src={serviceData.imgs[currentImageIndex + 1]}
              alt=""
            />
          </div>
        )}

        <div
          onClick={handlePrev}
          className=" absolute left-0 top-0 h-full w-1/3  cursor-pointer"
        ></div>
        <div
          onClick={handleNext}
          className=" absolute right-0 top-0 h-full w-1/3 cursor-pointer"
        ></div>
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
