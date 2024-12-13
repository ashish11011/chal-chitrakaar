"use client";
import GradientButton from "@/components/gradientButton";
import { ImageWithBottomTitle } from "@/components/imageWithBottomTitle";
import { Footer, NavBar } from "@/components/layout";
import TestimonialSection from "@/components/testimonials";
import { InitialForm } from "@/components/websiteLoadForm";
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
  const testimonialsData1: any = [
    {
      name: "Aarav Sharma",
      designation: "Bride",
      msg: "Chal Chitrakaar made our wedding day unforgettable! The team captured every moment so beautifully, and the video left us in tears. Thank you for preserving our memories!",
    },
    {
      name: "Priya Mehta",
      designation: "Bride",
      msg: "From the pre-wedding shoot to the final edited video, Chal Chitrakaar exceeded our expectations. The quality of work is beyond amazing!",
    },
    {
      name: "Anjali Gupta",
      designation: "Bride",
      msg: "Their attention to detail is exceptional. We felt like the team truly understood our vision and delivered stunning photos and videos for our wedding.",
    },
    {
      name: "Rajesh Verma",
      designation: "Father of the Bride",
      msg: "Absolutely thrilled with our family photoshoot! Chal Chitrakaar captured the essence of our family’s bond perfectly.",
    },
    {
      name: "Siddharth Reddy",
      designation: "Groom",
      msg: "The cinematography and editing are top-notch! They turned our wedding day into a cinematic masterpiece.",
    },
    {
      name: "Neha Joshi",
      designation: "Bride",
      msg: "The team was so professional and friendly, and the results were amazing. Our wedding photos are a treasure we'll keep for a lifetime.",
    },
    {
      name: "Shubham Kapoor",
      designation: "Groom",
      msg: "Chal Chitrakaar’s team made us feel so comfortable during our photoshoot. The final shots were breathtaking – we’re so happy with them!",
    },
    {
      name: "Ravi Kumar",
      designation: "Groom",
      msg: "Thank you for capturing the most special moments of our big day! The photos and videos were just what we imagined – and more.",
    },
    {
      name: "Sanya Patel",
      designation: "Mother of the Bride",
      msg: "I can't express how happy I am with the photos from our family gathering. Every little moment was captured so beautifully.",
    },
    {
      name: "Ankit Verma",
      designation: "Husband",
      msg: "Chal Chitrakaar turned our anniversary celebration into a work of art. The photos and video reflect the love we share so perfectly.",
    },
  ];
  const testimonialsData2: any = [
    {
      name: "Rina Shah",
      designation: "Wife",
      msg: "We hired Chal Chitrakaar for our baby shower, and they did a phenomenal job. The memories they've created for us are priceless.",
    },
    {
      name: "Vikram Yadav",
      designation: "Groom",
      msg: "The video highlight reel from our wedding was everything we wanted and more. It was like watching our love story unfold on screen!",
    },
    {
      name: "Alok Prakash",
      designation: "Bride",
      msg: "Such a great team to work with! They made our wedding experience seamless, and the photos are absolutely stunning.",
    },
    {
      name: "Meera Soni",
      designation: "Bride",
      msg: "The team took the time to understand what we wanted for our wedding and nailed it. The quality of work was phenomenal.",
    },
    {
      name: "Gaurav Choudhary",
      designation: "Groom",
      msg: "If you want your memories to be captured beautifully, Chal Chitrakaar is the team to hire. We couldn’t have asked for better.",
    },
    {
      name: "Simran Arora",
      designation: "Bride",
      msg: "Our pre-wedding shoot was nothing short of magical, thanks to Chal Chitrakaar. They made us feel like stars!",
    },
    {
      name: "Deepak Sharma",
      designation: "Father of the Bride",
      msg: "The professionalism and passion shown by the team were incredible. Our wedding album is a perfect reflection of our journey.",
    },
    {
      name: "Sunita Rao",
      designation: "Mother of the Bride",
      msg: "Chal Chitrakaar captured every detail of our milestone birthday. We have such vivid memories thanks to their impeccable work.",
    },
    {
      name: "Nikhil Singh",
      designation: "Groom",
      msg: "Our family reunion wouldn’t have been the same without Chal Chitrakaar. The photos are fantastic and truly represent the spirit of our gathering.",
    },
    {
      name: "Jasleen Kaur",
      designation: "Bride",
      msg: "The cinematic video they created for our wedding is more than just a video – it's a beautiful piece of art.",
    },
  ];
  const testimonialsData3: any = [
    {
      name: "Naveen Patil",
      designation: "Groom",
      msg: "Our wedding day was so special, and Chal Chitrakaar captured every little moment that made it unique. Highly recommend!",
    },
    {
      name: "Roshni Verma",
      designation: "Mother of the Groom",
      msg: "We hired Chal Chitrakaar for a corporate event, and the team did an amazing job. The photos were professional, and the video was engaging.",
    },
    {
      name: "Vikrant Kumar",
      designation: "Father of the Groom",
      msg: "The team was super accommodating, and they captured our family’s essence perfectly. We’ll cherish these photos forever.",
    },
    {
      name: "Kavita Gupta",
      designation: "Bride",
      msg: "I can’t thank Chal Chitrakaar enough for their incredible work. The photos and video were beyond what we imagined.",
    },
    {
      name: "Ishaan Mehta",
      designation: "Groom",
      msg: "The level of creativity and artistry displayed in our wedding video was breathtaking. Chal Chitrakaar truly delivered.",
    },
    {
      name: "Sonia Chhabra",
      designation: "Bride",
      msg: "Our photoshoot experience was nothing short of perfect. The team made sure every detail was captured just right.",
    },
    {
      name: "Vishal Kumar",
      designation: "Groom",
      msg: "Chal Chitrakaar delivered far beyond our expectations. Their passion for what they do truly shines through in their work.",
    },
    {
      name: "Madhuri Yadav",
      designation: "Bride",
      msg: "The entire experience with Chal Chitrakaar was amazing – professional, friendly, and the end result was more than we could have asked for.",
    },
    {
      name: "Karan Joshi",
      designation: "Groom",
      msg: "From concept to execution, Chal Chitrakaar turned our wedding into a fairytale. The videos and photos were absolutely stunning!",
    },
    {
      name: "Aditi Sethi",
      designation: "Bride",
      msg: "We couldn’t be happier with the photos and videos from our family’s special occasion. Chal Chitrakaar made it all come to life perfectly.",
    },
  ];

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
        <div className=" text-center flex  flex-col gap-8 md:gap-12">
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
        "flex w-full md:w-1/2  flex-col mb-4 items-center gap-0",
        className
      )}
    >
      <p className="text-xl uppercase font-medium text-center text-gray-700">
        {title}
      </p>
      <p className=" font-extrabold text-4xl  text-gray-200">{number}+</p>
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
      title: "Consultation & Planning",
      description:
        "We begin by understanding your vision, aligning our approach through detailed discussions to create a tailored plan for your project.",
      img: "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/about-us.png",
    },
    {
      title: "Pre-Production",
      description:
        "This phase includes preparation, such as location scouting, scriptwriting, and logistics setup, ensuring everything is ready for a smooth shoot day.",
      img: "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/about-us.png",
    },
    {
      title: "Shooting/Production",
      description:
        "Our team captures your content with high-quality equipment and professional techniques, whether for a photo shoot, video shoot, or full event coverage.",
      img: "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/about-us.png",
    },
    {
      title: "Post-Production",
      description:
        "We enhance the captured content with expert editing, color correction, sound design, and adjustments to create polished, impactful results.",
      img: "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/about-us.png",
    },
    {
      title: "Client Review & Revisions",
      description:
        "We share the initial edits for your feedback and make any requested changes to ensure the final product meets your expectations.",
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
      <div className=" text-center text-5xl md:text-6xl font-medium max-w-3xl mx-auto">
        <span className=" italic font-playfair ">Learn </span>
        <span className=" font-bold">the correct </span>
        <span>way to use your iPhone camera</span>
      </div>
      <p className=" text-gray-600 text-center max-w-2xl mx-auto">
        In this step-by-step course, learn the exact settings and techniques to
        capture amazing photos with your iPhone. No experience needed — just
        follow the steps and see the difference!
      </p>
      <p className=" cursor-pointer border rounded hover:-translate-y-1 hover:bg-blue-600 duration-200 bg-blue-700 px-4 py-2 text-white font-medium">
        Get Pricing Quote
      </p>
      <div className=" mt-4 border rounded -rotate-3  bg-gradient-to-r flex gap-3 justify-center items-center from-purple-100 px-3  font-medium text-center text-gray-700 py-1.5 via-blue-100 to-yellow-100">
        <Star fill="black" size={14} />
        Lemited time offer hire at less price
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
    <div className=" max-w-7xl my-12 mx-auto px-4 flex flex-col gap-4 ">
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
      <div className=" grid grid-cols-12 gap-2 md:gap-2">
        <GallaryImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <GallaryImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6576-min.jpg" />
        <GallaryImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6656-min.jpg" />
        <GallaryImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <GallaryImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6656-min.jpg" />
        <GallaryImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <GallaryImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_5797-min.jpg" />
        <GallaryImage img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/wedding/IMG_6576-min.jpg" />
      </div>
    </div>
  );
}

function GallaryImage({ img }: { img: string }) {
  return (
    <div className=" w-full col-span-6 md:col-span-3 overflow-hidden h-64">
      <img
        className=" w-full h-full rounded md:rounded-none object-cover"
        src={img}
        alt=""
      />
    </div>
  );
}
