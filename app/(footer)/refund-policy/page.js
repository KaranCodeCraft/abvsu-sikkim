"use client";

import React from "react";

export default function NoRefundPolicyPage() {
  return (
    <section className="px-4 md:px-10 py-10 max-w-5xl mx-auto">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600">NO REFUND POLICY</h1>
        <p>
          At Atal Bihari Vajpayee Skill University (SGTU), we maintain transparency and integrity in our
          admission and fee-related procedures. The following No Refund Policy applies to all applicants
          and enrolled students:
        </p>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Admission Fee:</strong>
            <br />
            The admission/registration fee paid at the time of securing admission is non-refundable under
            any circumstances.
          </li>
          <li>
            <strong>Tuition Fee and Other Charges:</strong>
            <br />
            Once the academic session has commenced, no refund will be made for tuition fees, examination
            fees, or any other charges, even if the student withdraws voluntarily or discontinues the
            course.
          </li>
          <li>
            <strong>Pre-Commencement Withdrawal:</strong>
            <br />
            In case a student chooses to withdraw before the commencement of the academic session, a
            partial refund may be considered only after deduction of administrative charges, subject to
            prior written approval from the university authorities. The decision of the university shall
            be final and binding.
          </li>
          <li>
            <strong>Cancellation Due to Misconduct or Misrepresentation:</strong>
            <br />
            If admission is cancelled due to submission of false documents, misrepresentation of facts, or
            violation of university rules, no refund of any kind will be applicable.
          </li>
          <li>
            <strong>Late Payment & Penalty:</strong>
            <br />
            Any penalties or fines paid for late fee submission or disciplinary matters are non-refundable.
          </li>
          <li>
            <strong>Hostel and Transportation Fees:</strong>
            <br />
            Fees paid for hostel accommodation, mess, or transportation are also non-refundable, once the
            services have been availed or allocated.
          </li>
          <li>
            <strong>Force Majeure / Unforeseen Events:</strong>
            <br />
            In the event of natural calamities, pandemics, or government orders that affect the
            continuation of academic activities, the university is not liable for any refund of fees.
            However, alternate academic arrangements shall be made.
          </li>
        </ol>

        <p>
          <strong>Note:</strong> Students and parents are advised to thoroughly review the admission
          guidelines and fee structure before making any payment. By enrolling at SGTU, you agree to abide
          by this No Refund Policy.
        </p>

        <p>
          For any queries or clarifications, you may contact the Office of Admissions at:
          <br />
          <br />
          <strong>Registrar</strong>
          <br />
          <strong>Atal Bihari Vajpayee Skill University</strong>
        </p>
      </div>
    </section>
  );
}
