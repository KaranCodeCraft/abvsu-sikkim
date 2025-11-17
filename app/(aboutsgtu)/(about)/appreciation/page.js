"use client";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, EffectCoverflow } from "swiper/modules";

const data = [

  {
    title: "YOGI ADITYANATH Hon' ble CM of UP",
    image: "/logo/yogi.jpeg",
    desc: "YOGI ADITYANATH Hon' ble CM of UP.",
    target: "_blank",
    document: "/docs/YOGI ADITYANATH Hon' ble CM of UP.pdf",
  },
  {
    title: "Letter from Hon' ble CM of Haryana.",
    image: "/logo/nayab.jpg",
    desc: "Letter from Hon' ble CM of Haryana.",
    target: "_blank",
    document: "/docs/Letter from Hon' ble CM of Haryana.pdf",
  },
  {
    title: "NITIN GADKRI Minister, transport and highways government of India.",
    image: "/logo/nitin.jpeg",
    desc: "NITIN GADKRI, Minister transport and highways government of India.",
    target: "_blank",
    document: "/docs/NITIN GADKRI Minister transport and highways government of India.pdf",
  },
  {
    title: "Hon'Education Minister - RAJU BASNET",
    image: "/logo/raju.jpeg",
    desc: "Hon'Education Minister - RAJU BASNET",
    target: "_blank",
    document: "/docs/Hon'Education Minister - RAJU BASNET Letter - ABVSU.pdf",
  },
];

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Recognition & Approvals</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Appreciation</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Grid Cards */}
      <div className="py-12 px-4 md:px-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-shadow p-6 text-center flex flex-col justify-between h-[440px]"
            >
              <h2 className="font-bold text-lg mb-4">{item.title}</h2>

              <div className="flex justify-center items-center mb-4 w-[200px] h-[200px] mx-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                />
              </div>

              <p className="text-sm text-gray-700 mb-6 line-clamp-4">{item.desc}</p>

              <Link
                href={item.document}
                target={item.target}
                className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-4 rounded-md text-sm font-medium w-fit mx-auto"
              >
                VIEW
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;