"use client";

import {
  AcademicCapIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  MapIcon,
  CheckCircleIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StudyInIndiaPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-4 py-16 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Study in India – Your Global Future Starts Here!
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-orange-500 mb-6">
            World-Class Education with Placement Support
          </h2>
          <p className="mb-3">
            Access vibrant learning, scholarships, and top-tier job
            opportunities through India's premier institutions.
          </p>
          <p className="mb-3">
            Gain hands-on experience, cutting-edge research exposure, and a
            culturally rich environment to build your future.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/images/Study-in-India-Programme.jpg"
            alt="Study in India"
            width={600}
            height={400}
            className="rounded-lg shadow-md w-full max-w-md object-cover"
          />
        </motion.div>
      </section>

      {/* Why Choose India */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center mb-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Why Choose India for Higher Education?
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Globally Recognized Universities",
              "Affordable Tuition & Living Costs",
              "Up to 100% Scholarships",
              "Guaranteed Placement Assistance",
              "Modern Infrastructure & Research",
              "Safe, Diverse Student Life",
            ].map((text, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3 bg-white p-4 rounded-md shadow-sm"
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <CheckCircleIcon className="w-5 h-5 text-orange-500 mt-1" />
                <p>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <GlobeAltIcon className="w-7 h-7 text-orange-500" />
          International Student Offers
        </motion.h2>
        <ul className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: BriefcaseIcon, label: "Full & Partial Scholarships" },
            { icon: AcademicCapIcon, label: "Accommodation Support" },
            { icon: BriefcaseIcon, label: "Internships & Job Training" },
            { icon: AcademicCapIcon, label: "On-campus Learning Options" },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <item.icon className="w-6 h-6 text-gray-700 mt-1" />
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Placement Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto flex justify-between">
        <div>
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <BriefcaseIcon className="w-7 h-7 text-orange-500" />
            Placement Support
          </motion.h2>
          <ul className="space-y-4">
            {[
              {
                icon: BriefcaseIcon,
                label: "MNC & Government Placement Drives",
              },
              {
                icon: AcademicCapIcon,
                label: "Career Guidance & Resume Building",
              },
              { icon: CheckCircleIcon, label: "Industry Partnerships" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <item.icon className="w-6 h-6 text-gray-700 mt-1" />
                <p>{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <MapIcon className="w-7 h-7 text-orange-500" />
            How to Apply
          </motion.h2>
          <ol className="list-decimal space-y-3 pl-6 text-base md:text-lg">
            <li>
              Complete the{" "}
              <a href="#" className="text-orange-500 underline">
                Application Form
              </a>
            </li>
            <li>Submit Required Documents</li>
            <li>Receive Scholarship & Offer Letter</li>
            <li>Join Your Program in Sikkim, India</li>
          </ol>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Start Your Journey Today
          </h2>
          <p className="text-base md:text-lg mb-6">
            Connect with our team to learn more
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded shadow text-center">
              <EnvelopeIcon className="w-7 h-7 text-orange-500 mx-auto mb-2" />
              <h4 className="font-bold text-lg">Email Us</h4>
              <p>Get direct help from our admissions office</p>
              <a
                href="mailto:info@ABVSU.ac.in"
                className="inline-block mt-3 text-orange-500 underline"
              >
                info@ABVSU.ac.in
              </a>
            </div>
            <div className="p-6 bg-white rounded shadow text-center">
              <GlobeAltIcon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <h4 className="font-bold text-lg">Visit Website</h4>
              <p>Explore programs and application details</p>
              <a
                href="https://www.ABVSU.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-orange-500 underline"
              >
                www.ABVSU.ac.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
