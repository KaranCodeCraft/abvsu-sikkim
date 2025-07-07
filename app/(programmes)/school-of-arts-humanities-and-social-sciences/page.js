"use client";

import { motion } from "framer-motion";
import {
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export default function ArtsSchoolPage() {
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
              School of <span className="text-orange-500">Arts, Humanities</span> and <span className="text-orange-500">Social Science</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The School of Arts, Humanities and Social Sciences offers undergraduate and postgraduate courses in various fields related to the Arts, Humanities and Social Sciences keeping in mind an interdisciplinary approach and offering an inclusive culture that connects innovative teaching and learning, research across disciplines in a holistic manner.
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
            <table className="min-w-full text-sm text-left border border-gray-200">
              <thead className="bg-orange-100 text-gray-800">
                <tr>
                  <th className="border px-4 py-2 text-center">Course</th>
                  <th className="border px-4 py-2 text-center">Duration</th>
                  <th className="border px-4 py-2 text-center">Eligibility</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-orange-50">
                  <td className="border px-4 py-2">BA</td>
                  <td className="border px-4 py-2">3 Years</td>
                  <td className="border px-4 py-2">10+2</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border px-4 py-2">Bachelor of Arts (Honours)</td>
                 
                  <td className="border px-4 py-2">3 Years</td>
                  <td className="border px-4 py-2">10+2</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border px-4 py-2">MA</td>
              
                  <td className="border px-4 py-2">2 Years</td>
                  <td className="border px-4 py-2">BA in relevant field</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border px-4 py-2">PG Diploma</td>
                  <td className="border px-4 py-2">1 Year</td>
                  <td className="border px-4 py-2">Graduation</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border px-4 py-2">Diploma</td>
                  <td className="border px-4 py-2">1 Year</td>
                  <td className="border px-4 py-2">10+2 or equivalent</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border px-4 py-2">BSW</td>
                  <td className="border px-4 py-2">3 Years</td>
                  <td className="border px-4 py-2">10+2</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border px-4 py-2">MSW</td>
                  <td className="border px-4 py-2">2 Years</td>
                  <td className="border px-4 py-2">BSW</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
