"use client"
import React from "react";
import { motion } from "framer-motion"

const Page = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <main className="bg-gray-50 text-left sm:text-justify">
      {/* Banner */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <div className="w-full">
          <img
            src="/Banner/ssceducation/Passing-Criteria.jpg"
            alt="Passing Criteria"
            className="w-full h-auto max-h-[350px] object-cover"
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-7xl sm:ml-10 ml-5 mx-auto py-12">
        <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
          <span className="w-2 h-6 bg-gray-600 mr-3"></span>
          Pass Criteria
        </h2>

        <motion.section
          className="ml-4 bg-gray-50 p-6 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-900">
                <span className="font-semibold text-blue-900">Minimum 33%</span>
                <p className="text-sm text-gray-700">marks in each subject</p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-900">
                <span className="font-semibold text-blue-900">Minimum 33%</span>
                <p className="text-sm text-gray-700">
                  aggregate in five subjects, including at least one language
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                For subjects with practical components, learners must secure:
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                  <span className="text-gray-700">
                    33% in theory (including 20% Continuous Assessment via assignments/projects)
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                  <span className="text-gray-700">33% in practicals separately</span>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default Page;
