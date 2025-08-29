"use client"

import { motion } from "framer-motion"

const TransferOfCreditsPolicy = () => {
    const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }
  return (
    <main className="min-h-screen bg-gray-50 space-y-8">
 <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="w-full">
                <img
                  src="/Banner/ssceducation/transfer-of-credits.jpg"
                  alt="Transfer of credits"
                  className="w-full h-auto max-h-[350px] object-cover"
                />
              </div>
            </motion.div>
    <div className="max-w-[90%] relative top-5 mx-auto p-6 bg-white">
      {/* Header */}
      {/* <motion.div
        className="border-b-2 border-gray-200 pb-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl font-bold text-gray-900 text-center">TRANSFER OF CREDITS POLICY</h1>
      </motion.div> */}

      {/* Eligibility Section */}
      <motion.section
        className="mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-l-4 border-gray-500 pl-4">
          Eligibility for TOC
        </h2>
        <div className="ml-4 bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700 leading-relaxed mb-3">
            Ex-Secondary/Senior Secondary students of any recognized Board of School Education who have passed at least
            one subject but have not completed the full programme may seek admission in the respective course(s) at
            ABVSU under the Open School & Skill Education Programme.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Learners may transfer credits for a maximum of <strong>four subjects</strong> passed from a recognized
            board, provided these subjects are also offered in the ABVSU Scheme of Studies.
          </p>
        </div>
      </motion.section>

      {/* Conditions Section */}
      <motion.section
        className="mb-8"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-l-4 border-gray-500 pl-4">Conditions for TOC</h2>
        <div className="ml-4 space-y-4">
          <motion.div
            className="flex items-start space-x-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-medium text-gray-800">Original Mark Sheet Required</h3>
              <p className="text-gray-600">
                Transfer of Credit will be granted only on submission of the original mark sheet from the parent board.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-medium text-gray-800">TOC Fee</h3>
              <p className="text-gray-600">
                <strong>₹1,000 per subject</strong>, payable at the time of admission.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-medium text-gray-800">Validity Period</h3>
              <p className="text-gray-600">
                Marksheets from the parent board must be no more than <strong>10 years old</strong> to qualify for TOC.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-medium text-gray-800">Subject Availability</h3>
              <p className="text-gray-600">
                TOC will only be considered for subjects included in the ABVSU Scheme of Studies and Scheme of
                Examination.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-medium text-gray-800">Practical Subjects</h3>
              <p className="text-gray-600">
                TOC for practical subjects is allowed only if the learner has passed both theory and practical
                separately.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-start space-x-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="font-medium text-gray-800">Minimum Marks</h3>
              <p className="text-gray-600">
                Subjects must have been passed with at least <strong>33% marks</strong> in the last 10 years.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Special Notes Section */}
      <motion.section
        className="mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <h2 className="mt-10 text-xl font-semibold text-gray-800 mb-4 border-l-4 border-orange-500 pl-4">Special Notes</h2>
        <div className="ml-4 bg-orange-50 border border-orange-200 rounded-lg p-4 space-y-3">
          <div className="flex items-start space-x-2">
            <span className="text-orange-600 font-bold">•</span>
            <p className="text-gray-700 leading-relaxed">
              If a learner has passed at least one subject from a recognized board but not completed the programme, they
              can avail TOC for up to four subjects after getting their TOC data verified from the concerned board and
              submitting it along with the admission application.
            </p>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-orange-600 font-bold">•</span>
            <p className="text-gray-700 leading-relaxed">
              Learners may also be required to send a failed marksheet from the parent board before the examination,
              along with a copy of the Acknowledgement Receipt or Online Admission Form.
            </p>
          </div>

          <div className="flex items-start space-x-2">
            <span className="text-orange-600 font-bold">•</span>
            <p className="text-gray-700 leading-relaxed">
              The TOC fee will be charged according to the number of subjects for which credit transfer is requested.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.div
        className="border-t border-gray-200 pt-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.0 }}
        viewport={{ once: true }}
      >
        <p className="text-sm text-gray-500">For more information, please contact the ABVSU admissions office.</p>
      </motion.div>
    </div>
    </main>
  )
}

export default TransferOfCreditsPolicy
