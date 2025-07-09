export default function FeeConcessions() {
    return (
      <main className="min-h-screen bg-gray-50 text-gray-900">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Fee Concessions & Scholarships</h1>
            <p className="mt-1 text-gray-600">
              Atal Bihari Vajpayee Skill University
            </p>
          </div>
        </header>
  
        {/* Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <article className="bg-white rounded-md shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Fee Concessions / Scholarships
            </h2>
  
            {/* Merit Scholarship */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m1 7a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Merit Scholarship (Based on Marks Obtained in Last Qualifying Examination)
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>100% Scholarship (MS – 1)</strong> (80% – 100%)
                </li>
                <li>
                  <strong>50% Scholarship (MS – 2)</strong> (65% – 79%)
                </li>
                <li>
                  <strong>25% Scholarship (MS – 3)</strong> (60% – 64%)
                </li>
              </ul>
            </div>
  
            {/* Other Scholarships */}
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Other Scholarships and Concessions
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>EC:</strong> University employee’s siblings, wards & spouse (50% concession)
                </li>
                <li>
                  <strong>PH:</strong> Physically Handicapped (50% concession)
                </li>
                <li>
                  <strong>FD:</strong> Freedom Fighter / Defence Personnel / Police & Paramilitary Wards (50% concession)
                </li>
                <li>
                  <strong>SC:</strong> Siblings Concession – siblings of continuing students (50% concession)
                </li>
                <li>
                  <strong>HD:</strong> Higher Degree Concession for students of Sikkim Professional University (50% concession)
                </li>
                <li>
                  <strong>SQ:</strong> Sikkim Quota Allotment (50% concession)
                </li>
                <li>
                  <strong>MC:</strong> Minority Concession (50% for Muslim, Sikh, Jain, Christian, Buddhist, and Zoroastrianism (Parsis) students)
                </li>
              </ul>
            </div>
  
            {/* Notes */}
            <div className="mt-8 space-y-3 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
              <p className="font-semibold text-yellow-800">
                * The above-mentioned concessions/scholarships apply only to tuition fees.
              </p>
              <p className="font-semibold text-yellow-800">
                * Only one of the above concessions/scholarships may be availed at a time.
              </p>
            </div>
          </article>
        </section>
  
        {/* Footer */}
        {/* <footer className="bg-gray-800 text-gray-100 py-6 text-center text-sm">
          © 2025 Atal Bihari Vajpayee Skill University. All rights reserved.
        </footer> */}
      </main>
    );
  }
  