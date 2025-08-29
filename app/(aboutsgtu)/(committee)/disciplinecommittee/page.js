"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16 overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Discipline Committee</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Discipline Committee</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[120px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Main Section */}
      <div className="py-16 px-4 md:px-16">
        {/* Introduction */}
        <h2 className="text-3xl font-bold text-orange-500 mb-10">
          About the <span className="text-gray-800">Discipline Committee</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-start mb-16">
          {/* Left Content */}
          <div className="md:w-1/2 text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              At <strong>Atal Bihari Vajpayee Skill University (ABVSU)</strong>, we uphold the values of respect, integrity, and responsibility. The Discipline Committee ensures these values are preserved, creating a safe and respectful learning environment.
            </p>
            <p>
              The committee comprises faculty, administrators, and student representatives who collaborate to maintain order, resolve disputes, and reinforce ethical behavior through fair processes and transparent decisions.
            </p>
          </div>

          {/* Animation */}
          <div className="md:w-1/2">
            <Player
              autoplay
              loop
              src="/animations/discipline.json"
              style={{ height: "50%", width: "50%" }}
            />
          </div>
        </div>

        {/* Objectives & Responsibilities */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Objectives */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4 flex items-center gap-2">
              <ShieldCheck className="text-orange-500" />
              Key Objectives
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Promote a culture of respect, accountability, and integrity.</li>
              <li>Ensure consistent enforcement of the university's code of conduct.</li>
              <li>Guide students on personal responsibility and ethical conduct.</li>
              <li>Support conflict resolution through structured systems.</li>
            </ul>
          </div>

          {/* Responsibilities */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4 flex items-center gap-2">
              <UserCheck className="text-orange-500" />
              Responsibilities
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Conduct awareness programs on discipline and behavior.</li>
              <li>Investigate reported incidents and conduct fair reviews.</li>
              <li>Hold hearings and provide resolutions to disputes.</li>
              <li>Implement corrective actions aligned with university policy.</li>
            </ul>
          </div>
        </div>

        {/* Closing Note */}
        <div className="text-gray-700 text-lg leading-relaxed space-y-4 mt-12">
          <p>
            The <strong>Discipline Committee</strong> at ABVSU aims to foster an environment where learning thrives through mutual respect and responsibility. Our efforts go beyond policing behavior—we educate and guide students toward becoming ethical, thoughtful individuals.
          </p>
          <p>
            By embedding discipline into the student journey, we help shape responsible professionals and leaders of tomorrow who respect rules and uphold values in every walk of life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
