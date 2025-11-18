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
import Link from "next/link";

const Navbar = () => {
  const [hideTopBar, setHideTopBar] = useState(true);
  const enquiryRef = useRef();
  // useEffect(() => {
  //   let lastScrollY = window.scrollY;
  //   let ticking = false;
  //   const threshold = 200; // scroll distance to trigger change

  //   const updateScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     if (Math.abs(currentScrollY - lastScrollY) >= threshold) {
  //       if (currentScrollY > lastScrollY && currentScrollY > 50) {
  //         setHideTopBar(false); // scrolling down
  //       } else {
  //         setHideTopBar(true); // scrolling up
  //       }
  //       lastScrollY = currentScrollY;
  //     }

  //     ticking = false;
  //   };

  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(updateScroll);
  //       ticking = true;
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  useEffect(() => {
    const s1 = document.createElement("script");
    s1.src = "https://embed.tawk.to/67caf88349fc7b190d9d0c37/1ilodlgv2";
    s1.async = true;
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);

    return () => {
      document.body.removeChild(s1);
    };
  }, []);

  return (
    <>
      <MobileNav />
      <header
        className={`sticky top-0 bg-white text-black shadow-2xl ${
          hideTopBar ? "rounded-b-4xl" : ""
        } z-20 transform-border duration-300 ease-in-out hidden lg:block`}
      >
        {/* Sticky Bar */}
        <div className="bg-blue-950 flex justify-between px-2 md:px-8 py-1 text-xs md:text-sm items-center">
          <div className="flex gap-1 xl:gap-2 text-white font-bold">
            {/* <EnvelopeIcon className="h-4 w-4" /> info@ABVSU.ac.in */}
            <PhoneIcon className="h-4 w-4 md:h-5 md:w-5" />
            HELPDESK: 9821666832
          </div>
          <div className="text-white space-x-2 hidden md:flex w-3/5">
            {/* <span className="flex-start font-bold">Announcement:</span> */}
            {/* <marquee>Admissions open for Session 2025-26</marquee> */}
          </div>
          <div
            onClick={() => enquiryRef.current?.openDialog()}
            className="relative overflow-hidden group rounded-lg cursor-pointer bg-orange-600 text-white px-4 py-1 shadow-md transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)]"
          >
            <span className="relative z-10 font-semibold tracking-wide">
              Enquire Now
            </span>
            <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm animate-chase opacity-80" />
          </div>
          <EnquiryFormDialog ref={enquiryRef} />
        </div>
        {/* Navbar */}
        <div
          className={`flex transition-all duration-500 ease-in-out ${
            hideTopBar ? "h-28" : "h-16"
          }`}
        >
          <div className="w-1/4 items-center  flex pl-2  space-x-2">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="ABVSU"
                height={hideTopBar ? 800 : 200}
                width={hideTopBar ? 800 : 200}
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
          <div className="w-3/4 items-center flex flex-col">
            <div
              className={`w-full rounded-bl-2xl pt-1 px-4 py-5 overflow-hidden transition-all duration-500 ease-in-out ${
                hideTopBar ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="flex gap-1 justify-end  divide-x divide-gray-400">
                {HangingNavData.map((item, index) => (
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
                    <Link href={item.link} target={item.target || "_self"}>
                      <span className="hover:underline cursor-pointer">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full  h-full px-2">
              <div className="w-full h-full relative z-50">
                <nav className="flex justify-center w-full items-center font-medium h-full">
                  <div className="flex  flex-col items-center h-full justify-between pb-2 w-4/5">
                    <div className="mb-2 relative overflow-hidden group rounded-sm font-bold cursor-pointer bg-orange-600 text-white px-4 py-2 shadow-md transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)] text-center justify-center tracking-wide ">
                      <Link href={"/ssceducation"}>
                        <p>
                          Visit Secondary  & Senior Secondary Education Website
                        </p>
                        <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm animate-chase opacity-80" />
                      </Link>
                    </div>

                    <ul className="relative flex gap-4 justify-center px-8 ">
                      {/* Todo solve for the last Nav overflow issue */}
                      {MainNavData.map((item, index) => (
                        <li key={index} >
                          <FlyoutLink
                            href={item.href}
                            FlyoutContent={item.flyout}
                          >
                            {item.title}
                          </FlyoutLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-1 items-center transition-all duration-500 px-1 lg:space-x-0 lg:px-0 w-1/5 ml-auto">
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        hideTopBar ? "w-[65px] h-[65px]" : "w-[40px] h-[40px]"
                      }`}
                    >
                      <Image
                        src={aiu}
                        alt="aiu"
                        width={70}
                        height={70}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        hideTopBar ? "w-[65px] h-[65px]" : "w-[40px] h-[40px]"
                      }`}
                    >
                      <Image
                        src={sgov}
                        alt="aiu"
                        width={70}
                        height={70}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div
                      className={`transition-all duration-500 ease-in-out ${
                        hideTopBar ? "w-[65px] h-[65px]" : "w-[40px] h-[40px]"
                      }`}
                    >
                      <Image
                        src={ugc}
                        alt="aiu"
                        width={70}
                        height={70}
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
