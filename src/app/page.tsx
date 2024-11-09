"use client";
import { Footer, NavBar } from "@/components/layout";
import {
  ArrowRight,
  Camera,
  Circle,
  Film,
  ImagePlus,
  Video,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <NavBar />
      <HeroSection />
      <WhatCanIDo />
      <AboutUs />
      <Portfolio />
      <PhasesOfWork />
      <div className="h-32"></div>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="w-full relative max-w-7xl mx-auto">
      <div className="relative py-16 md:min-h-[28rem] justify-center h-full z-20 flex flex-col px-4 gap-5">
        <p className="text-3xl md:text-7xl font-playfair font-medium text-yellow-400">
          Capturing Moments
        </p>
        <div className="flex items-center gap-6">
          <div className="w-28 h-[1px] bg-yellow-400"></div>
          <p className="text-3xl text-right md:text-left whitespace-nowrap md:text-7xl font-playfair font-medium">
            Creating Memories
          </p>
        </div>
        <p className=" text-center md:text-left max-w-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nesciunt
          in dicta, pariatur officia maiores sapiente placeat at possimus nulla,
        </p>
        <div className=" border border-yellow-400 w-fit px-4 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-neutral-900 cursor-pointer duration-300 py-2">
          Meet Our Models
        </div>
      </div>
      <div className="h-56 md:hidden"></div>
      <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:right-0 bottom-0 md:top-0 w-11/12 md:w-1/2 z-10">
        <img
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/hero.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

function WhatCanIDo() {
  return (
    <div className="w-full relative overflow-hidden max-w-7xl px-4 py-16 mx-auto">
      <span className="z-0 hidden md:block absolute top-0 right-0 py-0 font-playfair leading-none translate-x-32 font-thin text-neutral-800 text-[20rem]">
        Chal
      </span>

      <div className="relative z-20 flex flex-col gap-6">
        <div className="flex flex-col gap-2 w-fit mx-auto">
          <p className=" text-xl md:text-3xl font-playfair font-medium">
            My Services
          </p>
          <div className="w-full h-[1px] bg-yellow-400 -translate-x-8"></div>
        </div>
        <p className=" text-5xl md:text-7xl text-center font-medium font-playfair">
          What Can I Do
        </p>
        <div className=" flex flex-col md:flex-row gap-8">
          <div className=" flex flex-col gap-4 items-center">
            <Camera
              stroke="#facc15"
              strokeWidth={1}
              size={window.innerWidth < 768 ? 50 : 60}
            />
            <p className=" text-2xl font-semibold ">Photo Shooting</p>
            <p className=" text-gray-300 -mt-3 md:mt-0 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              minima voluptatem ullam dolorem{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-4 items-center">
            <Video
              stroke="#facc15"
              strokeWidth={1}
              size={window.innerWidth < 768 ? 50 : 60}
            />
            <p className=" text-2xl font-semibold ">Video Shooting</p>
            <p className=" text-gray-300 -mt-3 md:mt-0 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              minima voluptatem ullam dolorem{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-4 items-center">
            <ImagePlus
              stroke="#facc15"
              strokeWidth={1}
              size={window.innerWidth < 768 ? 50 : 60}
            />
            <p className=" text-2xl font-semibold ">Photo Editing</p>
            <p className=" text-gray-300 -mt-3 md:mt-0 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              minima voluptatem ullam dolorem{" "}
            </p>
          </div>
          <div className=" flex flex-col gap-4 items-center">
            <Film
              stroke="#facc15"
              strokeWidth={1}
              size={window.innerWidth < 768 ? 50 : 60}
            />
            <p className=" text-2xl font-semibold ">Video Editing</p>
            <p className=" text-gray-300 -mt-3 md:mt-0 text-center">
              Lorem ipsum dolor sit amet , adipisicing elit. Enim minima
              voluptatem ullam dolorem
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="mx-auto max-w-7xl flex gap-8 md:gap-24 flex-col-reverse md:flex-row px-4 py-16">
      <div className="w-full shrink-0 md:w-auto h-auto max-h-[28rem] overflow-hidden flex justify-center items-center">
        <img
          className="w-auto h-full md:h-auto max-h-[28rem] object-contain"
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/about-us.png"
          alt="about-us"
        />
      </div>
      <div className=" w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2 mx-auto md:mx-0 w-fit">
          <p className=" text-xl md:text-3xl font-playfair font-medium">
            About Us
          </p>
          <div className="w-full h-[1px] bg-yellow-400 -translate-x-8"></div>
        </div>
        <p className=" text-4xl md:text-7xl text-center md:text-left font-medium font-playfair">
          About Chal Chitrakar
        </p>
        <p className=" max-w-xl text-center text-gray-300 self-end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eveniet
          animi possimus vel fugit, ipsa quisquam deleniti deserunt temporibus
          modi reiciendis exercitationem,
        </p>
        <ReadMore link={"/about-us"} />
      </div>
    </div>
  );
}

function ReadMore({ link }: { link: string }) {
  return (
    <div className=" w-fit mx-auto -translate-x-1/2 md:translate-x-0 md:mx-0">
      <Link
        href={link}
        className=" size-16 rounded-full flex items-center cursor-pointer justify-center border group border-yellow-400 "
      >
        <div className=" translate-x-1/2 bg-neutral-900 py-1 flex gap-2 items-center group-hover:gap-4 duration-300 uppercase whitespace-nowrap">
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
        <p className=" text-5xl font-medium font-playfair py-7 md:py-12">
          Wedding
        </p>
        <img
          className=" h-full w-full object-cover"
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding-1.jpg"
          alt=""
        />
      </div>
      <div className=" hidden md:block w-full h-full">
        <img
          className=" w-full h-full object-cover"
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding-2.jpg"
          alt=""
        />
      </div>
      <div className=" w-full h-full flex flex-col gap-4">
        <img
          className=" h-full"
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding-3.jpg"
          alt=""
        />
        <div className=" flex flex-col gap-6 py-6 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quod recusandae, officiis voluptatibus incidunt magnam quae
            aspernatur velit doloribus corrupti dicta{" "}
          </p>
          <ReadMore link={"/portfolio"} />
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
        <div className=" flex flex-col gap-6 py-6 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            quod recusandae, officiis voluptatibus incidunt magnam quae
            aspernatur velit doloribus corrupti dicta{" "}
          </p>
          <ReadMore link={"/portfolio"} />
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
        <p className=" text-5xl font-medium font-playfair py-7 md:py-12">
          Famliy
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
      title: "Meeting",
      description:
        "We begin by understanding your vision and goals. During this meeting, we discuss your ideas, preferences, and expectations, ensuring we're aligned on all details before we start.",
    },
    {
      title: "Preparing",
      description:
        "In the preparation phase, we plan out the logistics, gather necessary equipment, scout locations, and arrange any props or additional resources needed to bring your vision to life.",
    },
    {
      title: "Shooting",
      description:
        "This is where the magic happens! Our team captures high-quality photos and videos, focusing on every detail to ensure we capture the essence of the project.",
    },
    {
      title: "Editing",
      description:
        "In the final phase, we enhance and refine each shot, applying professional editing techniques to produce polished, captivating visuals that tell your story beautifully.",
    },
  ];

  return (
    <div className=" mt-20 md:mt-32 mx-auto max-w-7xl flex flex-col gap-8">
      <div className=" pl-0 md:pl-40 flex gap-4 flex-col">
        <div className="flex flex-col gap-2 mx-auto md:mx-0 w-fit">
          <p className=" text-xl font-medium">Process</p>
          <div className="w-full h-[1px] bg-yellow-400 -translate-x-8"></div>
        </div>
        <p className=" text-4xl md:text-6xl text-center md:text-left font-medium font-playfair">
          Phases of Work
        </p>
      </div>
      <div className=" flex flex-col md:flex-row px-4 md:px-0 gap-12">
        <img
          className=" max-w-md w-full h-full max-h-96 md:max-h-none object-cover"
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/man-taking-selfie.jpg"
          alt=""
        />
        <div className=" mx-auto flex w-full flex-col max-w-2xl gap-2">
          {PhasesOfWork.map((item, index) => {
            return (
              <div key={index} className=" flex flex-col ">
                <div className=" flex items-center gap-2">
                  <p>0{index + 1}</p>
                  <div className=" w-full h-[1px] bg-yellow-400"></div>
                </div>
                <div className=" md:pl-8 py-3 flex flex-col gap-2 md:gap-3">
                  <p className=" text-3xl md:text-4xl font-playfair font-medium">
                    {item.title}
                  </p>
                  <p className=" text-gray-200 font-thin md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// function HeroSection() {
//   return (
//     <div className="w-full relative max-w-7xl mx-auto">
//       <div className=" z-20 flex flex-col px-4 gap-6">
//         <p className=" text-3xl md:text-7xl font-playfair font-medium text-yellow-400">
//           Capturing Moments
//         </p>
//         <div className=" flex items-center gap-6">
//           <div className=" w-28 h-[1px] bg-yellow-400"></div>
//           <p className=" text-3xl md:text-7xl font-playfair font-medium">
//             Creating Memories
//           </p>
//         </div>
//       </div>
//       <div className=" h-96 md:hidden"></div>
//       <div className=" absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:right-0 bottom-0 md:top-0 w-11/12 md:w-1/2 ">
//         <img
//           src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/hero.jpg"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// }
