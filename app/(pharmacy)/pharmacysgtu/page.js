"use client";

import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PharmacyPage() {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10 mt-8">
          School of Pharmacy at Atal Bihari Vajpayee Skill University
        </h1>

        {/* About, Mission, Vision Section */}
        <section className="py-12">
          <div className="grid md:grid-cols-3 gap-6">
            {/* About */}
            <motion.div
              className="p-6 rounded-2xl shadow-lg bg-white"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                About the School
              </h3>
              <p className="text-sm leading-relaxed">
                The School of Pharmacy at Atal Bihari Vajpayee Skill University is
                dedicated to excellence in pharmaceutical education, research,
                and industry collaboration. Our programs nurture skilled
                professionals for healthcare, research, and service.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="p-6 rounded-2xl shadow-lg bg-white"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Our Mission
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Provide high-quality pharmaceutical education.</li>
                <li>Foster innovation in healthcare and drug development.</li>
                <li>Collaborate with industry and healthcare institutions.</li>
                <li>Promote community engagement and patient care.</li>
              </ul>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="p-6 rounded-2xl shadow-lg bg-white"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Our Vision
              </h3>
              <p className="text-sm leading-relaxed">
                To be a leader in pharmaceutical education and research by
                creating professionals who are ethically responsible and
                globally competent.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Courses Offered */}
        <section className="py-12 bg-gray-50">
          <motion.h2
            className="text-center text-2xl font-bold text-orange-500 mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Courses Offered
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* D Pharma */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Image
                src="/images/Gallery/D-Pharma.jpg"
                alt="D Pharma"
                width={500}
                height={300}
                className="rounded-md mb-4 w-full h-64 object-cover"
              />
              <h3 className="text-lg font-semibold text-orange-500">
                D. Pharma
              </h3>
              <p className="text-sm text-gray-700 mb-1">DIPLOMA IN PHARMACY</p>
              <p className="flex items-center gap-2 text-sm mb-1">
                <UserIcon className="h-5 w-5" />
                <strong>Eligibility:</strong> 12th Passed (PCB)
              </p>
              <p className="flex items-center gap-2 text-sm mb-1">
                <ClockIcon className="h-5 w-5" />
                <strong>Duration:</strong> 2 Years
              </p>
              <p className="flex items-center gap-2 text-sm mb-4">
                <BriefcaseIcon className="h-5 w-5" />
                100% Job Assistance
              </p>
              <Link href="applyforpharmacy">
                <span className="block text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium transition-colors">
                  Apply Now
                </span>
              </Link>
            </motion.div>

            {/* B Pharma */}
            <motion.div
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Image
                src="/images/Gallery/B-Pharma.jpg"
                alt="B Pharma"
                width={500}
                height={300}
                className="rounded-md mb-4 w-full h-64 object-cover"
              />
              <h3 className="text-lg font-semibold text-orange-500">
                B. Pharma
              </h3>
              <p className="text-sm text-gray-700 mb-1">BACHELOR IN PHARMACY</p>
              <p className="flex items-center gap-2 text-sm mb-1">
                <UserIcon className="h-5 w-5" />
                <strong>Eligibility:</strong> 12th Passed (PCB)
              </p>
              <p className="flex items-center gap-2 text-sm mb-1">
                <ClockIcon className="h-5 w-5" />
                <strong>Duration:</strong> 4 Years
              </p>
              <p className="flex items-center gap-2 text-sm mb-4">
                <BriefcaseIcon className="h-5 w-5" />
                100% Job Assistance
              </p>
              <Link href="applyforpharmacy">
                <span className="block text-center bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md font-medium transition-colors">
                  Apply Now
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Info Sections */}
        <section className="py-12 space-y-16">
          {/* Facilities */}
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-4">
                Facilities & Infrastructure
              </h3>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Modern Pharmaceutics, Pharmacology, and Chemistry Labs</li>
                <li>Central Instrumentation Facility</li>
                <li>Computerized Drug Information Centre</li>
                <li>Herbal Garden</li>
                <li>Industrial and Hospital Training Programs</li>
                <li>Library with Extensive Digital Resources</li>
              </ul>
            </div>
             <div className="rounded-xl bg-gray-100 h-60 flex items-center justify-center overflow-hidden">
              <img
                src="https://stjamespharmacycollege.in/wp-content/uploads/2020/07/118A3322-1.jpg"
                alt="Research Lab"
                width={400}
                height={240}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Research */}
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-4">
                Research & Innovation
              </h3>
              <p className="text-sm mb-2">
                The School of Pharmacy is actively engaged in cutting-edge
                research in:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Drug discovery and formulation</li>
                <li>Herbal and natural product research</li>
                <li>Clinical and regulatory pharmacy</li>
                <li>Pharmacovigilance and biotechnology</li>
              </ul>
              <p className="text-sm mt-2">
                Students are encouraged to publish papers, participate in
                conferences, and undertake sponsored projects.
              </p>
            </div>
            <div className="rounded-xl bg-gray-100 h-60 flex items-center justify-center overflow-hidden">
              <img
                src="https://cdn.expresspharma.in/wp-content/uploads/2019/10/07124214/Innovation-RD.jpg"
                alt="Research Lab"
                width={400}
                height={240}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Internships */}
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-4">
                Industry Collaboration & Internships
              </h3>
              <p className="text-sm mb-2">SGTU partners with:</p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Leading pharmaceutical companies</li>
                <li>Hospitals and healthcare providers</li>
                <li>Research institutes and regulatory bodies</li>
              </ul>
              <p className="text-sm mt-2">
                Internships and live projects are integral to student
                development and employability.
              </p>
            </div>
            <div className="rounded-xl bg-gray-100 h-60 flex items-center justify-center overflow-hidden">
              <img
                src="https://d2cbg94ubxgsnp.cloudfront.net/Pictures/2000xAny/5/2/5/514525_shutterstock_1938617161_crop_185511_crop.jpg"
                alt="Research Lab"
                width={400}
                height={240}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Careers */}
          <motion.div
            className="grid md:grid-cols-2 gap-10 items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold text-orange-500 mb-4">
                Career Opportunities
              </h3>
              <p className="text-sm mb-2">
                Graduates from our School of Pharmacy are equipped for careers
                as:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Clinical Pharmacists</li>
                <li>Research Scientists</li>
                <li>Regulatory Affairs Officers</li>
                <li>Hospital and Community Pharmacists</li>
                <li>Pharmaceutical Marketing Professionals</li>
                <li>Academicians and Entrepreneurs</li>
              </ul>
            </div>
             <div className="rounded-xl bg-gray-100 h-60 flex items-center justify-center overflow-hidden">
              <img
                src="https://www.sandipuniversity.edu.in/blog/wp-content/uploads/2022/02/Career-Options-Prospects-After-B.Pharm_.jpg"
                alt="Research Lab"
                width={400}
                height={240}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
