import { ShieldCheckIcon, UsersIcon, ExclamationTriangleIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

const points = [
  {
    title: "Comprehensive Security Measures",
    subtitle: "SGTU employs a multi-faceted approach to security that includes:",
    icon: ShieldCheckIcon,
    items: [
      {
        label: "24/7 Surveillance",
        description: "CCTV cameras are strategically installed across campus for round-the-clock monitoring.",
      },
      {
        label: "Security Personnel",
        description: "A trained team of guards ensures campus safety and immediate response to incidents.",
      },
      {
        label: "Access Control",
        description: "Restricted areas are monitored, and students must carry ID at all times.",
      },
      {
        label: "Emergency Protocols",
        description: "Preparedness for fire, medical, and natural emergencies is ensured through drills and systems.",
      },
    ],
  },
  {
    title: "Promoting Discipline and Respect",
    subtitle: "SGTU emphasizes discipline through structured guidelines and a culture of respect:",
    icon: UsersIcon,
    items: [
      {
        label: "Code of Conduct",
        description: "A defined behavioral code promotes integrity, responsibility, and mutual respect.",
      },
      {
        label: "Regular Workshops",
        description: "Sessions on ethics and inclusivity foster student understanding and cooperation.",
      },
      {
        label: "Conflict Resolution",
        description: "Open dialogue and mediation help students resolve disputes constructively.",
      },
    ],
  },
  {
    title: "Encouraging Responsible Behavior",
    subtitle: "Initiatives that empower students to act responsibly:",
    icon: ExclamationTriangleIcon,
    items: [
      {
        label: "Awareness Campaigns",
        description: "Focused on anti-bullying, substance abuse, and mental wellness.",
      },
      {
        label: "Peer Mentorship Programs",
        description: "Senior students mentor juniors to promote leadership and support.",
      },
      {
        label: "Feedback Mechanisms",
        description: "Students can provide feedback through surveys and suggestions.",
      },
    ],
  },
  {
    title: "Support Services",
    subtitle: "Comprehensive support for student well-being:",
    icon: ChatBubbleOvalLeftEllipsisIcon,
    items: [
      {
        label: "Counseling Services",
        description: "Professional support is available for academic and personal challenges.",
      },
      {
        label: "Reporting Mechanisms",
        description: "Students can report incidents confidentially and receive appropriate responses.",
      },
      {
        label: "Grievance Redressal",
        description: "A formal system addresses student concerns efficiently.",
      },
    ],
  },
];

export default function SecurityDisciplineSection() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Security and Discipline</h2>
          <p className="mt-4 text-lg text-gray-600">
            Sikkim Global Technical University is committed to providing a secure, disciplined, and respectful environment for all students and staff.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {points.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <section.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">{section.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{section.subtitle}</p>
              <ul className="space-y-4 pl-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex">
                    <span className="mr-2 text-blue-500">•</span>
                    <div>
                      <p className="font-medium text-gray-800">{item.label}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
