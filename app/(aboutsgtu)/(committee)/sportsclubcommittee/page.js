"use client";
import dynamic from "next/dynamic";
import Link from "next/link";

const Player = dynamic(() =>
  import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Sports Club Committee</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Sports Club Committee</span>
          </div>
        </div>
        {/* Orange diagonal shape */}
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Main Section */}
      <div className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-semibold text-orange-500 mb-5">
          <span className="text-[#2A2727]">Sports Club</span> Committee
        </h2>

        {/* Mobile Animation */}
        <div className="md:hidden flex justify-center mb-30">
          <div className="h-50 w-80">
            <Player
              autoplay
              loop
              src="/animations/sports.json"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-start mb-6">
          {/* Text Content */}
          <div className="md:col-span-2 space-y-6">
            <p>
              The Sports Club Committee at Atal Bihari Vajpayee Skill University (ABVSU) plays a vital role in promoting sports, physical fitness, and overall well-being among students. The committee is dedicated to fostering a spirit of teamwork, competition, and healthy living through a wide range of sports activities and events. By encouraging participation in various sports, the committee aims to develop not only athletic skills but also life skills such as discipline, leadership, and perseverance.
            </p>
            <p>
              One of the primary objectives of the Sports Club Committee is to organize and manage inter-college and intra-college sports events. These events include tournaments, matches, and competitions across multiple sports such as cricket, football, basketball, volleyball, and athletics. The committee ensures that all events are well-coordinated, providing the necessary facilities, equipment, and support to participants. By hosting these competitions, the committee not only promotes a culture of sportsmanship but also brings together students from diverse backgrounds, fostering camaraderie and community spirit.
            </p>
            <p>
              In addition to competitive sports, the committee also emphasizes the importance of recreational activities. Regular sports meetups, fitness sessions, and workshops are organized to encourage students to engage in physical activity for leisure and health benefits. These activities provide an opportunity for students to unwind, relieve stress, and maintain a balanced lifestyle amidst their academic commitments.
            </p>
          </div>

          {/* Desktop Animation */}
          <div className="hidden md:flex justify-center">
            <div className="h-50 w-80">
              <Player
                autoplay
                loop
                src="/animations/sports.json"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Extra Content */}
        <div className="space-y-6">
          <p>
            The Sports Club Committee actively encourages student involvement and leadership. By providing opportunities for students to take on roles such as event coordinators, team captains, and volunteers, the committee fosters a sense of responsibility and ownership. This involvement not only helps students develop organizational and management skills but also enhances their confidence and ability to work collaboratively with peers.
          </p>
          <p>
            Promoting inclusivity is another core value of the Sports Club Committee. The committee is committed to ensuring that sports activities are accessible to all students, regardless of their skill level or experience. Special initiatives and beginner-level training sessions are organized to encourage participation from students who may be hesitant to join competitive sports. By creating a welcoming environment, the committee aims to inspire every student to experience the benefits of physical activity and teamwork.
          </p>
          <p>
            Furthermore, the Sports Club Committee collaborates with external organizations and sports professionals to provide expert coaching and training sessions. This partnership enriches the sports program at ABVSU, giving students access to professional guidance and resources. Workshops on sports management, health, nutrition, and injury prevention are also organized to educate students about the various aspects of sports and fitness.
          </p>
          <p>
            Overall, the Sports Club Committee at ABVSU is dedicated to fostering a vibrant sports culture within the university. By organizing a wide range of sports activities and promoting physical fitness, the committee not only enhances students’ athletic abilities but also contributes to their personal growth and well-being. The committee's efforts ensure that every student has the opportunity to engage in sports, build lifelong friendships, and develop essential skills that extend beyond the playing field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;