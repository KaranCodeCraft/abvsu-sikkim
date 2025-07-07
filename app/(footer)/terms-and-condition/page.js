import React from "react";

export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-8 py-10 text-gray-800">
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-700">
          Terms and Conditions - Sikkim Global Technical University
        </h1>

        {/* 1. Introduction */}
        <h2 className="text-2xl font-semibold mt-8">1. Introduction</h2>
        <p>
          Welcome to Sikkim Global Technical University. By accessing or using our services,
          including educational resources, online courses, and any related services, you agree to
          comply with these terms and conditions. Please read them carefully. If you do not agree
          with these terms, do not use our services. These terms apply to all visitors, users, and
          others who wish to access or use our services.
        </p>

        {/* 2. Services */}
        <h2 className="text-2xl font-semibold mt-8">2. Services</h2>
        <p>
          Sikkim Global Technical University offers a variety of educational services and programs
          designed to help students achieve their academic goals. We provide online and offline
          courses, certifications, workshops, and other related services as per the guidelines
          established by the relevant governing bodies. These services are available to registered
          students and applicants who meet the university’s eligibility criteria.
        </p>
        <p>
          Services include, but are not limited to, degree programs, certificate courses, online
          learning platforms, research opportunities, and educational resources. Our courses are
          designed to adhere to industry standards and provide high-quality education to all enrolled
          students.
        </p>

        {/* 3. Admission and Fees */}
        <h2 className="text-2xl font-semibold mt-8">3. Admission and Fees</h2>
        <p>
          Admission to Sikkim Global Technical University is granted based on fulfilling specific
          eligibility criteria, which may vary for different programs. All students must submit the
          necessary documents and pay the applicable fees before registration is finalized. Please
          refer to our Admissions Policy for detailed guidelines regarding admission procedures.
        </p>
        <p>
          The university charges tuition fees, examination fees, and other associated fees. All fees
          must be paid as per the university’s schedule, and any delay in payments may lead to
          penalties or suspension of services. Please note that all payments made to the university
          are non-refundable unless otherwise stated in our refund policy.
        </p>

        {/* 4. Code of Conduct */}
        <h2 className="text-2xl font-semibold mt-8">4. Code of Conduct</h2>
        <p>
          At Sikkim Global Technical University, we value integrity, respect, and ethical behavior.
          All students, faculty, and staff are required to adhere to the university’s Code of Conduct,
          which includes but is not limited to the following:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Respect for all individuals, regardless of their background, beliefs, or opinions.
          </li>
          <li>
            Commitment to academic honesty and avoiding plagiarism or cheating.
          </li>
          <li>
            Adherence to university policies, including attendance and behavior expectations.
          </li>
          <li>Respect for university property and resources.</li>
        </ul>
        <p>
          Failure to comply with these guidelines may result in disciplinary actions, including
          suspension or expulsion from the university.
        </p>

        {/* 5. Data Protection */}
        <h2 className="text-2xl font-semibold mt-8">5. Data Protection</h2>
        <p>
          Your privacy is of utmost importance to us. We are committed to protecting your personal
          information and ensuring that it is handled in accordance with applicable data protection
          laws, including the General Data Protection Regulation (GDPR) if applicable.
        </p>
        <p>
          We collect personal data, such as your name, contact information, academic records, and
          payment details, to provide you with services and communicate with you effectively. This
          data will be used only for the purposes of student registration, academic management, and
          communication with our students.
        </p>
        <p>
          We will never share your personal information with third parties without your consent
          unless required by law. You have the right to access, update, or delete your personal
          information at any time. If you have concerns about how we handle your data, please contact
          our data protection officer.
        </p>

        {/* 6. Governing Law */}
        <h2 className="text-2xl font-semibold mt-8">6. Governing Law</h2>
        <p>
          These terms and conditions are governed by the laws of India. Any disputes arising out of or
          in connection with these terms shall be subject to the exclusive jurisdiction of the courts
          in Sikkim, India.
        </p>
        <p>
          By using our services, you agree to submit to the jurisdiction of Sikkim courts for any
          legal proceedings related to these terms and conditions.
        </p>

        {/* 7. Contact Us */}
        <h2 className="text-2xl font-semibold mt-8">7. Contact Us</h2>
        <p>
          If you have any questions, concerns, or require further clarification regarding these terms
          and conditions, feel free to reach out to us. You can contact us via email at{" "}
          <a href="mailto:info@sgtu.ac.in" className="text-blue-600 underline">
            info@sgtu.ac.in
          </a>
          .
        </p>
        <p>
          We are here to help you and ensure that your experience with Sikkim Global Technical
          University is a positive one. Please do not hesitate to contact us for assistance.
        </p>

        <p className="font-medium">
          By continuing to use our services, you acknowledge that you have read, understood, and
          agreed to these Terms and Conditions.
        </p>
      </section>
    </main>
  );
}
