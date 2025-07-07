"use client";

import { motion } from "framer-motion";
import {
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export default function HotelManagementSchoolPage() {
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
          className=" items-center"
        >
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              School of <span className="text-orange-500">Hotel Management</span> and <span className="text-orange-500">Tourism</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The objective of the School of Hotel Management is to provide in-depth knowledge of the various aspects and nuances of Hotel Management both in India and abroad.
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
                  <td className="border border-orange-300 px-4 py-2 text-center">MBA</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">4 Sem</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">Graduation or Equivalent</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 px-4 py-2 text-center">BBA</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">6 Sem</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">10 +2</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 px-4 py-2 text-center">Master in Hotel Management</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">4 Sem</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">Graduation or Equivalent</td>
                </tr>
                <tr>
                  <td className="border border-orange-300 px-4 py-2 text-center">Bachelor in Hotel Management</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">4 Sem</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">10 + 2 </td>
                </tr>
                <tr>
                  <td className="border border-orange-300 px-4 py-2 text-center">Diploma</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">2 Sem</td>
                  <td className="border border-orange-300 px-4 py-2 text-center">10 + 2</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
