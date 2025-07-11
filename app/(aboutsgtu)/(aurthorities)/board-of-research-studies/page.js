"use client";
import Link from "next/link";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Board of Research Studies</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Board of Research Studies</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Main Section */}
      <section className="py-20 px-4 md:px-16 bg-white">
        {/* Flex layout for content and animation side by side */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* Left: Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
              Functions of the Board of Studies
            </h2>
            <p className="text-gray-700 leading-7">
              The Board of Studies at Atal Bihari Vajpayee Skill University (ABVSU)
              serves as a key academic body responsible for maintaining and
              improving educational standards across various disciplines...
            </p>
            <ul className="list-disc pl-6 text-gray-700 leading-7 space-y-2">
              <li>
                To recommend and update courses of study, teaching methodologies, and examination structures.
              </li>
              <li>
                To prepare a panel of paper setters and examiners.
              </li>
              <li>
                To advise on academic matters referred by faculty or Academic Council.
              </li>
              <li>
                To recommend books and study materials.
              </li>
              <li>
                To assess and suggest modifications to academic programs.
              </li>
              <li>
                To encourage interdisciplinary collaboration.
              </li>
            </ul>
          </div>

          {/* Right: Lottie Animation */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              <Player
                autoplay
                loop
                src="/animations/boardofresearchstudies.json"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Page;