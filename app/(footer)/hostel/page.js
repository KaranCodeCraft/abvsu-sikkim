"use client"; // Only needed for App Router

import Image from "next/image";

export default function HostelPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Main Introduction */}
      <section className="py-12 px-4 max-w-7xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Hostel</h2>
        <p>
          The hostel facilities at Atal Bihari Vajpayee Skill University (ABVSU) provide a supportive and comfortable living environment for students, fostering a sense of community and enhancing their overall academic experience. Recognizing that a conducive living space is essential for personal development and academic success, ABVSU has invested in modern, well-equipped hostels that cater to the diverse needs of its student population.
        </p>
      </section>

      {/* Modern Accommodation */}
      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Modern Accommodation <span className="text-orange-500">Facilities</span>
            </h3>
            <p>
              ABVSU offers a range of hostel accommodations designed to provide students with a safe, comfortable, and homely environment. The hostels are equipped with essential amenities, including well-furnished rooms, study areas, common lounges, and recreational spaces.
            </p>
            <p>
              Each room is designed for privacy and comfort with single, double, and triple occupancy options. Facilities such as 24/7 security, Wi-Fi, laundry services, and hygienic dining areas offering nutritious meals support students' well-being.
            </p>
          </div>

          {/* Image */}
          <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/Graphic/hostel.jpg"
              alt="Hostel at ABVSU"
              className="object-cover w-full h-full"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Additional Hostel Features */}
      <section className="py-12 px-4 max-w-7xl mx-auto space-y-12">
        {/* Community */}
        <div>
          <h3 className="text-2xl font-bold mb-3">
            A Supportive <span className="text-orange-500">Community</span>
          </h3>
          <p>
            Living in the hostel fosters a strong sense of community among students. The diverse mix of backgrounds promotes cultural exchange and lifelong friendships. Events such as festivals, cultural nights, and outings enrich this experience.
          </p>
        </div>

        {/* Study and Recreation */}
        <div>
          <h3 className="text-2xl font-bold mb-3">
            Study and Recreational <span className="text-orange-500">Spaces</span>
          </h3>
          <p>
            ABVSU hostels are equipped with study rooms for focused learning and collaborative areas for group projects. Recreation areas like game rooms, lounges, and outdoor spaces help students relax and maintain a balanced lifestyle.
          </p>
        </div>

        {/* 24/7 Supervision */}
        <div>
          <h3 className="text-2xl font-bold mb-3">
            24/7 Support and <span className="text-orange-500">Supervision</span>
          </h3>
          <p>
            A trained and supportive staff is available round-the-clock. Wardens and supervisors ensure safety, address student concerns, and promote a respectful and inclusive living environment.
          </p>
        </div>

        {/* Personal Growth */}
        <div>
          <h3 className="text-2xl font-bold mb-3">
            Encouraging Personal Growth and <span className="text-orange-500">Responsibility</span>
          </h3>
          <p>
            Hostel life helps students develop life skills like time management and leadership. Workshops on conflict resolution, communication, and wellness are held to foster maturity and self-reliance.
          </p>
        </div>

        {/* Extracurricular Activities */}
        <div>
          <h3 className="text-2xl font-bold mb-3">
            Extracurricular Activities and <span className="text-orange-500">Events</span>
          </h3>
          <p>
            Hostels are vibrant with cultural festivals, talent shows, sports competitions, and interactive workshops throughout the year—encouraging participation and a deep sense of belonging.
          </p>
        </div>
      </section>
    </main>
  );
}
