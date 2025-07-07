import Link from "next/link";
import img1 from "@/public/images/Gallery/about/vision.png" 
import img2 from "@/public/images/Gallery/about/mission.png" 
import img3 from "@/public/images/Gallery/about/value.png" 
import Image from "next/image";

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Vision & Mission</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Vision & Mission</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[700px] h-full bg-[#FF6900] clip-diagonal" />
      </div>

      {/* Section: Vision */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image src={img1} alt="Vision" className="rounded-lg shadow-md" width={600} height={400} />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-orange-600">Vision</h2>
            <p className="text-gray-700 leading-7">
              We envision ourselves as a global leader in higher education, renowned for cultivating
              intellectual curiosity, academic rigor, and a lifelong passion for learning. Our university aims to be
              a transformative institution, where innovation, critical thinking, and excellence are the cornerstones
              of an enriching academic environment.
            </p>
            <p className="text-gray-700 mt-4 leading-7">
              As a beacon of academic distinction, we strive to attract and nurture a diverse community of scholars,
              educators, and learners from around the world, fostering a culture of inclusivity, collaboration, and
              discovery.
            </p>
            <p className="text-gray-700 mt-4 leading-7">
              We aspire to empower our students with the skills, knowledge, and mindset necessary to become
              influential leaders, compassionate global citizens, and innovative problem-solvers.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Mission */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="md:order-2">
            <Image src={img2} alt="Mission" className="rounded-lg shadow-md" width={600} height={400} />
          </div>
          <div className="md:order-1">
            <h2 className="text-3xl font-bold mb-4 text-orange-600">Mission</h2>
            <p className="text-gray-700 leading-7">
              At our university, we are driven by a transformative spirit, dedicated to reshaping the future of
              education through innovation and forward-thinking methodologies. Our mission is to revolutionize
              traditional learning paradigms, fostering an environment where curiosity, creativity, and cutting-edge
              knowledge converge.
            </p>
            <p className="text-gray-700 mt-4 leading-7">
              We exist to empower our students by equipping them with the tools, skills, and mindset necessary to
              excel in an increasingly complex and interconnected world.
            </p>
            <p className="text-gray-700 mt-4 leading-7">
              Our unwavering commitment to academic excellence is reflected in our continuous pursuit of the highest
              standards of education.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Values */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image src={img3} alt="Values" className="rounded-lg shadow-md" width={600} height={400} />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-orange-600">Values</h2>
            <p className="text-gray-700 leading-7">
              We embrace the principles of constant evolution and continuous improvement, fostering a culture where
              creativity and out-of-the-box thinking are celebrated. Innovation lies at the heart of our institution.
            </p>
            <p className="text-gray-700 mt-4 leading-7">
              We are committed to instilling a passion for lifelong learning, recognizing that education does not end
              within the confines of a classroom. Our belief in “Karma Sarvopari” (Action is Supreme) reflects our
              ethos of perseverance, dedication, and self-growth.
            </p>
            <p className="text-gray-700 mt-4 leading-7">
              We cultivate a learning environment that values diversity and inclusivity, preparing students to thrive
              in a globalized world through intercultural understanding and empathy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;