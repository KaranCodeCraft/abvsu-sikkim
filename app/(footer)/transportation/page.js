"use client"; // Only for App Router

import Image from "next/image";

export default function TransportationPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Overview Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Transportation</h2>
          <p>
            Transportation plays a crucial role in the overall campus experience at Atal Bihari Vajpayee Skill University (ABVSU). The university is committed to providing efficient and reliable transportation services that ensure students and faculty can easily access the campus and its surrounding areas.
          </p>
          <p>
            This focus on transportation not only facilitates smooth commutes but also enhances the overall educational experience, promoting safety, convenience, and accessibility.
          </p>
        </div>
      </section>

      {/* Campus Shuttle Services */}
      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10 items-center">
          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Campus Shuttle <span className="text-orange-500">Services</span>
            </h3>
            <p className="mb-3">
              ABVSU operates a dedicated campus shuttle service designed to transport students between the university and key locations within the region. These shuttles are scheduled to accommodate class timings, ensuring that students can arrive on campus in a timely manner.
            </p>
            <p>
              The shuttle service is particularly beneficial for students living off-campus, as it provides a convenient and cost-effective means of transportation. The shuttles are well-maintained, equipped with comfortable seating, and adhere to safety regulations.
            </p>
          </div>

          {/* Image */}
          {/* <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/Transportation.png"
              alt="Campus Shuttle"
              className="object-cover w-full h-full"
              width={600}
              height={400}
            />
          </div> */}
        </div>
      </section>

      {/* Accessibility and Convenience */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid items-center">
          {/* Image */}
          {/* <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/Transportation-01.jpeg"
              alt="Accessibility"
              className="object-cover w-full h-full"
              width={600}
              height={400}
            />
          </div> */}

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Accessibility and <span className="text-orange-500">Convenience</span>
            </h3>
            <p className="mb-3">
              The transportation services at ABVSU are designed to cater to the diverse needs of the student body. The university ensures that transportation options are accessible to all students, including those with disabilities.
            </p>
            <p>
              Furthermore, the university is strategically located near major roads and public transport hubs, making it easy for students and staff to access the campus via public transport if preferred.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Info Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Safety and Security */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Safety and Security <span className="text-orange-500">Measures</span>
            </h3>
            <p className="mb-3">
              ABVSU places a strong emphasis on the safety and security of its students during transit. All transportation services adhere to stringent safety standards.
            </p>
            <p>
              The university also employs qualified drivers and offers communication channels for students to report any transportation-related issues.
            </p>
          </div>

          {/* Sustainable Transport */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Promoting Sustainable <span className="text-orange-500">Transportation</span>
            </h3>
            <p>
              Recognizing the importance of sustainability, ABVSU promotes eco-friendly options like cycling and carpooling. Dedicated bike lanes and secure parking are provided, encouraging greener commuting.
            </p>
          </div>

          {/* Integrated Transport */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Integrated Transportation <span className="text-orange-500">Solutions</span>
            </h3>
            <p>
              ABVSU collaborates with local transport providers to offer students discounted fares and special routes. These partnerships enhance the commuting experience for the university community.
            </p>
          </div>

          {/* Regional Connectivity */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Support for Local and <span className="text-orange-500">Regional Connectivity</span>
            </h3>
            <p>
              ABVSU supports connectivity to nearby towns and cities for internships, workshops, and recreational activities. Reliable transport options empower students to explore opportunities beyond the campus.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
