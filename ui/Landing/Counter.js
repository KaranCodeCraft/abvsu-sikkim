"use client";
import React, { useRef } from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

const CounterCard = ({ end, suffix = "", label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="lg:w-[320px] shadow-md group hover:border-blue-950 hover:border p-4 bg-white border border-transparent rounded-lg"
    >
      <div className="flex justify-between lg:px-4 lg:gap-8">
        <div className="text-5xl font-bold font-serif align-baseline">
          {isInView ? <CountUp end={end} duration={2} className="text-md"/> : 0}
          <span className="text-sm lg:text-2xl align-top">{suffix}</span>
        </div>
        <CheckBadgeIcon className="h-16 w-16" />
      </div>
      <div className="text-sm text-gray-500 w-4/5">{label}</div>
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
      <CounterCard end={92} suffix="%" label="Expected Qualification Success Rate" />
      <CounterCard
        end={20}
        suffix="+"
        label="Expected No. of Programmes"
      />
      <CounterCard
        end={100}
        suffix="+"
        label="Expected Number of Placement/Employment Tie-Ups"
      />
      <CounterCard end={100} suffix="+" label="Expected Number of Faculty/Guest Faculty" />
    </div>
  </div>
  
  );
};

export default Counter;
