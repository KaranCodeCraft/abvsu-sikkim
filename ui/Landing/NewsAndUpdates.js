import Image from "next/image";
import React from "react";
import gallery1 from "@/public/images/Gallery/gallery-1.jpeg";
import news1 from "@/public/images/News/news1.jpeg";
import news2 from "@/public/images/News/news2.jpg";
import news3 from "@/public/images/News/news3.jpeg";
import news4 from "@/public/images/News/news4.jpg";
import news5 from "@/public/images/News/news5.jpeg";

const NewsAndUpdates = () => {
  const newsLeft = [
    {
      img: news1,
      text: "Hon. Chancellor Dr. Saurabh Singhal met Hon. Education Minister Shri. Raju Basant and shared the vision for the University's progressive journey",
    },
    {
      img: news2,
      text: "Hon. Chancellor Dr. Saurabh Singhal along with the Pro-chancellor Dr. Ankur Johari briefed the Hon. Chief Minister on ABVSU's recent developments at its Pakyong campus including the launch of D.Pharm and B.Pharm programs, along with strategic preparedness for upcoming Nursing and Law courses.",
    },
  ];
  const newsRight = [
    {
      img: news3,
      text: "ABVSU's Chancellor and Pro-Chancellor met Hon. Governor of Sikkim Shri Om Prakash Mathur and briefed about the new developments such as industry collaborations to bring employment opportunities in the State.",
    },
    {
      img: news4,
      text: "Article of Dr. Asif Javed, Asst. Professor (ABVSU) over - Wellness and Spirituality in the Himalayas - published in Himalayan Tourism - ISSN: 30491223 (Online) ",
    },
  ];
  return (
    <div className="px-4 md:px-12 lg:px-24 py-8">
      <div className="heading mb-4 font-bold text-3xl md:text-4xl lg:text-4xl font-serif text-center md:text-left">
        News and Updates
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
        {/* Left Column */}
        {/* <div className="space-y-8">
          {newsRight.map((item, i) => (
            <div key={`left-${i}`} className="space-y-4">
              <Image
                src={item.img}
                alt="ABVSU Gallery"
                className="w-full h-auto rounded"
              />
              <p className="bg-[#555]/10 p-4 font-thin text-justify text-gray-600 tracking-tight text-sm md:text-base">
                {item.text}
              </p>
            </div>
          ))}
        </div> */}

        {/* Center Column (Span 2 on large) */}
        <div className="space-y-6 lg:col-span-2 flex gap-4">
          <Image
            src={"/images/Events/ribbon.jpg"}
            alt="ABVSU Gallery"
            className="w-1/2 h-auto rounded"
            width={600}
            height={400}
          />

          <p className="bg-[#555]/10 p-4 px-12  font-thin text-justify text-gray-600 tracking-tight text-sm md:text-base/loose mb-6 flex justify-center flex-col">
            <span className="font-bold text-xl text-black block my-12">
              Establishment of Atal Bihari Vajpayee Skill University in Sikkim
            </span>
            The Atal Bihari Vajpayee Skill University was established to promote
            skill development and vocational training in Sikkim. It aims to
            empower the youth with the necessary skills to excel in various
            industries and contribute to the state's economic growth.
          </p>
        </div>

        {/* Right Column */}
        {/* <div className="space-y-8">
          {newsLeft.map((_, i) => (
            <div key={`right-${i}`}>
              <Image
                src={_.img}
                alt="ABVSU Gallery"
                className="w-full h-auto rounded"
              />
              {_.text && (
                <p className="bg-[#555]/10 p-4 font-thin text-justify text-gray-600 tracking-tight text-sm md:text-base">
                  {_.text}
                </p>
              )}
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default NewsAndUpdates;
