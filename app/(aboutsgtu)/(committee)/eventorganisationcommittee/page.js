import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">
            Event Organisation Committee
          </h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Event Organisation Committee</span>
          </div>
        </div>
        {/* Orange diagonal shape */}
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Main Section */}
      <div className="py-20 px-4 md:px-16">
        <div className="grid  gap-10 items-start mb-12">
          {/* Left Intro Text */}
          <div className=" space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Event Organisation{" "}
              <span className="text-[#FF6900]">Committee</span>
            </h2>

            <p>
              The Event Organisation Committee at Atal Bihari Vajpayee Skill
              University (ABVSU) plays a pivotal role in coordinating and
              executing a variety of events and activities that foster learning,
              engagement, and unity within the university community. Comprising
              faculty members, student representatives, and administrative
              staff, this committee works collaboratively to ensure that each
              event is successful, impactful, and aligned with the university's
              goals and values.
            </p>

            <p>
              The committee is responsible for a broad spectrum of events,
              including academic conferences, workshops, festivals, cultural
              nights, and seminars. Each event is meticulously planned, starting
              from ideation, budget allocation, logistics, marketing, to
              execution. The Event Organisation Committee prioritizes strategic
              planning and detail-oriented management to ensure every event's
              smooth functioning.
            </p>
          </div>

          {/* Right Animation */}
          {/* <div className="flex justify-center -ml-37">
            <div className="w-64 h-64">
              <Player
                autoplay
                loop
                src="/animations/event.json"
                style={{ height: "300px", width: "400px" }} // Increase these values as needed
              />
            </div>
          </div> */}
        </div>

        {/* Full Width Section */}
        <div className="space-y-6">
          <p>
            By fostering an inclusive environment, the committee ensures that
            these events cater to a diverse audience, respecting various
            cultural backgrounds, academic interests, and social inclinations.
          </p>

          <p>
            One of the key goals of the committee is to provide a platform for
            students to enhance their skills and network with peers, industry
            leaders, and academicians. In organizing academic and
            extracurricular activities, the committee encourages student
            participation and hands-on involvement, which cultivates leadership,
            communication, and organizational skills.
          </p>

          <p>
            In addition to providing opportunities for personal and professional
            development, the Event Organisation Committee promotes the spirit of
            teamwork and unity among students and staff. Events such as cultural
            fests and sports meets are organized to celebrate diversity and
            foster community spirit.
          </p>

          <p>
            The committee also focuses on innovative and sustainable practices
            while organizing events. Whether it's reducing waste, managing
            resources effectively, or encouraging eco-friendly practices,
            sustainability is a core consideration in the planning process.
          </p>

          <p>
            Overall, the Event Organisation Committee at ABVSU is committed to
            creating memorable, enriching, and impactful events that contribute
            to the holistic development of the university's community. Their
            dedication ensures that each event not only aligns with the mission
            and vision of the university but also enhances the overall student
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
