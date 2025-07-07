"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Player = dynamic(() =>
  import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

const Page = () => {
  const authorities = [
    {
      title: "The Governing Body",
      animation: "/animations/governingbody.json",
      content: [
        "The Governing Body shall be the supreme authority and principal governing body of the university. It shall have the following powers:",
        "- To provide general superintendence and directions and to control the functioning of the University",
        "- To review the decisions of other authorities of the University",
        "- To approve the budget and annual report of the University",
        "- To lay down the extensive policies to be followed by the University",
        "- To recommend to the sponsoring body the dissolution of the University if necessary",
        "- Such other powers as may be specified by the statutes",
        "",
        "The Governing Body shall meet at least 3 (three) times in a calendar year. The quorum of the meeting shall be 2/3 of the members."
      ],
    },
    {
      title: "The Board of Management",
      animation: "/animations/boardofmanagement.json",
      content: [
        "The Vice-Chancellor shall be the chairperson of the Board of Management. The powers and functions of the Board of Management shall be such as may be specified by the Statutes.",
        "",
        "The quorum for the meeting of the Board of Management shall be at least 2/3 of the members. The Secretary to the Government, Education Department, Sikkim, or in his absence, the Director of Higher Education, shall be present in each meeting where decisions on government policies or instructions are to be taken."
      ],
    },
    {
      title: "The Academic Council",
      animation: "/animations/academiccouncil.json",
      content: [
        "The Academic Council shall consist of the Vice-Chancellor and such members as may be specified by the Statutes. The Vice-Chancellor shall be the chairperson of the Academic Council.",
        "",
        "The Academic Council shall be the principal academic body of the university and shall coordinate and exercise general supervision over the academic policies of the university.",
        "",
        "The quorum for meetings of the Academic Council shall be such as may be specified by the statutes."
      ],
    },
    {
      title: "The Planning Board",
      animation: "/animations/planningboard.json",
      content: [
        "The Planning Board shall be the principal planning body of the University and shall ensure that the infrastructure and academic support system meet the norms of the University Grants Commission or the respective councils.",
        "",
        "The constitution of the Planning Board, term of office of its members, and its powers and functions shall be such as may be prescribed."
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Governing Body</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Governing Body</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Introduction */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-orange-600">Authorities of the SGTU</h2>
        <p className="text-gray-700 leading-7 mb-4">
          The Sikkim Global Technical University operates through several key authorities that govern its academic, administrative, and planning functions. These bodies work in coordination to ensure the smooth functioning and continuous development of the university.
        </p>
      </section>

      {/* Authorities Sections */}
      {authorities.map((item, index) => (
        <section key={index} className={`py-16 px-4 md:px-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <Player
                autoplay
                loop
                src={item.animation}
                style={{ height: '300px', width: '100%' }}
              />
            </div>
            <div className={`${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <h2 className="text-2xl font-bold mb-4 text-orange-600">{item.title}</h2>
              <div className="text-gray-700 space-y-2 leading-7">
                {item.content.map((point, i) => (
                  <p key={i} className={point.startsWith('-') ? 'ml-4' : ''}>
                    {point.startsWith('-') ? (
                      <span className="block pl-2">{point.substring(1)}</span>
                    ) : (
                      point
                    )}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        
      ))}

      <section className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold mb-4 text-orange-600">Other Authorities</h2>
        <p className="text-gray-700 leading-7 mb-4">
          The constitution, powers, and functions of other authorities of the university shall be such as may be prescribed.
        </p>
      </section>
    </div>
  );
};

export default Page;