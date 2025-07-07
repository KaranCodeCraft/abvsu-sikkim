"use client";

import React from "react";
import {
  BriefcaseIcon,
  CheckCircleIcon,
  ClipboardDocumentCheckIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    title: "Pre-Placement Training",
    icon: AcademicCapIcon,
    items: [
      "Resume Building & Cover Letter Writing",
      "Interview Preparation & Mock Interviews",
      "Soft Skills & Personality Development",
      "Technical & Aptitude Test Training",
    ],
  },
  {
    title: "Job Notifications & Student Registrations",
    icon: ClipboardDocumentCheckIcon,
    items: [
      "Placement opportunities are shared through the university portal.",
      "Interested students must register before the deadline.",
    ],
  },
  {
    title: "Screening & Shortlisting Process",
    icon: UserGroupIcon,
    items: [
      "Academic Performance & CGPA Criteria",
      "Skill Assessments (Technical & Soft Skills)",
      "Aptitude & Psychometric Tests",
      "Resume & Profile Review",
    ],
  },
  {
    title: "Interview & Selection Process",
    icon: BriefcaseIcon,
    items: [
      "Personal Interviews – HR & Technical Rounds",
      "Group Discussions – Communication & Teamwork Assessment",
      "Case Studies & Presentations – Problem-Solving Evaluation",
      "Live Coding / Skill Tests – For Tech & IT Roles",
    ],
  },
  {
    title: "Job Offers & Acceptance",
    icon: CheckCircleIcon,
    items: [
      "Selected students receive offer letters.",
      "Students can accept or decline offers.",
      "Companies may offer internships or PPOs.",
    ],
  },
  {
    title: "Onboarding & Joining Formalities",
    icon: ArrowTrendingUpIcon,
    items: [
      "Students complete joining formalities.",
      "Placement cell assists in verification & pre-joining training.",
      "Students join organizations as per schedule.",
    ],
  },
];

export default function RecruitmentProcessPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            Recruitment Process -{" "}
            <span className="text-black">SGTU</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At SGTU, we bridge the gap between academic excellence and professional success. Our structured recruitment process ensures students are well-prepared for exciting career opportunities.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-5 gap-6 items-start ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className="md:col-span-1 flex justify-center">
                <step.icon className="h-12 w-12 text-orange-500" />
              </div>
              <div className="md:col-span-4 space-y-2">
                <h3 className="text-2xl font-semibold text-orange-600">
                  {step.title}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {step.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <h4 className="text-xl font-semibold text-rose-600">📩 For Placement Assistance, Contact:</h4>
          <p>📧 <strong>Email:</strong> <a href="mailto:placements@sgtu.edu.in" className="text-blue-600 underline">placements@sgtu.edu.in</a></p>
          <p>📍 Placement Cell, SGTU Campus, Sikkim</p>
          <p>🌐 <a href="https://www.sgtu.edu.in" target="_blank" rel="noopener" className="text-blue-600 underline">www.sgtu.edu.in</a></p>
        </div>
      </section>
    </main>
  );
}
