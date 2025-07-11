import React from "react";
import { Pointer, Mail, Globe } from "lucide-react";

const steps = [
  "Fill the form mentioned below. (Make sure all the details are correct.)",
  "Send the hard copy to the university along with a photocopy of the document under suspicion.",
  "Pay the required amount.",
  "If the document is valid, you will receive a confirmation."
];

export default function DocumentVerificationPage() {
  return (
    <main className="px-4 md:px-8 py-10 max-w-5xl mx-auto">
      {/* Welcome Section */}
      <section className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
          Welcome to ABVSU's Official Document Verification Portal
        </h1>
        <p className="text-gray-700 mb-4">
          This portal allows students, employers, and verification agencies to authenticate
          certificates, transcripts, and other official documents issued by Sikkim Global Technical
          University (ABVSU).
        </p>
        <p className="text-gray-700 mb-4">
          ABVSU ensures the authenticity of academic credentials through a secure and reliable
          verification process. Users are required to submit a physical copy of the document along
          with the verification request for thorough review.
        </p>
        <p className="text-gray-700">
          As a prestigious institution, ABVSU is committed to maintaining transparency and trust in
          academic records. Our dedicated verification team carefully examines each request,
          cross-checking details before providing official confirmation. This process helps prevent
          fraudulent claims and reinforces the credibility of issued certificates, transcripts, and
          other official documents.
        </p>
      </section>

      {/* How to Verify */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          How to Verify Documents?
        </h2>
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <Pointer className="text-yellow-500 mt-1" size={20} />
              <p className="text-gray-700">
                <strong>Step {idx + 1}:</strong> {step}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6">
          <a
            href="/verification-form.pdf"
            className="text-orange-600 font-semibold text-lg underline"
            download
          >
            Click to download verification form…
          </a>
        </p>
      </section>

      {/* Important Note */}
      <section className="mb-12">
        <h3 className="text-xl md:text-2xl font-bold mb-3">Important Note</h3>
        <p className="text-lg text-gray-700 font-medium mb-4">
          You will receive a confirmation regarding the validity once the required documents and
          payment have been received.
        </p>

        <h4 className="text-xl font-semibold mb-2">For any queries, please reach out to:</h4>
        <ul className="space-y-2 text-gray-800">
          <li className="flex items-center gap-2">
            <Mail className="text-yellow-500" size={18} />
            <span>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@ABVSU.ac.in" className="text-blue-600 hover:underline">
                info@ABVSU.ac.in
              </a>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Globe className="text-green-500" size={18} />
            <span>
              <strong>Website:</strong>{" "}
              <a href="https://www.ABVSU.ac.in" target="_blank" className="text-blue-600 hover:underline">
                www.ABVSU.ac.in
              </a>
            </span>
          </li>
        </ul>
        <p className="mt-4 text-sm text-gray-600 font-semibold">
          Ensuring transparency and authenticity in education.
        </p>
        <p className="mt-1 text-orange-600 font-bold text-lg">ABVSU – A Name You Can Trust!</p>
      </section>
    </main>
  );
}
