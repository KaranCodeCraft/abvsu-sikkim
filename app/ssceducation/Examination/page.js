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
export default function ExaminationSchedule() {
  return (
    <main className="min-h-screen bg-gray-50 space-y-8 text-left sm:text-justify">
 <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="w-full">
                <img
                  src="/Banner/ssceducation/Examination.jpg"
                  alt="Examination"
                  className="w-full h-auto max-h-[350px] object-cover"
                />
              </div>
            </motion.div>
    <div className="max-w-[90%] relative top-5 mx-auto p-6 bg-white">
      {/* Header */}
     {/*  <motion.div
        className="text-center mb-8 border-b pb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">EXAMINATION SCHEDULE</h1>
        <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
      </motion.div> */}

      {/* Main Content */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-gray-600 mr-3"></span>
            Examination Schedule
          </h2>
      <div className="space-y-8">
        <motion.section
          className="bg-gray-50 p-6 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          
          <div className="space-y-3 text-gray-700">
            <p className="font-medium">Examinations are conducted twice a year:</p>
            <div className="grid md:grid-cols-2 gap-4 ml-2">
              <div className="bg-white p-3 rounded border-l-4 border-blue-900">
                <span className="font-semibold text-blue-700">April–May</span>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-blue-900">
                <span className="font-semibold text-blue-700">October–November</span>
              </div>
            </div>
            <p className="text-sm bg-blue-50 p-3 rounded">
              <strong>Note:</strong> The detailed date sheet is released in advance on the official university website.
            </p>
            <p className="ml-4 text-sm">
              Exams are conducted either online or at designated examination centres (which may or may not be Accredited
              Institutions).
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="mt-10 text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-gray-600 mr-3"></span>
            Admission Cycles
          </h2>
          <div className="ml-4 grid md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-blue-900 mb-2">Round-the-Year Admission</h3>
              <p className="text-sm text-gray-700">Available online 24×7 or through Study/Admission Centres</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-gray-800 mb-2">Block 1 Admission</h3>
              <p className="text-sm text-gray-700">Eligible to appear first in April–May examinations</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-blue-900 mb-2">Block 2 Admission</h3>
              <p className="text-sm text-gray-700">Eligible to appear first in October–November examinations</p>
            </div>
          </div>
          <div className="ml-4 mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
              <span className="font-semibold text-gray-800">Validity:</span>
              <span className="text-gray-700 ml-2">Admission remains valid for five years</span>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
              <span className="font-semibold text-gray-800">Exam Attempts:</span>
              <span className="text-gray-700 ml-2">Learners have up to nine chances within five years to clear all subjects and earn their certificate.</span>
            </div>
          </div>
        </motion.section>
<h2 className="mt-10 text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-gray-600 mr-3"></span>
            Credit Accumulation System
          </h2>
        <motion.section
          className="ml-4 bg-gray-50 p-6 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          
          <div className="space-y-3 text-gray-700">
            <p>
              Marks/credits obtained in each subject are recorded and retained until the learner meets the Pass Criteria
              in all required subjects.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-900">
              <p className="font-medium text-blue-900">
                This system allows learners to complete their programme in stages without losing credits already earned.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="mt-10 text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-gray-600 mr-3"></span>
            Examination Registration
          </h2>
          <div className="ml-4 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="font-medium text-blue-900 mb-3">To appear in exams, candidates must:</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                <span className="text-gray-700">Fill the Examination Form</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-900 rounded-full mr-3"></span>
                <span className="text-gray-700">Pay the prescribed examination fee</span>
              </div>
            </div>
            <p className="text-sm text-blue-700 mt-4 font-medium">
              ⚠️ Registration must be completed within the notified deadlines.
            </p>
          </div>
        </motion.section>

 <h2 className="mt-10 text-xl font-semibold text-gray-800 mb-4 flex items-center">
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
                <p className="text-sm text-gray-700">aggregate in five subjects, including at least one language</p>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">For subjects with practical components, learners must secure: </h3>
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

<h2 className="mt-10 text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <span className="w-2 h-6 bg-gray-600 mr-3"></span>
            Medium of Question Papers
          </h2>
        <motion.section
          className="ml-4 bg-gray-50 p-6 rounded-lg"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-gray-700 text-center">
              Question papers will be provided only in
              <span className="font-semibold text-blue-900 mx-2">Hindi</span>
              and
              <span className="font-semibold text-blue-900 mx-2">English</span>
            </p>
          </div>
        </motion.section>
      </div>
    </div>
    </main>
  )
}
