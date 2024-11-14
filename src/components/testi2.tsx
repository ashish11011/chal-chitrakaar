"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};
export const Testimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <div className=" flex items-center py-8 mt-16 flex-col gap-8">
      <div className="flex flex-col gap-2 mx-auto md:mx-0 w-fit">
        <p className=" text-white text-xl md:text-3xl font-playfair font-medium">
          Testimonials
        </p>
        <div className="w-full h-[1px] bg-yellow-400 -translate-x-8"></div>
      </div>
      <div className="max-w-sm md:max-w-6xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-8">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8  md:gap-20">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      // rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.9,
                      scale: isActive(index) ? 1 : 0.97,
                      z: isActive(index) ? 0 : -100,
                      // rotate: isActive(index) ? 0 : randomRotateY(),
                      x: isActive(index) ? 0 : -15,
                      y: isActive(index) ? 0 : -15,
                      zIndex: isActive(index)
                        ? 40
                        : testimonials.length + 2 - index,
                      // y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 0,
                      y: -15,
                      x: -15,
                      // rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-full rounded-xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold text-white">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-neutral-500">
                {testimonials[active].designation}
              </p>
              <motion.p className="text-lg mt-6 md:mt-8 text-neutral-300">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      // filter: "blur(10px)",
                      opacity: 0,
                      // y: 5,
                    }}
                    animate={{
                      // filter: "blur(0px)",
                      opacity: 1,
                      // y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 items-center justify-center md:justify-start pt-8 md:pt-0">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-7 w-7 text-neutral-400 md:group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full bg-neutral-800 flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-7 w-7 text-neutral-400 md:group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};