import React from "react";

export default function CareerPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="max-w-7xl mx-auto px-4 py-12 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Join Our Team and Shape the Future of Education
          </h2>
          <p className="mb-4">
            At ABVSU, we are committed to excellence in education, research, and
            innovation. We believe in fostering a dynamic and inclusive work
            environment where talent thrives, ideas flourish, and careers grow.
          </p>
          <p>
            We take pride in nurturing a culture that values creativity,
            collaboration, and continuous learning. Our faculty, researchers, and
            staff work together to push the boundaries of knowledge and
            contribute to the holistic development of students.
          </p>
        </div>
        
      </section>

      {/* Why Work With Us */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-center text-orange-500 mb-10">
          Why Work With Us?
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Innovative Work Environment",
              icon: "💡",
              desc: "Engage in cutting-edge research and academic excellence.",
            },
            {
              title: "Career Growth & Development",
              icon: "📈",
              desc:
                "Continuous learning through training, workshops, and skill development programs.",
            },
            {
              title: "Competitive Benefits",
              icon: "💰",
              desc:
                "Attractive salary packages, performance incentives, and comprehensive benefits.",
            },
            {
              title: "Work-Life Balance",
              icon: "⚖️",
              desc:
                "A supportive and flexible work environment to maintain a healthy balance.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow bg-gray-50 flex items-start space-x-4"
            >
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Openings */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-orange-500 mb-4">Current Openings</h2>
        <p className="text-lg mb-8">
          We are looking for dedicated professionals in the following areas:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Academic Positions",
              icon: "🎓",
              desc: "Join our faculty and contribute to academic excellence.",
              color: "bg-blue-100",
            },
            {
              title: "Administrative & Support Roles",
              icon: "🧑‍💼",
              desc: "Play a key role in the smooth functioning of the university.",
              color: "bg-green-100",
            },
            {
              title: "Internships & Fellowships",
              icon: "📚",
              desc:
                "Gain real-world experience in education and research.",
              color: "bg-yellow-100",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`rounded-lg shadow p-6 text-center ${item.color}`}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-bold mb-2">{item.title}</h4>
              <p className="mb-4">{item.desc}</p>
              <a
                href="#apply"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
        <p className="text-lg mt-6">
          We offer exciting opportunities for fresh graduates and postgraduates
          to gain real-world experience.
        </p>
      </section>

      {/* How to Apply */}
      <section
        id="apply"
        className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-200"
      >
        <h2 className="text-3xl font-bold text-orange-500 mb-4">How to Apply?</h2>
        <p className="text-lg mb-8">
          Join ABVSU and be a part of a prestigious institution shaping the
          leaders of tomorrow.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg bg-yellow-50 text-center">
            <div className="text-4xl mb-2">📧</div>
            <h5 className="text-xl font-semibold mb-2">Email Your Resume</h5>
            <p>Send your CV to our HR team.</p>
            <a
              href="mailto:hr@ABVSU.ac.in"
              className="inline-block mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              hr@ABVSU.ac.in
            </a>
          </div>

          <div className="p-6 border rounded-lg bg-green-50 text-center">
            <div className="text-4xl mb-2">🌐</div>
            <h5 className="text-xl font-semibold mb-2">Visit Our Careers Portal</h5>
            <p>Explore job openings on our website.</p>
            <a
              href="https://www.ABVSU.ac.in/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Visit Portal
            </a>
          </div>
        </div>

        <div className="text-center mt-10 text-lg font-medium">
          📍 Location: Namchi, Sikkim, India
        </div>
      </section>
    </main>
  );
}
