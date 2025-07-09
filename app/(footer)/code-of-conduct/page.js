import React from "react";

export default function CodeOfConductPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="px-4 md:px-10 lg:px-20 py-12 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500 border-b pb-2">
            University Code of Conduct
          </h1>

          <p>
            At <strong>Atal Bihari Vajpayee Skill University</strong>, we strive to create an environment
            that promotes excellence, integrity, and respect. As an institution committed to developing
            the leaders of tomorrow, we emphasize a code of conduct that fosters a culture of
            responsibility, ethical behavior, and mutual respect among students, faculty, staff, and all
            members of our academic community.
          </p>

          <p>
            As a futuristic model for young India, we focus on developing the skills, knowledge, and
            values that will help our students excel in their personal and professional lives.
          </p>

          <h2 className="text-2xl font-semibold text-orange-500 mt-10">Core Principles of Conduct</h2>

          {[
            {
              title: "1. Integrity and Honesty",
              content: [
                "Students and staff are expected to uphold the highest standards of integrity in all their academic, professional, and personal endeavors.",
                "Academic dishonesty, including cheating, plagiarism, and falsification of records, will not be tolerated.",
              ],
            },
            {
              title: "2. Respect for Individuals and Diversity",
              content: [
                "We value a diverse and inclusive community. Discrimination, harassment, bullying, or any behavior that undermines the dignity of others is strictly prohibited.",
                "Everyone should treat each other with courtesy, respect, and empathy.",
              ],
            },
            {
              title: "3. Professionalism and Responsibility",
              content: [
                "Maintain professionalism in academics and activities. Follow deadlines and contribute positively.",
                "Misuse or unauthorized use of university resources is strictly prohibited.",
              ],
            },
            {
              title: "4. Academic Excellence and Innovation",
              content: [
                "We encourage critical thinking, innovation, and continuous improvement.",
                "Students should adhere to academic guidelines and ethical research practices.",
              ],
            },
            {
              title: "5. Technology Ethics and Use",
              content: [
                "Use university technology responsibly. Do not engage in hacking, cyberbullying, or illegal online behavior.",
                "Respect intellectual property and protect digital privacy.",
              ],
            },
            {
              title: "6. Health, Safety, and Well-being",
              content: [
                "Comply with health and safety regulations.",
                "Promote mental and physical well-being; seek help when needed.",
              ],
            },
            {
              title: "7. Environmental Responsibility",
              content: [
                "Engage in sustainable practices—reduce waste and conserve resources.",
                "Support university-led environmental programs.",
              ],
            },
            {
              title: "8. Social Responsibility and Ethical Conduct",
              content: [
                "Participate in community service and social impact initiatives.",
                "Engaging in illegal or unethical activities is unacceptable.",
              ],
            },
          ].map((item, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-orange-500 mt-6">{item.title}</h3>
              {item.content.map((point, i) => (
                <p key={i} className="mt-2 text-gray-700 leading-relaxed">
                  {point}
                </p>
              ))}
            </div>
          ))}

          <h2 className="text-2xl font-semibold text-orange-500 mt-10">
            Consequences of Violating the Code of Conduct
          </h2>
          <p>
            Violations of the university’s code of conduct may result in disciplinary actions including
            warnings, suspension, or expulsion, depending on the severity of the infraction. All issues are
            handled fairly, transparently, and with due process.
          </p>

          <p>
            The Code of Conduct helps build a university culture of collaboration, creativity, and respect—
            essential for preparing students for a successful global future.
          </p>

          <p>
            We trust that all members will contribute to a safe, inclusive, and positive environment where
            knowledge and personal growth can flourish.
          </p>

          <p className="pt-6 font-medium">
            <strong>Sincerely,</strong>
            <br />
            The Atal Bihari Vajpayee Skill University
          </p>
        </div>
      </section>
    </main>
  );
}
