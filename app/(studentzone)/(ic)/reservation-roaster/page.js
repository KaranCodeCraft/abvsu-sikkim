'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

const features = [
  "Ensures fair distribution of reserved seats and positions.",
  "Regularly updated to reflect the latest reservation policies.",
  "Maintains transparency in recruitment and admission processes.",
  "Helps in compliance with government regulations."
];

const ReservationRoster = () => {
  return (
    <section className="bg-gray-50 py-10 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold mb-2 text-gray-800">Reservation Roster</h1>
          <div className="mx-auto h-1 w-20 bg-red-600 rounded"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-white shadow-xl rounded-2xl p-6 md:p-10 text-gray-700 space-y-5"
        >
          <p>
            The Reservation Roster at Atal Bihari Vajpayee Skill University (SGTU) is designed to ensure the proper implementation of reservation policies as per government guidelines. The roster system helps in maintaining transparency and fairness in admissions, faculty recruitment, and other institutional processes.
          </p>

          <p>
            SGTU follows the prescribed reservation norms for Scheduled Castes (SC), Scheduled Tribes (ST), Other Backward Classes (OBC), Economically Weaker Sections (EWS), and Persons with Disabilities (PWD). The reservation roster provides a systematic way to allocate reserved seats and positions while ensuring compliance with regulatory mandates.
          </p>

          <p>
            The university updates and maintains the reservation roster regularly to track the reservation status across various categories. This helps in monitoring and ensuring that the allocated quotas are met while providing equal opportunities for all eligible candidates.
          </p>

          <h3 className="text-xl font-semibold mt-6 text-gray-800">
            <ClipboardDocumentCheckIcon className="inline-block w-6 h-6 mr-2 text-red-600" />
            Key Features of the Reservation Roster:
          </h3>

          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            {features.map((feature, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.4 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>

          <p className="pt-4">
            For more details regarding the Reservation Roster, students and faculty members can contact the university administration office.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationRoster;
