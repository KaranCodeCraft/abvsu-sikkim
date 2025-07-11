"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Kishan Gupta",
    image: "https://www.ABVSU.ac.in/images/student1.jpg",
    text:
      "The Training & Placement Cell equipped me with the right skills and opportunities, leading to my dream job. I’m grateful for their constant support!",
  },
  {
    name: "Shubham Mishra",
    image: "https://www.ABVSU.ac.in/images/student0.jpg",
    text:
      "The placement process was seamless. With the guidance from the Placement Cell, I landed an amazing role at a top company. It truly made a difference!",
  },
  {
    name: "Vinod Kumar",
    image: "/images/student1.jpg",
    text:
      "Thanks to the placement training, I gained confidence and the skills needed to excel in interviews. It’s been a life-changing experience!",
  },
  {
    name: "Ankita Pathak",
    image: "https://www.ABVSU.ac.in/images/young-woman.jpg",
    text:
      "The support from the T&P Cell throughout the recruitment process was incredible. It helped me secure my first job and set me on the right path.",
  },
  {
    name: "Nitika",
    image: "https://www.ABVSU.ac.in/images/student3.jpg",
    text:
      "With the guidance and preparation I received, I was able to connect with top recruiters and start my professional journey on a high note.",
  },
];

export default function Testimonial() {
  return (
    <section className="min-h-[600px] bg-white py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h5 className="text-sm text-gray-500 tracking-widest font-semibold mb-2 uppercase">
          Our Testimonial
        </h5>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          What Students{" "}
          <span className="text-orange-500 drop-shadow-sm">Say</span> About{" "}
          <span className="text-orange-500 drop-shadow-sm">ABVSU</span>
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="pb-16"
      >
        {testimonials.map(({ name, image, text }, idx) => (
          <SwiperSlide key={idx}>
            <div className="max-w-xl mx-auto bg-gray-50 rounded-xl p-8 shadow-md ring-1 ring-gray-200 hover:ring-orange-500 transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 mb-6 rounded-full overflow-hidden ring-2 ring-orange-500 shadow-sm">
                  <img
                    src={image}
                    alt={`${name} photo`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 drop-shadow-sm">
                  {name}
                </h3>
                <p className="text-gray-700 italic text-lg leading-relaxed max-w-lg">
                  “{text}”
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
