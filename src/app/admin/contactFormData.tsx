"use client";

import { LoaderCircle, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactUsFormDetails({ contactFormDataString }: any) {
  console.log(contactFormDataString);
  const contactFormData = JSON.parse(contactFormDataString);
  return (
    <div className=" flex flex-col mt-16 w-[46rem] px-4 mx-auto">
      <h1 className=" text-3xl font-bold text-white">Contact Form Data</h1>
      {contactFormData.map((singleContact: any, index: number) => {
        return <SingleContactForm key={index} singleContact={singleContact} />;
      })}
    </div>
  );
}

function SingleContactForm({ singleContact }: any) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  async function handleDeleteContact(id: string) {
    setIsLoading(true);
    const response = await fetch(`/api/deleteContact`, {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    if (!response.ok) {
      alert("Error deleting contact");
    } else {
      router.refresh();
    }
    setIsLoading(false);
  }
  return (
    <div className=" border border-neutral-700 py-2 px-3 gap-3  flex flex-col">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" grid grid-cols-3 cursor-pointer gap-6"
      >
        <p>{singleContact.name}</p>
        <p>{singleContact.email}</p>
        <p>{singleContact.number}</p>
      </div>
      {isOpen && (
        <div className=" flex flex-col gap-2">
          <p className=" bg-neutral-800 px-3 rounded-md py-2 ">
            {singleContact.message}
          </p>
          <div
            onClick={() => handleDeleteContact(singleContact._id)}
            className=" p-2 bg-red-900/30 cursor-pointer hover:bg-red-900/80 duration-200 w-fit flex gap-2 items-center text-white rounded "
          >
            {isLoading ? (
              <LoaderCircle className=" animate-spin" />
            ) : (
              <Trash2 />
            )}
            Delete
          </div>
        </div>
      )}
    </div>
  );
}
