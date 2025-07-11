"use client"; // Only if using App Router

import Image from "next/image";
import Link from "next/link";

export default function ConferencePage() {
  return (
    <main className="bg-white">
      {/* Welcome Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Text */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold text-gray-800">
            Welcome to the Hub of Knowledge Exchange & Innovation
          </h3>
          <p className="text-gray-700">
            At Atal Bihari Vajpayee Skill University (ABVSU), we foster a culture of
            research, collaboration, and continuous learning through our
            conferences, seminars, and workshops. Join us as we bring together
            academicians, researchers, industry experts, and students to discuss
            groundbreaking ideas and emerging trends across various disciplines.
          </p>
          <p className="text-gray-700">
            Through these events, we aim to bridge the gap between academia and
            industry, fostering interdisciplinary collaborations that drive
            progress and real-world solutions. Whether it's scientific
            advancements, technological innovations, business strategies, or
            societal development, our interactive sessions provide a space for
            critical discussions, skill enhancement, and networking
            opportunities.
          </p>
        </div>

        {/* Right: Image Placeholder */}
        <div className="flex justify-center items-center">
          <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg bg-gray-100">
            <Image
              src="/images/Graphic/conference.jpg"
              alt="Conference at ABVSU"
              width={800}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Upcoming Seminars */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          📢 Upcoming Conferences & Seminars
        </h2>

        <ul className="space-y-6">
          {/* Conference 1 */}
          <li className="p-6 border-l-4 border-yellow-500 bg-white rounded shadow">
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              🌐 National Seminar on Sustainable Development & AI Integration
            </h4>
            <p className="text-gray-700">
              <strong>📅 Date:</strong> July 22, 2025
            </p>
            <p className="text-gray-700">
              <strong>📍 Venue:</strong> Online & Offline (Hybrid Mode)
            </p>
            <p className="text-gray-700">
              <strong>🌱 Theme:</strong> AI for Sustainability & Green
              Innovation
            </p>
          </li>

          {/* Conference 2 */}
          <li className="p-6 border-l-4 border-green-500 bg-white rounded shadow">
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              🧠 Workshop on Advanced Data Science & Machine Learning
            </h4>
            <p className="text-gray-700">
              <strong>📅 Date:</strong> June 5, 2025
            </p>
            <p className="text-gray-700">
              <strong>📍 Venue:</strong> Computer Science Auditorium, ABVSU
            </p>
            <p className="text-gray-700">
              <strong>👨‍🏫 Trainer:</strong> Industry Experts & Data Scientists
            </p>
          </li>
        </ul>
      </section>

      {/* Why Attend Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          🎯 Why Attend?
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2">
            ✅ Gain insights from renowned speakers
          </li>
          <li className="flex items-center gap-2">
            ✅ Present your research and get published
          </li>
          <li className="flex items-center gap-2">
            ✅ Network with industry professionals and academicians
          </li>
          <li className="flex items-center gap-2">
            ✅ Hands-on workshops & training sessions
          </li>
          <li className="flex items-center gap-2">
            ✅ Certificate of Participation for all attendees
          </li>
        </ul>
      </section>

      {/* Registration Section */}
      <section className="py-12 px-4 max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          🔗 Registration Details
        </h3>
        <ul className="space-y-4 text-gray-700">
          <li className="flex items-center gap-2">
            💰 <strong>Fees:</strong> Vary based on category (Student /
            Professional / Industry)
          </li>
          <li className="flex items-center gap-2">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:info@ABVSU.ac.in"
              className="text-blue-600 hover:underline"
            >
              info@ABVSU.ac.in
            </a>
          </li>
        </ul>
      </section>

      {/* Closing Statement */}
      <section className="py-8 px-4 max-w-5xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 text-center">
          🚀 Join us in shaping the future of research & innovation at ABVSU!
        </h3>
      </section>
    </main>
  );
}
