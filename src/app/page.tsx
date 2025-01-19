"use client";
import GradientButton from "@/components/gradientButton";
import { ImageWithBottomTitle } from "@/components/imageWithBottomTitle";
import { Footer, NavBar } from "@/components/layout";
import TestimonialSection from "@/components/testimonials";
import { GetPriceQuote } from "@/components/websiteLoadForm";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

import {
  ArrowRight,
  Camera,
  Circle,
  Film,
  ImagePlus,
  Star,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const currentRoute = usePathname();

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <NavBar currentRoute={currentRoute} />
      <NewHeroSection />
      <ScrollPictureAnimation />
      <WhatCanIDo />
      <AboutUs />
      <Gallary />
      {/* <Portfolio /> */}
      <PhasesOfWork />
      {/* <TestimonialSection
        testimonialDataCol1={testimonialsData1}
        testimonialDataCol2={testimonialsData2}
        testimonialDataCol3={testimonialsData3}
      /> */}
      <div className="h-32"></div>
      <Footer currentRoute={currentRoute} />
    </div>
  );
}

function WhatCanIDo() {
  return (
    <div className="w-full overflow-hidden max-w-7xl px-4 py-16 mx-auto">
      <div className="relative z-20 flex flex-col gap-4 md:gap-6">
        <GradientButton>Our Services</GradientButton>
        <p
          className=" text-neutral-800 italic
         text-3xl md:text-7xl text-center mb-4 md:mb-6 font-medium font-playfair"
        >
          What we can do for you
        </p>
        <div className="flex flex-col md:flex-row">
          {[
            {
              Icon: Camera,
              title: "Photo Shoot",
              description:
                "Our Photo Shoot service captures moments with style and authenticity, delivering professional, story-driven .",
            },
            {
              Icon: Video,
              title: "Video Shoot/Cinematography",
              description:
                "Our Video Shoot/Cinematography service transforms your vision into high-quality, cinematic stories that capture .",
            },
            {
              Icon: ImagePlus,
              title: "Photo Editing",
              description:
                "Our Photo Editing service enhances your images with expert retouching, delivering vibrant, professional photos .",
            },
            {
              Icon: Film,
              title: "Video Editing",
              description:
                "Our Video Editing service transforms raw footage into polished, captivating videos that tell compelling stories.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={cn(
                "flex-1 shrink-0 flex px-6 flex-col gap-3 py-4 items-center ",
                index != 3 && " md:border-r"
              )}
            >
              <service.Icon
                stroke="#333"
                className=" p-2 border border-neutral-300 rounded bg-neutral-200"
                strokeWidth={2.5}
                size={36}
              />
              <p className="text-lg  font-semibold text-neutral-800">
                {service.title}
              </p>
              <p className="text-neutral-400 text-center text-sm ">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className=" max-w-6xl px-6 mx-auto mt-8 flex flex-col gap-8 ">
      <GradientButton>About Us</GradientButton>
      <div className=" flex-col md:flex-row flex gap-12 md:gap-16 items-center">
        <ImageWithBottomTitle
          img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/about-us.png"
          title="About Chal Chitrakaar"
        />
        <div className=" text-center flex  flex-col gap-8 md:gap-10">
          <p className="text-gray-600">
            At Chal Chitrakaar, we bring your creative visions to life with
            expert photography, videography, and editing services, crafting
            impactful visuals tailored to your needs. From personal projects to
            corporate shoots and events, we deliver high-quality results with
            creativity, expertise, and attention to detail.
          </p>
          <div className=" flex flex-wrap">
            <TitleOvarlapNumberCard title="Years of Experience" number="3" />
            <TitleOvarlapNumberCard title="Repeated clients" number="150" />
            <TitleOvarlapNumberCard title="Completed Projects" number="470" />
            <TitleOvarlapNumberCard title="happy clients" number="350" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TitleOvarlapNumberCard({ title, number, className }: any) {
  return (
    <div
      className={cn(
        "flex w-full md:w-1/2  flex-col mb-8 md:mb-6 items-center gap-0",
        className
      )}
    >
      <p className=" font-extrabold text-5xl text-gray-700">{number}+</p>
      <p className="text-xl capitalize font-medium text-center  text-gray-400">
        {title}
      </p>
    </div>
  );
}

function ReadMore({ link }: any) {
  return (
    <div className=" w-fit mx-auto -translate-x-1/2 md:translate-x-0 md:mx-0">
      <Link
        href={link}
        className=" size-16 rounded-full flex items-center cursor-pointer justify-center border group border-yellow-400 "
      >
        <div className=" text-neutral-800 bg-gray-50 translate-x-1/2  py-1 flex gap-2 items-center group-hover:gap-4 duration-300 uppercase whitespace-nowrap">
          Read More <ArrowRight stroke="#facc15" strokeWidth={1.5} size={20} />
        </div>
      </Link>
    </div>
  );
}

function Portfolio() {
  return (
    <div className=" flex flex-col gap-6">
      <WeddingCard />
      <Family />
    </div>
  );
}

function WeddingCard() {
  return (
    <div className=" px-4 md:px-0 border-y max-w-7xl mx-auto flex gap-6 md:h-[34rem] flex-col md:flex-row">
      <div className=" w-full h-full flex flex-col">
        <p className=" text-neutral-800 text-5xl font-medium font-playfair py-7 md:py-12">
          Wedding
        </p>
        <div className=" h-full w-full overflow-hidden flex justify-center items-end">
          <img
            className=" w-full h-full object-cover "
            src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6656-min.jpg"
            // src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/test/IMG_6576.JPG"
            alt=""
          />
        </div>
      </div>
      <div className=" hidden md:flex w-full h-full justify-end items-end overflow-hidden ">
        <img
          className=" w-full h-full object-cover"
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6576-min.jpg"
          alt=""
        />
      </div>
      <div className=" w-full h-full flex flex-col gap-4">
        <img
          className=" h-full"
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg"
          alt=""
        />
        <div className=" text-neutral-800 flex flex-col gap-6 py-6 ">
          <p>
            At Chal Chitrakaar, we capture your wedding's heartfelt moments with
            artistic photography, cinematic videography, and expert editing,
            creating timeless memories to treasure forever.
          </p>
          <ReadMore link={"/services"} />
        </div>
      </div>
    </div>
  );
}

function Family() {
  return (
    <div className=" px-4 md:px-0 border-y max-w-7xl mx-auto flex gap-6 md:h-[34rem] flex-col-reverse md:flex-row">
      <div className=" w-full h-full flex flex-col md:flex-col-reverse gap-4">
        <img
          className=" h-full"
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/family-1.jpg"
          alt=""
        />
        <div className=" text-neutral-800 flex flex-col gap-6 py-6 ">
          <p>
            At Chal Chitrakaar, we capture genuine family moments with warm,
            candid photography and videography, preserving the joy and essence
            of your special times together.
          </p>
          <ReadMore link={"/services"} />
        </div>
      </div>
      <div className=" hidden md:block w-full h-full">
        <img
          className=" w-full h-full object-cover"
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/family-2.jpg"
          alt=""
        />
      </div>

      <div className=" w-full h-full flex flex-col md:flex-col-reverse">
        <p className=" text-neutral-800 text-5xl font-medium font-playfair py-7 md:py-12">
          Corporate
        </p>
        <img
          className=" h-full w-full object-cover"
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/family-3.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

function PhasesOfWork() {
  const PhasesOfWork = [
    {
      title: "Vision & Planning",
      description:
        "We begin by understanding your unique story and requirements, collaborating with you to craft a detailed plan that aligns with your vision.",
      img: "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/about-us.png",
    },
    {
      title: "Pre-Shoot Preparation",
      description:
        "This phase includes meticulous planning like location scouting, theme development, and logistics to ensure every detail is in place for a flawless shoot.",
      img: "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/about-us.png",
    },
    {
      title: "Capture the Moments",
      description:
        "Our expert team uses professional-grade equipment and techniques to beautifully capture your moments, whether it's a wedding, corporate event, or product shoot.",
      img: "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/about-us.png",
    },
    {
      title: "Editing & Enhancement",
      description:
        "We transform raw footage into stunning visuals through expert editing, color grading, sound design, and meticulous adjustments for a polished result.",
      img: "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/about-us.png",
    },
    {
      title: "Client Feedback & Delivery",
      description:
        "We share the edited content for your review, incorporate your feedback, and ensure the final masterpiece exceeds your expectations.",
      img: "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/about-us.png",
    },
  ];

  return (
    <div className="mt-20 md:mt-32 px-4 mx-auto max-w-7xl flex flex-col gap-8">
      <div className="flex gap-8 md:gap-12 flex-col">
        <GradientButton>Process</GradientButton>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          <p className="text-neutral-800 h-fit md:sticky top-20 italic text-4xl md:text-6xl shrink-0 text-center md:text-left font-medium font-playfair">
            Phases of Work
          </p>

          <div className="flex w-full flex-col gap-6">
            {PhasesOfWork.map((item, index) => {
              return (
                <PhaseOfWorkCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={item.img}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function PhaseOfWorkCard({ title, description, img }: any) {
  const [isImageVesible, setIsImageVesible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsImageVesible(true)}
      onMouseLeave={() => setIsImageVesible(false)}
      className=" p-6 md:p-8 border cursor-pointer relative rounded-3xl w-full flex flex-col gap-4 "
    >
      <p className=" text-3xl font-medium">{title}</p>
      <p className=" text-gray-600">{description}</p>
      <AnimatePresence>
        {isImageVesible && (
          <motion.div
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
              rotate: -3,
            }}
            initial={{
              opacity: 0,
              x: 120,
              scale: 0.9,
              rotate: 5,
            }}
            exit={{
              opacity: 0,
              x: 120,
              scale: 0.8,
              rotate: 5,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="left-1/2 rounded-2xl overflow-hidden md:block hidden absolute -top-36"
          >
            <Image
              width={170}
              height={170}
              className="rounded"
              src={img}
              alt=""
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NewHeroSection() {
  return (
    <div className=" bg-gray-50 min-h-96 flex flex-col gap-6 justify-center items-center max-w-7xl py-4 px-4 mx-auto ">
      <GradientButton link={"/pricing"}>View Gallary</GradientButton>
      <div className=" text-center text-5xl md:text-6xl  max-w-3xl mx-auto">
        <span className=" italic font-playfair ">Discover </span>
        <span className=" font-bold">the art </span>
        <span>of Capturing Moments with Chal Chitrakaar Studio</span>
      </div>
      <p className=" text-gray-600 text-center max-w-2xl mx-auto">
        Explore a step-by-step journey with Chal Chitrakaar Studio to master the
        art of photography and videography. From perfect settings to creative
        techniques, we’ll help you create stunning visuals effortlessly!
      </p>
      <GetPriceQuote />
      <div className=" mt-4 border rounded -rotate-3  bg-gradient-to-r flex gap-3 justify-center items-center from-purple-100 px-3  font-medium text-center text-gray-700 py-1.5 via-blue-100 to-yellow-100">
        <Star fill="black" size={14} />
        Limited Time Offer: Hire Us at a Discounted Price!
        <Star fill="black" size={14} />
      </div>
    </div>
  );
}

function ScrollPictureAnimation() {
  return (
    <div className="relative flex gap-4 overflow-x-hidden">
      <div className="py-12 animate-marquee3 flex gap-4 whitespace-nowrap">
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6576-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6656-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6576-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6656-min.jpg" />
      </div>

      <div className=" mx-3 absolute top-0 py-12 flex gap-4 animate-marquee4 whitespace-nowrap">
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6576-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6656-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6576-min.jpg" />
        <ScrollPictureAnimationImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6656-min.jpg" />
      </div>
    </div>
  );
}

function ScrollPictureAnimationImage({ img }: { img: string }) {
  return (
    <div className=" w-56 overflow-hidden rounded h-72">
      <img className=" w-full h-full object-cover" src={img} alt="" />
    </div>
  );
}

function Gallary() {
  const [openedCategory, setOpenedCategory] = useState<string>("all");
  return (
    <div className=" max-w-6xl my-12 mx-auto px-4 flex flex-col gap-4 ">
      <div className=" flex py-2 gap-2 md:gap-2 items-center justify-center">
        <div
          onClick={() => setOpenedCategory("all")}
          className={` px-4 py-1.5 rounded-3xl cursor-pointer select-none hover:bg-gray-100 text-neutral-800 font-medium ${
            openedCategory === "all" && "border bg-gray-100 border-neutral-300"
          } `}
        >
          All
        </div>
        <div
          onClick={() => setOpenedCategory("wedding")}
          className={` px-4 py-1.5 rounded-3xl cursor-pointer select-none hover:bg-gray-100 text-neutral-800 font-medium ${
            openedCategory === "wedding" &&
            "border bg-gray-100 border-neutral-300"
          } `}
        >
          Wedding
        </div>
        <div
          onClick={() => setOpenedCategory("corporate")}
          className={` px-4 py-1.5 rounded-3xl cursor-pointer select-none hover:bg-gray-100 text-neutral-800 font-medium ${
            openedCategory === "corporate" &&
            "border bg-gray-100 border-neutral-300"
          } `}
        >
          Corporate
        </div>
      </div>
      <div className=" grid grid-cols-10 grid-rows-2 gap-2 md:gap-2">
        <GallaryImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <GallaryImage
          className=" h-full md:row-span-2 w-full md:col-span-4"
          img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6656-min.jpg"
        />
        <GallaryImage
          className=" col-span-10"
          img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6576-min.jpg"
        />
        <GallaryImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <GallaryImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
      </div>
    </div>
  );
}

function GallaryImage({ img, className }: { img: string; className?: string }) {
  return (
    <div
      className={cn(
        " w-full col-span-5  md:col-span-3 overflow-hidden h-64",
        className
      )}
    >
      <img
        className=" w-full h-full rounded md:rounded-none object-cover"
        src={img}
        alt=""
      />
    </div>
  );
}
