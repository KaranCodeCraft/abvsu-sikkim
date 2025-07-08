"use client";
import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { caveat } from "@/lib/fonts/Caveat";
import { useInView, motion } from "framer-motion";
import bg1 from "@/public/images/1.png";
import bg2 from "@/public/images/2.png";
import bg3 from "@/public/images/3.png";
import bg4 from "@/public/images/4.png";
import bg5 from "@/public/images/5.png";
import Link from "next/link";

const Programme = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, amount: 0.4 });

  return (
    <div className="p-2 px-4 md:p-4 md:px-6 lg:p-8 lg:px-24 bg-blue-200/0 overflow-hidden">
      <p
        className={`font-cursive font-light text-xl italic md:mb-1 ${caveat.className}`}
      >
        Schools
      </p>

      <div ref={headingRef}>
        <p className="mb-6 text-4xl italic underline font-serif font-semibold h-[40px]">
          {isInView ? (
            <Typewriter
              words={["Our Programmes"]}
              typeSpeed={90}
              delaySpeed={500}
            />
          ) : (
            ""
          )}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4 w-full">
        {/* School of Commerce and Management: from left */}
        <div className="md:col-span-2 md:row-span-2">
          <AnimatedCard direction="left" delay={0} className="h-full">
            <CardSchool name={"School of Computer Science and Information Technology"} bg={bg1} href={"school-of-computer-science-and-information-technology"} />
          </AnimatedCard>
        </div>

        {/* Next 5 cards from right */}
        <AnimatedCard direction="right" delay={0.1} className="h-full">
          <CardSchool name={"School of Commerce & Management"} bg={bg2} href={"school-of-commerce-and-management"} />
        </AnimatedCard>
        <AnimatedCard direction="right" delay={0.2} className="h-full">
          <CardSchool name={"School of Arts, Humanities and Social Sciences"} bg={bg3} href={"school-of-arts-humanities-and-social-sciences"}/>
        </AnimatedCard>
        <AnimatedCard direction="right" delay={0.3} className="h-full">
          <CardSchool name={"School of Sciences"} bg={bg4} href={"school-of-sciences"}/>
        </AnimatedCard>
        <AnimatedCard direction="right" delay={0.4} className="h-full">
          <CardSchool name={"School of Vocational Studies"} bg={bg5} href={"school-of-vocational-studies"}/>
        </AnimatedCard>
        {/* Last 4 cards from bottom */}
        <AnimatedCard direction="up" delay={0.1} className="h-full">
          <CardSchool name={"School of Agriculture"} bg={bg1} href={"school-of-agriculture"} />
        </AnimatedCard>

        <AnimatedCard direction="up" delay={0.2} className="h-full">
          <CardSchool name={"School of Library and Information Science"} bg={bg2} href={"school-of-library-sciences"}/>
        </AnimatedCard>
        <AnimatedCard direction="up" delay={0.3} className="h-full">
          <CardSchool name={"School of Hotel Management"} bg={bg3} href={"school-of-hotel-management-and-tourism"} />
        </AnimatedCard>
        <AnimatedCard direction="up" delay={0.4} className="h-full">
          <CardSchool name={"School of Engineering and Technology"} bg={bg4} href={"school-of-engineering-and-technology"} />
        </AnimatedCard>
      </div>
    </div>
  );
};

const CardSchool = ({ name, bg, href }) => {
  return (
        <div className="relative w-full min-h-48 h-full rounded-2xl overflow-hidden group">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${bg?.src})` }}
      ></div>

      {/* Overlay Content */}
      <div className="relative bg-black/40 z-10 w-full h-full p-4 rounded-2xl">
        <div className="absolute bottom-2 lg:p-2">
          <span className="border border-white bg-blue-900/60 rounded-2xl tracking-wider p-1 px-3 text-white hover:text-black hover:border-amber-400 transition-colors duration-300 hover:bg-amber-400">
            #Study
          </span>
          <div className="group w-fit">
            <p className="font-bold mt-2 text-xl capitalize font-serif relative cursor-pointer text-white text-left">
              {name}
              <span className="absolute left-0 bottom-1 h-[2px] w-0 bg-current transition-all duration-500 group-hover:w-full"></span>
            </p>
          </div>
        </div>
      </div>

      {/* Clickable full-layered link */}
      {href && (
        <Link href={href}>
          <p className="absolute inset-0 z-20" aria-label={`Go to ${name}`} />
        </Link>
      )}
    </div>
  );
};

const AnimatedCard = ({
  children,
  direction = "up",
  delay = 0,
  className = "",
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut",
      },
    },
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Programme;
