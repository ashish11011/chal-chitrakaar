"use client";
import { Footer, NavBar } from "@/components/layout";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";

const AboutUs = () => {
  const currentRoute = usePathname();

  return (
    <div className="flex min-h-screen flex-col gap-4">
      <NavBar currentRoute={currentRoute} />
      <div className="flex flex-col gap-8 px-4 md:px-0 max-w-6xl mx-auto py-12">
        <Mission />
        <Team />
        <History />
      </div>
      <Footer currentRoute={currentRoute} />
    </div>
  );
};

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center">
          <Image
            src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/chilly.JPG"
            alt="Team Member 1"
            width={300}
            height={300}
            className="rounded-lg h-96 object-cover mx-auto mb-4"
          />
          <h3 className="text-xl font-medium text-neutral-800">
            Devanshu Vaishnav
          </h3>
          <p className="text-gray-400">Lead Photographer</p>
        </div>
        <div className="text-center">
          <Image
            src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gaurav.JPG"
            alt="Team Member 2"
            width={300}
            height={300}
            className="rounded-lg h-96 object-cover mx-auto mb-4"
          />
          <h3 className="text-xl font-medium text-neutral-800">
            Gaurav Bairwa
          </h3>
          <p className="text-gray-400">Mediacrafter</p>
        </div>
        <div className="text-center">
          <Image
            src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/nitesh.jpg"
            alt="Team Member 3"
            width={300}
            height={300}
            className="rounded-lg h-96 object-cover mx-auto mb-4"
          />
          <h3 className="text-xl font-medium text-neutral-800">Nitesh Meena</h3>
          <p className="text-gray-400">Cinematographer</p>
        </div>
      </div>
    </section>
  );
}

function History() {
  return (
    <section className="py-8">
      <h2 className="text-4xl font-semibold text-center text-neutral-800 mb-6">
        Our Story
      </h2>
      <div className="flex flex-col-reverse gap-8 items-center justify-center">
        <div className="flex-1">
          <p className=" max-w-3xl mx-auto text-center text-gray-600 mb-4">
            Chal Chitrakaar was founded with a single goal: to create
            exceptional, high-quality photography and videography services that
            preserve the beauty and emotion of life's most important moments.
            With over 3 years of experience, our team has worked on weddings,
            family shoots, corporate events, and more. We pride ourselves on our
            ability to capture memories that will last a lifetime.
          </p>
        </div>
        <div className="flex-1 w-full">
          <Image
            src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/group+photo.jpg"
            alt="Our Studio"
            width={500}
            height={300}
            className="rounded-lg w-full object-cover max-w-3xl max-h-[26rem] mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
