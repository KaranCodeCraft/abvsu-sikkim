"use client";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-[#1e1c1c] to-[#2f2c2c] text-white py-14 px-4 md:px-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Industry Collaboration
          </h1>
          <div className="text-sm font-medium text-white/90 flex items-center space-x-2">
            <Link href="/" className="hover:text-orange-400">
              Home
            </Link>
            <span>/</span>
            <span className="text-orange-400">Industry Collaboration</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-full bg-orange-500 clip-diagonal z-0 opacity-90" />
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            ABVSU x CIDC Collaboration
          </h2>

          {/* Collaboration Portrait Image */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/docs/industryCollaboration.jpeg" 
                alt="ABVSU and CIDC Collaboration"
                width={400}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <p className="text-gray-700 leading-7 text-lg">
            <strong>Atal Bihari Vajpayee Skill University (ABVSU)</strong> has
            collaborated with the
            <strong> Construction Industry Development Council (CIDC)</strong>,
            an apex organization established in 1996 by the Planning Commission
            (now NITI Aayog), along with several Central Ministries, CPSUs, and
            key players in the infrastructure sector.
          </p>

          <p className="text-gray-700 leading-7 text-lg">
            This collaboration aims to drive value-added employment
            opportunities for youth, aligning with the{" "}
            <strong>National Education Policy 2024</strong>, which stresses
            effective Industry-Academia engagement.
          </p>

          <p className="text-gray-700 leading-7 text-lg">
            On <strong>11th June 2025</strong>, ABVSU was honoured with the
            distinction of establishing the{" "}
            <strong>First National CIDC Affiliated Centre</strong> in Sikkim,
            inaugurated by
            <strong> Dr. P. R. Swarup</strong>, Director General of CIDC.
          </p>

          <p className="text-gray-700 leading-7 text-lg">
            CIDC has consistently led impactful Human Resource Development
            programs focused on employability, and the partnership with ABVSU
            opens new doors for the youth of the state.
          </p>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">
              Key Initiatives under this Collaboration:
            </h3>
            <ul className="list-disc list-inside text-gray-800 text-base space-y-3">
              <li>
                <strong>Internship Opportunities:</strong> ABVSU students will
                gain hands-on project experience through internships with top
                industry organizations.
              </li>
              <li>
                <strong>Grand Rojgar Mela:</strong> Major hiring drives will be
                conducted to create employment opportunities for students.
              </li>
              <li>
                <strong>B.Voc Programs:</strong> New vocational courses will be
                launched in various construction-related streams.
              </li>
              <li>
                <strong>B.Tech Programs:</strong> Specialized undergraduate
                engineering programs focused on construction industries will be
                introduced.
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-7 text-lg">
            This initiative marks a milestone in bridging the gap between
            academics and industry, ensuring that ABVSU students are
            well-equipped to contribute to the infrastructure development sector
            both regionally and nationally.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Page;
