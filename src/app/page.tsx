"use client";
import { Footer, NavBar } from "@/components/layout";
import TestimonialSection from "@/components/testimonials";
import { InitialForm } from "@/components/websiteLoadForm";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Camera,
  Circle,
  Film,
  ImagePlus,
  Video,
} from "lucide-react";
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
    <div className="w-full min-h-screen">
      <NavBar currentRoute={currentRoute} />
      <HeroSection />
      <WhatCanIDo />
      <AboutUs />
      <Portfolio />
      <PhasesOfWork />
      <TestimonialSection
        testimonialDataCol1={testimonialsData1}
        testimonialDataCol2={testimonialsData2}
        testimonialDataCol3={testimonialsData3}
      />
      <div className="h-32"></div>
      <Footer currentRoute={currentRoute} />
    </div>
  );
}

function HeroSection() {
  // Animation variants
  const textVariant = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full relative max-w-7xl mx-auto">
      <InitialForm />
      <div className="relative py-16 md:min-h-[28rem] justify-center h-full z-20 flex flex-col px-4 gap-5">
        <motion.p
          // className="text-3xl md:text-7xl font-playfair font-medium text-yellow-400"
          className="text-3xl md:text-7xl font-playfair font-medium text-teal-600"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Capturing Moments
        </motion.p>

        <motion.div
          className="flex items-center gap-6"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="w-28 h-[1px] bg-gray-400"></div>
          <p className="text-3xl text-right md:text-left text-white whitespace-nowrap md:text-7xl font-playfair font-medium">
            Creating Memories
          </p>
        </motion.div>

        <p className="text-center text-white md:text-left max-w-xl">
          At Chal Chitrakaar, we bring stories to life through captivating
          visual services, offering a behind-the-scenes glimpse into our
          creative process to inspire creators, brands, and event organizers
          alike.
        </p>

        <Link
          href={"/services"}
          // className="border border-yellow-400 w-fit px-4 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-neutral-900 cursor-pointer duration-300 py-2"
          className="border  w-fit px-4 border-teal-300 hover:border-teal-600 text-white font-medium   cursor-pointer duration-300 py-2"
        >
          Meet Our Models
        </Link>
      </div>

      <div className="h-56 md:hidden"></div>

      <div className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:right-0 bottom-0 md:top-0 w-11/12 md:w-1/2 z-10">
        <img
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/hero.jpg"
          alt="hero"
        />
      </div>
    </div>
  );
}

function WhatCanIDo() {
  const [iconWidth, setIconWidth] = useState(60);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIconWidth(50);
    }
  });
  return (
    <div className="w-full relative overflow-hidden max-w-7xl px-4 py-16 mx-auto">
      <span className="z-0 hidden md:block absolute top-0 right-0 py-0 font-playfair leading-none translate-x-32 font-thin text-neutral-800 text-[20rem]">
        Chal
      </span>

      <div className="relative z-20 flex flex-col gap-6">
        <div className="flex flex-col gap-2 w-fit mx-auto">
          <p className=" text-xl text-white md:text-3xl font-playfair font-medium">
            Our Services
          </p>
          <div className="w-full h-[1px] bg-yellow-400 -translate-x-8"></div>
        </div>
        <p className=" text-white text-5xl md:text-7xl text-center font-medium font-playfair">
          What we can do for you
        </p>
        <div className="flex flex-col md:flex-row gap-8">
          {[
            {
              Icon: Camera,
              title: "Photo Shoot",
              description:
                "Our Photo Shoot service captures moments with style and authenticity, delivering professional, story-driven photos for portraits, events, and more.",
            },
            {
              Icon: Video,
              title: "Video Shoot/Cinematography",
              description:
                "Our Video Shoot/Cinematography service transforms your vision into high-quality, cinematic stories that capture the essence of your moments and ideas.",
            },
            {
              Icon: ImagePlus,
              title: "Photo Editing",
              description:
                "Our Photo Editing service enhances your images with expert retouching, delivering vibrant, professional photos true to your vision.",
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
              className="flex-1 shrink-0 flex flex-col gap-4 items-center"
            >
              <service.Icon stroke="#eee" strokeWidth={1} size={iconWidth} />
              <p className="text-2xl text-center font-semibold text-white">
                {service.title}
              </p>
              <p className="text-gray-300 -mt-3 md:mt-0 text-center">
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
    <div className="mx-auto max-w-7xl  flex gap-8 md:gap-24 flex-col-reverse md:flex-row px-4 py-8 border-t md:border-none border-neutral-600 md:py-16">
      <div className="w-full shrink-0 md:w-auto h-auto max-h-[28rem] overflow-hidden flex justify-center items-center">
        <img
          className="w-auto h-full md:h-auto max-h-[28rem] object-contain"
          src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/about-us.png"
          alt="about-us"
        />
      </div>
      <div className=" w-full flex flex-col gap-6">
        <div className="flex flex-col gap-2 mx-auto md:mx-0 w-fit">
          <p className=" text-xl text-white md:text-3xl font-playfair font-medium">
            About Us
          </p>
          <div className="w-full h-[1px] bg-yellow-400 -translate-x-8"></div>
        </div>
        <p className=" text-4xl text-white md:text-7xl text-center md:text-left font-medium font-playfair">
          About Chal Chitrakar
        </p>
        <p className=" max-w-xl text-center text-gray-300 self-end">
          At Chal Chitrakaar, we bring your creative visions to life with expert
          photography, videography, and editing services, crafting impactful
          visuals tailored to your needs. From personal projects to corporate
          shoots and events, we deliver high-quality results with creativity,
          expertise, and attention to detail.
        </p>
        <ReadMore link={"/about-me"} />
      </div>
    </div>
  );
}

export function ReadMore({ link }: { link: string }) {
  return (
    <div className=" w-fit mx-auto -translate-x-1/2 md:translate-x-0 md:mx-0">
      <Link
        href={link}
        className=" size-16 rounded-full flex items-center cursor-pointer justify-center border group border-yellow-400 "
      >
        <div className=" text-white translate-x-1/2 bg-neutral-900 py-1 flex gap-2 items-center group-hover:gap-4 duration-300 uppercase whitespace-nowrap">
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
        <p className=" text-white text-5xl font-medium font-playfair py-7 md:py-12">
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
        <div className=" text-white flex flex-col gap-6 py-6 ">
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
        <div className=" text-white flex flex-col gap-6 py-6 ">
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
        <p className=" text-white text-5xl font-medium font-playfair py-7 md:py-12">
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
      title: "Consultation & Planning",
      description:
        "We begin by understanding your vision, aligning our approach through detailed discussions to create a tailored plan for your project.",
    },
    {
      title: "Pre-Production",
      description:
        "This phase includes preparation, such as location scouting, scriptwriting, and logistics setup, ensuring everything is ready for a smooth shoot day.",
    },
    {
      title: "Shooting/Production",
      description:
        "Our team captures your content with high-quality equipment and professional techniques, whether for a photo shoot, video shoot, or full event coverage.",
    },
    {
      title: "Post-Production",
      description:
        "We enhance the captured content with expert editing, color correction, sound design, and adjustments to create polished, impactful results.",
    },
    {
      title: "Client Review & Revisions",
      description:
        "We share the initial edits for your feedback and make any requested changes to ensure the final product meets your expectations.",
    },
  ];

  return (
    <div className=" mt-20 md:mt-32 mx-auto max-w-7xl flex flex-col gap-8">
      <div className=" pl-0 md:pl-40 flex gap-4 flex-col">
        <div className="flex flex-col gap-2 mx-auto md:mx-0 w-fit">
          <p className=" text-xl font-medium text-white">Process</p>
          <div className="w-full h-[1px] bg-yellow-400 -translate-x-8"></div>
        </div>
        <p className=" text-white text-4xl md:text-6xl text-center md:text-left font-medium font-playfair">
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
                <div className=" text-white flex items-center gap-2">
                  <p>0{index + 1}</p>
                  <div className=" w-full h-[1px] bg-yellow-400"></div>
                </div>
                <div className=" md:pl-8 py-3 flex flex-col gap-2 md:gap-3">
                  <p className=" text-white text-3xl md:text-4xl font-playfair font-medium">
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
