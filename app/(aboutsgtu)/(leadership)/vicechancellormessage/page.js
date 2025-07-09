"use client";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Vice Chancellor's Message</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Vice Chancellor's Message</span>
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
              "Learning is the key that unlocks the door to changing the world."{" "}
              <span className="text-orange-500">
                – Dr. (Prof.) Swami Prasad Sinha
              </span>
            </h2>

            <p>
              I am thrilled and honoured to extend my heartfelt greetings as the
              Vice-Chancellor of Atal Bihari Vajpayee Skill University (SGTU). As
              we embark on this exciting journey of knowledge, innovation, and
              growth, I am filled with a profound sense of responsibility and
              enthusiasm.
            </p>

            <p>
              SGTU represents a new dawn in the realm of technical education,
              and I am humbled to be a part of this esteemed institution. Our
              university’s foundation rests on the principles of academic
              excellence, research prowess, and a commitment to nurturing
              well-rounded individuals who will shape the future.
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
            To all our students, I offer my warmest welcome. Your presence on
            our campus adds vibrancy and diversity to our academic community. I
            urge you to be passionate about your studies, embrace curiosity, and
            challenge conventional boundaries. At Sikkim Global Technical
            University, we aim to empower you with the knowledge, skills, and
            values that will enable you to make meaningful contributions to
            society.
          </p>

          <p>
            To our distinguished faculty members, I express my deep appreciation
            for your dedication and expertise. Your guidance and mentorship are
            crucial in shaping the next generation of thought leaders and
            innovators. Let us collectively inspire a love for learning, instill
            a spirit of inquiry, and foster an environment of collaboration and
            inclusivity.
          </p>

          <p>
            Our staff members form the backbone of the university, ensuring that
            our administrative and support systems function smoothly. I extend
            my gratitude for your tireless efforts and commitment to creating a
            conducive environment for all stakeholders. SGTU will be a hub of
            research and innovation, fostering a culture that encourages
            original thinking and problem-solving. We will collaborate with
            industries and research institutions to provide our students with
            hands-on experience and exposure to real-world challenges.
          </p>

          <p>
            In our pursuit of academic excellence, we shall remain steadfast in
            upholding ethical principles and values. Integrity, honesty, and
            accountability will be the pillars upon which our university stands
            tall.
          </p>

          <p>
            As Vice-Chancellor, my vision is to see Sikkim Global Technical
            University as a beacon of learning, transforming lives and
            contributing positively to society. I am committed to creating an
            environment that nurtures creativity, empowers dreams, and provides
            the tools for success. Together, let us write a story of growth,
            innovation, and impact. Let us embrace diversity and work
            collaboratively to build a brighter future for our students and the
            community at large.
          </p>

          <p>
            I am excited to witness the journey of each one of you as you unfold
            your potential and chase your dreams at Sikkim Global Technical
            University.
          </p>

          <p>Wishing you all a rewarding and enriching academic year!</p>

          <div className="pt-8 font-semibold leading-relaxed">
            <p>With warm regards,</p>
            <p>Dr. (Prof.) Swami Prasad Sinha</p>
            <p>Vice-Chancellor</p>
            <p>vc@sgtu.ac.in</p>
            <p>Atal Bihari Vajpayee Skill University</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Page;
