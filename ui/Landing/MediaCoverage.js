"use client";
import React, { useEffect, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import {news} from '@/data/mediaData'

const MediaCoverage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? news.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === news.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 15000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="px-4 md:px-12 lg:px-24 py-4 lg:py-8 overflow-x-hidden"
      style={{
        backgroundImage: "url('/Background/media.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Heading and Arrows */}
      <div className="font-bold text-2xl mb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-3xl md:text-5xl text-white font-serif">
          Media Coverage
        </p>
        <div className="flex space-x-4">
          <ChevronLeftIcon
            className="text-white h-10 w-10 md:h-12 md:w-12 border border-white p-2 cursor-pointer"
            onClick={prevSlide}
          />
          <ChevronRightIcon
            className="text-white h-10 w-10 md:h-12 md:w-12 border border-white p-2 cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </div>
  
      {/* Animated Card */}
      <motion.div
        key={currentIndex}
        className="flex flex-col lg:flex-row border-t-4 border-orange-500 bg-white rounded-b-2xl"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {/* Text Content */}
        <div className="w-full lg:w-1/2 p-6 space-y-4">
          <p className="inline-block bg-white font-bold rounded-full p-2 px-4 mb-4 text-orange-600 border border-orange-500">
            {currentIndex + 1}
          </p>
          <p className="font-bold tracking-wider text-xl">{news[currentIndex].title}</p>
          <p className="text-justify text-gray-600">{news[currentIndex].desc}</p>
        </div>
  
        {/* Video */}
        <div className="w-full lg:w-1/2 p-6">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/${news[currentIndex].ytCode}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.div>
    </div>
  );
  

  // return (
  //   <div
  //     className="px-24 p-12 overflow-x-hidden"
  //     style={{
  //       backgroundImage: "url('/Background/media.jpg')",
  //       backgroundRepeat: "no-repeat",
  //       backgroundSize: "cover",
  //     }}
  //   >
  //     <div className="font-bold text-2xl mb-8 flex justify-between">
  //       <p className="text-5xl text-white font-serif">Media Coverage</p>
  //       <div className="flex space-x-4">
  //         <ChevronLeftIcon
  //           className="text-white h-12 w-12 border border-white p-2"
  //           onClick={prevSlide}
  //         />
  //         <ChevronRightIcon
  //           className="text-white h-12 w-12 border border-white p-2"
  //           onClick={nextSlide}
  //         />
  //       </div>
  //     </div>
  //     <motion.div
  //       key={currentIndex}
  //       className="flex border-t-4 border-orange-500 bg-white rounded-b-2xl md:min-h-[450px]"
  //       initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
  //       animate={{ opacity: 1, x: 0 }} // Animate to center
  //       exit={{ opacity: 0, x: -100 }} // Exit off-screen to the left
  //       transition={{ duration: 0.5 }}
  //     >
  //       <div className="w-full p-8 space-y-4 mt-4">
  //         <p className="inline bg-white font-bold rounded-full p-4 px-5 mb-8">
  //           {currentIndex + 1}
  //         </p>
  //         <p className="mt-8 font-bold tracking-wider text-xl">
  //           {news[currentIndex].title}
  //         </p>
  //         <p className="text-justify text-gray-600">
  //           {news[currentIndex].title}
  //         </p>
  //       </div>
  //       <div className="w-full items-center flex p-8">
  //         <div className="w-full aspect-video">
  //           <iframe
  //             className="w-full h-full rounded-xl"
  //             src={`https://www.youtube.com/embed/${news[currentIndex].ytCode}`}
  //             title="YouTube video player"
  //             frameBorder="0"
  //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //             allowFullScreen
  //           ></iframe>
  //         </div>
  //       </div>
  //     </motion.div>
  //   </div>
  // );
};

export default MediaCoverage;
