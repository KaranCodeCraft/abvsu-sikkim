"use client";

import React from "react";
import { motion } from "framer-motion";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import calendarData from "@/data/calenderData";

const AcademicCalendar = () => {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12"
          >
            University Academic Calendar
          </motion.h2>
  
          {calendarData.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-center text-gray-800 mb-4">
                {section.section}
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 shadow-sm">
                  <thead>
                    <tr className="bg-orange-500 text-white">
                      <th className="text-left py-3 px-4">Event/Activity</th>
                      <th className="text-left py-3 px-4">Dates</th>
                      <th className="text-left py-3 px-4">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.events.map((event, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-orange-50 transition duration-200 border-t"
                      >
                        <td className="py-3 px-4 flex items-center gap-2">
                          <CalendarDaysIcon className="h-5 w-5 text-orange-500" />
                          {event.title}
                        </td>
                        <td className="py-3 px-4">{event.date}</td>
                        <td className="py-3 px-4 text-gray-700">{event.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };
  
  export default AcademicCalendar;