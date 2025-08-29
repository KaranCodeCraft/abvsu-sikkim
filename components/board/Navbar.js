"use client";
import { PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import logo from "@/public/logo.png";
import FlyoutLink from "@/ui/Navbar/FlyoutLink";
import { HangingNavData, MainNavData } from "@/data/NavbarData";
import aiu from "@/public/logo/aiu.png";
import sgov from "@/public/logo/sgov.png";
import ugc from "@/public/logo/ugc.png";
import { useEffect, useRef, useState } from "react";
import MobileNav from "@/ui/Navbar/MobileNav";
import EnquiryFormDialog from "@/ui/form/enquiry";
import ApplyFormDialog from "@/ui/form/apply";
import Link from "next/link";
import { boardMainNav, boardNav } from "@/data/boardData";

const Navbar = () => {
  const enquiryRef = useRef();
  const applyRef = useRef();

  return (
    <>
      <MobileNav />
      <header
        className={`sticky top-0 bg-white text-black shadow-2xl z-20 transform-border duration-300 ease-in-out hidden lg:block rounded-b-4xl`}
      >
        {/* Sticky Bar */}
        <div className="bg-blue-950 flex justify-between px-2 md:px-8 py-1 text-xs md:text-sm items-center">
          {/* <div className="flex gap-1 xl:gap-2 text-white font-bold"> */}
            {/* <EnvelopeIcon className="h-4 w-4" /> info@ABVSU.ac.in */}
            {/* <PhoneIcon className="h-4 w-4 md:h-5 md:w-5" />
            HELPDESK: 888 888 8333
          </div> */}
          <div className="text-white space-x-2 hidden md:flex w-3/5">
            <span className="flex-start font-bold">Announcement:</span>
            <marquee className="whitespace-nowrap">Admission Open 2025</marquee>
          </div>
<div className="ml-60 flex items-center gap-3">
  <div
    onClick={() => (window.location.href = '/ssceducation/applynow')}
    className="relative overflow-hidden group cursor-pointer bg-orange-600 px-3 py-1 rounded-[15px_0px_15px_0px] shadow-md transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)]"
  >
    <span className="relative z-10 font-semibold tracking-wide text-white">
      Apply Now
    </span>
    <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm animate-chase opacity-80" />
  </div>

  <div
    onClick={() => enquiryRef.current?.openDialog()}
    className="relative overflow-hidden group cursor-pointer bg-orange-600 text-white px-4 py-1 rounded-[15px_0px_15px_0px] shadow-md transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)]"
  >
    <span className="relative z-10 font-semibold tracking-wide">
      Enquire Now
    </span>
    <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm animate-chase opacity-80" />
  </div>
</div>

          <EnquiryFormDialog ref={enquiryRef} />
          <ApplyFormDialog  ref={applyRef} />
        </div>
        {/* Navbar */}
        <div
          className={` flex transition-all duration-500 ease-in-out h-28
          `}
        >
          <div className=" w-1/4 justify-center items-center flex pl-2">
            <Link href={"/ssceducation"}>
              <Image
                src={logo}
                alt="ABVSU"
                height={850}
                width={800}
                priority={true}
                quality={95}
                className="transition-all duration-300 ease-in-out object-cover"
              />
            </Link>
            {/* <div
              className={`hidden lg:block transition-all duration-500 ease-in-out transform ${
                hideTopBar
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x -4"
              } `}
            >
              <p className="text-2xl font-mono font-bold text-orange-500 uppercase tracking-tight ">
                Sikkim Global
              </p>
              <span className="text-sm font-mono font-bold text-orange-500 uppercase tracking-wider ">
                Technical University
              </span>
            </div> */}
          </div>
          <div className=" w-3/4 items-center flex flex-col ">
            <div
              className={`w-full rounded-bl-2xl pt-1 py-2 px-4 overflow-hidden transition-all duration-500 ease-in-out max-h-20 opacity-100`}
            >
              <ul className="flex gap-1 justify-end divide-x divide-gray-400">
                {boardNav.map((item, index) => (
                  <li
                    key={index}
                    className={`text-xs xl:text-sm ${
                      index === 0
                        ? "pr-1"
                        : index === HangingNavData.length - 1
                        ? "pl-1"
                        : "px-1"
                    }`}
                  >
                    <Link href={item.path} target={item.target || "_self"}>
                      <span className="hover:underline cursor-pointer">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mr-10  w-full h-full">
              <div className="w-full h-full relative z-50 ">
                <nav className="flex pl-6 justify-around w-full items-center font-medium h-full">
                  <ul className="w-full flex gap-3 font-medium justify-center px-4 items-center">
                    {/* Todo solve for the last Nav overflow issue */}
                    {boardMainNav.map((item, index) => (
                      <li key={index}>
                        <FlyoutLink
                          href={item.path}
                          FlyoutContent={item.flyout}
                        >
                          {item.title}
                        </FlyoutLink>
                      </li>
                    ))}

                   
                  </ul>
                   <div className="w-1/3 relative overflow-hidden group rounded-sm font-bold cursor-pointer bg-orange-600 text-white py-2 shadow-md transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] text-center justify-center tracking-wide">
                      <Link href={"/"}>
                        <p>Visit University Website</p>
                        <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm animate-chase opacity-80" />
                      </Link>
                    </div>
                  <div className="flex  space-x-1 items-center transition-all duration-500 px-4">
                    <div
                      className={`transition-all duration-500 ease-in-out w-[40px] h-[40px]`}
                    >
                      <Image
                        src={aiu}
                        alt="aiu"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className={`transition-all duration-500 ease-in-out w-[40px] h-[40px]`}
                    >
                      <Image
                        src={sgov}
                        alt="aiu"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className={`transition-all duration-500 ease-in-out w-[40px] h-[40px]`}
                    >
                      <Image
                        src={ugc}
                        alt="aiu"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
