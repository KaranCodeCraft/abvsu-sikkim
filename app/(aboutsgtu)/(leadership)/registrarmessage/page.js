"use client";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Registrar Message</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Registrar Message</span>
          </div>
        </div>
        {/* Orange diagonal shape */}
        <div className="absolute top-0 right-0 w-[700px] h-full bg-[#FF6900] clip-diagonal" />
      </div>

      {/* Main Section */}
      <div className="py-20 px-4 md:px-16">
        <div className="grid md:grid-cols-3 gap-10 items-start mb-12">
          {/* Left Intro Text */}
          <div className="md:col-span-3 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              "Wisdom and action together have the power to change the world."
            </h2>

            <p>
              I am delighted to extend my warmest greetings to all of you as the
              Registrar of Atal Bihari Vajpayee Skill University (SGTU). It is an
              honour to be a part of this esteemed University, and I am
              committed to ensuring that our university becomes a beacon of
              knowledge, innovation, and excellence.
            </p>

            <p>
              As the Registrar, my primary focus is to facilitate and enhance
              the academic experience for all members of the SGTU family. Our
              university is dedicated to providing a nurturing and stimulating
              environment that fosters holistic development and empowers
              students to become future-ready professionals.
            </p>
          </div>

          {/* Right Image */}
          {/* <div className="flex justify-center">
            <div className="w-64 h-64 bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/avtar.png" // Replace this with actual image
                alt="Vice Chancellor"
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          </div> */}
        </div>

        {/* Full Width Section */}
        <div className="space-y-6">
          <p>
            To all the students, I extend a heartfelt welcome. Your journey at
            Atal Bihari Vajpayee Skill University is a transformative one, where
            you will acquire not just knowledge but also skills and values that
            will shape your personal and professional lives. I encourage you to
            make the most of the opportunities that come your way, engage in
            extracurricular activities, and actively participate in research and
            innovation initiatives.
          </p>

          <p>
            Our esteemed faculty members are the pillars of academic excellence
            at SGTU. I express my gratitude for your tireless dedication to
            imparting quality education and mentoring our students. Your
            expertise and guidance are invaluable in shaping the minds of the
            future leaders and innovators of our society.
          </p>

          <p>
            To our committed staff members, I extend my appreciation for your
            efforts in ensuring the smooth functioning of the university. Your
            support and administrative expertise play a crucial role in creating
            a conducive learning environment for all.
          </p>

          <p>
            SGTU is committed to promoting research and innovation. As the
            Registrar, I will work closely with the academic departments and
            research centers to encourage interdisciplinary research,
            collaborations, and partnerships with industries and organizations.
          </p>

          <p>
            We are dedicated to maintaining transparency, accountability, and
            efficiency in all administrative processes. My office will always be
            open to address your queries and concerns and provide timely
            assistance to students, faculty, and staff.
          </p>

          <p>
            As we embark on this exciting journey, let us embrace the values of
            integrity, ethics, and social responsibility. Let us work together
            to create a harmonious and inclusive campus community that
            celebrates diversity and fosters a sense of belonging.
          </p>

          <p>
            I am confident that with the collective efforts of all stakeholders,
            Atal Bihari Vajpayee Skill University will emerge as a hub of
            excellence in technical education and research.
          </p>

          <p>
            I extend my best wishes to all of you for a successful and
            fulfilling academic year ahead. Together, let us make Sikkim Global
            Technical University a place where dreams are nurtured and
            potentials are realized.
          </p>

          <div className="pt-8 font-semibold leading-relaxed">
            <p>With warm regards,</p>
            <p>Mr. Sanjeev Kumar</p>
            <p>registrar@sgtu.ac.in</p>
            <p>Registrar</p>
            <p>Atal Bihari Vajpayee Skill University</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
