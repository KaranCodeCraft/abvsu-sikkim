"use client"

import { motion } from "framer-motion"

export default function AdmissionProcedure() {
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
                  src="/Banner/ssceducation/admission-procedure.jpg"
                  alt="Skill Education"
                  className="w-full h-auto max-h-[350px] object-cover"
                />
              </div>
            </motion.div>
    <div className="max-w-[90%] mx-auto p-6 bg-white">
      {/* Header */}
      {/* <motion.div
        className="text-center mb-8 border-b pb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ADMISSION PROCEDURE</h1>
        <p className="text-lg text-gray-600">Admission Guidelines for Secondary / Senior Secondary</p>
      </motion.div> */}

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-gray-600 pl-4">Admission Guidelines for Secondary / Senior Secondary </h2>
        
      </motion.section>

      {/* How to Apply Section */}
      <motion.section
        className="mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-gray-600 pl-4">How to Apply</h2>
        <div className="ml-4 bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 mb-2">Students may take admission through:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>University Admission Centres</li>
            <li>
              Online Admission via the official website:
              <a href="../ssceducation" className="text-gray-600 hover:underline ml-1">
                www.abvsu.ac.in/sse
              </a>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Documents Required Section */}
      <motion.section
        className="mt-12 mb-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-gray-600 pl-4">
          Documents Required
        </h2>
        <p className="ml-4 text-sm text-gray-600 mb-4 italic">
          (Scanned copies of originals to be uploaded at the time of registration)
        </p>
        <div className="ml-4 grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 p-3 rounded">
              <h4 className="font-medium text-gray-900">Valid Identity Proof</h4>
              <p className="text-sm text-gray-600">Aadhaar Card / Passport / Ration Card / PAN Card</p>
            </div>
            <div className="bg-white border border-gray-200 p-3 rounded">
              <h4 className="font-medium text-gray-900">Proof of Date of Birth</h4>
              <p className="text-sm text-gray-600">
                Passport / School Leaving Certificate / Transfer Certificate / Aadhaar Card (with DOB mentioned)
              </p>
            </div>
            <div className="bg-white border border-gray-200 p-3 rounded">
              <h4 className="font-medium text-gray-900">Proof of Residence</h4>
              <p className="text-sm text-gray-600">Any government-recognised address proof</p>
            </div>
            <div className="bg-white border border-gray-200 p-3 rounded">
              <h4 className="font-medium text-gray-900">Domicile Certificate</h4>
              <p className="text-sm text-gray-600">Mandatory for students from Sikkim</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="bg-white border border-gray-200 p-3 rounded">
              <h4 className="font-medium text-gray-900">Secondary/Class X Certificate</h4>
              <p className="text-sm text-gray-600">Required for Senior Secondary admission</p>
            </div>
            <div className="bg-white border border-gray-200 p-3 rounded">
              <h4 className="font-medium text-gray-900">Caste Certificate</h4>
              <p className="text-sm text-gray-600">For SC/ST/OBC candidates (self-attested)</p>
            </div>
            <div className="bg-white border border-gray-200 p-3 rounded">
              <h4 className="font-medium text-gray-900">Disability Certificate</h4>
              <p className="text-sm text-gray-600">If applicable</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Eligibility Criteria Section */}
      <motion.section
        className="mt-12 mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-gray-600 pl-4">
          Eligibility Criteria
        </h2>
        <div className="ml-4 overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Block</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cut-off Date</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Secondary Programme</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Senior Secondary Programme</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3 font-medium">Block 1</td>
                <td className="border border-gray-300 px-4 py-3">31st March</td>
                <td className="border border-gray-300 px-4 py-3">
                  Minimum 15 years of age as on 31st March (before exams)
                </td>
                <td className="border border-gray-300 px-4 py-3">Must have passed Secondary</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3 font-medium">Block 2</td>
                <td className="border border-gray-300 px-4 py-3">30th September</td>
                <td className="border border-gray-300 px-4 py-3">
                  Minimum 15 years of age as on 30th September (before exams)
                </td>
                <td className="border border-gray-300 px-4 py-3">Must have passed Secondary</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.section>

      {/* Acceptable Proof for Date of Birth Section */}
      <motion.section
        className="mt-12 mb-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-gray-600 pl-4">
          Acceptable Proof for Date of Birth
        </h2>
        <p className="ml-4 text-gray-700 mb-4">Any one of the following:</p>
        <ul className="ml-4 space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>
              Birth Certificate issued by Municipal Authority / Registrar of Births & Deaths (for those born on or after
              26.01.1989)
            </span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Passport issued by Government of India</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <div>
              <span>Transfer / School Leaving Certificate with DOB:</span>
              <ul className="ml-4 mt-1 space-y-1 text-sm">
                <li>• Government Schools – signed by the Principal</li>
                <li>
                  • Private Schools – signed by Principal and countersigned by competent State/District Education
                  Officer
                </li>
              </ul>
            </div>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Aadhaar Card (Government-authorised)</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>Matriculation / Secondary Examination Certificate with DOB</span>
          </li>
        </ul>
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mt-4">
          <p className="text-gray-800 font-medium">
            <strong>Note:</strong> Date of Birth once entered in the admission form will not be changed. Please check
            carefully before submission.
          </p>
        </div>
      </motion.section>

      {/* Minimum Educational Qualifications Section */}
      <motion.section
        className="mt-12 mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-gray-600 pl-4">
          Minimum Educational Qualifications
        </h2>
        <div className="ml-4 grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Secondary Programme</h4>
            <p className="text-gray-800">
              Class VIII pass certificate or self-declaration of reading and writing ability in the medium of
              instruction.
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Senior Secondary Programme</h4>
            <p className="text-gray-800">Secondary Examination pass from a recognised National/State Board.</p>
          </div>
        </div>
      </motion.section>

      {/* Refund & Cancellation Policy Section */}
      <motion.section
        className="mt-12 mb-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-l-4 border-red-800 pl-4">
          Refund & Cancellation Policy
        </h2>
        <div className="ml-4 bg-red-50 border border-red-800 p-4 rounded-lg">
          <p className="text-red-800 font-medium">No cancellation will be allowed once the enrollment is generated.</p>
        </div>
      </motion.section>
      </div>
    </main>
  )
}
