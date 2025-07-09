"use client";

import { motion } from "framer-motion";

export default function AlumniAssociationPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Decorative SVG Circle Top Left */}
      <svg
        className="absolute top-[-40px] left-[-40px] w-40 h-40 text-orange-400 opacity-20"
        fill="currentColor"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>

      {/* Decorative SVG Circle Bottom Right */}
      <svg
        className="absolute bottom-[-40px] right-[-40px] w-40 h-40 text-orange-400 opacity-20"
        fill="currentColor"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <circle cx="50" cy="50" r="50" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 relative z-10"
      >
        <h2 className="text-4xl font-extrabold text-orange-500 mb-8 text-center md:text-left">
          University Alumni Association
        </h2>

        <p className="mb-6 text-gray-700 leading-relaxed text-justify">
          At The Atal Bihari Vajpayee Skill University, we recognize that our alumni
          are an invaluable part of our community and play a key role in the
          university’s continued growth and success. The University Alumni
          Association aims to keep our graduates connected, engaged, and empowered,
          offering a platform for lifelong learning, professional networking, and
          contributions to the development of future generations of students.
        </p>

        <p className="mb-6 text-gray-700 leading-relaxed text-justify">
          As a futuristic model for young India, we pride ourselves on cultivating
          a strong bond between the university and its alumni. By focusing on
          current trends and skills, we foster a culture of continuous development,
          collaboration, and innovation that extends well beyond graduation.
        </p>

        <h3 className="text-2xl font-semibold text-orange-500 mt-10 mb-4">
          Vision and Mission
        </h3>

        <p className="mb-4 text-gray-700 leading-relaxed text-justify">
          Our vision is to create a dynamic, engaged, and supportive alumni network
          that actively contributes to the university’s goals, while providing
          opportunities for personal and professional growth for all members. The
          Alumni Association exists to maintain a lifelong connection with our
          graduates, ensuring they remain an integral part of the university's
          progress.
        </p>

        <p className="mb-4 text-gray-700 leading-relaxed text-justify">
          The mission of the Alumni Association is to:
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>Foster an enduring connection between the university and its alumni.</li>
          <li>
            Provide platforms for alumni to share their expertise, experiences, and
            success stories with current students.
          </li>
          <li>
            Offer networking and career development opportunities to support alumni
            at every stage of their professional journey.
          </li>
          <li>
            Engage alumni in the university's mission of creating a technology-enabled,
            skills-driven educational environment.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-orange-500 mt-10 mb-4">Objectives</h3>

        <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
          <li>
            <strong>Create Networking Opportunities:</strong> Provide a platform for
            alumni to network with each other, industry professionals, and faculty
            members, fostering both personal and professional connections.
          </li>
          <li>
            <strong>Support Career Growth:</strong> Facilitate career advancement by
            offering alumni access to job opportunities, internships, and professional
            development programs.
          </li>
          <li>
            <strong>Give Back to the University:</strong> Enable alumni to contribute
            their time, expertise, and resources to help shape the future of the
            university, its students, and its academic programs.
          </li>
          <li>
            <strong>Promote Lifelong Learning:</strong> Offer ongoing educational
            opportunities, including webinars, workshops, and certifications, to
            help alumni stay updated on industry trends and emerging technologies.
          </li>
          <li>
            <strong>Build a Strong Community:</strong> Ensure that alumni feel a
            strong sense of belonging to the university, encouraging them to engage
            with students, faculty, and peers.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-orange-500 mt-10 mb-4">
          Alumni Services and Benefits
        </h3>

        <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-4">
          <li>
            <strong>Career Development and Placement Assistance:</strong> The Alumni
            Association works in close partnership with the university’s Training and
            Placement Cell to provide alumni with access to career counseling, job
            placement services, and exclusive job listings from industry partners.
            Alumni have the opportunity to participate in career fairs, recruitment
            drives, and industry-specific networking events hosted by the university.
          </li>
          <li>
            <strong>Professional Networking Events:</strong> Regular alumni networking
            events, seminars, and conferences are organized to connect alumni across
            different industries and professions. These events serve as a platform
            for sharing knowledge, experiences, and career opportunities. Industry
            leaders and influential alumni are invited to guest speak at these events,
            allowing for a greater exchange of insights on emerging trends,
            technologies, and career pathways.
          </li>
          <li>
            <strong>Continuous Learning and Development:</strong> Alumni are encouraged
            to participate in skill enhancement programs, including online courses,
            workshops, and webinars, tailored to meet the evolving needs of the
            industry. The university offers alumni-exclusive access to learning
            resources, certification programs, and online platforms to ensure they
            stay ahead in their professional fields.
          </li>
          <li>
            <strong>Mentorship Programs:</strong> Alumni can serve as mentors for
            current students, offering guidance on academic, career, and personal
            development. This creates a strong support system where students can
            benefit from real-world insights and advice. The mentorship program also
            allows alumni to give back to their alma mater by sharing their expertise
            and helping shape the next generation of leaders.
          </li>
          <li>
            <strong>Alumni Scholarships and Grants:</strong> The Alumni Association
            has established a fund to support scholarships and grants for deserving
            students, particularly those from economically disadvantaged backgrounds.
            Alumni contributions help make education more accessible for future
            generations of students. Alumni can also contribute to funding research
            projects, faculty development, and infrastructure improvements, helping
            the university grow and evolve.
          </li>
          <li>
            <strong>Alumni-Student Interaction:</strong> Through guest lectures,
            workshops, and industry-specific interactions, alumni can directly
            contribute to the education of current students, enriching their learning
            experiences with real-world knowledge and practical insights. Alumni are
            invited to return to campus for events, lectures, and as judges for
            university competitions, fostering a deeper sense of connection between
            past and present members of the university community.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold text-orange-500 mt-10 mb-4">
          Alumni Events and Engagement
        </h3>

        <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-4">
          <li>
            <strong>Annual Alumni Meet:</strong> The university organizes an annual
            alumni reunion, where graduates from various batches come together to
            reconnect, share experiences, and celebrate their journey. The meet also
            serves as an opportunity to reflect on the university’s progress and
            future direction. Special awards and recognition are given to
            distinguished alumni who have made significant contributions to their
            fields or to society.
          </li>
          <li>
            <strong>Regional Alumni Chapters:</strong> Regional chapters of the Alumni
            Association are set up in major cities and countries to ensure that alumni
            can stay connected with each other, regardless of where they are located.
            These chapters organize regular meetups, networking events, and seminars.
          </li>
          <li>
            <strong>Alumni-Driven Initiatives:</strong> Alumni are encouraged to
            initiate and participate in various events, research projects, and social
            impact initiatives that benefit the university community. This could
            include organizing conferences, launching alumni-led publications, or
            contributing to charitable endeavors.
          </li>
          <li>
            <strong>Online Alumni Portal:</strong> An exclusive online platform is
            available for alumni to stay connected with the university, engage in
            discussions, access resources, and track career opportunities. The portal
            also allows alumni to maintain their personal profiles, share achievements,
            and update contact information.
          </li>
        </ol>

        <h3 className="text-2xl font-semibold text-orange-500 mt-10 mb-4">
          Giving Back to the University
        </h3>

        <p className="mb-4 text-gray-700 leading-relaxed text-justify">
          The university encourages alumni to contribute in a variety of ways, whether
          through financial support, professional expertise, or time. Contributions
          help fund scholarships, support research, enhance infrastructure, and
          provide ongoing development opportunities for both students and faculty.
        </p>

        <p className="mb-8 text-gray-700 leading-relaxed text-justify">
          Alumni can choose to donate to specific university programs, projects, or
          initiatives, or they can offer their time through mentoring, guest lectures,
          and other activities that directly benefit the student community.
        </p>

        <p className="mb-8 text-gray-700 leading-relaxed text-justify">
          The Atal Bihari Vajpayee Skill University Alumni Association is designed to
          foster a lifelong connection between graduates and their alma mater. As we
          continue to build a futuristic, skills-led educational environment, the
          contributions of our alumni will play an essential role in shaping the
          university's future and enhancing the experiences of current and future
          students.
        </p>

        <p className="mb-0 text-gray-700 leading-relaxed text-justify font-semibold">
          We are proud of the success and achievements of our alumni and are committed
          to ensuring that they continue to thrive long after they graduate. Together,
          we are shaping the future of education, industry, and society.
        </p>
      </motion.div>
    </section>
  );
}
