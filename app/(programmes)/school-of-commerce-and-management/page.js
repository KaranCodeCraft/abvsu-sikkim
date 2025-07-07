"use client";

import { motion } from "framer-motion";
import {
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export default function CommerceManagementPage() {
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
              School of <span className="text-orange-500">Commerce</span> and
              <span className="text-orange-500"> Management</span>
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">
              The School of Commerce and Management has been established with the aim of producing excellent professionals and researchers in the field of Business, Commerce and Management. The school offers various UG, PG and Doctoral programmes in Commerce and Management disciplines.
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
          <h4 className="text-xl font-semibold text-orange-600 mb-4 flex items-center">
            <ClipboardDocumentListIcon className="w-5 h-5 mr-2 text-orange-500" /> Courses Offered
          </h4>
          <div className="overflow-auto">
            <table className="min-w-full border text-sm text-gray-700">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 text-left">Course</th>
                  <th className="py-2 px-4 text-left">Duration</th>
                  <th className="py-2 px-4 text-left">Eligibility</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["MBA",  "4 Semester", "Graduation in any discipline"],
                  ["MBA",  "4 Semester", "Graduation in any discipline"],
                  ["BBA", "6 Semester", "10+2 or equivalent"],
                  ["BCOM",  "3 years", "10+2 or equivalent"],
                  ["M Com", "2 year", "B.Com or equivalent"],
                  ["Post Graduate Diploma",  "2 Semester", "Graduation or equivalent"],
                  ["Diploma",  "2 Semester", "10+2"],
                  ["Adv Diploma",  "4 Semester", "10+2"],
                ].map(([course, duration, eligibility], i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2 px-4 font-medium text-gray-800">{course}</td>
                    <td className="py-2 px-4">{duration}</td>
                    <td className="py-2 px-4">{eligibility}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
