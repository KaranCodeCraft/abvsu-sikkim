"use client";
import React, { useEffect, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/Banner/1.png",
    "/Banner/2.png",
    "/Banner/3.png",
    "/Banner/4.png",
  ];

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
    <div className="">
      {/* Image Slider Section */}
      <div className=" relative overflow-hidden rounded-md">
        <motion.div
          key={currentIndex}
          className="w-full h-[95vh] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images[currentIndex]}
            alt="Banner"
            className="w-full  object-fit rounded-md"
          />
        </motion.div>
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
        >
          <ChevronLeftIcon  className="h-8 w-8" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
        >
          <ChevronRightIcon className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
