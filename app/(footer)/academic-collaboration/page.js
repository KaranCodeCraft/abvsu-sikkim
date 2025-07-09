// app/academic-collaboration/page.tsx
import React from "react";

export default function AcademicCollaborationPage() {
  return (
    <section className="px-6 py-16 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto space-y-10">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
            Academic Collaboration
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Atal Bihari Vajpayee Skill University (SGTU) believes in the power of academic collaborations to enhance research, learning, and global exposure for students and faculty. Our partnerships with reputed institutions, industries, and research organizations help in fostering innovation and excellence in education.
          </p>
        </header>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">International Partnerships</h2>
            <p className="text-gray-700 mt-2">
              SGTU has established collaborations with renowned international universities and research centers to provide exchange programs, joint research opportunities, and access to global academic resources. These collaborations help students gain international exposure and cross-cultural learning experiences.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Industry-Academia Collaboration</h2>
            <p className="text-gray-700 mt-2">To bridge the gap between academic learning and industry requirements, SGTU has partnered with leading corporations and organizations. These partnerships facilitate:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>Internship and placement opportunities for students.</li>
              <li>Industry-driven curriculum design and workshops.</li>
              <li>Collaborative research and development projects.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Research & Development Collaborations</h2>
            <p className="text-gray-700 mt-2">SGTU encourages research excellence through joint ventures with research organizations, government bodies, and technology firms. These collaborations support:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>Funding for innovative research projects.</li>
              <li>Access to state-of-the-art laboratories and resources.</li>
              <li>Publication and patent filing support.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Student & Faculty Exchange Programs</h2>
            <p className="text-gray-700 mt-2">
              SGTU actively promotes exchange programs where students and faculty can engage in academic activities at partner institutions. These programs enhance global learning perspectives and help in skill development.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Memorandums of Understanding (MOUs)</h2>
            <p className="text-gray-700 mt-2">The university has signed multiple MoUs with esteemed institutions and organizations to facilitate structured academic collaborations. These agreements focus on:</p>
            <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
              <li>Joint degree and certification programs.</li>
              <li>Knowledge-sharing initiatives.</li>
              <li>Collaborative teaching and learning methodologies.</li>
            </ul>
          </div>

          <p className="text-gray-700">
            SGTU remains committed to expanding its network of academic collaborations to provide a dynamic and enriched learning experience for students and faculty alike.
          </p>
        </div>
      </div>
    </section>
  );
}
