"use client";

import { ArrowDownTrayIcon, DocumentIcon } from "@heroicons/react/24/outline";

export default function CircularsAndNotices() {
  const notices = [
    {
      id: 1,
      title: "Important Notice for Students",
      date: "March 5, 2025",
      link: "notice1.pdf",
    },
    {
      id: 2,
      title: "Exam Schedule Update",
      date: "March 3, 2025",
      link: "exam-schedule.pdf",
    },
    {
      id: 3,
      title: "New Academic Guidelines",
      date: "February 28, 2025",
      link: "guidelines.pdf",
    },
    {
      id: 4,
      title: "Exam Schedule Update",
      date: "March 3, 2025",
      link: "exam-schedule.pdf",
    },
    {
      id: 5,
      title: "New Academic Guidelines",
      date: "February 28, 2025",
      link: "guidelines.pdf",
    },
    {
      id: 6,
      title: "Exam Schedule Update",
      date: "March 3, 2025",
      link: "exam-schedule.pdf",
    },
    {
      id: 7,
      title: "New Academic Guidelines",
      date: "February 28, 2025",
      link: "guidelines.pdf",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-tr from-amber-50 to-white px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-amber-600 animate-fade-in">
            Circulars & Notices
          </h1>
          <p className="mt-2 text-gray-600 text-base sm:text-lg animate-fade-in delay-200">
            Stay updated with the latest announcements and academic notices.
          </p>
        </div>

        <div className="overflow-x-auto animate-fade-in-up">
          <table className="min-w-full table-auto border border-amber-300 shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-amber-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">S. No.</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Title</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">Download</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-200">
              {notices.map((notice, index) => (
                <tr key={notice.id} className="hover:bg-amber-50 transition-all">
                  <td className="px-4 py-3 text-sm text-gray-700">{index + 1}</td>
                  <td className="px-4 py-3 text-sm text-gray-800 flex items-center gap-2">
                    <DocumentIcon className="w-5 h-5 text-amber-500" /> {notice.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600">{notice.date}</td>
                  <td className="px-4 py-3 text-center">
                    <a
                      href={notice.link}
                      download
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-amber-700 border border-amber-300 rounded-lg hover:bg-amber-100 transition"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4" /> Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Simple Animations */}
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out both;
        }
        .animate-fade-in-up {
          animation: fade-in 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}
