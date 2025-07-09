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
          <h1 className="text-3xl font-bold mb-2">Student Welfare Committee</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Student Welfare Committee</span>
          </div>
        </div>
        {/* Orange diagonal shape */}
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Main Section */}
      <div className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-semibold text-orange-500 mb-5">
          <span className="text-[#2A2727]">Student Welfare</span> Committee
        </h2>
        
        {/* Mobile: Animation first */}
        <div className="md:hidden flex justify-center mb-30">
          <div className="h-50 w-80">
            <Player
              autoplay
              loop
              src="/animations/students.json"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-start mb-6">
          {/* Left Intro Text - full width on mobile, 2/3 on desktop */}
          <div className="md:col-span-2 space-y-6">
            <p>
              The Student Welfare Committee at Atal Bihari Vajpayee Skill University (SGTU) is dedicated to fostering a supportive and enriching environment that enhances the overall well-being, development, and success of the student body. This committee is a bridge between the university administration and the students, addressing student needs, concerns, and interests to ensure a fulfilling university experience.
            </p>
            <p>
              The committee's primary responsibility is to promote and support student well-being across multiple dimensions, including academic support, mental and emotional health, career guidance, and social engagement. By organizing workshops, counseling sessions, and mentorship programs, the committee ensures that students have access to resources that help them thrive academically and personally. Furthermore, the committee offers peer support and professional counseling services, allowing students to navigate challenges with confidence and resilience.
            </p>
            <p>
              Another key function of the Student Welfare Committee is to provide a platform for student voices, encouraging open dialogue on matters that directly impact them. Regular meetings and feedback sessions are conducted to gather insights from students, which are then used to make informed decisions and improvements in university policies and facilities. This collaborative approach ensures that the student body feels heard, valued, and included in shaping their educational journey.
            </p>
          </div>

          {/* Right Animation - hidden on mobile, shown on desktop */}
          <div className="hidden md:flex justify-center">
            <div className="h-50 w-80">
              <Player
                autoplay
                loop
                src="/animations/students.json"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Full width content section */}
        <div className="space-y-6">
          <p>
            The committee also focuses on students' personal and professional growth by organizing various skill-building workshops, seminars, and career fairs. These initiatives empower students with practical knowledge and networking opportunities, preparing them for the competitive job market. Additionally, internship programs and career counseling sessions guide students towards meaningful career paths, helping them align their academic pursuits with future ambitions.
          </p>
          <p>
            Inclusivity and diversity are core values of the Student Welfare Committee. Efforts are made to celebrate and respect the diverse backgrounds, cultures, and perspectives represented within the student body. Cultural events, festivals, and diversity workshops are organized to promote mutual respect and understanding among students. This inclusive approach not only enriches the university culture but also prepares students to be socially responsible and empathetic individuals.
          </p>
          <p>
            The Student Welfare Committee's commitment extends beyond academics and career support; it also encourages students to participate in sports, arts, and other extracurricular activities. Through these activities, students build interpersonal skills, teamwork abilities, and a balanced lifestyle. By fostering holistic growth, the committee contributes significantly to a well-rounded educational experience at SGTU.
          </p>
          <p>
            Overall, the Student Welfare Committee at SGTU works tirelessly to provide a nurturing, inclusive, and empowering environment for all students. By addressing diverse needs and promoting overall well-being, the committee plays a crucial role in enhancing the quality of student life and ensuring that each student feels supported, engaged, and prepared for a bright future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;