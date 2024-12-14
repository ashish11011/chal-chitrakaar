import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export function GetPriceQuote() {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
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
    console.log(formData);
  }

  async function handleFormSubmit(e: any) {
    setLoading(true);
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.number &&
      formData.message
    ) {
      const response = await fetch("/api/contact-us-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, source: "initialForm" }),
      });

      if (response.ok) {
        setIsOpen(false);
      }
    } else {
      alert("Please fill all the fields");
    }
    setLoading(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className=" cursor-pointer border rounded hover:-translate-y-1 hover:bg-blue-600 duration-200 bg-blue-700 px-4 py-2 text-white font-medium">
          Get Pricing Quote
        </p>
      </DialogTrigger>
      <DialogContent className=" w-11/12 mx-auto bg-gray-100 border-neutral-400 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className=" text-gray-800 text-left ">
            Request Info
          </DialogTitle>
          <DialogDescription className=" text-gray-800 text-left">
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className=" text-gray-800 text-right">
              Name
            </Label>
            <Input
              type="text"
              name="name"
              onChange={(e) => handleInputChange(e)}
              id="name"
              placeholder="Rahul Kumar"
              className="col-span-3 border-neutral-400 focus:outline-none text-gray-800"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className=" text-gray-800 text-right">
              email
            </Label>
            <Input
              type="email"
              name="email"
              onChange={(e) => handleInputChange(e)}
              id="username"
              placeholder="mail@gmail.com"
              className="col-span-3 border-neutral-400 text-gray-800"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className=" text-gray-800 text-right">
              Mobile
            </Label>
            <Input
              type="text"
              name="number"
              onChange={(e) => handleInputChange(e)}
              id="username"
              placeholder="+91 9999888877"
              className="col-span-3 border-neutral-400 text-gray-800"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className=" text-gray-800 text-right">
              Message
            </Label>
            <textarea
              name="message"
              onChange={(e) => handleInputChange(e)}
              id="username"
              placeholder="Write your message here"
              className="col-span-3 bg-transparent border border-neutral-400 rounded p-1 text-gray-800"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={(e) => handleFormSubmit(e)}
            className=" border-neutral-700 border shadow-none hover:bg-neutral-700"
            type="submit"
          >
            {loading && <Loader2 className=" animate-spin" />}
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
