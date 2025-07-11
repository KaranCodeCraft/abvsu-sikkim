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
      title: "Driving Academic Excellence & Innovation",
      animation: "/animations/education.json",
      points: [
        "The Academic Council of Atal Bihari Vajpayee Skill University (ABVSU) is the principal academic authority responsible for shaping and overseeing educational policies, curriculum development, and research initiatives.",
        "Comprising distinguished academicians, industry experts, and senior faculty members, the council ensures high academic standards, innovation in learning, and global alignment.",
        "It plays a pivotal role in decision-making related to teaching, research, student evaluation, and academic collaborations to create a dynamic, future-ready learning environment.",
      ],
    },
    {
      title: "Objectives of the Academic Council",
      animation: "/animations/worldclass.json",
      points: [
        "Curriculum Development & Innovation – Ensuring that academic programs are industry-oriented, research-driven, and globally competitive.",
        "Approval & Review of Courses – Periodically revising existing courses and introducing new programs.",
        "Examination & Evaluation Reforms – Implementing transparent and modern assessment methodologies.",
        "Quality Assurance & Accreditation – Maintaining academic excellence through compliance with national and international standards.",
        "Research & Development (R&D) – Encouraging innovative research and interdisciplinary studies.",
        "Academic Collaborations & Global Engagements – Partnering with institutions and industries worldwide.",
        "Student-Centric Learning – Promoting experiential, skill-based, and digital learning.",
        "Scholarships & Financial Assistance – Ensuring access through financial aid and merit-based scholarships.",
      ],
    },
    {
      title: "Functions of the Academic Council",
      animation: "/animations/holistic.json",
      points: [
        "Developing Academic Policies – Establishing guidelines for teaching, research, and student evaluation.",
        "Enhancing Faculty Development – Organizing training, workshops, and faculty exchanges.",
        "Encouraging Interdisciplinary Learning – Promoting cross-disciplinary research and collaboration.",
        "Ensuring Industry Integration – Engaging regularly with industry leaders.",
        "Monitoring Academic Progress – Reviewing student performance and recommending improvements.",
        "Advancing Digital & Flexible Learning – Adopting e-learning technologies and hybrid models.",
      ],
    },
    {
      title: "Schools Governed by the Academic Council",
      animation: "/animations/campus.json",
      points: [
        "School of Computer Science & Information Technology",
        "School of Commerce & Management",
        "School of Arts, Humanities & Social Sciences",
        "School of Science",
        "School of Vocational Studies",
        "School of Agriculture",
        "School of Library Science",
        "School of Hotel Management & Tourism",
        "School of Engineering & Technology",
      ],
    },
    {
      title: "Our Commitment to Academic Excellence",
      animation: "/animations/responsibility.json",
      points: [
        "At ABVSU, the Academic Council plays an instrumental role in shaping the future of education.",
        "By evolving curriculum strategies, fostering cutting-edge research, and integrating real-world industry insights, we prepare students to become future-ready leaders.",
        "Our goal is to empower students as innovators and change-makers in their respective fields.",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Academic Council</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Academic Council</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Introduction */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-orange-600">Academic Council – Atal Bihari Vajpayee Skill University (ABVSU)</h2>
        <p className="text-gray-700 leading-7 mb-4">
          Welcome to the Academic Council of ABVSU — the principal body that drives academic excellence and innovation across the university. We are committed to shaping dynamic education strategies that align with global standards and foster research, collaboration, and inclusive learning.
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
    </div>
  );
};

export default Page;