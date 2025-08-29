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
          <h1 className="text-3xl font-bold mb-2">Women Sexual Harassment Committee</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Women Sexual Harassment Committee</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Main Section */}
      <div className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-semibold text-orange-500 mb-5">
          <span className="text-[#2A2727]">Women Sexual Harassment</span> Committee
        </h2>

        {/* Mobile Animation */}
        <div className="md:hidden flex justify-center mb-10">
          <div className="h-50 w-80">
            <Player
              autoplay
              loop
              src="/animations/women.json"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10 items-start mb-6">
          {/* Text Content */}
          <div className="md:col-span-2 space-y-6">
            <p>
              The Women Sexual Harassment Committee at Atal Bihari Vajpayee Skill University (ABVSU) is established to create a safe and supportive environment for all female students, faculty, and staff. The committee is committed to preventing and addressing incidents of sexual harassment and ensuring that the university upholds the dignity and rights of every individual. By fostering a culture of respect and equality, the committee plays a vital role in empowering women within the academic community.
            </p>
            <p>
              One of the primary objectives of the committee is to raise awareness about sexual harassment and educate the university community about its implications. Through workshops, seminars, and awareness campaigns, the committee aims to inform students and staff about what constitutes sexual harassment, the laws surrounding it, and the importance of reporting such incidents. This proactive approach helps to create an informed and vigilant community that can effectively recognize and respond to harassment.
            </p>
            <p>
              The Women Sexual Harassment Committee also provides a platform for victims to report incidents in a confidential and supportive manner. The committee has established clear procedures for reporting and addressing complaints, ensuring that individuals feel safe and supported throughout the process. Trained members of the committee are available to listen, provide guidance, and offer necessary support to those who come forward with their experiences.
            </p>
          </div>

          {/* Desktop Animation */}
          <div className="hidden md:flex justify-center">
            <div className="h-70 w-180">
              <Player
                autoplay
                loop
                src="/animations/women.json"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Extra Content */}
        <div className="space-y-6">
          <p>
            Furthermore, the committee collaborates with various university departments to develop and implement policies aimed at preventing sexual harassment. This includes formulating guidelines for behavior, enhancing campus safety measures, and establishing protocols for handling complaints effectively. By working closely with the administration, the committee strives to create a comprehensive framework that promotes a culture of respect and accountability.
          </p>
          <p>
            In addition to addressing incidents of harassment, the committee actively promotes women’s empowerment and gender equality within the university. By organizing events, workshops, and discussions focused on women’s rights, self-defense, and leadership skills, the committee seeks to inspire female students to stand up for themselves and advocate for their rights.
          </p>
          <p>
            The Women Sexual Harassment Committee at ABVSU recognizes the importance of creating a supportive network for women on campus. The committee encourages collaboration with local NGOs, legal aid organizations, and women’s rights groups to provide additional resources and support for victims. By fostering these partnerships, the committee aims to enhance the support system available to women and ensure they have access to the help they need.
          </p>
          <p>
            Overall, the Women Sexual Harassment Committee at ABVSU is dedicated to creating a safe, respectful, and empowering environment for all women in the university community. By addressing issues of sexual harassment, promoting awareness, and advocating for women’s rights, the committee plays a crucial role in fostering a culture of safety, respect, and equality within the campus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;