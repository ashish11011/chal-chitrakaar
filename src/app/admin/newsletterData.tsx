"use client";

import { LoaderCircle, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewsLetterData({ newsletterDataString }: any) {
  const newsletterData = JSON.parse(newsletterDataString);
  return (
    <div className=" flex flex-col mt-16 w-[46rem] px-4 mx-auto">
      <h1 className=" text-3xl font-bold mb-4 text-white">Newsletter Data</h1>
      {newsletterData.map((singleContact: any, index: number) => {
        return <SingleContactForm key={index} singleContact={singleContact} />;
      })}
    </div>
  );
}

function SingleContactForm({ singleContact }: any) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  async function handleDeleteNewsletter(id: string) {
    setIsLoading(true);
    const response = await fetch(`/api/deleteNewsletter`, {
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
    <div className=" border border-neutral-700 py-1 px-3 gap-3  flex flex-col">
      <div className=" flex justify-between gap-2">
        <p className="  px-3 rounded-md py-2 ">{singleContact.email}</p>
        <div
          onClick={() => handleDeleteNewsletter(singleContact._id)}
          className=" p-2 bg-red-900/30 cursor-pointer hover:bg-red-900/80 duration-200 w-fit flex gap-2 items-center text-white rounded "
        >
          {isLoading ? <LoaderCircle className=" animate-spin" /> : <Trash2 />}
          Delete
        </div>
      </div>
    </div>
  );
}
