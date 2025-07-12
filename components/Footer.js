import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo/logos.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Play,
} from "lucide-react";

const AnimatedFooter = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About Sikkim", link: "/#" },
        // {
        //   name: "PHD Admission",
        //   link: "/research",
        // },
        // { name: "Pharmacy", link: "/pharmacyABVSU" },
        { name: "Feedback Form", link: "/#" },
        {
          name: "Grievence Redressal Cell",
          link: "/#",
        },
        { name: "Academic Collaboration", link: "/#" },
        { name: "Document Verification", link: "/#" },
        // { name: "Flexible Learning", link: "#" },
        // { name: "Fee Confirmation ", link: "#" },
        {
          name: "International Collaboration",
          link: "/#",
        },
      ],
    },
    {
      title: "Important Links",
      links: [
        { name: "PCI", link: "/#", target: "_blank" },
        // {
        //   name: "NCTE",
        //   link: "https://ncte.gov.in/ncte_new/",
        //   target: "_blank",
        // },
        {
          name: "BCI",
          link: "/#",
          target: "_blank",
        },
        { name: "AYUSH", link: "/#", target: "_blank" },
        {
          name: "INC",
          link: "/#",
          target: "_blank",
        },
        { name: "RTI", link: "/#" },
        // { name: "Annual Reports", link: "#" },
        { name: "Terms and Condition", link: "/#" },
        {
          name: "UGC E-SAMADHAN",
          link: "/#",
          target: "_blank",
        },
      ],
    },
    {
      title: "Helpful Links",
      links: [
        { name: "Admission Policy", link: "/#" },
        { name: "Ombudsperson", link: "/#", target: "_blank" },
        {
          name: "Old Student Verification",
          link: "/#",
          target: "_blank",
        },
        {
          name: "Refund Policy",
          link: "/#",
        },
        {
          name: "Holiday List",
          link: "/#",
          target: "_blank",
        },
        { name: "Anti-Ragging", link: "/#" },
        {
          name: "Student Speak",
          link: "/#",
        },
        {
          name: "Code of Conduct",
          link: "/#",
        },
        {
          name: "Carrer @ ABVSU",
          link: "/#",
        },
      ],
    },
    {
      title: "Life @ ABVSU",
      links: [
        { name: "Campus Life", link: "/testimonial" },
        {
          name: "Computer Lab",
          link: "/#",
        },
        { name: "Library", link: "/library" },
        {
          name: "Hostel Details",
          link: "/#",
        },
        // { name: "NCC/NSS Details", link: "/#" },
        { name: "Transportation", link: "/#" },
        { name: "Conference/Seminar", link: "/#" },
        { name: "Sports Activity", link: "/#" },
        { name: "Location", link: "/#" },
      ],
    },
    {
      title: "Research",
      links: [
        { name: "Research and Development", link: "/#" },
        { name: "Incubation Centre", link: "/#" },
        { name: "Central Facilities", link: "/#" },
      ],
    },
    {
      title: "Placement",
      links: [
        {
          name: "Training and Placement Cell",
          link: "/#",
        },
        {
          name: "Our Recruiter",
          link: "/#",
        },
        { name: "Recruitment Process", link: "/#" },
        { name: "Placement Contact", link: "/#" },
      ],
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/Background/footerbg.jpeg')" }}
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none"></div>

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 px-6 md:px-8 py-8">
        {/* Column 1: Logo & Address */}
        <div className="col-span-1 p-4 bg-black/40 shadow rounded-b-xl border-white/30 border flex flex-col items-center justify-center">
          <div className="rounded-2xl p-2 w-fit">
            <Image
              src={logo}
              width={200}
              height={200}
              alt="Atal Bihari Vajpayee Skill University Logo"
            />
          </div>
          <div className="space-y-3 pt-4 text-center">
            <p className="font-bold text-xl font-serif tracking-wide text-white">
              Atal Bihari Vajpayee Skill University
            </p>
            <p className="text-sm text-white">
              Karthok Road, Pakyong, Sikkim - 737106
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center mt-3">
              {[
                {
                  name: "Facebook",
                  link: "#",
                  icon: <Facebook className="w-5 h-5" />,
                },
                {
                  name: "Twitter",
                  link: "#",
                  icon: <Twitter className="w-5 h-5" />,
                },
                {
                  name: "Instagram",
                  link: "#",
                  icon: <Instagram className="w-5 h-5" />,
                },
                {
                  name: "LinkedIn",
                  link: "#",
                  icon: <Linkedin className="w-5 h-5" />,
                },
                {
                  name: "YouTube",
                  link: "#",
                  icon: <Youtube className="w-5 h-5" />,
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
            <div className="mt-5 flex justify-center">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white text-black font-semibold px-4 py-2 rounded-full hover:bg-indigo-950 hover:text-white transition"
              >
                <Play className="w-5 h-5" />
                <span>Get it on Play Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="col-span-4 p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-1">
              <p className="font-bold text-lg text-blue-500">
                {section.title}
              </p>
              {section.links.map((link, i) => (
                <Link
                  href={link.link}
                  key={i}
                  className="block hover:underline text-white"
                  target={link.target || "_self"}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="relative z-10 text-center py-4 text-xs text-white bg-black/70 flex flex-col md:flex-row justify-between items-center gap-2 px-4 md:px-12">
        <div>@2025 All Rights Reserved</div>
        <div>
          Designed & Developed by{" "}
          <a
            href="https://www.linkedin.com/in/devkaran-webdeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 hover:underline"
          >
            Dev Karan
          </a>
        </div>
      </div> */}
    </footer>
  );
};

export default AnimatedFooter;
