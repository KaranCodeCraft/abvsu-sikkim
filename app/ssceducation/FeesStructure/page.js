"use client"

import { motion } from "framer-motion"

const FeeStructure = () => {
  const courseFees = [
    { feeHead: "Programme Fee (For 5 Subjects)", secondary: "₹10,000", seniorSecondary: "₹12,000" },
    { feeHead: "Examination Fee", secondary: "Included", seniorSecondary: "Included" },
  ]

  const otherFees = [
    { particular: "Re-evaluation of Answer Script (per paper, apply within 1 month of result)", fee: "₹1,000" },
    { particular: "Duplicate Marks Card", fee: "₹500" },
    { particular: "Consolidated Marks Card", fee: "₹500" },
    { particular: "Migration Certificate", fee: "₹500" },
    { particular: "Verification of Certificate / Authenticity (Domestic)", fee: "₹500 per document" },
    { particular: "Verification / Transcription for Foreign Institutions / Universities / Employers", fee: "₹3,000" },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <main className="min-h-screen bg-gray-50 space-y-8 text-left sm:text-justify">
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <div className="w-full">
          <img
            src="/Banner/ssceducation/fee-structure.jpg"
            alt="Skill Education"
            className="w-full h-auto max-h-[350px] object-cover"
          />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <motion.div
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">A. Course Fee Details</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 border-b border-gray-200">Fee Head</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 border-b border-gray-200">
                    Secondary Course
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 border-b border-gray-200">
                    Senior Secondary Course
                  </th>
                </tr>
              </thead>
              <tbody>
                {courseFees.map((fee, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition-colors duration-150`}
                  >
                    <td className="py-4 px-6 text-gray-800 border-b border-gray-100">{fee.feeHead}</td>
                    <td className="py-4 px-6 text-gray-900 font-medium border-b border-gray-100">{fee.secondary}</td>
                    <td className="py-4 px-6 text-gray-900 font-medium border-b border-gray-100">
                      {fee.seniorSecondary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">B. Other Fees</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 border-b border-gray-200">
                    Particulars
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 border-b border-gray-200">Fee (₹)</th>
                </tr>
              </thead>
              <tbody>
                {otherFees.map((fee, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition-colors duration-150`}
                  >
                    <td className="py-4 px-6 text-gray-800 border-b border-gray-100">{fee.particular}</td>
                    <td className="py-4 px-6 text-gray-900 font-medium border-b border-gray-100">{fee.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-sm text-gray-600">All fees are subject to change as per institutional policies</p>
        </motion.div>
      </div>
    </main>
  )
}

export default FeeStructure
