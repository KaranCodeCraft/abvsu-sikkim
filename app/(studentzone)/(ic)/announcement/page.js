"use client"
import React from "react";
import { motion } from "framer-motion";
import { InformationCircleIcon, BellIcon } from "@heroicons/react/24/outline";

const newsItems = [
  "CM Lays foundation stone for Atal Bihari Vajpayee Skill University in Namchi",
  "New library inaugurated at Sikkim University campus",
  "Annual Tech Fest scheduled for December 2025",
  "Sikkim Government launches new scholarship program for students",
  "Sikkim Tourism Department announces eco-tourism initiative",
  "New Research Center opens for Himalayan biodiversity studies",
];

const notifications = [
  "Paramedical Courses will be available soon",
  "Law Courses will be available Soon",
  "Admissions for the 2025-26 batch are opening soon.",
  "Online application portal will close on 31st July 2025",
  "Fee payment deadline extended till 15th August 2025",
  "Campus reopening planned for 1st September 2025",
];

const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 50,
      damping: 15,
    },
  }),
};

export default function Announcements() {
  return (
    <main className="bg-white min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <section className="text-center mb-16 max-w-4xl mx-auto px-4">
        <motion.h1
          className="text-orange-600 text-5xl sm:text-6xl font-extrabold mb-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Important Announcements
        </motion.h1>
        <motion.p
          className="text-gray-700 text-lg sm:text-xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Stay updated with the latest news and notifications.
        </motion.p>
      </section>

      {/* News Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <motion.h2
          className="text-center text-orange-600 font-bold mb-8 text-3xl sm:text-4xl flex items-center justify-center gap-2 select-none cursor-default"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <InformationCircleIcon className="w-8 h-8 text-orange-500" />
          </motion.span>
          News
        </motion.h2>

        <ol className="space-y-4 list-decimal list-inside font-sans text-gray-800 text-base sm:text-lg">
          {newsItems.map((item, idx) => (
            <motion.li
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={listItemVariants}
              className="bg-gray-50 p-5 rounded-md shadow-md hover:bg-orange-50 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              {item}
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Notification Section */}
      <section className="max-w-4xl mx-auto">
        <motion.h2
          className="text-center text-orange-600 font-bold mb-8 text-3xl sm:text-4xl flex items-center justify-center gap-2 select-none cursor-default"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <BellIcon className="w-8 h-8 text-orange-500" />
          </motion.span>
          Notification
        </motion.h2>

        <ol className="space-y-4 list-decimal list-inside font-sans text-gray-800 text-base sm:text-lg">
          {notifications.map((note, idx) => (
            <motion.li
              key={idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={listItemVariants}
              className="bg-gray-50 p-5 rounded-md shadow-md hover:bg-orange-50 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              {note}
            </motion.li>
          ))}
        </ol>
      </section>
    </main>
  );
}
