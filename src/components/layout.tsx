"use client";
// import { categoryData } from "@/const/products";
import {
  Github,
  Globe,
  LoaderCircle,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { set } from "mongoose";

const NAVIGATIONS = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "About Me",
    slug: "/about-me",
  },
  // {
  //   name: "Portfolio",
  //   slug: "/portfolio",
  // },
  {
    name: "Services",
    slug: "/services",
  },
  // {
  //   name: "Pricing",
  //   slug: "/pricing",
  // },
  {
    name: "Contact",
    slug: "/contact-us",
  },
];

export const NavBar = ({
  currentRoute,
}: {
  currentRoute: string | undefined;
}) => {
  const [mobNavOpen, setMobNavOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full border-b border-neutral-700 bg-neutral-900">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-4 py-6 md:px-8 md:py-6">
        <Link
          href={"/"}
          className=" max-h-8 w-auto flex items-center gap-3 min-w-14 md:max-h-none"
        >
          <img
            className="h-12 w-full object-contain"
            src="https://s3.ap-south-1.amazonaws.com/chal.chitrakaar/logo++white.PNG"
            alt=""
          />
          <p className="text-2xl text-white whitespace-nowrap font-playfair font-medium">
            Chal <span className="text-yellow-400">Chitrakaar</span>
          </p>
        </Link>

        <div className="hidden md:block">
          <ul className="flex items-center overflow-hidden border-neutral-700 font-medium text-gray-200">
            {NAVIGATIONS.map((item) => {
              return (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className={`cursor-pointer px-4 py-1.5 text-sm duration-300 hover:bg-neutral-800 md:px-5 md:text-base ${
                    currentRoute === item.slug && "border-b border-yellow-400"
                  } `}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Cart Icon */}
            {/* <Link
              href={"/searchproduct"}
              className="cursor-pointer px-2 py-1.5 text-sm duration-300 hover:bg-neutral-800 md:px-3 md:text-base"
            >
              <Search />
            </Link>
            <Link
              href={"/cart"}
              className="cursor-pointer px-2 py-1.5 text-sm duration-300 hover:bg-neutral-800 md:px-3 md:text-base"
            >
              <ShoppingBag />
            </Link> */}
          </ul>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          {/* Cart Icon */}
          {/* <Link
            href={"/searchproduct"}
            className="cursor-pointer px-2 py-1.5 text-sm duration-300 md:px-5 md:text-base"
          >
            <Search color="#ccc" />
          </Link>
          <Link
            href={"/cart"}
            className="cursor-pointer px-2 py-1.5 text-sm duration-300 md:px-5 md:text-base"
          >
            <ShoppingBag color="#ccc" />
          </Link> */}
          {mobNavOpen ? (
            <X onClick={() => setMobNavOpen(false)} color="#ccc" />
          ) : (
            <Menu onClick={() => setMobNavOpen(true)} color="#ccc" />
          )}
        </div>

        {mobNavOpen && (
          <div className="absolute left-0 top-20 flex h-screen w-full items-center justify-center bg-neutral-950 text-white">
            <div className="z-40 flex -translate-y-24 flex-col items-center justify-center">
              {NAVIGATIONS.map((item) => {
                return (
                  <Link
                    key={item.slug}
                    href={item.slug}
                    className="w-full py-3 text-center text-xl text-white hover:bg-neutral-800"
                    onClick={() => setMobNavOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Footer = ({
  currentRoute,
}: {
  currentRoute: string | undefined;
}) => {
  const [newsletterMail, setNewsletterMail] = useState("");
  const [loading, setLoading] = useState(false);
  const [newsletterResponse, setNewsletterResponse] = useState("");
  async function subscribeToNewsletter() {
    setLoading(true);
    try {
      const response = await fetch("/api/subscribeToNewsletter", {
        method: "POST",
        body: JSON.stringify({
          email: newsletterMail,
        }),
      });
      if (response.ok) {
        setNewsletterMail("");
        setNewsletterResponse("Subscribed to newsletter successfully");
      } else {
        setNewsletterResponse(
          "Error subscribing to newsletter Please try again"
        );
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="w-full  pt-12 px-6 md:px-16 pb-4 bg-neutral-800">
      <div className=" max-w-7xl flex flex-col gap-4 mx-auto w-full">
        <div className="hidden md:flex flex-col-reverse md:flex-row gap-6 justify-between">
          <div className=" flex gap-2 md:gap-6 flex-col md:flex-row">
            {NAVIGATIONS.map((item) => {
              return (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className={`cursor-pointer w-fit py-1.5 text-white duration-300 hover:bg-neutral-700 md:px-5 md:text-base ${
                    currentRoute === item.slug && "border-b border-yellow-400"
                  } `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <Link href={"/"} className="">
            <p className="text-2xl text-white font-playfair whitespace-nowrap font-medium">
              Chal <span className="text-yellow-400">Chitrakaar</span>
            </p>
          </Link>
        </div>
        <div className="mt-12 flex flex-col md:flex-row gap-6 justify-between">
          <div className=" flex flex-col gap-5">
            <p className=" font-semibold text-2xl text-white">Services</p>
            <ul className=" flex flex-col gap-4 md:gap-3">
              <li className=" text-gray-300 hover:text-yellow-400 cursor-pointer duration-200">
                Personal
              </li>
              <li className=" text-gray-300 hover:text-yellow-400 cursor-pointer duration-200">
                Wedding
              </li>
              <li className=" text-gray-300 hover:text-yellow-400 cursor-pointer duration-200">
                Travel
              </li>
            </ul>
          </div>
          <div className=" flex flex-col gap-5">
            <p className=" font-semibold text-2xl text-white">Connect</p>
            <ul className=" flex flex-col gap-4 md:gap-3">
              <li className=" text-gray-300 hover:text-yellow-400 cursor-pointer duration-200">
                Linked in
              </li>
              <li className=" text-gray-300 hover:text-yellow-400 cursor-pointer duration-200">
                Facebook
              </li>
              <li className=" text-gray-300 hover:text-yellow-400 cursor-pointer duration-200">
                Instagram
              </li>
            </ul>
          </div>
          <div className=" flex flex-col gap-5">
            <p className=" font-semibold text-2xl text-white">Connect</p>
            <ul className=" flex flex-col gap-4 md:gap-3">
              <li className=" text-gray-300 hover:text-yellow-400 cursor-pointer duration-200">
                chal@chitrakaar.com
              </li>
            </ul>
          </div>
          {/* Subscribe */}
          <div className=" w-full max-w-xl flex flex-col gap-4 ">
            <p className=" text-white text-2xl capitalize md:text-4xl font-playfair font-semibold">
              Sign Up to my newsletter
            </p>
            <form className=" border-b border-yellow-400 py-3 flex gap-4">
              <input
                type="text"
                value={newsletterMail}
                onChange={(e) => setNewsletterMail(e.target.value)}
                className=" w-full text-gray-300 bg-transparent focus:border border-neutral-600 outline-none p-2"
                placeholder="Email@gmail.com"
              />
              <div
                onClick={subscribeToNewsletter}
                className=" border border-yellow-400 w-fit items-center flex gap-2 px-4 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-neutral-900 cursor-pointer duration-300 py-2"
              >
                {loading && <LoaderCircle className="animate-spin" />}
                Subscribe
              </div>
            </form>
            {newsletterResponse && (
              <p className=" text-gray-300 text-sm">{newsletterResponse}</p>
            )}
          </div>
        </div>
        {/* <div className="mt-12 md:mt-12 py-2 border-t border-neutral-600">
          <p className=" text-center text-gray-300 text-sm">
            @ copyright chal chitrakaar{" "}
          </p>
        </div> */}
        <AshishFooter />
      </div>
    </div>
  );
};

function AshishFooter() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();
  function handleNameClick() {
    router.push("https://portfolio-iota-olive-12.vercel.app/");
  }
  return (
    <div className="py-2 w-full mx-auto border-t border-neutral-600 ">
      <div className="text-center text-gray-300 text-sm relative">
        Developed By -{" "}
        <span
          onClick={handleNameClick}
          className="p-1 cursor-pointer rounded duration-300 hover:bg-neutral-700"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Ashish Bishnoi
          {isHovered && (
            <motion.div
              whileInView={{ opacity: 1, y: 0, x: "-50%" }}
              initial={{ opacity: 0, y: 6, x: "-50%" }}
              transition={{ duration: 0.3 }}
              className=" left-1/2 transform -translate-x-1/2 absolute bottom-6 p-1"
            >
              <div className=" border-neutral-700 justify-start gap-3 border flex flex-col  bg-neutral-800 text-gray-200 p-3 rounded shadow-lg w-80">
                <div className=" flex gap-3">
                  <Link
                    target="_blank"
                    href={"https://portfolio-iota-olive-12.vercel.app/"}
                  >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      className=" border border-neutral-400 size-12 rounded-full"
                      src="https://bishnoi11011.s3.ap-south-1.amazonaws.com/portfolio/me.jpg"
                      alt="Ashish Bishnoi Pic"
                    />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://portfolio-iota-olive-12.vercel.app/"
                    className=" px-1 rounded duration-200 hover:bg-neutral-700 flex flex-col"
                  >
                    <p className=" text-lg font-bold text-left ">
                      Ashish Bishnoi
                    </p>
                    <p className=" text font-thin text-gray-400 text-left ">
                      Software Developer
                    </p>
                  </Link>
                  <div className=" flex gap-1 items-center ml-auto mr-2 justify-center flex-col ">
                    <Link
                      target="_blank"
                      href="https://portfolio-iota-olive-12.vercel.app/"
                    >
                      <Globe
                        className=" hover:scale-125 duration-200 text-gray-200 hover:text-white cursor-pointer"
                        size={16}
                      />
                    </Link>
                    <Link
                      target="_blank"
                      href={"https://github.com/ashish11011"}
                    >
                      <Github
                        className=" hover:scale-125 duration-200 text-gray-200 hover:text-white cursor-pointer"
                        size={16}
                      />
                    </Link>
                  </div>
                </div>
                <div className=" text-left text-gray-300">
                  Full Stack Developer open for freelance projects in dynamic
                  web applications.
                </div>
              </div>
            </motion.div>
          )}
        </span>
      </div>
    </div>
  );
}
