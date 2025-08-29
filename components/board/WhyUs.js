import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { caveat } from '@/lib/fonts/Caveat';

export default function WhyUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="py-16 bg-blue-50 px-6"
      style={{
        backgroundImage: "url('/Background/media.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-4xl text-center font-bold text-blue-950 mb-6"
        >
          Why Us
        </motion.h2>

        <p className={`uppercase text-2xl text-blue-950 font-cursive text-center pb-4  ${caveat.className}`}>Revolutionary approach to school education with unmatch flexiblity and excellence</p>

        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          loop={true}
          className="mySwiper"
        >
          <div className="grid gap-2">
            {[
              [
                "Flexible Learning",
                "Study at your own pace with flexible exams & subject choices.",
              ],
              [
                "Digital-First",
                "AI-powered learning, virtual labs, and 24/7 content access.",
              ],
              [
                "Industry Curriculum",
                "NCERT base + skill training and career-ready modules.",
              ],
              [
                "Assessment Methods",
                "On-demand, project-based, and skill testing available.",
              ],
              [
                "Support System",
                "Counselors, peer groups, doubt sessions, mental health support.",
              ],
              [
                "Recognition",
                "Valid across India for exams, universities, jobs, and abroad.",
              ],
            ].map(([title, desc], i) => (
              <SwiperSlide key={i}>
                <motion.div
                  variants={fadeUp}
                  custom={i + 1}
                  className="relative h-96 w-full rounded-xl shadow group overflow-hidden duration-500 transition-all"
                >
                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('/images/Board/${i + 1}.png')`,
                    }}
                  ></div>

                  {/* Black Overlay */}
                  <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>

                  {/* Text Content */}
                  <div className="relative z-10 p-6 flex justify-center space-y-6 items-center h-full flex-col">
                    <h3
                      className="font-bold uppercase text-3xl text-white text-center"
                      
                    >
                      {title}
                    </h3>
                    <p className="text-xl mt-2 text-white/80 font-bold text-center">
                      {desc}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </motion.section>
  );
}
