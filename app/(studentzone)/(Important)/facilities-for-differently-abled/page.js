"use client";
import {
  UserIcon,
  AcademicCapIcon,
  Cog6ToothIcon,
  UserGroupIcon,
  HandRaisedIcon,
  SpeakerWaveIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export default function DifferentlyAbledFacilitiesPage() {
  return (
    <section className="min-h-screen bg-white py-16 px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row gap-12">
      {/* Main Content */}
      <article className="flex-1 max-w-4xl prose prose-teal prose-lg leading-relaxed">
        <h1 className="text-4xl font-extrabold mb-6 text-teal-700">
          University Facilities for Differently Abled Students
        </h1>

        <p>
          At The Atal Bihari Vajpayee Skill University, we are committed to fostering
          an inclusive and accessible environment for all students, including those
          with physical, sensory, and cognitive disabilities. As part of our vision
          to build a futuristic model of education, we strive to ensure that every
          student, regardless of their abilities, has the resources and opportunities
          they need to succeed.
        </p>

        <h2 className="text-lg font-semibold my-2 underline">Vision and Mission</h2>
        <p>
          The university’s commitment to inclusivity and accessibility is reflected
          in our vision to create an equitable learning environment. By collaborating
          with government, industry, and academic stakeholders, we aim to provide a
          barrier-free educational experience for students with disabilities.
        </p>

        <h2 className="text-lg font-semibold mt-2 underline">Key Objectives</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Ensure Equal Access to Education:</strong> Facilitate an inclusive
            educational environment where students with disabilities have access to
            the same opportunities, resources, and learning experiences as their peers.
          </li>
          <li>
            <strong>Provide Technological and Infrastructure Support:</strong> Develop
            and implement infrastructure that is universally accessible, including
            assistive technologies that aid learning and mobility.
          </li>
          <li>
            <strong>Promote Social Integration and Participation:</strong> Encourage
            active participation in academic, co-curricular, and extracurricular
            activities.
          </li>
          <li>
            <strong>Offer Personalized Support and Services:</strong> Provide specialized
            support such as tutoring, counseling, and mentorship.
          </li>
          <li>
            <strong>Foster Career and Placement Opportunities:</strong> Ensure equal
            internship and job opportunities.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-2 underline">Accessible Infrastructure</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Wheelchair Access and Ramps:</strong> Buildings are equipped with
            ramps and elevators to ensure mobility.
          </li>
          <li>
            <strong>Specialized Learning Spaces:</strong> Classrooms with ergonomic
            furniture and ample space for movement.
          </li>
          <li>
            <strong>Accessible Restrooms:</strong> Gender-neutral, fully accessible
            restrooms.
          </li>
          <li>
            <strong>Transport Assistance:</strong> Campus vehicles equipped for mobility
            needs.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-2 underline">Assistive Technology and Learning Support</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Screen Reader and Voice Recognition Tools:</strong> For visually
            impaired students.
          </li>
          <li>
            <strong>Audio and Braille Materials:</strong> Course content in accessible
            formats.
          </li>
          <li>
            <strong>Sign Language Interpretation:</strong> Support for hearing impaired
            students.
          </li>
          <li>
            <strong>Customized Learning Materials:</strong> Tailored content for unique
            learning styles.
          </li>
          <li>
            <strong>E-Learning Platforms:</strong> Accessible and adaptive digital tools.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-2 underline">Specialized Support Services</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Dedicated Resource Center:</strong> Central hub for all disability
            support services.
          </li>
          <li>
            <strong>Academic Support and Mentorship:</strong> Personalized tutoring and
            peer guidance.
          </li>
          <li>
            <strong>Psychosocial Support and Counseling:</strong> Mental health services
            for emotional well-being.
          </li>
          <li>
            <strong>Exam Accommodations:</strong> Extended time, separate rooms, and
            tailored arrangements.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-2 underline">Co-Curricular and Extracurricular Participation</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Inclusive Clubs and Activities:</strong> Opportunities to showcase
            talents in arts, sports, and culture.
          </li>
          <li>
            <strong>Adapted Sports Programs:</strong> Wheelchair basketball, adaptive
            yoga, and more.
          </li>
          <li>
            <strong>Leadership Opportunities:</strong> Roles in student organizations and
            committees.
          </li>
        </ul>

        <h2 className="text-lg font-semibold mt-2 underline">Awareness and Sensitization Programs</h2>
        <p>
          Regular workshops and training sessions to promote disability awareness,
          empathy, and inclusiveness throughout the university community.
        </p>

        <p>
          The Atal Bihari Vajpayee Skill University is proud to provide an environment
          where every student has the opportunity to unlock their full potential.
        </p>

        <p>
          <strong>Sincerely,</strong> <br />
          The Atal Bihari Vajpayee Skill University
        </p>
      </article>

      {/* Sidebar */}
      <aside className="w-full md:w-96 bg-teal-50 rounded-lg p-8 shadow-lg sticky top-24 self-start prose prose-teal">
        <h3 className="text-2xl font-semibold mb-6">Key Services at a Glance</h3>
        <ul className="space-y-5">
          <li className="flex items-center gap-3">
            <UserIcon className="w-6 h-6 text-teal-600" />
            <span>Accessible campus infrastructure & ramps</span>
          </li>
          <li className="flex items-center gap-3">
            <AcademicCapIcon className="w-6 h-6 text-teal-600" />
            <span>Assistive technology & accessible learning materials</span>
          </li>
          <li className="flex items-center gap-3">
            <UserGroupIcon className="w-6 h-6 text-teal-600" />
            <span>Specialized academic & psychosocial support</span>
          </li>
          <li className="flex items-center gap-3">
            <HandRaisedIcon className="w-6 h-6 text-teal-600" />
            <span>Inclusive clubs, adapted sports & leadership roles</span>
          </li>
          <li className="flex items-center gap-3">
            <Cog6ToothIcon className="w-6 h-6 text-teal-600" />
            <span>Personalized exam accommodations</span>
          </li>
          <li className="flex items-center gap-3">
            <SpeakerWaveIcon className="w-6 h-6 text-teal-600" />
            <span>Sign language & communication assistance</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckBadgeIcon className="w-6 h-6 text-teal-600" />
            <span>Comprehensive career guidance & placement support</span>
          </li>
        </ul>
      </aside>
    </section>
  );
}
