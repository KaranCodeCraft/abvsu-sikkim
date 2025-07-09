"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import stage from "@/public/images/Gallery/stage.jpg";
import background from "@/public/Background/bgstudentlife.jpeg";
import gallery1 from "@/public/images/Gallery/gallery-1.jpeg";
import gallery2 from "@/public/images/Gallery/gallery-7.jpg";
import gallery3 from "@/public/images/Gallery/gallery-8.jpg";

const Page = () => {
  const schools = [
    "School of Engineering and Technology",
    "School of Commerce and Management",
    "School of Vocational Studies",
    "School of Agriculture",
    "School of Library and Information Sciences",
    "School of Computer Science and IT",
    "School of Arts, Humanities & Social Sciences",
    "School of Pharmacy",
    "School of Science",
    "School of Hotel Management",
  ];

  const [hoveredSchoolIndex, setHoveredSchoolIndex] = useState(null);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white relative">
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16 z-10">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">About SGTU</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">About SGTU</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[700px] h-full bg-[#FF6900] clip-diagonal" />
      </div>

      {/* Main content */}
     <main className="relative z-10">

  {/* About SGTU Section */}
  <section className="py-16 px-4 md:px-16 bg-white">
    <div className="grid md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-600">
          About Atal Bihari Vajpayee Skill University (SGTU)
        </h2>
        <div className="space-y-5 text-gray-700 text-base leading-7 text-justify">
          <p>
            Atal Bihari Vajpayee Skill University (SGTU), established in 2023, is a premier private institution located in Namchi, the vibrant capital of South Sikkim, India. Constituted by the Sikkim State Legislature and officially recognized through its state gazette, SGTU proudly holds recognition under Section 2(f) of the UGC Act, 1956. It is also registered under the University Grants Commission (UGC) and is a proud member of the Association of Indian Universities (AIU).
          </p>
          <p>
            The foundation stone of SGTU was laid by the Hon'ble Chief Minister of Sikkim, Shri Prem Singh Tamang (Golay), marking a momentous beginning of a new era in higher education for the region.SGTU has acquired 10-acre land and is set to expand it up to 45 acres, perfectly positioned in the heart of Namchi. The university currently houses four constituent campuses, featuring a modern built-up area of approx. 75,000 sq. ft., designed to foster excellence in learning and innovation.
          </p>
         <p>
            The university is equipped with state-of-the-art laboratories supporting academic and research endeavors in Physics, Chemistry, Biology, Law, and Pharmacy etc. enabling students to gain practical and industry-relevant experience. SGTU is driven by a highly qualified academic team comprising of 600+ faculties, including regular & guest faclities offering a blend of academic rigor and industry expertise in every classroom.
          </p>
          <p>
            Our library, housing more than 5,000 volumes, is a cornerstone of our academic ecosystem, empowering students and researchers with extensive learning resources and research materials.
          </p>
          <p>
            Offering a wide range of traditional degree programs and industry-relevant vocational courses, SGTU is dedicated to meeting the demands of a rapidly evolving global economy. The university has forged strong placement partnerships with leading multinational companies(MNCs), ensuring exceptionatcareer opportunities for its graduates.
          </p>
          <p>
            Reinforcing our commitment to inclusive education and regional development, SGTU provides a 25% reservation for local Sikkimese students and faculty members, ensuring that the benefits of quality education reach the local community.
          </p>
          <p>
            SGTU is sponsored by the Indira Gandhi Computer Saksharta Mission (IGCSM), an organization established in 2008, renowned for its impactful work in skill development, digital literacy and educational innovation.
          </p>
          <p>
            The Indira Gandhi Computer Saksharta Mission (IGCSM), aims to Educate, Enable, and Empower. Operating across 21 states, IGCSM has impacted more than 3 Lakh lives by focusing on educating children, enhancing youth skills and empowering girls and young women. Individual and governmental efforts are crucial in bridging this gap for India's successful transformation. In 2023, it was awarded the responsibility of operating 3 Industrial Training Institutes (ITIs) and 5 Polytechnic Institutes across Uttar Pradesh, under the Public-Private Partnership (PPP) model, showcasing its proven excellence in the vocational education sector.
          </p>
          <p className="italic font-medium text-orange-700">
            Step into the future with SGTU — where innovation meets inspiration, and education transforms lives.
          </p>
        </div>
      </div>
      <div className="justify-center lg:space-y-16">
        <Image
          src={stage}
          alt="SGTU Campus"
          className="rounded-xl shadow-xl w-full max-w-lg object-cover"
          width={500}
        />
        <Image
          src={gallery1}
          alt="SGTU Campus"
          className="rounded-xl shadow-xl w-full max-w-lg object-cover"
          width={500}
        />
        <Image
          src={gallery2}
          alt="SGTU Campus"
          className="rounded-xl shadow-xl w-full max-w-lg object-cover"
          width={500}
        />
        <Image
          src={gallery3}
          alt="SGTU Campus"
          className="rounded-xl shadow-xl w-full max-w-lg object-cover"
          width={500}
        />
      </div>
    </div>
    <div className="max-w-7xl mx-auto space-y-5 text-gray-700 text-base leading-7 text-justify mt-6">


     {/* <p>
            SGTU has acquired 10-acre land and is set to expand it up to 45 acres, perfectly positioned in the heart of Namchi. The university currently houses four constituent campuses, featuring a modern built-up area of approx. 75,000 sq. ft., designed to foster excellence in learning and innovation.
          </p> */}
          
              </div>
  </section>

  {/* Our Schools Section (no content reduction) */}
  <section className="py-20 px-4 md:px-16 relative overflow-hidden bg-orange-50">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-20 text-orange-600">
        Our Schools
      </h2>

      <div className="relative w-full h-[600px] md:h-[660px] mx-auto">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          bg-orange-500 text-white rounded-full h-28 w-28 text-sm flex items-center justify-center shadow-lg z-10">
          <span className="font-bold text-base text-center">Our Schools</span>
        </div>

        {schools.map((school, index) => {
          const angleDeg = index * (360 / schools.length);
          const angleRad = (angleDeg * Math.PI) / 180;
          const radius = screenWidth < 768 ? 150 : 250;
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);
          const centralRadius = 65;
          const edgeOffset = 70;
          const lineStart = centralRadius + 10;
          const lineLength = Math.max(0, radius - edgeOffset - 5);

          return (
            <React.Fragment key={index}>
              <div
                className="absolute"
                style={{
                  left: "50%",
                  top: "50%",
                  width: `${lineLength}px`,
                  height: hoveredSchoolIndex === index ? "2.5px" : "1.5px",
                  backgroundColor: hoveredSchoolIndex === index ? "#FF6900" : "#e5e7eb",
                  transform: `rotate(${angleDeg}deg) translateX(${lineStart}px)`,
                  transformOrigin: "0% 50%",
                  transition: "all 0.3s ease-in-out",
                  zIndex: 5,
                }}
              />
              <div
                onMouseEnter={() => setHoveredSchoolIndex(index)}
                onMouseLeave={() => setHoveredSchoolIndex(null)}
                className={`absolute transition-all duration-300 ease-in-out text-xs font-semibold text-center px-3 py-2 z-10 cursor-default
                  ${
                    hoveredSchoolIndex === index
                      ? "bg-orange-500 text-white rounded-full scale-105 shadow-xl"
                      : "text-orange-600 bg-white border border-orange-200 rounded-md shadow"
                  }`}
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                  maxWidth: "160px",
                  whiteSpace: "normal",
                }}
              >
                {school}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  </section>

  {/* Student Life Section */}
  <section className="py-16 px-4 md:px-16 bg-[url('/Background/bgstudentlife.jpeg')] bg-cover bg-no-repeat border-t border-black/50">
    <div className="items-start max-w-7xl mx-auto">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500">
          Student Life
        </h2>
        <div className="text-black text-base leading-7 text-justify">
          <div className="space-y-4">
            <p><strong>Tranquil Surroundings:</strong> Surrounded by majestic mountains and lush greenery, our campus offers a serene environment, ideal for focused learning and personal growth.</p>
            <p><strong>Cultural Diversity:</strong> Immerse yourself in vibrant festivals, serene monasteries, and local customs, enriching your global perspective and fostering a sense of community.</p>
            <p><strong>Outdoor Adventures:</strong> Explore thrilling outdoor activities like trekking, mountaineering, and white water rafting, making the most of Sikkim's natural beauty during your free time.</p>
          </div>
          <div className="space-y-4 mt-4">
            <p><strong>Affordable Living:</strong> Enjoy the benefits of affordable living in Sikkim, making it a budget-friendly option for students seeking quality education.</p>
            <p><strong>Balanced Lifestyle:</strong> While nightlife options may be limited, our campus prioritizes a balanced lifestyle, combining academic excellence with cultural vibrancy and natural beauty.</p>
            <p><strong>Join Our Community:</strong> Become part of a vibrant community of scholars, innovators, and change-makers, shaping the future of education and society.</p>
          </div>
        </div>
        <p className="text-shadow-white text-shadow-2xl mt-8 font-medium italic">
          Welcome to Student Life at Atal Bihari Vajpayee Skill University. Your journey of learning, exploration, and growth begins here.
        </p>
      </div>
    </div>
  </section>

</main>


    </div>
  );
};

export default Page;
