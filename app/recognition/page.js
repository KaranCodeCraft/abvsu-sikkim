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
    title: "Government of Sikkim Gazzete Notification",
    image: "/logo/sgov.png",
    desc: "The Atal Bihari Vajpayee Skill University was established by the Sikkim Legislative Assembly through The Atal Bihari Vajpayee Skill University ACT, 2023 (Act No. 9 of 2023) on the 11th day of July, 2023.",
    document: "/docs/Government of Sikkim Gazzete Notification.pdf",
  },
  {
    title: "University Grants Commission",
    image: "/logo/ugc.png",
    desc: "Atal Bihari Vajpayee Skill University is recognized by UGC as a Private University under Section 2(f) of the UGC Act 1956.",
    document: "/docs/University Grants Commission.pdf",
  },
  {
    title: "Association of Indian Universities",
    image: "/logo/aiu.png",
    desc: "Atal Bihari Vajpayee Skill University is a member of the Association of Indian Universities (AIU), an Apex Inter-University Organization engaged in the growth and development of Higher Education.",
    document: "/docs/aiu.jpg",
  },
  {
    title: "All India Council for Technical Education (AICTE)",
    image: "/logo/aicte.png",
    desc: "Atal Bihari Vajpayee Skill University is AICTE (All India Council for Technical Education) approved.",
    document: "/docs/All India Council.pdf",
  },
  {
    title: "PCI approval for SGTU, School of Pharmacy",
    image: "/logo/pci.png",
    desc: "Atal Bihari Vajpayee Skill University / PCI-9508",
    // document: "/docs/sgtupci.pdf",
    document: "#",
  },
  {
    title: "PCI approval for CCDDH",
    image: "/logo/pci.png",
    desc: "Chardham College of Drug Development and Healthcare (CCDDH) / PCI-10557",
    document: "#",
    // document: "/docs/chardham.pdf",
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
            <span className="text-white">Recognition / Approvals</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Intro Section */}
      {/* <div className="py-16 px-4 md:px-16 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
          Recognized by Reputed National Education Bodies
        </h2>
        <p className="text-gray-700 text-md md:text-lg leading-7">
          Atal Bihari Vajpayee Skill University (SGTU) has received recognition and approval from esteemed regulatory and statutory bodies, affirming our commitment to high standards of education, credibility, and academic excellence.
        </p>
      </div> */}

      {/* Grid Cards */}
      <div className="py-12 px-4 md:px-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-shadow p-6 text-center flex flex-col justify-between h-[440px]"
            >
              <h2 className="font-bold text-lg mb-4">{item.title}</h2>

              <div className="flex justify-center items-center mb-4 w-[100px] h-[100px] mx-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                />
              </div>

              <p className="text-sm text-gray-700 mb-6 line-clamp-4">{item.desc}</p>

              <a
                href={item.document}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-4 rounded-md text-sm font-medium w-fit mx-auto"
              >
                VIEW
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Swiper Carousel */}
      {/* <div className="py-20 px-4 md:px-16 bg-gray-50">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-orange-600 mb-12">
          Swipe Through Our Approvals
        </h2>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView={3}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="max-w-6xl mx-auto"
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className="bg-white rounded-2xl shadow-lg transition-shadow p-6 text-center flex flex-col justify-between h-[400px]"
            >
              <div>
                <h2 className="font-bold text-lg mb-4">{item.title}</h2>
                <div className="flex justify-center items-center mb-4 w-[100px] h-[100px] mx-auto">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <a
                href={item.document}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-4 rounded-md text-sm font-medium w-fit mx-auto"
              >
                VIEW
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </div>
  );
};

export default Page;
