"use client";

import { motion } from "framer-motion";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";

export default function SchoolOfSciencePage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-white text-gray-800">
      <section className="py-10 px-4 md:px-16">
        <motion.div
          className="gap-10 items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              School of <span className="text-orange-500">Science</span>
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              The School of Sciences has been established with the intent to focus on
              building the groundwork for excellence among its scholars and academics.
              The curriculum is designed keeping in mind the global competitive standards.
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
            <h4 className="text-xl font-semibold mb-4 flex items-center text-orange-600">
              <ClipboardDocumentListIcon className="w-5 h-5 mr-2 text-orange-500" />
              Courses Offered
            </h4>
            <table className="table-auto w-full border-collapse border border-orange-300 rounded-lg text-sm">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="border border-orange-300 px-4 py-2 text-center">Course</th>
                  <th className="border border-orange-300 px-4 py-2 text-center">Duration</th>
                  <th className="border border-orange-300 px-4 py-2 text-center">Eligibility</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-orange-300 px-4 py-2 text-center">M.Sc.</td>
                 
                  <td className="border border-orange-300 px-4 py-2 text-center">2 Years</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">
                    Graduation with respective subjects
                  </td>
                </tr>
                <tr>
                  <td className="border border-orange-300 px-4 py-2 text-center">B.Sc.</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">3 Years</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">
                    10+2 with respective subjects
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
