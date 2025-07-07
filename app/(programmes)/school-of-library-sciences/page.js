"use client";

import { motion } from "framer-motion";
import {
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export default function LibraryScienceSchoolPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-white text-gray-800">
      <section className="py-10 px-4 md:px-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="gap-10 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              School of <span className="text-orange-500">Library Science</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The School of Library and Information Sciences has been set up in response to the demand for a large number of trained human resources in the field of library and information activities. The course contents of the Programmes offered by this School is meant to meet the challenge of the changing needs.
            </p>
          </div>
          
        </motion.div>
      </section>

      <section className="px-4 md:px-16 pb-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="bg-white border border-orange-200 rounded-xl shadow p-4">
            <h4 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
              <ClipboardDocumentListIcon className="w-5 h-5 mr-2 text-orange-500" /> Courses Offered
            </h4>
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-center">Course</th>
                  <th className="px-4 py-2 text-center">Duration</th>
                  <th className="px-4 py-2 text-center">Eligibility</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 text-center">B. Library & Information Science</td>
                  <td className="px-4 py-2 text-center">1 Year</td>
                  <td className="px-4 py-2 text-center">Graduation</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 text-center">M. Library & Information Science</td>
                  <td className="px-4 py-2 text-center">1 Year</td>
                  <td className="px-4 py-2 text-center">B.Lib & inf.sc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
