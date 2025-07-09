"use client";

import { BriefcaseIcon, AcademicCapIcon, UsersIcon, LightBulbIcon } from '@heroicons/react/24/solid';

export default function SedgCellPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-start gap-12">
      
      {/* Left content */}
      <div className="flex-1 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-8">
          Socio-Economically Disadvantaged Group (SEDG) Cell
        </h1>

        <p className="mb-8 text-gray-700 leading-relaxed">
          At The Atal Bihari Vajpayee Skill University, we strive to empower students from diverse socio-economic backgrounds by providing equal opportunities and comprehensive support through the SEDG Cell.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Mission & Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Dedicated to fostering academic excellence, career growth, and social integration among marginalized students through collaborative efforts with government, industry, and academic departments.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-6">Key Objectives</h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start gap-3">
              <AcademicCapIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <span><strong>Financial Support:</strong> Scholarships, grants, and fee concessions to ease educational access.</span>
            </li>
            <li className="flex items-start gap-3">
              <BriefcaseIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <span><strong>Academic Assistance:</strong> Mentorship, tutoring, and remedial classes.</span>
            </li>
            <li className="flex items-start gap-3">
              <LightBulbIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <span><strong>Skill Development:</strong> Workshops, certification courses, and industry training.</span>
            </li>
            <li className="flex items-start gap-3">
              <UsersIcon className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <span><strong>Social Integration:</strong> Encouraging participation in events and leadership programs.</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Supportive Initiatives</h2>
          <p className="text-gray-700 leading-relaxed">
            Our initiatives include scholarships, mentorship programs, remedial tutorials, skill development workshops, placement assistance, and psychosocial support, ensuring holistic growth.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Collaboration</h2>
          <p className="text-gray-700 leading-relaxed">
            Strong partnerships with government bodies, industry, NGOs, and social organizations enable us to maximize support and resources for our students.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed">
            The SEDG Cell embodies our commitment to equality, diversity, and opportunity, empowering every student to reach their fullest potential.
          </p>
        </section>
      </div>

      {/* Right sidebar */}
      <aside className="w-full md:w-80 bg-orange-100 rounded-xl p-8 shadow-lg sticky top-32 self-start">
        <h3 className="text-xl font-bold text-orange-700 mb-6">Why SEDG Cell?</h3>
        <ul className="space-y-5 text-orange-800">
          <li className="flex items-center gap-3">
            <AcademicCapIcon className="w-5 h-5" />
            Empower academic excellence through dedicated support.
          </li>
          <li className="flex items-center gap-3">
            <BriefcaseIcon className="w-5 h-5" />
            Facilitate skill-building and industry readiness.
          </li>
          <li className="flex items-center gap-3">
            <UsersIcon className="w-5 h-5" />
            Foster inclusion and community participation.
          </li>
          <li className="flex items-center gap-3">
            <LightBulbIcon className="w-5 h-5" />
            Provide career guidance and placement support.
          </li>
        </ul>
      </aside>
    </section>
  );
}
