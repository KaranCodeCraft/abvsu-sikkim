"use client";

import { CheckCircleIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function EqualOpportunityPage() {
  return (
    <div className="flex flex-col">
      {/* Section 1 */}
      <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24 space-y-6">
        <h1 className="text-3xl font-bold text-orange-500">
          Equal Opportunity Cell (EOC) – Promoting Inclusion & Diversity at SGTU
        </h1>
        <h3 className="text-xl text-gray-800 font-semibold">
          Ensuring Fairness, Equity, and Inclusion for All
        </h3>
        <p className="text-gray-700 leading-7">
          At Atal Bihari Vajpayee Skill University (SGTU), we firmly believe in the power of diversity and equal opportunity.
          Our Equal Opportunity Cell (EOC) is dedicated to fostering an inclusive, bias-free, and accessible environment
          where every student, faculty, and staff member is empowered to achieve their full potential.
        </p>
        <p className="text-gray-700 leading-7">
          The EOC ensures that individuals from all backgrounds—including differently-abled students, economically weaker
          sections, minorities, and underrepresented communities—are given the support, resources, and opportunities they
          deserve to thrive academically and professionally.
        </p>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 space-y-6">
        <h1 className="text-3xl font-bold text-orange-500">Objectives of the Equal Opportunity Cell</h1>
        <div className="space-y-3 text-gray-700">
          {[
            "Promote Inclusive Education – Ensuring every student has equal access to quality learning resources and facilities.",
            "Eliminate Discrimination – Upholding a fair, transparent, and non-discriminatory environment within the university.",
            "Empower Marginalized Communities – Providing mentorship, scholarships, and skill development initiatives.",
            "Support Differently-Abled Students – Implementing accessible infrastructure and assistive learning technologies.",
            "Foster a Safe & Respectful Campus – Addressing grievances related to bias, harassment, or discrimination.",
          ].map((text, i) => (
            <p key={i} className="flex gap-2 items-start">
              <span className="text-orange-500">✔️</span>
              <span>{text}</span>
            </p>
          ))}
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24 space-y-6">
        <h1 className="text-3xl font-bold text-orange-500">Policies & Initiatives</h1>
        <div className="space-y-4 text-gray-700">
          {[
            "Scholarships & Financial Assistance – Special financial aid programs for students from disadvantaged backgrounds.",
            "Accessible Campus & Infrastructure – Ramps, special seating, and digital resources for differently-abled students.",
            "Awareness & Sensitization Programs – Workshops on gender equality, disability rights, and cultural sensitivity.",
            "Grievance Redressal Mechanism – A dedicated platform to address complaints regarding discrimination or exclusion.",
            "Career Guidance & Skill Development – Special training programs to boost employability and confidence.",
          ].map((text, i) => (
            <p key={i} className="flex gap-2 items-start">
              <CheckCircleIcon className="w-5 h-5 text-orange-500 mt-1" />
              <span>{text}</span>
            </p>
          ))}
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 space-y-6">
        <h1 className="text-3xl font-bold text-orange-500">Who Can Approach the EOC?</h1>
        <div className="space-y-3 text-gray-700">
          {[
            "Students from Scheduled Castes (SC), Scheduled Tribes (ST), and Other Backward Classes (OBC)",
            "Students with disabilities (PwD)",
            "Women facing gender-based challenges in education or career growth",
            "Any individual facing discrimination based on religion, ethnicity, language, or background",
          ].map((text, i) => (
            <p key={i} className="flex gap-2 items-start">
              <span className="text-orange-500">✔️</span>
              <span>{text}</span>
            </p>
          ))}
        </div>
      </section>

      {/* Section 5 */}
      <section className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-24 space-y-6">
        <h1 className="text-3xl font-bold text-orange-500">How to Reach Us?</h1>
        <div className="space-y-4 text-gray-700">
          <p className="flex items-start gap-2">
            <MapPinIcon className="w-5 h-5 text-orange-500 mt-1" />
            <span><strong>Location:</strong> Equal Opportunity Cell, SGTU Campus, Namchi, Sikkim</span>
          </p>
          <p className="flex items-start gap-2">
            <EnvelopeIcon className="w-5 h-5 text-orange-500 mt-1" />
            <span><strong>Email:</strong> info@sgtu.ac.in</span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircleIcon className="w-5 h-5 text-orange-500 mt-1" />
            <span>
              <strong>Complaint & Assistance Form:</strong> <a href="#" className="text-orange-600 underline">Click here</a>
            </span>
          </p>
          <p className="flex items-start gap-2">
            <CheckCircleIcon className="w-5 h-5 text-orange-500 mt-1" />
            <span>
              <strong>Scholarship & Support Application:</strong> <a href="#" className="text-orange-600 underline">Click here</a>
            </span>
          </p>
        </div>

        <div className="text-center pt-8 space-y-2">
          <h4 className="text-lg font-semibold text-gray-800">
            Let’s work together to build a fair, inclusive, and empowering learning environment!
          </h4>
          <h4 className="text-md text-gray-600">
            SGTU – Where Everyone Has the Right to Learn, Grow, and Succeed! 🌍🎓
          </h4>
        </div>
      </section>
    </div>
  );
}
