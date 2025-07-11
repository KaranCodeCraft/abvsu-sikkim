"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import h1 from "@/public/images/Highlight/01.jpg";
import h2 from "@/public/images/Highlight/02.jpg";
import { motion } from "framer-motion";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const Highlight = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [ h1, h2];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="p-4 sm:p-6 md:p-10 bg-pink-100/10">
      {/* Image Slider */}
      <div className="relative overflow-hidden rounded-2xl">
        <motion.div
          key={currentIndex}
          className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[currentIndex]}
            alt="Highlight Banner"
            fill
            quality={100}
            className="object-cover object-center rounded-2xl"
            priority
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-between text-white px-4 py-5 sm:px-6 sm:py-8 bg-gradient-to-l from-transparent to-black/80 rounded-2xl">
            <div>
              <p className="capitalize font-bold font-serif text-lg sm:text-2xl md:text-4xl max-w-[90%] sm:max-w-[80%] leading-snug">
                Our teaching Quality is best from other universities
              </p>
            </div>

            <div className="space-y-1 sm:space-y-2 mt-4 sm:mt-0">
              <p className="text-xl sm:text-3xl font-bold">10+</p>
              <p className="capitalize font-bold text-base sm:text-xl font-serif">
                library in university
              </p>
              <p className="capitalize font-light text-sm sm:text-base max-w-[95%] sm:max-w-[75%]">
                Atal Bihari Vajpayee Skill University hosts a variety of
                specialized institutes focused on advancing knowledge.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-3 sm:left-4 z-10 -translate-y-1/2 cursor-pointer">
          <ChevronLeftIcon
            className="h-9 w-9 sm:h-10 sm:w-10 text-white bg-black/40 rounded-full p-2 hover:bg-black/60 transition"
            onClick={prevSlide}
          />
        </div>
        <div className="absolute top-1/2 right-3 sm:right-4 z-10 -translate-y-1/2 cursor-pointer">
          <ChevronRightIcon
            className="h-9 w-9 sm:h-10 sm:w-10 text-white bg-black/40 rounded-full p-2 hover:bg-black/60 transition"
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Highlight;
