"use client";

type Testimonial = {
  msg: string;
  name: string;
  designation: string;
  img: string;
};

interface TestimonialSectionProps {
  testimonialDataCol1: Testimonial[];
  testimonialDataCol2: Testimonial[];
  testimonialDataCol3: Testimonial[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonialDataCol1,
  testimonialDataCol2,
  testimonialDataCol3,
}) => {
  return (
    <div className=" flex items-center max-w-7xl mx-auto flex-col gap-8 mt-16 ">
      <div className="flex flex-col gap-2 mx-auto md:mx-0 w-fit">
        <p className=" text-xl text-white md:text-3xl font-playfair font-medium">
          Testimonials
        </p>
        <div className="w-full h-[1px] bg-yellow-400 -translate-x-8"></div>
      </div>

      {/* Testimonial Section */}
      <div className="relative mx-auto mt-12 grid h-[90vh] max-w-7xl grid-cols-12 gap-8 overflow-y-hidden bg-neutral-900 px-4 lg:px-16">
        <div className="group relative col-span-12 mx-auto flex cursor-pointer flex-col gap-4 sm:col-span-6 lg:col-span-4">
          <div className="flex h-fit w-full animate-marquee flex-col gap-4 group-hover:[animation-play-state:paused]">
            {testimonialDataCol1.map((data, index) => (
              <SingleTestimonial
                key={index}
                img={data.img}
                name={data.name}
                designation={data.designation}
                msg={data.msg}
              />
            ))}
          </div>
          <div className="absolute top-[16px] flex h-fit w-full animate-marquee2 flex-col gap-4 group-hover:[animation-play-state:paused]">
            {testimonialDataCol1.map((data, index) => (
              <SingleTestimonial
                key={index}
                img={data.img}
                name={data.name}
                designation={data.designation}
                msg={data.msg}
              />
            ))}
          </div>
        </div>

        <div className="group relative col-span-6 mx-auto hidden cursor-pointer flex-col gap-4 sm:flex lg:col-span-4">
          <div className="flex h-fit w-full animate-marqueem1 flex-col gap-4 group-hover:[animation-play-state:paused]">
            {testimonialDataCol2.map((data, index) => (
              <SingleTestimonial
                key={index}
                img={data.img}
                name={data.name}
                designation={data.designation}
                msg={data.msg}
              />
            ))}
          </div>
          <div className="absolute top-[16px] flex h-fit w-full animate-marqueem2 flex-col gap-4 group-hover:[animation-play-state:paused]">
            {testimonialDataCol2.map((data, index) => (
              <SingleTestimonial
                key={index}
                img={data.img}
                name={data.name}
                designation={data.designation}
                msg={data.msg}
              />
            ))}
          </div>
        </div>

        <div className="group relative col-span-6 mx-auto hidden cursor-pointer flex-col gap-4 lg:col-span-4 lg:flex">
          <div className="flex h-fit w-full animate-marquee flex-col gap-4 group-hover:[animation-play-state:paused]">
            {testimonialDataCol3.map((data, index) => (
              <SingleTestimonial
                key={index}
                img={data.img}
                name={data.name}
                designation={data.designation}
                msg={data.msg}
              />
            ))}
          </div>
          <div className="absolute top-[16px] flex h-fit w-full animate-marquee2 flex-col gap-4 group-hover:[animation-play-state:paused]">
            {testimonialDataCol3.map((data, index) => (
              <SingleTestimonial
                key={index}
                img={data.img}
                name={data.name}
                designation={data.designation}
                msg={data.msg}
              />
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-neutral-900"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-neutral-900"></div>
      </div>
    </div>
  );
};

export default TestimonialSection;

function SingleTestimonial({
  img,
  name,
  designation,
  msg,
}: {
  img: string;
  name: string;
  designation: string;
  msg: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-neutral-800 p-4 text-black shadow-sm border border-neutral-700 shadow-neutral-600">
      <div className="flex gap-4">
        {/* <img
          className="size-12 border border-neutral-600 h-12 w-12 rounded-full object-contain"
          src={`/testimonial/${img}`}
          alt={name}
          loading="lazy"
        /> */}
        <div className="flex flex-col">
          <div className="text-xl text-white ">{name}</div>
          <div className="text-sm text-gray-400 font-thin">{designation}</div>
        </div>
      </div>
      <div className=" text-gray-300">{msg}</div>
    </div>
  );
}
