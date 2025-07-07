"use client";
import Link from "next/link";
import dynamic from "next/dynamic";

const Player = dynamic(() =>
  import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

const Page = () => {
  const focusAreas = [
    {
      title: "Empowering Future Leaders through Education and Values",
      animation: "/animations/education.json",
      points: [
        "SGTU believes that education is about more than just gaining knowledge—it’s about shaping individuals to be compassionate, responsible, and equipped to tackle real-world challenges.",
        "Through our blended approach of technological innovation and India’s rich cultural heritage, we develop both the professional skills and personal values.",
        "Students are enabled to make a lasting impact on society and the world at large.",
      ],
    },
    {
      title: "A Unique Campus Experience in the Heart of Nature",
      animation: "/animations/campus.json",
      points: [
        "Our campus, located in the scenic and peaceful town of Namchi, Sikkim, offers an inspiring environment with sweeping views of lush valleys, majestic mountains, and sprawling green landscapes.",
        "This pollution-free environment is an ideal setting for focused study, reflection, and personal growth.",
        "Here, students find not only a place to learn but a sanctuary that fosters creativity, tranquility, and a deep appreciation for nature.",
      ],
    },
    {
      title: "World-Class Academics with a Global Outlook",
      animation: "/animations/worldclass.json",
      points: [
        "SGTU’s innovative curriculum is designed to create graduates who are skilled, adaptable, and ready to take on the challenges of an interconnected world.",
        "We emphasize cutting-edge academic programs, dynamic research opportunities, and a foundation in critical thinking, with an eye toward global placements and career opportunities.",
        "Our industry partnerships and collaborations enable us to provide unparalleled placement drives, internships, and professional training that open doors for our students on an international scale.",
      ],
    },
    {
      title: "Holistic Development: Nurturing the Mind, Body and Spirit",
      animation: "/animations/holistic.json",
      points: [
        "Education at SGTU encompasses every aspect of student life, promoting holistic growth and personal well-being.",
        "We blend rigorous academics with a rich selection of extracurricular activities, sports programs, and leadership opportunities.",
        "Students gain critical life skills, resilience, and confidence, helping them to emerge as well-rounded individuals.",
        "At SGTU, education is a transformative journey that prepares students for both professional success and personal fulfillment.",
      ],
    },
    {
      title: "Career-Ready Graduates with Real-World Skills",
      animation: "/animations/faculty.json",
      points: [
        "Our curriculum is aligned with industry needs, equipping students with practical knowledge, hands-on experience, and job-oriented specializations.",
        "Through internships, career-readiness programs, and experiential learning opportunities, we ensure our graduates are prepared for real-world challenges and career success.",
        "Every course at SGTU is designed to enhance productivity, job prospects, and adaptability, making our students competitive and capable contributors in any field.",
      ],
    },
    {
      title: "Distinguished Faculty with a Passion for Teaching and Mentorship",
      animation: "/animations/students.json",
      points: [
        "At SGTU, our esteemed faculty are more than teachers—they are mentors, guides, and leaders dedicated to student success.",
        "Guided by our visionary founder, our faculty bring years of academic and industry experience to the classroom.",
        "They create a vibrant learning environment that encourages curiosity, critical thinking, and a deep understanding of subjects.",
        "This dedication to teaching excellence is a cornerstone of SGTU’s educational philosophy.",
      ],
    },
    {
      title: "Accessibility and Inclusivity for All",
      animation: "/animations/sustainable.json",
      points: [
        "SGTU is committed to making education accessible to everyone.",
        "With a range of scholarships, financial aid options, and comprehensive student support services, we believe that financial barriers should never stand in the way of quality education.",
        "Our commitment to inclusivity ensures that every student feels valued, supported, and empowered to reach their potential.",
      ],
    },
    {
      title: "Building a Better World Through Social Responsibility",
      animation: "/animations/responsibility.json",
      points: [
        "We are dedicated to producing socially responsible graduates who are equipped to address global challenges.",
        "SGTU fosters a culture of sustainability, ethics, and community service, encouraging students to think beyond themselves and contribute to the betterment of society.",
        "Our commitment to these values creates a learning environment where students develop a profound sense of responsibility and purpose.",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-[#2f2c2c] text-white py-12 px-4 md:px-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Why SGTU</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-orange-400">Why SGTU</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[700px] h-full bg-[#FF6900] clip-diagonal z-0 opacity-90" />
      </div>

      {/* Intro */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
            Why Choose Sikkim Global Technical University (SGTU)
          </h2>
          <p className="text-gray-700 text-lg leading-7">
            Welcome to SGTU, where education transcends traditional boundaries. At our university, we’re committed to empowering students to become future-ready leaders who drive innovation, inspire change, and make meaningful contributions to society. Here, we cultivate excellence, foster a sense of community, and equip our students with the skills they need to thrive in an ever-evolving world.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      {focusAreas.map((item, index) => (
        <section
          key={index}
          className={`py-20 px-4 md:px-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Animation */}
            <div className={index % 2 !== 0 ? "md:order-2" : ""}>
              <Player
                autoplay
                loop
                src={item.animation}
                style={{ height: "300px", width: "100%" }}
              />
            </div>
            {/* Content */}
            <div className={index % 2 !== 0 ? "md:order-1" : ""}>
              <h3 className="text-2xl font-bold mb-4 text-orange-600">
                {index + 1}. {item.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 leading-7 text-justify">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Page;