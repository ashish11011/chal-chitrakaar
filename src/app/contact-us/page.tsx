"use client";
import { Footer, NavBar } from "@/components/layout";
import { Label } from "@/components/ui/label";
import { LoaderCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const Page = () => {
  const currentRoute = usePathname();
  return (
    <div>
      <NavBar currentRoute={currentRoute} />
      <ContactUsHeader />
      <ContactForm />
      <Footer currentRoute={currentRoute} />
    </div>
  );
};

export default Page;

function ContactUsHeader() {
  return (
    <div className=" h-[24rem] md:h-[36em] w-full bg-neutral-900  bg-grid-white/[0.05]  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-neutral-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Conatct Us
      </p>
    </div>
  );
}

function ContactForm() {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  function handleInputChange(e: any) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleFormSubmittion(e: any) {
    e.preventDefault();
    setLoading(true);
    // send form data to the server
    const response = await fetch("/api/contact-us-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        number: "",
        message: "",
      });
    }
  }
  return (
    <form className=" max-w-5xl my-24 mx-auto px-6 flex flex-col gap-6">
      <div className=" flex flex-col gap-3">
        <Label className="pl-1 text-white">Name</Label>
        <input
          onChange={(e) => handleInputChange(e)}
          type="text"
          name="name"
          value={formData.name}
          placeholder="John Doe"
          className="py-2 px-4 rounded border border-neutral-600  bg-neutral-800 dark:bg-gray-800 text-gray-200 focus:outline-none"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <Label className="pl-1 text-white">Email</Label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleInputChange(e)}
          placeholder="mail@gmail.com"
          className="py-2 px-4 rounded border border-neutral-600  bg-neutral-800 dark:bg-gray-800 text-gray-200 focus:outline-none"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <Label className="pl-1 text-white">Number</Label>
        <input
          type="email"
          name="number"
          value={formData.number}
          onChange={(e) => handleInputChange(e)}
          placeholder="+91 9999888877"
          className="py-2 px-4 rounded border border-neutral-600  bg-neutral-800 dark:bg-gray-800 text-gray-200 focus:outline-none"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <Label className="pl-1 text-white">Message</Label>{" "}
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={(e) => handleInputChange(e)}
          rows={5}
          className="py-2 px-4 rounded border border-neutral-600  bg-neutral-800 dark:bg-gray-800 text-gray-200 focus:outline-none"
        ></textarea>
      </div>
      <button
        type="submit"
        onClick={(e) => handleFormSubmittion(e)}
        className={` ${
          loading && "pointer-events-none"
        } py-2 px-4 rounded bg-blue-500 dark:bg-blue-600 text-white font-semibold hover:bg-blue-600 dark:hover:bg-blue-700 transition duration-200`}
      >
        {loading ? (
          <LoaderCircle className=" mx-auto animate-spin" />
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
