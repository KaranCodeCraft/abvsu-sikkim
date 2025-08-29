"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function CertificationEligibility() {
  const eligibilityData = [
    {
      class: "Secondary",
      passCriteria:
        "Minimum 33% marks in the aggregate of Theory & Practical. Theory includes Continuous Assessment with 20% weightage. Marks for Continuous Assessment will be shown separately in the marksheet.",
      certificationCriteria: "Pass in 5 subjects, including at least one language.",
    },
    {
      class: "Senior Secondary",
      passCriteria:
        "Minimum 33% marks in the aggregate of Theory & Practical. Theory includes Continuous Assessment with 20% weightage. Marks for Continuous Assessment will be shown separately in the marksheet.",
      certificationCriteria: "Pass in 5 subjects, including at least one language.",
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
  return (
    <main className="min-h-screen bg-gray-50 space-y-8 text-left sm:text-justify">
 <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="w-full">
                <img
                  src="/Banner/ssceducation/certification-eligibility.jpg"
                  alt="Certification Eligibility"
                  className="w-full h-auto max-h-[350px] object-cover"
                />
              </div>
            </motion.div>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0 }}>
      <Card className="max-w-6xl relative top-5 mx-auto shadow-sm border mb-15">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <CardHeader className="bg-slate-50 border-b">
            <CardTitle className="text-2xl font-semibold text-slate-900">
              Certification Eligibility Requirements
            </CardTitle>
            <p className="text-slate-600 text-sm mt-1">Academic standards and criteria for certification</p>
          </CardHeader>
        </motion.div>

        <CardContent className="p-0">
          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b">
                  <th className="text-left p-4 font-medium text-slate-700 text-sm">Class / Programme</th>
                  <th className="text-left p-4 font-medium text-slate-700 text-sm">
                    Pass Criteria (Individual Subjects)
                  </th>
                  <th className="text-left p-4 font-medium text-slate-700 text-sm">Certification Criteria</th>
                </tr>
              </thead>
              <tbody>
                {eligibilityData.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b hover:bg-slate-50 transition-colors ${
                      index % 2 === 0 ? "bg-white" : "bg-slate-25"
                    }`}
                  >
                    <td className="p-4 align-top">
                      <span className="bg-slate-100 text-slate-700 font-medium px-3 py-1 rounded-md text-sm">
                        {item.class}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600 leading-relaxed align-top text-sm">{item.passCriteria}</td>
                    <td className="p-4 text-slate-600 leading-relaxed align-top text-sm">
                      {item.certificationCriteria}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.div
            className="bg-slate-50 border-t p-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-xs text-slate-500 text-center">
              * All criteria must be met for successful certification. Contact academic office for specific queries.
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
    </main>
  )
}
