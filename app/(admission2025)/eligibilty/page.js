export default function EligibilityCriteria() {
    return (
      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Eligibility Criteria</h1>
            <p className="text-sm text-gray-600 mt-1">Atal Bihari Vajpayee Skill University</p>
          </div>
        </header>
  
        {/* Content Section */}
        <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Eligibility Requirements for Admission</h2>
  
            <ul className="list-decimal list-inside space-y-6 text-gray-700 text-lg leading-relaxed">
              <li>
                Applicants seeking admission to any undergraduate program must be at least{' '}
                <strong>17 years of age</strong> as of <strong>December 31<sup>st</sup></strong> of the academic year in which admission is sought.
              </li>
              <li>
                For all <strong>Diploma, Advanced Diploma, and Degree programs</strong>, candidates must have successfully completed{' '}
                <strong>10+2 (or equivalent)</strong> from a recognized board.
              </li>
              <li>
                Admission to the <strong>Faculty of Healthcare & Allied Sciences</strong> requires a <strong>10+2 (or equivalent)</strong> qualification with{' '}
                <strong>Biology</strong> as one of the subjects.
              </li>
              <li>
                For the <strong>Skill Certificate Course in General Duty Assistant</strong>, the minimum eligibility is completion of <strong>Class 10</strong>. However, candidates who have passed <strong>Class 8</strong> may be considered in exceptional cases.
              </li>
            </ul>
  
            <div className="mt-10 p-6 bg-gray-100 border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Need More Information?</h3>
              <p className="text-gray-700">
                For clarification or assistance regarding eligibility, please contact our Admissions Office at{' '}
                <a href="/contact" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                  www.sgtu.ac.in/contact-us
                </a>.
              </p>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-gray-100 py-6 text-center text-sm">
          © 2025 Atal Bihari Vajpayee Skill University. All rights reserved.
        </footer>
      </main>
    );
  }
  