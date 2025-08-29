"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

const points = [
  {
    title: "Flexible Learning Pathways",
    desc: "Study at your own pace with multiple entry and exit points. No age restrictions, complete freedom in subject selection, and flexible examination schedules designed for working professionals and diverse learners.",
    image: "/images/WhyUs/flexible-learning-paths.png",
  },
  {
    title: "Digital-First Approach",
    desc: "State-of-the-art digital learning platform with interactive content, virtual labs, AI-powered personalized learning paths, and 24/7 accessibility across all devices.",
    image: "/images/WhyUs/digital-first-approach.png",
  },
  {
    title: "Industry-Aligned Curriculum",
    desc: "NCERT-based academic curriculum enhanced with skill development modules, vocational training, and industry certifications to ensure career readiness and higher education preparation.",
    image: "/images/WhyUs/multiple-assessment-methods.png",
  },
  {
    title: "Multiple Assessment Methods",
    desc: "On-demand examinations, continuous assessment, project-based evaluation, and practical skill testing. Choose your preferred examination mode and schedule throughout the year.",
    image: "/images/WhyUs/flexible-learning-paths.png",
  },
  {
    title: "Comprehensive Support System",
    desc: "Dedicated academic counselors, peer learning groups, regular doubt-clearing sessions, and mental health support to ensure every student succeeds in their educational journey.",
    image: "/images/WhyUs/comprehensive-support-system.png",
  },
  {
    title: "Recognition",
    desc: "Certificates equivalent to traditional boards, recognized by all universities, competitive exam boards, and employers across India and internationally. Seamless transition to higher education.",
    image: "/images/WhyUs/recognition.png",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-gray-50 space-y-4 sm:space-y-8">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <div className="w-full">
          <img
            src="/Banner/ssceducation/why-us.jpg"
            alt="Why Us?"
            className="w-full h-auto max-h-[250px] sm:max-h-[350px] object-cover"
          />
        </div>
      </motion.div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        <div className="text-center space-y-4 sm:space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className={`text-lg sm:text-xl italic text-blue-800 max-w-4xl mx-auto leading-relaxed font-medium px-4 sm:px-0`}
          >
            Revolutionary approach to school education with unmatched flexibility and excellence
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 text-left sm:text-justify">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (index % 2) * 0.1,
                ease: "easeOut",
              }}
              className="group"
            >
              <Card className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-blue-500 hover:border-blue-600 h-full">
                <CardContent className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                    {/* Image container - always first on mobile (top), left on desktop */}
                    <div className="flex-shrink-0 order-1 sm:order-1">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white flex items-center justify-center rounded-lg">
                        <Image
                          src={point.image || "/placeholder.svg"}
                          alt={`${point.title} icon`}
                          width={200}
                          height={200}
                          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-32 lg:h-32 object-contain"
                        />
                      </div>
                    </div>
                    {/* Text container - always second on mobile (bottom), right on desktop */}
                    <div className="space-y-2 sm:space-y-3 flex-1 order-2 sm:order-2 text-center sm:text-left">
                      <h3 className="text-lg sm:text-xl font-bold text-blue-900 group-hover:text-blue-800 transition-colors leading-tight">
                        {point.title}
                      </h3>
                      <p className="text-blue-800/90 leading-relaxed text-sm sm:text-base">{point.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
