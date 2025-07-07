"use client";

import { motion } from "framer-motion";
import {
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export default function EngineeringSchoolPage() {
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
              School of <span className="text-orange-500">Engineering</span> and <span className="text-orange-500">Technology</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The School of Engineering and Technology offers B.Tech and M.Tech programmes that give equal importance to theory and hands on training. The syllabus has been designed taking into consideration the latest marketing trends, industry needs, and research outcomes relevant to different domains of the respective specializations.
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
                  <td className="border px-4 py-2">Diploma Engineering</td>
                  <td className="border px-4 py-2">6 Semester</td>
                  <td className="border px-4 py-2">Passed 10th</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border px-4 py-2">Diploma Engineering (Lateral Entry)</td>
                  <td className="border px-4 py-2">4 Semester</td>
                  <td className="border px-4 py-2">10+2 PCM / ITI (2 years) / 2 years Vocational Course in Relevant Trade</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border px-4 py-2">B. Tech</td>
                  <td className="border px-4 py-2">8 Semester</td>
                  <td className="border px-4 py-2">Passed 10+2 with PCM. At least 45% marks (40% for SC/ST/OBC/Minority).</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border px-4 py-2">B. Tech (Lateral Entry)</td>
                  <td className="border px-4 py-2">6 Semester</td>
                  <td className="border px-4 py-2">3-year Diploma or B.Sc. (PCM) with at least 45% marks (40% for SC/ST/OBC/Minority).</td>
                </tr>
                <tr className="hover:bg-orange-50">
                  <td className="border px-4 py-2">M. Tech</td>
                  <td className="border px-4 py-2">4 Semester</td>
                  <td className="border px-4 py-2">B. Tech. / B.E. in relevant subject / MSc-IT/CS or MCA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
