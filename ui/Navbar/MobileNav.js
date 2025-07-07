"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { MainNavData } from "@/data/NavbarData";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const MobileNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubsection, setOpenSubsection] = useState(null);

  return (
    <>
      <div className="lg:hidden flex justify-between items-center px-4 py-2 bg-white z-50 shadow-md">
        {/* Left - SGTU and mini info */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="SGTU" width={28} height={28} />
          <div className="text-[11px] leading-2 text-orange-500">
            
            <p className="font-bold uppercase text-[15px]">sikkim global</p><br/>
            <p className="font-bold uppercase text-[10px]">technical university</p>
          </div>
        </div>
        <div className="text-black uppercase hidden md:block">
        <Typewriter
              words={["Admissions Open for session 2025-26", "Register Now!! Limited seats available"]}
              typeSpeed={90}
              delaySpeed={1500}
              deleteSpeed={50}
              loop={true}
            />
        </div>

        {/* Right - Helpdesk and Menu */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+918055337783"
            className="flex items-center gap-1 text-xs"
          >
            <PhoneIcon className="h-4 w-4 text-orange-500" />
            <span>Helpdesk</span>
          </a>
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Bars3Icon className="h-6 w-6 text-orange-500" />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header Bar */}
        <div className="bg-orange-500 text-white px-4 py-2">
          <div className="flex justify-between items-center text-xs">
            <div className="flex items-center gap-1 font-bold">
              <PhoneIcon className="h-4 w-4" />
              HELPDESK: +91 80 55 33 77 83
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-2 text-[11px] md:text-sm font-semibold">
            <marquee behavior="scroll" direction="left">
              🎓 Admissions Open: 2025-26 | B.Sc | BCA | B.Tech | Diploma | MBA
              | MCA | MA
            </marquee>
          </div>
        </div>

        {/* Logo and Name */}
        <div className="flex items-center gap-2 px-4 py-3 bg-white border-b">
          <Image src={logo} alt="SGTU" width={50} height={50} />
          <div>
            <p className="text-orange-500 text-base font-bold leading-none">
              Sikkim Global
            </p>
            <p className="text-xs uppercase tracking-wide font-semibold text-gray-600">
              Technical University
            </p>
          </div>
        </div>

        {/* Enquire Now CTA */}
        <div className="px-4 mt-4">
          <div className="relative overflow-hidden group rounded-lg cursor-pointer bg-blue-800 text-white px-4 py-2 text-center shadow-md transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(96,165,250,0.6)]">
            <span className="relative z-10 font-semibold tracking-wide text-sm">
              Enquire Now
            </span>
            <div className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-sm animate-chase opacity-80" />
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col p-4 space-y-4 overflow-auto">
          {MainNavData.map((item, index) => (
            <div key={index} className="space-y-1">
              <button
                onClick={() =>
                  item.flyoutData
                    ? setOpenIndex(openIndex === index ? null : index)
                    : setMobileMenuOpen(false)
                }
                className="w-full text-left text-gray-800 text-base font-semibold hover:text-orange-500 flex justify-between items-center"
              >
                <span>{item.title}</span>
                {item.flyoutData && (
                  <span className="text-xs">
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                )}
              </button>

              {/* Flyout */}
              {item.flyoutData && openIndex === index && (
                <div className="ml-4 mt-1 space-y-2">
                  {item.flyoutData.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <button
                        onClick={() =>
                          setOpenSubsection(
                            openSubsection === sectionIndex
                              ? null
                              : sectionIndex
                          )
                        }
                        className="w-full text-left text-sm font-semibold text-gray-600 flex justify-between items-center"
                      >
                        <span>{section.title}</span>
                        <span className="text-xs">
                          {openSubsection === sectionIndex ? "▲" : "▼"}
                        </span>
                      </button>
                      {openSubsection === sectionIndex && (
                        <ul className="ml-2 mt-1">
                          {section.items.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.link}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm text-gray-700 hover:text-orange-500 block py-1"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;

// export default MobileNav;
