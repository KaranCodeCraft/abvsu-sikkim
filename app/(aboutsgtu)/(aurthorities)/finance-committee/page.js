"use client";
import Link from "next/link";
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">The Finance Committee</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">The Finance Committee</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Main Section */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left: Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
              Finance Committee – ABVSU Ensuring Financial Sustainability & Growth
            </h2>
            <p className="text-gray-700 leading-7">
              The Finance Committee of Atal Bihari Vajpayee Skill University (ABVSU) plays a crucial role in overseeing the financial planning, budgeting, and resource allocation to ensure the university's long-term sustainability and growth. The committee is responsible for maintaining fiscal discipline, financial transparency, and accountability while supporting the institution's vision of providing world-class education and research opportunities.
            </p>

            <p className="text-gray-700 leading-7">
              The Finance Committee collaborates with the Board of Governors, Academic Council, and Administrative Departments to maintain fiscal discipline while advancing the university's mission of delivering world-class education and contributing to global knowledge development.
            </p>

            <p className="text-gray-700 leading-7">
              With a commitment to financial integrity and excellence, ABVSU continues to invest in state-of-the-art infrastructure, cutting-edge research, and student-centric initiatives, ensuring a sustainable and thriving academic environment.
            </p>
          </div>

          {/* Right: Lottie Animation */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md">
              <Player
                autoplay
                loop
                src="/animations/thefinancecommittee.json"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </div>

        {/* Full Width Roles & Responsibilities Section */}
        <div className="w-full mt-12">
          <div className="p-6 md:p-8 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">Roles & Responsibilities</h3>
            <ul className="list-decimal pl-5 space-y-4 text-gray-700">
              <li className="leading-7"><strong>Budget Preparation & Approval</strong> - Formulating the university's annual budget, ensuring optimal allocation of resources.</li>
              <li className="leading-7"><strong>Financial Planning & Policy Implementation</strong> - Establishing policies for financial management and long-term sustainability.</li>
              <li className="leading-7"><strong>Expenditure Monitoring & Control</strong> - Overseeing financial transactions and ensuring cost-effectiveness.</li>
              <li className="leading-7"><strong>Revenue Generation & Resource Mobilization</strong> - Exploring funding opportunities, grants, and collaborations for financial stability.</li>
              <li className="leading-7"><strong>Scholarship & Financial Aid Oversight</strong> - Allocating funds for student scholarships, fellowships, and research grants.</li>
              <li className="leading-7"><strong>Compliance & Audit</strong> - Ensuring adherence to financial regulations and conducting periodic audits.</li>
            </ul>
          </div>
        </div>

        {/* Rest of the content in original layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-12">
          <div className="md:w-1/2 space-y-6">
            {/* Structure of the Finance Committee */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Structure of the Finance Committee</h3>
              <div className="p-4 rounded-lg">
                <p className="font-semibold text-gray-800">Chairperson</p>
                <p className="text-gray-700">The Vice-Chancellor or a designated authority responsible for financial oversight.</p>
                
                <div className="mt-4 flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  
                  <div className="mt-2 w-full">
                    <h4 className="font-semibold text-gray-800 text-center">Support Team</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Financial planning & execution</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Ensuring academic financial support</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Providing insights into financial best practices</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Compliance with financial laws</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Policies & Regulations */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">Financial Policies & Regulations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">Transparent & Accountable Financial Management</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">Adherence to UGC, AICTE & Government Guidelines</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">Ethical Investment & Expenditure Policies</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">Regular Audits & Compliance Checks</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                  <p className="text-gray-700 font-medium">Sustainable Financial Strategies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Empty div to maintain layout balance */}
          <div className="md:w-1/2"></div>
        </div>
      </section>
    </div>
  );
};

export default Page;