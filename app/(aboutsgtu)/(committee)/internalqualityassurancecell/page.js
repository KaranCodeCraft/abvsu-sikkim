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
          <h1 className="text-3xl font-bold mb-2">Internal Quality Assurance Cell</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Internal Quality Assurance Cell</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Main Section */}
      <div className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-semibold text-orange-500 mb-5">
          <span className="text-[#2A2727]">Internal Quality</span> Assurance Cell (IQAC)
        </h2>

        {/* Mobile: Animation first */}
        <div className="md:hidden flex justify-center mb-10">
          <div className="h-50 w-80">
            <Player
              autoplay
              loop
              src="/animations/internalqualityassurancecell.json"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-start mb-6">
          {/* Left Intro Text */}
          <div className="md:col-span-2 space-y-6">
            <p>
              At The Atal Bihari Vajpayee Skill University, we are committed to maintaining the highest standards of academic excellence and continuously improving the quality of education, research, and student development. The Internal Quality Assurance Cell (IQAC) plays a crucial role in ensuring that the university's activities and programs meet the expectations of the industry, government, and academia, while fostering a culture of quality enhancement and innovation.
            </p>
            <p>
              As a futuristic institution that focuses on developing trends and skills for young India, the university places a strong emphasis on technology-enabled learning and a skills-led education. The IQAC serves as the backbone of our efforts to maintain and elevate the quality of education and institutional processes through systematic evaluation, feedback, and strategic initiatives.
            </p>
          </div>

          {/* Right Animation */}
          <div className="hidden md:flex justify-center">
            <div className="h-70 w-80 -mt-10">
              <Player
                autoplay
                loop
                src="/animations/internalqualityassurancecell.json"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="space-y-6 mb-10">
          <h3 className="text-xl font-semibold text-[#2A2727]">Vision and Mission</h3>
          <p>
            The vision of the IQAC is to create an institutional culture of continuous improvement by fostering quality education, research, and innovation. Our mission is to ensure that all academic and administrative processes are designed, implemented, and evaluated to meet global standards and are aligned with the university's vision of developing a skills-focused, technology-enabled learning environment.
          </p>
        </div>

        {/* Key Objectives */}
        <div className="space-y-6 mb-10">
          <h3 className="text-xl font-semibold text-[#2A2727]">Key Objectives</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li><span className="font-medium">Quality Enhancement:</span> Continuously improve the quality of teaching, learning, and research through strategic planning and execution of best practices in academia and administration.</li>
            <li><span className="font-medium">Academic and Administrative Monitoring:</span> Ensure regular monitoring of academic and administrative processes to guarantee efficient and effective functioning of the university.</li>
            <li><span className="font-medium">Feedback Mechanism:</span> Establish an effective feedback system involving students, faculty, alumni, and industry partners to continuously assess and improve the quality of education and campus services.</li>
            <li><span className="font-medium">Professional Development:</span> Foster the professional development of faculty members through workshops, training programs, and seminars that enhance teaching capabilities, research expertise, and technology adoption.</li>
            <li><span className="font-medium">Innovation and Research:</span> Encourage innovation in teaching, learning, and research, while ensuring that new initiatives are in line with emerging industry trends and technological advancements.</li>
            <li><span className="font-medium">Accreditation and Benchmarking:</span> Work towards achieving national and international accreditations, ensuring that the university meets or exceeds quality standards in education and administrative functions.</li>
          </ul>
        </div>

        {/* Roles and Responsibilities */}
        <div className="space-y-6 mb-10">
          <h3 className="text-xl font-semibold text-[#2A2727]">Roles and Responsibilities of IQAC</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li><span className="font-medium">Promote Quality in Teaching and Learning:</span> The IQAC ensures that the teaching-learning process is aligned with the university's goals of skills-driven education and technology-enabled learning. It works with faculty members to integrate innovative teaching methodologies, industry-oriented curriculum, and modern educational tools.</li>
            <li><span className="font-medium">Enhance Research and Development:</span> The IQAC promotes a research-driven culture and encourages faculty and students to engage in research that is both innovative and relevant to the demands of industries and society.</li>
            <li><span className="font-medium">Facilitate Accreditation and Compliance:</span> The IQAC ensures that the university adheres to the norms and guidelines set by accrediting agencies like NAAC, UGC, and AICTE.</li>
            <li><span className="font-medium">Organize Quality Audits and Reviews:</span> The IQAC conducts regular internal quality audits and reviews of various departments and processes.</li>
            <li><span className="font-medium">Data-Driven Decision Making:</span> A key function of the IQAC is to gather, analyze, and use data to drive decisions related to curriculum design, teaching effectiveness, resource allocation, and student satisfaction.</li>
            <li><span className="font-medium">Student Support and Development:</span> The IQAC actively participates in the development of student support systems, such as academic counseling, career guidance, mentorship programs, and placements.</li>
            <li><span className="font-medium">Implement Best Practices:</span> The IQAC promotes the implementation of best practices in academic administration, student engagement, teaching methods, research activities, and overall institutional functioning.</li>
          </ul>
        </div>

        {/* Key Initiatives */}
        <div className="space-y-6 mb-10">
          <h3 className="text-xl font-semibold text-[#2A2727]">Key Initiatives and Activities</h3>
          <ul className="list-disc pl-5 space-y-3">
            <li><span className="font-medium">Regular Academic Audits:</span> The IQAC conducts periodic academic audits to ensure that the curriculum is up-to-date, relevant to industry demands, and focuses on skill development.</li>
            <li><span className="font-medium">Workshops and Training Programs:</span> The IQAC organizes workshops, faculty development programs, and seminars on quality enhancement, technological innovations, teaching methodologies, and research opportunities.</li>
            <li><span className="font-medium">Student Feedback Mechanism:</span> An online and offline feedback mechanism is in place where students can provide their input on various aspects of their academic experience.</li>
            <li><span className="font-medium">Collaboration with Industry:</span> The IQAC encourages collaborations with industry leaders and experts to enhance the practical aspects of education.</li>
            <li><span className="font-medium">Quality Assurance Reports:</span> The IQAC prepares regular reports on the quality assurance activities undertaken by the university.</li>
            <li><span className="font-medium">Research and Innovation Support:</span> The IQAC provides a platform for faculty and students to showcase their research and innovation through conferences, workshops, and exhibitions.</li>
          </ul>
        </div>

        {/* Outcome and Impact */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#2A2727]">Outcome and Impact</h3>
          <p>
            By focusing on the continuous improvement of processes and practices, the IQAC helps to elevate the academic and institutional standards of The Atal Bihari Vajpayee Skill University. Key outcomes include:
          </p>
          <ul className="list-disc pl-5 space-y-3">
            <li>Enhanced learning outcomes and student satisfaction.</li>
            <li>Increased research output and academic excellence.</li>
            <li>Strong industry linkages leading to better employability for students.</li>
            <li>Improved infrastructure and resources based on real-time feedback and audits.</li>
            <li>Successful accreditation and recognition by national and international bodies.</li>
          </ul>
          <p>
            The Internal Quality Assurance Cell (IQAC) at The Atal Bihari Vajpayee Skill University plays a pivotal role in ensuring that we maintain our commitment to quality education, research, and student development. By focusing on continuous improvement, data-driven decision-making, and fostering a culture of excellence, the IQAC ensures that the university remains at the forefront of delivering futuristic, skills-oriented education in alignment with industry needs.
          </p>
          <p>
            Together with the active participation of faculty, staff, students, and industry partners, the IQAC helps in shaping a strong academic foundation and enhancing the overall learning experience at the university.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;