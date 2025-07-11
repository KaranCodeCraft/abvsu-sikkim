"use client";

import { motion } from "framer-motion";

const BulletIcon = () => (
  <svg
    className="w-5 h-5 text-orange-500 flex-shrink-0 mr-3"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <circle cx="10" cy="10" r="6" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-green-600 inline-block mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M5 13l4 4L19 7" />
  </svg>
);

export default function CreditTradesPolicy() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white p-10 rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-extrabold text-orange-500 mb-8">
          ABVSU Credit Trades Policy
        </h1>

        <p className="mb-6 text-gray-700 leading-relaxed text-lg">
          At The Atal Bihari Vajpayee Skill University, we are committed to shaping
          the future of education by staying ahead of global trends and
          empowering young minds with the skills necessary to excel in an
          ever-evolving world. As part of our efforts to provide a transformative
          and skills-led learning experience, we are excited to introduce our
          Credit Trades Policy, designed to offer students greater flexibility,
          mobility, and access to diverse learning opportunities.
        </p>

        <h2 className="text-2xl font-semibold text-orange-400 mb-4">Objective</h2>
        <p className="mb-8 text-gray-700 leading-relaxed text-lg">
          The Credit Trades Policy aims to facilitate the exchange and transfer
          of academic credits between different courses, programs, and even
          external institutions—nationally and internationally. This will enable
          students to explore interdisciplinary subjects, gain practical skills,
          and tailor their academic pathways according to their individual career
          goals and interests.
        </p>

        <h2 className="text-2xl font-semibold text-orange-400 mb-4">
          Key Features of the Credit Trades Policy:
        </h2>
        <ul className="space-y-4 mb-8">
          {[
            "Flexibility and Mobility: Students will have the option to earn credits from multiple academic disciplines and institutions, allowing them to diversify their learning experience and tailor their education to match industry needs and personal aspirations.",
            "Interdisciplinary Learning: The policy encourages students to combine courses across various domains—whether technical, managerial, or creative—to ensure a holistic learning experience that fosters both technical expertise and soft skills.",
            "Industry Integration: Through our collaborations with government bodies, industry leaders, and academic institutions, students can gain credit for real-world projects, internships, and research opportunities, which will be integrated into their academic transcripts.",
            "Global Learning Opportunities: The policy provides students with the opportunity to undertake credit-earning programs at global partner universities and institutions, ensuring exposure to international standards, practices, and perspectives.",
            "Technology-Enabled Learning: In line with our commitment to technology-enabled education, the policy supports the use of online platforms, digital tools, and virtual learning environments to facilitate credit exchanges, making learning more accessible and adaptable to the needs of modern learners.",
            "Skills-Led Approach: By focusing on skills development, the Credit Trades Policy ensures that students graduate with not just academic knowledge, but also with the practical, industry-relevant skills needed to succeed in their careers.",
          ].map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <BulletIcon />
              <p className="text-gray-800 leading-relaxed">{feature}</p>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold text-orange-400 mb-4">
          Benefits to Students:
        </h2>
        <ul className="list-none space-y-3 mb-8">
          {[
            "Personalized Academic Journey: Tailor your course selections and credit transfers to match your career aspirations.",
            "Enhanced Employability: Gain real-world skills and qualifications through industry collaborations and global learning opportunities.",
            "Global Exposure: Participate in international academic exchanges and internships that enhance your global perspective.",
            "Flexibility in Learning: Access a range of learning modes—from traditional classroom settings to online courses and industry-specific workshops—designed to suit diverse learning styles.",
          ].map((benefit, idx) => (
            <li key={idx} className="flex items-center text-gray-700 text-lg">
              <CheckIcon />
              {benefit}
            </li>
          ))}
        </ul>

        <p className="mb-6 text-gray-700 leading-relaxed text-lg">
          The Atal Bihari Vajpayee Skill University’s Credit Trades Policy represents
          our ongoing commitment to creating a futuristic educational model that
          prepares our students for the challenges and opportunities of tomorrow.
          By embracing this policy, students will be empowered to craft a learning
          path that is as dynamic and diverse as the world they will help shape.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed text-lg">
          We encourage all students to explore the possibilities this policy offers
          and to make the most of the opportunities available to them, ensuring a
          holistic, skills-oriented, and globally relevant education.
        </p>

        <p className="text-sm text-gray-500 italic border-t pt-4 mt-8">
          * The University reserves the right to modify, amend, or update these
          policies at any time without prior notice. Changes will take effect
          immediately upon publication on the official University website. It is
          the responsibility of users to review these policies periodically for any
          updates. *
        </p>

        <p className="mt-10 font-semibold text-orange-500">Sincerely,</p>
        <p className="text-orange-500 font-bold text-xl">The Atal Bihari Vajpayee Skill University</p>
      </motion.article>
    </main>
  );
}
