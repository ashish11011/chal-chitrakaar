"use client";
import { Footer, NavBar } from "@/components/layout";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ReadMore } from "../page";
import Image from "next/image";

const Page = () => {
  const currentRoute = usePathname();
  return (
    <div className=" flex min-h-screen justify-between  flex-col gap-4">
      <NavBar currentRoute={currentRoute} />
      <div className=" flex flex-col gap-8 ">
        <p className=" text-5xl text-center text-white font-medium py-8 mb-8">
          {" "}
          Our Services
        </p>
        <WeddingCard />
        <Family />
        <Gallery />
      </div>
      <Footer currentRoute={currentRoute} />
    </div>
  );
};

export default Page;

function WeddingCard() {
  return (
    <div className=" px-4 md:px-0 border-y border-gray-500 max-w-7xl mx-auto flex gap-6 md:h-[34rem] flex-col md:flex-row">
      <div className=" w-full h-full flex flex-col">
        <p className=" text-white text-4xl font-medium font-playfair py-7 md:py-12">
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
          <ReadMore link={"/contact-us"} />
        </div>
      </div>
    </div>
  );
}

function Family() {
  return (
    <div className=" px-4 md:px-0 border-y border-gray-500 max-w-7xl mx-auto flex gap-6 md:h-[34rem] flex-col-reverse md:flex-row">
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
          <ReadMore link={"/contact-us"} />
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

function GallaryService() {
  return <div className="">asdf</div>;
}

const images = [
  "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/_YSP6842-min.jpg",
  "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/_YSP7045-min.JPG",
  "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/09-min.JPG",
  "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04026-min.JPG",
  "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04068-min.JPG",
  "https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/gallary/DSC04077-min.JPG",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image: any) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-center text-3xl md:mt-8 md:text-4xl font-semibold text-white mb-8 md:mb-12">
        Image Gallery
      </h2>
      <div className="grid grid-cols-1 px-4 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => openModal(image)}
          >
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              layout="responsive"
              width={500}
              height={300}
              className="rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal for selected image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={600}
              className="rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-gray-800 rounded-full size-8"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
