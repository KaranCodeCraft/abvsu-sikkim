"use client";
import React, { useEffect, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { staff as staffData } from "@/data/staffData";

const Staff = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? staffData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === staffData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div
      className="text-white px-4 py-12 md:px-12 lg:px-24 lg:py-20"
      style={{
        backgroundImage: "url('/Background/staff.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="font-bold text-2xl mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-3xl md:text-5xl italic font-serif">
          Meet Our Staff At SGTU
        </p>
        <div className="flex space-x-4">
          <ChevronLeftIcon
            className="h-10 w-10 md:h-12 md:w-12 border text-white border-white p-2 cursor-pointer"
            onClick={prevSlide}
          />
          <ChevronRightIcon
            className="h-10 w-10 md:h-12 md:w-12 border text-white border-white p-2 cursor-pointer"
            onClick={nextSlide}
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse bg-white rounded-xl p-6 md:p-12 gap-8 items-center md:items-start">
        {/* Staff Image */}
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] relative shrink-0">
          <Image
            src={staffData[currentIndex].url}
            alt="Staff"
            fill
            className="object-contain"
            unoptimized
          />
        </div>

        {/* Staff Content */}
        <div className="w-full">
          <p className="inline-block bg-orange-400 text-black font-bold rounded-sm p-2 px-4 mb-4">
            {staffData[currentIndex].position}
          </p>
          <p className="py-6 text-gray-600 border-b-2 border-gray-300 text-justify text-sm md:text-base">
            {staffData[currentIndex].message}
          </p>
          <p className="text-black font-bold mt-4 text-base md:text-lg">
            {staffData[currentIndex].name}
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            {staffData[currentIndex].school}
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            {staffData[currentIndex].education}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Staff;
