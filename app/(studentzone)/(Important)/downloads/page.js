'use client';

import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const certificates = [
  {
    name: 'Provisional Certificate',
    pdf: '/docs/Provisional-Certificate.pdf',
    applyLink: '/apply/provisional-certificate',
  },
  {
    name: 'Migration Certificate',
    pdf: '/docs/Migration-Certificate.pdf',
    applyLink: '/apply/migration-certificate',
  },
  {
    name: 'Bonafide Certificate',
    pdf: '/docs/Bonafide-Certificate.pdf',
    applyLink: '/apply/bonafide-certificate',
  },
  {
    name: 'Character Certificate',
    pdf: '/docs/Character-Certificate.pdf',
    applyLink: '/apply/character-certificate',
  },
  {
    name: 'Issue of Duplicate Certificate',
    pdf: '/docs/Duplicate-Certificate.pdf',
    applyLink: '/apply/duplicate-certificate',
  },
  {
    name: 'Internship Permission',
    pdf: '/docs/Internship-Permission.pdf',
    applyLink: '/apply/internship-permission',
  },
  {
    name: 'Consolidated Transcript Certificate',
    pdf: '/docs/Consolidated-Transcript-Certificate.pdf',
    applyLink: '/apply/consolidated-transcript',
  },
  {
    name: 'Course Completion Certificate',
    pdf: '/docs/Course-Completion-Certificate.pdf',
    applyLink: '/apply/course-completion',
  },
  {
    name: 'CGPA To Percentage Certificate',
    pdf: '/docs/CGPA-To-Percentage-Certificate.pdf',
    applyLink: '/apply/cgpa-percentage',
  },
  {
    name: 'Document Verification Form',
    pdf: '/docs/Document-Verification.pdf',
    applyLink: '/apply/document-verification',
  },
];

export default function DownloadsPage() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Downloads
      </h2>

      <div className="grid gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center justify-between border rounded-lg bg-white shadow-sm p-5"
          >
            <p className="text-lg font-medium text-gray-700 flex items-center gap-3">
              <ArrowDownTrayIcon className="w-6 h-6 text-orange-500" />
              {cert.name}
            </p>

            <div className="mt-4 md:mt-0 flex gap-4">
              <a
                href={cert.pdf}
                download
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition text-sm"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                Download PDF
              </a>

              {/* Uncomment below if "Apply Online" should be active */}
              {/* 
              <Link
                href={cert.applyLink}
                className="inline-flex items-center gap-2 border border-orange-500 text-orange-500 px-4 py-2 rounded hover:bg-orange-50 transition text-sm"
              >
                Apply Online
              </Link> 
              */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
