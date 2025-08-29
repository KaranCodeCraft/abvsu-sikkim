"use client";
import React, { useRef } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

// ✅ Import Google Font (Poppins only)
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const CounterCard = ({ end, suffix = "", label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`lg:w-[320px] shadow-md group hover:border-orange-500 hover:border p-4 bg-white border border-transparent rounded-lg ${poppins.className}`}
    >
      <div className="flex justify-between lg:px-4 lg:gap-8">
        {/* Numbers */}
        <div className="text-5xl font-bold tracking-tight tabular-nums">
          {isInView ? <CountUp end={end} duration={2} /> : 0}
          <span className="text-lg lg:text-2xl align-top">{suffix}</span>
        </div>

        {/* Icon */}
        <CheckBadgeIcon className="h-16 w-16 text-orange-600" />
      </div>

      {/* Label */}
      <div className="text-sm text-gray-500 w-4/5 whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};

const Counter = () => {
  return (
    <div
      className="bg-gray-200/40 py-4 mt-2 md:py-8 lg:py-12 px-2"
      style={{ backgroundImage: "url('/Background/counter.webp')" }}
    >
      <div className="max-w-full md:px-16 mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 text-left">
        <CounterCard end={300} suffix="+" label="No. of registered students" />
        <CounterCard end={98} suffix="%" label="Expected qualification success rate" />
        <CounterCard end={100} suffix="+" label="Total no. of subjects" />
        <CounterCard end={30} suffix="+" label="No. of Skill / Vocational Subjects" />
      </div>
    </div>
  );
};

export default Counter;
