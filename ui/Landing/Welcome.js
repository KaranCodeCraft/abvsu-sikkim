"use client";
import React, { useRef } from "react";
import {
  AcademicCapIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { caveat } from "@/lib/fonts/Caveat";
import Image from "next/image";
import about from "@/public/about1.png";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const Welcome = () => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "-100px" });
  return (
    <div className="py-2 md:py-8 lg:py-16">
      <div className="flex flex-col-reverse md:flex-row justify-center space-x-6 px-4 lg:px-24">
        <div className="w-full mt-4" style={{ perspective: 1000 }}>
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image src={about} height={100} width={700} alt="about sgtu" />
          </motion.div>
        </div>

        <div className="w-full xl:pl-8 p-1">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className={`flex text-lg md:text-2xl gap-2 items-center mb-1 lg:mb-4 font-cursive ${caveat.className}`}
          >
            <AcademicCapIcon className="text-orange-500 h-8 w-8" />
            Knowledge meets the Innovation
          </motion.p>
          <p className="font-semibold text-xl md:text-2xl xl:text-5xl mb-1 lg:mb-4 text-left">
            The Sikkim Global Technical University
          </p>
          <p className="text-gray-500 mb-2 text-justify text-xs md:text-sm lg:text-base">
            The Sikkim Global Technical University was formed and incorporated
            by the Sikkim legislature through its official gazette and is
            recognised by the UGC Act 1956 under clause 2(f). The Sikkim Global
            Technical University is a futuristic model for young India that
            focuses on developing trends and skills. With substantial
            cooperation from the government, industry, and academia,
            technology-enabled learning has shifted the focus to skills-led
            education.
          </p>
          <Link
            href={"/#programme"}
            className="group uppercase bg-amber-400 mt-3 md:mt-4 lg:mt-8 p-2 lg:p-4 rounded-lg xl:rounded-2xl px-4 lg:px-6 font-bold flex gap-1 cursor-pointer transition-all duration-300 items-center text-sm md:text-base lg:text-lg w-full justify-center md:w-fit"
          >
            View our program
            <ArrowRightCircleIcon className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
