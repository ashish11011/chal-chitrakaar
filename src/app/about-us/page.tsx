"use client";
import { Footer, NavBar } from "@/components/layout";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Mail, Phone, Clock3 } from "lucide-react";
import { ImageWithBottomTitle } from "@/components/imageWithBottomTitle";

const AboutUs = () => {
  const currentRoute = usePathname();

  return (
    <div className="flex mb-12 flex-col gap-4">
      <NavBar currentRoute={currentRoute} />
      <AboutUsHero />
      <div className="flex flex-col gap-8 px-4 md:px-0 max-w-6xl mx-auto py-12">
        {/* <Mission /> */}
        <Team />
        <History />
      </div>
      <ContactUs />
      <Footer currentRoute={currentRoute} />
    </div>
  );
};

function AboutUsHero() {
  return (
    <div className=" max-w-7xl mt-6 w-full h-full mx-auto px-4 flex flex-col md:flex-row">
      <div className=" text-3xl flex justify-center -translate-y-6 flex-col gap-2 text-gray-600 text-left w-full max-w-lg">
        We Are Professional Photographers
        <span className=" text-3xl md:text-5xl text-gray-900 capitalize font-playfair">
          with Years of Experience
        </span>{" "}
      </div>
      <div className=" w-full h-full min-h-[24rem] md:min-h-[28rem] grid-cols-9 gap-1 grid grid-rows-8">
        <div className=" col-start-8 rounded-tl-3xl bg-gray-700 col-end-10 row-start-1 row-end-3"></div>
        <div className=" col-start-6 rounded-tl-3xl bg-gray-700 col-end-8 row-start-2 row-end-4"></div>
        <div className=" col-start-5 rounded-tl-3xl bg-gray-700 col-end-8 row-start-4 row-end-6"></div>
        <div className=" col-start-3 rounded-tl-3xl bg-gray-700 col-end-5 row-start-6 row-end-9"></div>
        <div className=" col-start-1 rounded-tl-3xl bg-gray-700 col-end-3 row-start-7 row-end-9"></div>
        {/* Image without border radius */}
        <div className=" col-start-8 bg-gray-700 col-end-10 row-start-3 row-end-6 "></div>
        <div className="col-start-5  bg-gray-700 col-end-10 row-start-6 row-end-9"></div>
      </div>
    </div>
  );
}

export default AboutUs;

function Mission() {
  return (
    <section className="text-neutral-800 py-8">
      <h2 className="text-4xl font-semibold text-center mb-6">Our Mission</h2>
      <p className="text-lg text-center max-w-2xl mx-auto">
        At Chal Chitrakaar, our mission is to capture the raw beauty of life's
        most cherished moments. We specialize in artistic photography and
        cinematic videography, delivering timeless memories that tell your
        unique story. Our passion lies in transforming your special occasions
        into works of art that you will treasure forever.
      </p>
    </section>
  );
}

function Team() {
  return (
    <section className="py-8 rounded-lg bg-gray-100 ">
      <h2 className="text-4xl mb-12 font-semibold text-center text-neutral-800">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 lg:grid-cols-3 gap-8">
        {TeamCardData.map((item, index) => {
          return (
            <ImageWithBottomTitle
              className="rotate-0"
              key={index}
              title={item.name}
              img={item.img}
            />
          );
        })}
      </div>
    </section>
  );
}

const TeamCardData = [
  {
    name: "Devanshu Vaishnav",
    img: "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/chilly.JPG",
  },
  {
    name: "Gaurav Bairwa",
    img: "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gaurav.JPG",
  },
  {
    name: "Nitesh Meena",
    img: "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/nitesh.jpg",
  },
];

function History() {
  return (
    <section className="py-8">
      <h2 className="text-4xl font-semibold text-center text-neutral-800 mb-6">
        Our Story
      </h2>
      <div className="flex flex-col-reverse gap-8 items-center justify-center">
        <div className="flex-1">
          <p className=" max-w-2xl mt-6 mx-auto text-center text-gray-600">
            At Chal Chitrakaar Studio, our mission is to deliver exceptional,
            high-quality photography and videography services that beautifully
            preserve the essence and emotion of life’s most cherished moments.
            With over 3 years of professional experience, our team has
            successfully captured weddings, family milestones, corporate events,
            and much more. We take pride in our ability to turn fleeting moments
            into timeless memories that you’ll treasure forever.
          </p>
        </div>
        <div className="flex-1 w-full">
          {/* <Image
            src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/group+photo.jpg"
            alt="Our Studio"
            width={500}
            height={300}
            className="rounded-lg w-full object-cover max-w-3xl max-h-[26rem] mx-auto"
          /> */}

          <ImageWithBottomTitle
            className="w-full max-w-3xl mx-auto max-h-none h-auto"
            img="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/group+photo.jpg"
            title="Chal Chitrakaar was founded with a single goal"
          />
        </div>
      </div>
    </section>
  );
}

function ContactUs() {
  return (
    <div className=" flex max-w-6xl mx-auto w-full p-8 flex-col gap-8">
      <p className=" text-center">
        {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, magnam! */}
      </p>
      <div className=" flex gap-6 flex-col md:flex-row">
        {contactInfoData.map((item, index) => {
          return (
            <ContactUsCard
              key={index}
              title={item.title}
              icon={item.icon}
              contect={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}

function ContactUsCard({ title, icon: Icon, contect }: any) {
  return (
    <div className="px-10 py-8 justify-center w-full border flex gap-4 border-gray-300">
      <Icon className="shrink-0 translate-y-1" />
      <div className=" flex-col max-w-44 flex gap-1.5">
        <p className=" text-xl font-semibold">{title}</p>
        <p className=" text-sm text-gray-600">{contect}</p>
      </div>
    </div>
  );
}

const contactInfoData = [
  {
    title: "Address",
    icon: Mail,
    content: "-1st Floor, Raw co-working, malwa nagar, jaipur",
  },
  {
    title: "Give me a call",
    icon: Phone,
    content: "+91 9876543210",
  },
  {
    title: "Business Hours",
    icon: Clock3,
    content: "Mon - Fri(9:00 AM - 6:00 PM)",
  },
];
