"use client";

import Image from "next/image";
import React from "react";


export default function PlacementContactPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600">
              Placement <span className="text-black">Contact</span>
            </h1>
            <p>
              The Placement Cell at Atal Bihari Vajpayee Skill University (ABVSU) is dedicated to assisting students in securing job opportunities with top recruiters. We collaborate with companies and organizations to enable campus placements, internships, and career development programs.
            </p>
            <p>
              For inquiries related to placements, students and recruiters can contact us through the details below:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-3">
              <h3 className="text-xl font-semibold text-orange-600">📍 Placement Cell Contact</h3>
              <p>
                <strong>Address:</strong> Atal Bihari Vajpayee Skill University, Placement Cell, Campus Office
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@ABVSU.ac.in" className="text-blue-600 underline">
                  info@ABVSU.ac.in
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+919818841348" className="text-blue-600 underline">
                  +91 9818841348
                </a>
              </p>
              <p>
                <strong>Office Hours:</strong> Monday to Friday, 9:00 AM – 5:00 PM
              </p>
            </div>

            <p>
              The Placement Cell also provides resume-building workshops, interview preparation sessions, and career counseling to help students enhance their employability.
            </p>
            <p>
              For more details, visit the university’s placement portal or reach out to the Placement Officer directly.
            </p>
          </div>

          {/* Right Column - Image (optional fallback for layout) */}
          <div className="w-full flex justify-center">
            <Image
              src="/images/Graphic/career.jpg"
              width={600}
              height={400}
              alt="Placement Team"
              className="rounded-lg shadow-md max-w-md w-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

