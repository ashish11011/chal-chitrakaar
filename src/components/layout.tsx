"use client";
// import { categoryData } from "@/const/products";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const NAVIGATIONS = [
  {
    name: "Home",
    slug: "/",
  },
  {
    name: "About Me",
    slug: "/about-me",
  },
  {
    name: "Portfolio",
    slug: "/portfolio",
  },
  {
    name: "Services",
    slug: "/services",
  },
  {
    name: "Pricing",
    slug: "/pricing",
  },
  {
    name: "Contact",
    slug: "/contact",
  },
];

export const NavBar = () => {
  const [mobNavOpen, setMobNavOpen] = useState(false);
  const currentPage = "/";
  return (
    <div className="sticky top-0 z-50 w-full border-b border-neutral-700 bg-neutral-900">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-8 px-4 py-6 md:px-8 md:py-6">
        <Link href={"/"} className=" max-h-8 w-auto min-w-14 md:max-h-none">
          {/* <img
            className="h-full w-full object-contain"
            src="https://s3.ap-south-1.amazonaws.com/cozzy.corner/logo.png"
            alt=""
          /> */}
          <p className="text-2xl font-playfair font-medium">
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
                    currentPage === item.slug && "border-b border-yellow-400"
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
                    className="w-full py-3 text-center text-xl hover:bg-neutral-800"
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

export const Footer = () => {
  const currentPage = "/";
  return (
    <div className="w-full  pt-12 px-6 md:px-16 pb-4 bg-neutral-800">
      <div className=" max-w-7xl flex flex-col gap-16 mx-auto w-full">
        <div className="hidden md:flex flex-col-reverse md:flex-row gap-6 justify-between">
          <div className=" flex gap-2 md:gap-6 flex-col md:flex-row">
            {NAVIGATIONS.map((item) => {
              return (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className={`cursor-pointer w-fit py-1.5 duration-300 hover:bg-neutral-700 md:px-5 md:text-base ${
                    currentPage === item.slug && "border-b border-yellow-400"
                  } `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          <Link href={"/"} className="">
            <p className="text-2xl font-playfair whitespace-nowrap font-medium">
              Chal <span className="text-yellow-400">Chitrakaar</span>
            </p>
          </Link>
        </div>
        <div className=" flex flex-col md:flex-row gap-6 justify-between">
          <div className=" flex flex-col gap-5">
            <p className=" font-semibold text-2xl">Services</p>
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
            <p className=" font-semibold text-2xl">Connect</p>
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
            <p className=" font-semibold text-2xl">Connect</p>
            <ul className=" flex flex-col gap-4 md:gap-3">
              <li className=" text-gray-300 hover:text-yellow-400 cursor-pointer duration-200">
                chal@chitrakaar.com
              </li>
            </ul>
          </div>
          {/* Subscribe */}
          <div className=" w-full max-w-xl flex flex-col gap-4 ">
            <p className=" text-2xl capitalize md:text-4xl font-playfair font-semibold">
              Sign Up to my newsletter
            </p>
            <div className=" border-b border-yellow-400 py-3 flex gap-4">
              <input
                type="text"
                className=" w-full text-gray-300 bg-transparent focus:border border-neutral-600 outline-none p-2"
                placeholder="Email@gmail.com"
              />
              <div className=" border border-yellow-400 w-fit px-4 text-yellow-400 font-medium hover:bg-yellow-400 hover:text-neutral-900 cursor-pointer duration-300 py-2">
                Subscribe
              </div>
            </div>
          </div>
        </div>
        <div className=" py-2 border-t border-neutral-600">
          <p className=" text-center text-gray-300 text-sm">
            @ copyright chal chitrakaar{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
