"use client";

import { AcademicCapIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import phdGraphic from "@/public/images/Gallery/phd.webp";
import Link from "next/link";

const points = [
  "Arts, Humanities and Social Science",
  "Commerce and Management",
  "Science",
  "Computer Science and Information Technology",
  "Engineering and Technology",
  "Agriculture",
  "Library and Information Sciences",
  "Vocation Studies",
  "Hotel Management",
];

export default function PhdProgrammePage() {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="absolute -top-10 left-0 w-full h-40 bg-[url('/images/bg-shape.svg')] bg-no-repeat bg-top bg-contain pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-800">
              PhD <span className="text-orange-500">Programme</span>
            </h2>
            <p>Notification for PhD Entrance Test.</p>
            {/* <Link
              target="_blank"
              href="/docs/phdOld.pdf"
              className="text-blue-500 underline cursor-pointer"
            >
              <p>Old notifications</p>
            </Link> */}
            <Link
              target="_blank"
              href="/docs/phdNew.pdf"
              className="text-blue-500 underline cursor-pointer"
            >
              <p>Notification 2025</p>
            </Link>
            <h3 className="text-xl font-semibold text-gray-700 mt-2">Eligibility</h3>
            <p>
              Master&apos;s Degree (with minimum 55% marks or equivalent for
              General and 50% marks for SC/ST) and successful clearance of
              Entrance Test. Candidates with M.Phil. / NET / GATE / SLET / SET
              or equivalent and a Regular Teacher in a College / University will
              be exempted from Entrance Test.
            </p>
            <h3 className="text-xl font-semibold text-gray-700">Duration</h3>
            <p>
              <strong>Minimum 3 Years and Maximum 6 Years</strong>
            </p>
            <p>
              Extension beyond the above limits will be governed by the relevant
              clauses as stipulated in the Statute/Ordinance of the university.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src={phdGraphic}
              alt="PhD Graphic"
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-sm mb-10"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Our <span className="text-orange-500">Schools</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <AcademicCapIcon className="w-6 h-6 text-orange-500" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Admission <span className="text-orange-500">Process</span>
          </h3>
          <p className="text-gray-700">
            Admission to Ph.D. & M.Phil. will be through a notification in
            Newspapers & website followed by a mandatory entrance examination.
            Please visit{" "}
            <a
              href="https://www.ABVSU.ac.in"
              className="text-orange-500 underline"
            >
              www.ABVSU.ac.in
            </a>{" "}
            for latest updates.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
