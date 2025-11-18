"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const appreciationData = [
  {
    title: "Hon' ble Cheif Minister of UP",
    name: "Shri.Yogi Adityanath",
    image: "/logo/yogi.jpeg",
    document: "/docs/YOGI ADITYANATH Hon' ble CM of UP.pdf",
    target: "_blank",
  },
    {
    title: "Hon'ble Education Minister ,Sikkim",
    name: "Shri. Raju Basnet",
    image: "/logo/raju.jpeg",
    document: "/docs/Hon'Education Minister - RAJU BASNET Letter - ABVSU.pdf",
    target: "_blank",
  },
  {
    title: "Hon' ble Cheif Minister of Haryana",
    name: "Shri. Nayab Singh Saini",
    image: "/logo/nayab.jpg",
    document: "/docs/Letter from Hon' ble CM of Haryana.pdf",
    target: "_blank",
  },
  {
    title: `Hon'ble Minister MoRTH, GOI`,
    name: "Shri. Nitin Jairam Gadkri",
    image: "/logo/nitin.jpeg",
    document: "/docs/NITIN GADKRI Minister transport and highways government of India.pdf",
    target: "_blank",
  },


  {
    title: "Hon'ble Cheif Minister ,Sikkim",
    name: "Shri. Prem Singh Tamang",
    image: "/logo/tamang.jpg",
    document: "#",
    // target: "_blank",
  },
  
  {
    title: "Hon'ble Chief Minister ,Chattisgarh",
    name: "Shri. Vishnu Deo Sai",
    image: "/logo/vishnu.jpeg",
    document: "/docs/blessing letter from cm of Chhattisgarh.pdf",
    target: "_blank",
  },
    {
    title: "Hon'ble Governer ,Sikkim",
    name: "Shri. Om Prakash Mathur",
    image: "/logo/mathur.jpeg",
    document: "#",
    // target: "_blank",
  },
];

export default function AppreciationSectionFixed() {
  return (
    <section className="py-8 bg-white">
      <div className="px-4 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Our Appreciations
        </h2>
        <p className="text-gray-600 mb-10">
          Honoured to receive appreciation from esteemed leaders and dignitaries.
        </p>

        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          centeredSlides={false}         
          grabCursor={true}
          slidesPerView={1}           
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={20}            
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 1.2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },  
            768: { slidesPerView: 2 },   
            1024: { slidesPerView: 3 }, 
          }}
          className="pb-12"
        >
          {appreciationData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-[340px] mx-auto bg-white rounded-2xl shadow-lg p-6 text-center border border-gray-200 flex flex-col h-full">
                <div className="w-[180px] h-[180px] mx-auto mb-4 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="object-contain w-full h-full rounded-md object-top"
                  />
                </div>

                <h3 className="font-semibold text-xl text-gray-800 line-clamp-2">
                  {item.name}
                </h3>
                <h3 className="font-semibold text-sm text-gray-800 mb-4 line-clamp-2">
                  {item.title}
                </h3>

                <div className="mt-auto">
                  <Link
                    href={item.document}
                    target={item.target}
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white py-1 px-5 rounded-md text-sm font-medium transition"
                  >
                    VIEW
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <Link
          href="/appreciation"
          className="inline-block mt-4 text-orange-600 font-semibold hover:underline"
        >
          View All Appreciations →
        </Link>
      </div>
    </section>
  );
}
