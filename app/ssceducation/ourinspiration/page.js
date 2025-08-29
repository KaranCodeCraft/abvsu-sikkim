"use client"
import { motion } from "framer-motion"
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }
export default function OurInspiration() {
  return (
     <main className="min-h-screen bg-gray-50 space-y-8  text-left sm:text-justify">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="w-full">
                <img
                  src="/Banner/ssceducation/our-inspiration.jpg"
                  alt="Our Inspiration"
                  className="w-full h-auto max-h-[350px] object-cover"
                />
              </div>
            </motion.div>
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Our journey is inspired by India's rich cultural heritage, holistic values, and a collective vision for
                empowering individuals through education. Rooted in the belief that education is both a universal right
                and a pathway to societal transformation.
              </p>

              <p>
                Another core inspiration for ABVSU is the innovative spirit that defines modern India. As the world moves
                forward with advancements in science, technology, and research, we aims to stay at the forefront of
                change.
              </p>

              <p>
                Our esteemed founder, <strong>Dr. Saurabh Singhal</strong>, further fuels our inspiration. With over 18
                years of dedication to skill development and a lifelong passion for education, his vision guides every
                step we take.
              </p>


              <p>
                Above all, we are inspired by our students, who embody the aspirations and dreams of a nation looking
                toward a brighter future. Our inspiration is as vast and multifaceted as India itself. Drawn from the
                country's rich cultural heritage, innovative spirit, and our students' dreams, we continue to evolve
                with purpose.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:pl-8">
            <img
              src="/images/chairperson.jpg"
              alt="Dr. Saurabh Singhal - Founder of ABVSU"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        
      </div>
      </div>
    </main>
  )
}
