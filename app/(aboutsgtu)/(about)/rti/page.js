"use client";

import Link from "next/link";

export default function RTIPolicyPage() {
  return (
    <section className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-2xl p-8 space-y-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            RTI <span className="text-red-600">Policy</span>
          </h2>

          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Documents Required for RTI Application
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-base">
              <li>ID Card</li>
              <li>Hall Ticket</li>
              <li>Demand Draft</li>
              <li>Fee Slip</li>
              <li>Other Supporting Documents</li>
              <li>RTI Application Form</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              RTI Act Reference
            </h4>
            <p className="text-base text-gray-700">
              The RTI Act of India:{" "}
              <Link
                href="https://rti.gov.in/rti-act.pdf"
                target="_blank"
                className="text-blue-600 underline hover:text-blue-800"
              >
                https://rti.gov.in/rti-act.pdf
              </Link>
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Declaration under the Right of Information (RTI) Act
            </h4>
            <p className="text-base text-gray-700 mb-4 text-justify leading-relaxed">
              The Right of Information Act intends to set out the practical regime
              of the Right of Information for citizens to enable them to access the
              information under the control of the public authority in order to
              promote transparency and accountability in the working of such
              authority.
            </p>
            <p className="text-base text-gray-700 text-justify leading-relaxed">
              It is hoped that the information put under the public domain through
              the Atal Bihari Vajpayee Skill University website would facilitate the
              citizens to access information through electronic mode, thereby
              avoiding, to the extent possible, inconvenience to ask formally for
              such information as may be already open to them. While compiling the
              information due care has been exercised, however, if any mistake has
              crept in due to inadvertence, it is subject to correction.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">
              Details of Public Information Officer (PIO)
            </h4>
            <p className="text-base text-gray-700 leading-relaxed">
              <strong>Atal Bihari Vajpayee Skill University</strong>
              <br />
              Tharpu, Melli Road,
              <br />
              District: Pakyong, Sikkim - 737126
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
