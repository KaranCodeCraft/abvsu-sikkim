import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";


const Page = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Banner */}
      <section className="relative bg-gradient-to-br from-[#1e1c1c] to-[#2f2c2c] text-white py-14 px-4 md:px-16 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Our Inspiration</h1>
          <div className="text-sm font-medium text-white/90 flex items-center space-x-2">
            <Link href="/" className="hover:text-orange-400 transition duration-200">
              Home
            </Link>
            <span>/</span>
            <span className="text-orange-400">Our Inspiration</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-full bg-orange-500 clip-diagonal z-0 opacity-90" />
      </section>

      {/* Inspiration Content */}
      <section className="py-20 px-4 md:px-16 bg-white text-justify">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 align-top">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
              Our Inspiration
            </h2>

            <div className="space-y-5 text-base leading-7 text-gray-700">
              <p>
                At <strong>ABVSU</strong>, our journey is inspired by India's rich cultural heritage, holistic values, and a collective vision for empowering individuals through education. Rooted in the belief that education is both a universal right and a pathway to societal transformation.
              </p>
              <p>
                The spirit of India, with its diversity, resilience, and commitment to harmony, profoundly influences our mission at ABVSU. Sikkim, in particular, stands as an emblem of natural beauty and cultural heritage.
              </p>
              <p>
                Another core inspiration for ABVSU is the innovative spirit that defines modern India. As the world moves forward with advancements in science, technology, and research, ABVSU aims to stay at the forefront of change.
              </p>
             <p>
                Our esteemed founder, <strong>Dr. Saurabh Singhal</strong>, further fuels our inspiration. With over 15 years of dedication to skill development and a lifelong passion for education, his vision guides every step we take.
              </p>
            </div>
          </div>

          {/* Lottie Animation */}
          <div className="flex align-top">
            <div className="rounded-lg overflow-hidden">
             <Image src="/images/Gallery/inspiration.jpeg" width={1200} height={1000} alt="Inspiration Post" />
            </div>
          </div>
       
        </div>
           <div className="max-w-7xl mx-auto mt-6 space-y-4">
             
              <p>
                Above all, we are inspired by our students, who embody the aspirations and dreams of a nation looking toward a brighter future.
              
                At ABVSU, our inspiration is as vast and multifaceted as India itself. Drawn from the country's rich cultural heritage, innovative spirit, and our students' dreams, we continue to evolve with purpose.
              </p>

              <Link
                href="/aboutABVSU"
                className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:underline transition"
              >
                Learn More About ABVSU
                <ArrowRight size={16} />
              </Link>
          </div>
      </section>
    </div>
  );
};

export default Page;
