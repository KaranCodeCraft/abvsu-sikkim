"use client";

import Image from "next/image";

export default function ComputerLabPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Introduction Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">
          Computer <span className="text-orange-500">Lab</span>
        </h2>
        <p>
          The Computer Lab at Atal Bihari Vajpayee Skill University (SGTU) is a cornerstone of the
          institution’s commitment to providing high-quality education in technology and
          engineering. Equipped with state-of-the-art hardware and software, the lab serves as an
          essential resource for students across various disciplines, particularly in computer
          science, information technology, and engineering.
        </p>
      </section>

      {/* Facilities Section */}
      <section className="py-12 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              State-of-the-Art <span className="text-orange-500">Facilities</span>
            </h3>
            <p>
              SGTU’s Computer Lab boasts modern infrastructure, featuring high-performance
              computers equipped with the latest operating systems and software applications.
              Regular updates ensure relevance to industry standards.
            </p>
          </div>
          <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/Graphic/computer.jpg"
              alt="Computer Lab"
              className="object-cover w-full h-full"
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>

      {/* Software & Learning */}
      <section className="py-12 px-4 max-w-7xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="w-full h-72 md:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/Graphic/software.jpg"
              alt="Software Lab"
              className="object-cover w-full h-full"
              width={600}
              height={400}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">
              Diverse Software <span className="text-orange-500">Applications</span>
            </h3>
            <p>
              The lab offers a wide range of software from Python, Java, C++ to MATLAB and
              AutoCAD. Students engage in real-world projects using industry-relevant tools for
              programming, web development, cybersecurity, and more.
            </p>
          </div>
        </div>

        {[
          [
            "Hands-On Learning",
            "One of the primary objectives of the Computer Lab at SGTU is to provide a hands-on learning environment where students can apply theoretical concepts in practical scenarios. Students collaborate on projects, enhancing real-world readiness."
          ],
          [
            "Supportive Learning",
            "Experienced instructors and lab technicians assist with technical issues, tutorials, and best practices. This fosters a collaborative, student-friendly environment."
          ],
          [
            "Research and Innovation Hub",
            "The lab doubles as a research center, supporting experimentation, prototyping, and innovation. Students explore emerging technologies and build creative solutions."
          ],
          [
            "Workshops and Training Sessions",
            "SGTU hosts regular workshops led by industry experts, covering AI, cybersecurity, data science, and more, keeping students updated with current tech trends."
          ],
          [
            "Promoting Collaboration and Teamwork",
            "Group projects are central to the lab experience, preparing students for tech-industry collaboration and honing their interpersonal skills."
          ],
          [
            "Accessibility and Flexible Hours",
            "The lab is open for extended hours to support diverse schedules and promote self-paced learning and development."
          ]
        ].map(([title, desc]) => (
          <div key={title}>
            <h3 className="text-2xl font-bold mb-3">
              {title} <span className="text-orange-500">{title.includes(" ") && title.split(" ")[1]}</span>
            </h3>
            <p>{desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
