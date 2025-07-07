import React from "react";

export default function AdmissionAndRefundPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-8 py-10 text-gray-800">
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-orange-700">Overview</h2>
          <p>
            Sikkim Global Technical University is committed to follow the regulations and guidelines on admissions stipulated by statutory bodies such as UGC, AIU, and others. The University forms an Admission Committee which provides guidance and ensures prospective candidates' needs are addressed.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Policy of Admissions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Admission is irrespective of caste, creed, colour & religion.</li>
            <li>Open to Indian citizens, NRIs, persons of Indian origin, and foreign students per government guidelines.</li>
            <li>Admission may be merit-based via entrance exams or educational qualifications.</li>
            <li>A detailed prospectus is published with all course-related information.</li>
            <li>Application must be submitted before the last date with required documents and fees.</li>
            <li>No student shall pursue two regular courses simultaneously.</li>
            <li>Medically unfit students may face cancellation after due process.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Admissions Process</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Admissions follow University ordinances and may be merit or criteria-based.</li>
            <li>Evaluation may include academics, activities, entrance exam results.</li>
            <li>Apply online with application fee and upload required documents.</li>
            <li>Admission confirmed only after full fee payment and document verification.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Number of Seats</h3>
          <p>
            The Academic Council fixes the number of seats in each course at the beginning of each session based on teacher and infrastructure availability.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Alteration of Seats</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Alteration may be proposed by Admission Committee and approved by statutory bodies.</li>
            <li>No changes in courses with fixed seat count by regulators.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold">Reservation of Seats</h3>
          <ul className="list-disc pl-6">
            <li>As per State Government norms.</li>
          </ul>
          <p>
            State Quota Policy: <a href="https://sikkim.gov.in/departments/education-department/state-quota-reservation-policy-for-college-admission" className="text-blue-600 underline">Click here</a>
          </p>
          <p>
            UGC Policy: <a href="https://www.ugc.gov.in/pdfnews/6320608_reservation-Policy.pdf" className="text-blue-600 underline">Click here</a>
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-orange-700">Refund and Cancellation Policy</h2>
          <p>
            Follows UGC guidelines and may change over time. Refunds depend on the time of withdrawal.
          </p>

          <div className="overflow-auto border border-gray-300 rounded-md mt-4">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Category</th>
                  <th className="border px-4 py-2">% of Refund</th>
                  <th className="border px-4 py-2">Notice Timing</th>
                  <th className="border px-4 py-2">Withdrawal Period</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">100%</td>
                  <td className="border px-4 py-2">15 days or more before the last date</td>
                  <td className="border px-4 py-2">On or before 15 Nov 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">90%</td>
                  <td className="border px-4 py-2">Less than 15 days before the last date</td>
                  <td className="border px-4 py-2">16–30 Nov 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">3</td>
                  <td className="border px-4 py-2">80%</td>
                  <td className="border px-4 py-2">Within 15 days after last date</td>
                  <td className="border px-4 py-2">1–15 Dec 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">4</td>
                  <td className="border px-4 py-2">50%</td>
                  <td className="border px-4 py-2">15–30 days after last date</td>
                  <td className="border px-4 py-2">16–31 Dec 2024</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">5</td>
                  <td className="border px-4 py-2">0%</td>
                  <td className="border px-4 py-2">After 30 days of last date</td>
                  <td className="border px-4 py-2">On or after 1 Jan 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-red-600 font-semibold">
            * This draft policy is subject to change based on regulatory updates and institutional requirements.
          </p>
        </div>
      </section>
    </main>
  );
}
