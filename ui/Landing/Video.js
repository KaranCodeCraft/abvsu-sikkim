"use client";

import React, { useRef } from "react";
import EnquiryFormDialog from "@/ui/form/enquiry";
import {
  BookOpenIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const Video = () => {
  const enquiryRef = useRef();
  return (
    <div className="w-full xl:h-[80vh] overflow-hidden relative">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/Video/movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Optional overlay content */}
      <div className="absolute inset-0 bg-black/30 flex items-end justify-center">
        {/* <h1 className="text-white text-4xl font-bold">Welcome to Our Site</h1> */}
        {/* <Image src={Banner1} width={1800} height={600} alt="Agriculture" /> */}
        <div className="bg-gradient-to-b to-black/80 from-transparent  text-white space-x-8 lg:space-x-16 p-4 md:p-8 w-full flex justify-center">
          <VideoButton
            text="Explore Programs"
            href={"/#programme"}
            icon={BookOpenIcon}
          />
          <VideoButton
            text="Apply Now"
            icon={AcademicCapIcon}
            onClick={() => enquiryRef.current?.openDialog()}
          />
          <EnquiryFormDialog ref={enquiryRef} />
          <VideoButton
            text="Talk with Faculty"
            icon={ChatBubbleLeftRightIcon}
            onClick={() => {
              if (typeof window !== "undefined" && window.Tawk_API) {
                window.Tawk_API.maximize();
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

const VideoButton = ({ text, icon: Icon, href = null, onClick = null }) => {
  const className =
    "rounded-full flex bg-blue-950 p-1 px-4 xl:p-2 xl:px-8 uppercase md:gap-1 xl:gap-2 items-center font-bold hover:bg-yellow-400 hover:text-black cursor-pointer transition-colors duration-500 text-[9px] md:text-sm lg:text-base";

  const content = (
    <div className={className}>
      {text}
      <Icon className="h-8 w-8 ml-2" />
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button type="button" onClick={onClick} className="focus:outline-none">
      {content}
    </button>
  );
};

export default Video;
