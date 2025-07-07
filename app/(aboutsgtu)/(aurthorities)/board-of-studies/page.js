import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Board of Studies</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Board of Studies</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[110px] md:w-[700px] h-full bg-[#FF6900] clip-diagonal-mobile md:clip-diagonal" />
      </div>

      {/* Main Section */}
      <section className="py-20 px-4 md:px-16 bg-white">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
              Academic Excellence Through Innovation & Expertise
            </h2>
            <p className="text-gray-700 leading-7">
              The Board of Studies (BoS) at SGTU ensures that our curriculum
              remains industry-relevant, research-driven, and aligned with
              global⚠️ standards. Comprising distinguished academicians,
              industry experts, and faculty members, the BoS plays a pivotal
              role in shaping academic frameworks.
            </p>
            <p className="text-gray-700 leading-7">
              Each School at SGTU has a dedicated Board of Studies responsible
              for designing, reviewing, and updating syllabi to keep pace with
              the latest advancements.
            </p>
          </div>

          {/* Right: Lottie Animation */}
          <div className="md:w-1/2 flex justify-center -mt-10">
            <div className="w-full max-w-md">
              <Image
                src="/images/Graphic/study.jpg" // Replace with your actual image path
                alt="Academic Innovation"
                width={500}
                height={500}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Roles & Responsibilities */}
        <div className="w-full mt-12">
          <div className="p-6 md:p-8 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
              Role and Responsibilities of the Board of Studies
            </h3>
            <ul className="list-disc pl-5 space-y-4 text-gray-700">
              <li className="leading-7">
                <strong>Curriculum Development & Revision</strong> - Ensuring
                contemporary, practical, and industry-aligned programs.
              </li>
              <li className="leading-7">
                <strong>Approval of New Courses & Programs</strong> -
                Introducing innovative and interdisciplinary programs.
              </li>
              <li className="leading-7">
                <strong>Academic Research & Industry Collaboration</strong> -
                Encouraging research-driven education.
              </li>
              <li className="leading-7">
                <strong>Evaluation & Assessment Methods</strong> - Implementing
                modern assessment techniques.
              </li>
              <li className="leading-7">
                <strong>Faculty Development & Training</strong> - Organizing
                workshops for improved teaching methodologies.
              </li>
            </ul>
          </div>
        </div>

        {/* Schools List */}
        <div className="w-full mt-12">
          <div className="p-6 md:p-8 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
              Schools Under the Board of Studies at SGTU
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>School of Computer Science & IT</li>
              <li>School of Commerce & Management</li>
              <li>School of Arts, Humanities, and Social Sciences</li>
              <li>School of Science</li>
              <li>School of Vocational Studies</li>
              <li>School of Agriculture</li>
              <li>School of Library Science</li>
              <li>School of Hotel Management and Tourism</li>
              <li>School of Engineering and Technology</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
