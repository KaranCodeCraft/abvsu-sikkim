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
          <h1 className="text-3xl font-bold mb-2">Seminar Committee</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Seminar Committee</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Main Section */}
      <div className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-semibold text-orange-500 mb-5">
          <span className="text-[#2A2727]">Seminar</span> Committee
        </h2>

        {/* Mobile: Animation first */}
        <div className="md:hidden flex justify-center mb-40">
          <div className="h-50 w-80">
            <Player
              autoplay
              loop
              src="/animations/seminarcommittee.json"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-start mb-6">
          {/* Left Intro Text */}
          <div className="md:col-span-2 space-y-6">
            <p>
              The Seminar Committee at Sikkim Global Technical University (SGTU) is a dedicated team focused on organizing academic seminars, workshops, and symposiums that enhance the learning experience and professional growth of students and faculty alike. By hosting a wide range of events, the committee aims to bring valuable insights from industry leaders, researchers, and experts to the university campus, fostering an environment of knowledge-sharing and innovation.
            </p>
            <p>
              One of the primary objectives of the Seminar Committee is to provide a platform for intellectual engagement and skill development. The committee curates a lineup of guest speakers, experts, and researchers from diverse fields, ensuring that students gain exposure to current industry trends, research advancements, and emerging technologies. Through these sessions, students have the opportunity to interact directly with professionals, gaining insights that go beyond the classroom.
            </p>
            <p>
              The Seminar Committee is responsible for the planning and execution of all seminar-related activities. This includes coordinating schedules, organizing logistics, promoting events, and ensuring that each session runs smoothly. The team works closely with various departments to align the seminars with the academic calendar and curriculum, ensuring that the topics are relevant and beneficial to students’ studies and career aspirations.
            </p>
          </div>

          {/* Right Animation */}
          <div className="hidden md:flex justify-center">
            <div className="h-50 w-80 -mt-10">
              <Player
                autoplay
                loop
                src="/animations/seminarcommittee.json"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Full width content */}
        <div className="space-y-6">
          <p>
            Another critical focus of the committee is to encourage student participation and active involvement. By involving students in the organizational process, the committee provides a hands-on learning experience in event management, communication, and teamwork. This active participation enhances students' organizational skills and confidence, preparing them for real-world challenges and professional responsibilities.
          </p>
          <p>
            The Seminar Committee also prioritizes collaboration and networking opportunities. Seminars and workshops serve as a meeting ground for students, faculty, and external professionals, fostering relationships that can lead to internships, mentorships, and career opportunities. In addition to technical and academic sessions, the committee occasionally organizes seminars focused on personal growth, soft skills development, and entrepreneurship, broadening students' perspectives and preparing them for holistic success.
          </p>
          <p>
            In its commitment to creating meaningful learning experiences, the Seminar Committee continuously evaluates the impact of its events. Feedback from attendees is collected to improve future seminars and address any evolving interests or needs within the university community. This responsive approach ensures that the committee remains aligned with the goals of the university and the aspirations of its students.
          </p>
          <p>
            Overall, the Seminar Committee at SGTU is dedicated to creating an engaging, informative, and interactive platform for academic and professional growth. By hosting seminars that bridge the gap between academic learning and industry practices, the committee contributes to a dynamic university environment that empowers students to excel in their chosen fields.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;