"use client";

import Image from "next/image";
import React from "react";

export default function LibraryPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="py-10 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Library</h2>
        <p className="text-lg text-gray-700">
          The library at Atal Bihari Vajpayee Skill University (ABVSU) stands as a vital resource for students, faculty, and researchers, fostering an environment of knowledge and academic excellence.
        </p>
      </section>

      {/* Collection + Image */}
      <section className="py-10 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-semibold mb-3 ">Extensive Collection of <span className="text-orange-500">Resources</span></h3>
          <p className="mb-4 text-gray-700">
            ABVSU’s library boasts an extensive collection of books, journals, research papers, and digital resources across a wide range of disciplines. It provides both physical and digital access to support learning and research.
          </p>
        </div>
        <Image
          src="/images/Graphic/library.jpg"
          alt="Library Collection"
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full object-cover"
        />
      </section>

      {/* Facilities + Image */}
      <section className="py-10 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <Image
          src="/images/Graphic/library2.jpg"
          alt="Study Spaces"
          width={600}
          height={400}
          className="rounded-lg shadow-md w-full object-cover"
        />
        <div>
          <h3 className="text-2xl font-semibold mb-3 ">Modern Facilities and <span className="text-orange-500">Study Spaces</span></h3>
          <p className="text-gray-700">
            The library features individual carrels, group rooms, and reading zones with natural light and a serene ambiance—ideal for both collaboration and quiet study.
          </p>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-10 px-6 max-w-7xl mx-auto space-y-10">
        {[
          {
            title: "Advanced Technological Integration",
            content:
              "The library is equipped with high-speed internet, digital access terminals, printing services, and more, ensuring a tech-driven learning environment.",
          },
          {
            title: "Supportive Library Staff",
            content:
              "Trained librarians assist users with resource access, research guidance, and workshops on citation and digital literacy.",
          },
          {
            title: "Research and Learning Support",
            content:
              "Workshops and seminars enhance research skills and academic writing, with subject-specific guides for deeper exploration.",
          },
          {
            title: "Interlibrary Loan Services",
            content:
              "Students can request materials from partner libraries, broadening access to specialized academic content.",
          },
          {
            title: "Promoting a Culture of Reading and Lifelong Learning",
            content:
              "Book fairs, author visits, and literary events create a vibrant reading culture and support intellectual curiosity beyond the curriculum.",
          },
        ].map((item, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold  mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.content}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
