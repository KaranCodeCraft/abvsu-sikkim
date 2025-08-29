"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Player = dynamic(() =>
  import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

const Page = () => {
  const focusAreas = [
    {
      title: "1. Curriculum Innovation and Industry Alignment",
      animation: "/animations/innovation.json",
      points: [
        "Regular review and update of curricula in collaboration with industry experts.",
        "Introduction of interdisciplinary programs in AI, data science, robotics, and more.",
        "Implementation of a project-based, hands-on learning approach.",
        "Expansion of industry internships and corporate partnerships.",
      ],
    },
    {
      title: "2. Technology-Enabled Learning and Infrastructure Development",
      animation: "/animations/technology.json",
      points: [
        "Expansion of e-learning platforms and digital resources.",
        "Integration of AI-driven learning management systems.",
        "Development of advanced research facilities.",
        "Establishment of a robust IT infrastructure.",
      ],
    },
    {
      title: "3. Research and Innovation Ecosystem",
      animation: "/animations/research.json",
      points: [
        "Establishment of research centers in key areas.",
        "Encouraging faculty and student-led research collaborations.",
        "Development of innovation hubs and technology incubators.",
        "Hosting hackathons, research symposia, and innovation challenges.",
      ],
    },
    {
      title: "4. Global Engagement and International Collaborations",
      animation: "/animations/internationalColloboration.json",
      points: [
        "Strengthen and establish academic partnerships worldwide.",
        "Offer student exchange programs and international internships.",
        "Facilitate faculty exchange programs and research collaborations.",
        "Develop platforms for virtual global learning.",
      ],
    },
    {
      title: "5. Faculty Development and Excellence",
      animation: "/animations/faculty.json",
      points: [
        "Regular faculty training programs.",
        "Promotion of continuous learning and research engagement.",
        "Attracting distinguished visiting faculty.",
        "Encouraging faculty involvement in community outreach.",
      ],
    },
    {
      title: "6. Student-Centric Initiatives",
      animation: "/animations/students.json",
      points: [
        "Development of mentorship and career counseling programs.",
        "Establishment of platforms for extracurricular and leadership activities.",
        "Enhancement of placement and internship support systems.",
        "Strengthening student-alumni networks.",
      ],
    },
    {
      title: "7. Sustainability and Community Impact",
      animation: "/animations/sustainable.json",
      points: [
        "Launch sustainability-focused initiatives like green campuses.",
        "Promote social innovation projects.",
        "Engage in partnerships with non-profit organizations.",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Institutional Development Plan</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Institutional Development Plan</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[700px] h-full bg-[#FF6900] clip-diagonal" />
      </div>

      {/* Introduction */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-orange-600">University Institutional Development Plan</h2>
        <p className="text-gray-700 leading-7 mb-4">
          At The Atal Bihari Vajpayee Skill University, we are committed to shaping the future of higher education in India by integrating emerging trends, technology, and skills-led learning.
        </p>
        <p className="text-gray-700 leading-7 mb-4">
          Our Institutional Development Plan outlines strategic goals that will guide the university’s growth, ensuring we provide world-class education, research, and development opportunities.
        </p>
      </section>

      {/* Focus Areas */}
      {focusAreas.map((item, index) => (
        <section key={index} className={`py-16 px-4 md:px-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <Player
                autoplay
                loop
                src={item.animation}
                style={{ height: '300px', width: '100%' }}
              />
            </div>
            <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <h2 className="text-2xl font-bold mb-4 text-orange-600">{item.title}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 leading-7">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Timeline Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-orange-600">Timeline and Evaluation</h2>
        <p className="text-gray-700 leading-7 mb-4">
          The Institutional Development Plan is designed for implementation over five years, with periodic evaluations. Key performance indicators will be tracked in areas like student satisfaction, research output, industry engagement, and global partnerships.
        </p>
        <p className="text-gray-700 leading-7">
          Annual reviews will involve feedback from stakeholders to ensure alignment with our mission.
        </p>
        <p className="text-gray-700 leading-7 mt-4 font-semibold">Sincerely,</p>
        <p className="text-gray-700 leading-7">The Atal Bihari Vajpayee Skill University</p>
      </section>
    </div>
  );
};

export default Page;
