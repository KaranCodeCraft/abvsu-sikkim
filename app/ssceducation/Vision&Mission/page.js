"use client"

import { Eye, Target, Shield, Star } from "lucide-react"
import { motion } from "framer-motion"

export default function VisionMissionPage() {
  // Animation variants for left and right slide-ins
  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <div className="min-h-screen bg-gray-50 space-y-8">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <div className="w-full">
          <img
            src="/Banner/ssceducation/vission-mission.jpg"
            alt="Educational Banner"
            className="w-full h-auto max-h-[350px] object-cover"
          />
        </div>
      </motion.div>

      {/* Header */}
    {/*   <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <div className="top-10 relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900  text-center ">Vision & Mission</h1>
        </div>
      </motion.div> */}

      {/* Content Sections */}
      <div className="relative top-5 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Section - Slide in from left */}
          <motion.div
            className="bg-white rounded-lg shadow-sm overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src="/images/vision_mission/vision.jpg"
                  alt="Modern university building"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Eye className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-blue-600">Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-left">
                  To provide "Sustainable inclusive learning with universal and flexible access to quality school
                  education and skill development."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Section - Slide in from right */}
          <motion.div
            className="bg-white rounded-lg shadow-sm overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src="/images/vision_mission/mission.jpg"
                  alt="Team meeting discussion"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-full">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-orange-600">Mission</h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2 text-left">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To provide relevant, continuing and holistic education up to pre-degree level.</span>
                  </li>
                  <li className="flex items-start gap-2 text-left">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To contribute to the Universalisation of School Education.</span>
                  </li>
                  <li className="flex items-start gap-2 text-left">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>To cater to the educational needs of the youth for equity and social justice.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Quality Policy Section - Slide in from left */}
          <motion.div
            className="bg-white rounded-lg shadow-sm overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInLeft}
          >
            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src="/images/vision_mission/quality.jpg"
                  alt="Quality policy meeting"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-blue-600">Quality Policy</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-left">
                  We are committed to provide Excellent, Sustainable, Inclusive and Flexible Education upto Pre-Degree
                  level & compliance of requirements to ensure satisfaction of Learners and continual improvement of our
                  Quality Management System.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Objectives Section - Slide in from right */}
          <motion.div
            className="bg-white rounded-lg shadow-sm overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideInRight}
          >
            <div className="flex flex-col">
              <div className="w-full">
                <img
                  src="/images/vision_mission/objectives.jpg"
                  alt="Graduation ceremony"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-full">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-orange-600">Objectives</h2>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-left">
                      To develop need based Academic and Vocational Education Programmes for livelihood and lifelong
                      learning up to pre-degree level.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-left">To attain excellence in developing quality curricula and courseware for learners.</span>
                  </li>
                
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
