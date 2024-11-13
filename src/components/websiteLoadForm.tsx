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

export function InitialForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the dialog when the component mounts
    setIsOpen(true);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className=" w-11/12 mx-auto bg-neutral-900 border-neutral-700 sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className=" text-white">Request Info</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className=" text-white text-right">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Pedro Duarte"
              className="col-span-3 border-neutral-700 text-gray-300"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className=" text-white text-right">
              email
            </Label>
            <Input
              id="username"
              placeholder="mail@gmail.com"
              className="col-span-3 border-neutral-700 text-gray-300"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className=" text-white text-right">
              Mobile
            </Label>
            <Input
              id="username"
              placeholder="+91 9999888877"
              className="col-span-3 border-neutral-700 text-gray-300"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className=" text-white text-right">
              Message
            </Label>
            <textarea
              id="username"
              placeholder="Write your message here"
              className="col-span-3 bg-transparent border border-neutral-700 rounded p-1 text-gray-300"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            className=" border-neutral-700 border shadow-none hover:bg-neutral-700"
            type="submit"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
