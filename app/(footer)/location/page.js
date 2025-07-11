"use client"; // Include only if you're using App Router

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Discover ABVSU Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Discover ABVSU: <span className="text-amber-500">A Campus Like No Other</span>
            </h1>
            <h2 className="text-xl text-gray-800 font-semibold">
              Why choose Atal Bihari Vajpayee Skill University
            </h2>
            <p className="text-lg text-gray-600">
              Welcome to <span className="font-semibold text-amber-500">ABVSU</span>, where education extends beyond classrooms
              into a dynamic, inspiring, and serene environment. Our university is dedicated to <span className="font-semibold text-amber-500">empowering students</span>
              with <span className="font-semibold text-amber-500">future-ready skills</span>, fostering innovation, and equipping them
              with the values needed to make a meaningful impact on society.
            </p>
            <p className="text-lg text-gray-600">
              At <span className="font-semibold text-amber-500">ABVSU</span>, students don’t just learn; they <span className="font-semibold text-amber-500">experience education</span>
              in a setting that blends <span className="font-semibold text-amber-500">academic excellence with the beauty of nature</span>.
            </p>
          </div>

          {/* Right: Image */}
          <div className="text-center">
            <Image
              src="/Background/footerbg.jpeg"
              alt="ABVSU Campus"
              className="rounded-xl shadow-lg mx-auto"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Nature View Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Image */}
          <div className="text-center">
            <Image
              src="/images/Gallery/Pakyonglocation.jpg"
              alt="Nature View"
              className="rounded-xl shadow-lg mx-auto"
              width={600}
              height={400}
            />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              A Unique Campus Experience in the <span className="text-amber-500">Heart of Nature</span>
            </h1>
            <p className="text-lg text-gray-600">
              Nestled in the <span className="font-semibold text-amber-500">breathtaking town of Pakyong, Sikkim</span>,
              the <span className="font-semibold text-amber-500">ABVSU campus</span> offers a <span className="font-semibold">one-of-a-kind</span>
              learning environment with <span className="font-semibold">majestic mountains, lush valleys, and green landscapes</span>.
            </p>
            <p className="text-lg text-gray-600">
              Students experience an <span className="font-semibold">enriching atmosphere</span> that nurtures creativity, wellness, and focus.
            </p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow">
            ✅ 40+ Acres of Modern Infrastructure
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            🌿 Scenic Views & Pollution-Free Environment
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            📡 100% Wi-Fi-Enabled Digital Campus
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            🛡️ Safe & Secure with 24/7 Surveillance
          </div>
        </div>
      </section>

      {/* Contact & CTA */}
      <section className="py-16 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-500">💡 Your Journey Begins Here</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
          Ready to experience transformative education in a serene yet innovative environment?
          ABVSU offers the perfect blend of academic rigor, career opportunities, and holistic development.
        </p>
        <div className="mt-6 space-y-2">
          <p className="text-lg">
            <strong>🌐 Website:</strong>{" "}
            <Link href="https://www.ABVSU.ac.in" className="text-amber-500 hover:underline">
              www.ABVSU.ac.in
            </Link>
          </p>
          <p className="text-lg">
            <strong>📧 Email:</strong>{" "}
            <a href="mailto:admissions@ABVSU.ac.in" className="text-amber-500 hover:underline">
              admissions@ABVSU.ac.in
            </a>
          </p>
        </div>
      </section>

      {/* Footer Banner */}
      <section className="bg-amber-500 py-6">
        <h2 className="text-center text-white text-xl md:text-2xl font-semibold">
          🌟 Atal Bihari Vajpayee Skill University – Where Education Meets Innovation in the Heart of Nature! 🌍🎓
        </h2>
      </section>
    </>
  );
}
