"use client";

import { ShieldExclamationIcon, DocumentTextIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function SGRCPage() {
  return (
    <section className="bg-white text-gray-800 py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            STUDENT GRIEVANCE <span className="text-orange-500">REDRESSAL COMMITTEE (SGRC)</span>
          </h1>
          
        </div>

        <div className="space-y-6">

          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-orange-500">
              <ShieldExclamationIcon className="h-6 w-6" /> OBJECTIVES
            </h2>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Promote respectful student-teacher and peer relationships.</li>
              <li>Ensure fair, confidential grievance resolution.</li>
              <li>Identify dissatisfaction sources and educate responsibilities.</li>
              <li>Encourage open, fearless communication from students.</li>
              <li>Improve academic and administrative systems based on feedback.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-orange-500">
              <DocumentTextIcon className="h-6 w-6" /> PROCEDURES
            </h2>
            <p className="mt-2">Students can submit grievances via the Dean's suggestion box or email (<a href="mailto:deputyprovc@ABVSU.ac.in" className="text-blue-600">deputyprovc@ABVSU.ac.in</a>).</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Delays in exam results or scholarship disbursement.</li>
              <li>False/misleading prospectus content.</li>
              <li>Fee refund issues or discriminatory practices.</li>
              <li>Quality education deficiencies or harassment.</li>
              <li>Violation of admission, reservation, or evaluation rules.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-orange-500">
              <DocumentTextIcon className="h-6 w-6" /> REDRESSAL PROCESS
            </h2>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
              <li>Complaints are heard by SGRC with proper communication.</li>
              <li>Students may represent themselves or via an authorized person.</li>
              <li>SGRC reports to authorities; unresolved cases go to the Ombudsperson.</li>
              <li>All decisions and actions are documented and shared.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-orange-500">
              <DocumentTextIcon className="h-6 w-6" /> DOCUMENTATION
            </h2>
            <p>
              Records are confidential and accessible only to SGRC members. A grievance register is maintained under the Chairperson's supervision.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 text-orange-500">
              <UserIcon className="h-6 w-6" /> CONTACT & FORM
            </h2>
            <p className="mt-2">
              Download the Grievance Form and submit to the SGRC either in the Dean's chamber or via email.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <div className="flex gap-3 items-start">
                <EnvelopeIcon className="w-5 h-5 text-orange-500 mt-1" />
                <span>deputyprovc@ABVSU.ac.in</span>
              </div>
              <div className="flex gap-3 items-start">
              </div>
              <div className="flex gap-3 items-start">
                <MapPinIcon className="w-5 h-5 text-orange-500 mt-1" />
                <span>Atal Bihari Vajpayee Skill University, Tharpu, Melli Road, Pakyong, Sikkim - 737126</span>
              </div>
            </div>
          </div>

          <div className="mt-8 border border-gray-300 rounded-lg p-6 shadow">
            <h3 className="text-xl font-semibold mb-4 text-orange-500">Student Grievance Redressal Form</h3>
            <table className="table-auto w-full border border-collapse">
              <tbody>
                {["Name of the Student", "Student ID", "UG/PG/M.Phil./Ph.D.", "Department with Semester", "Permanent/Mailing Address", "Email", "Contact Number", "Details of grievances/complaints", "Date and Time", "Signature"].map((label, index) => (
                  <tr key={index} className="border-t border-gray-300">
                    <td className="p-2 font-medium w-1/2 border-r border-gray-300">{label}</td>
                    <td className="p-2 w-1/2"></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
} 
