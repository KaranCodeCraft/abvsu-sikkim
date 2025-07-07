"use client";

import { motion } from "framer-motion";
import {
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export default function AgricultureSchoolPage() {
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
              School of <span className="text-orange-500">Agriculture</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The School of Agriculture has been set up to improve and sustain the quality of human life and productivity of Agriculture and Allied Sectors. The School, through its programmes intends to establish national and International linkages in agriculture education and knowledge management for sustainable development.
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
          className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-xl shadow"
        >
          <h4 className="text-xl font-semibold text-orange-600 mb-2 flex items-center">
            <ClipboardDocumentListIcon className="w-5 h-5 mr-2 text-orange-500" /> Courses Offered
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
                  <td className="border border-orange-300 px-4 py-2 text-center">Diploma</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">4 Sem</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">12th with relevent subject</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 px-4 py-2 text-center">B.Sc</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">8 Sem</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">12th with relevent subject</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 px-4 py-2 text-center">M.Sc</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">4 Sem</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">Bsc Agri</td>
                </tr>
              </tbody>
            </table>
        </motion.div>
      </section>
    </main>
  );
}
