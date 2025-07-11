'use client';
import React from "react";
import { motion } from "framer-motion";
import {
  NewspaperIcon,
  CalendarDaysIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";

const Card = ({ Icon, title, text, button }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center"
  >
    <div className="bg-red-100 p-4 rounded-full mb-4">
      <Icon className="h-10 w-10 text-orange-600" />
    </div>
    <h3 className="text-lg font-semibold text-orange-600 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{text}</p>
    <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-red-700 transition">
      {button}
    </button>
  </motion.div>
);

const RecentEventAchievementPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen px-4 py-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold">
            News | Events | <span className="text-orange-600">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card
            Icon={NewspaperIcon}
            title="Latest News"
            text="Stay updated with the latest happenings at ABVSU."
            button="Read More"
          />
          <Card
            Icon={CalendarDaysIcon}
            title="Upcoming Events"
            text="Join our exciting events and seminars."
            button="View Events"
          />
          <Card
            Icon={TrophyIcon}
            title="Our Achievements"
            text="Discover the remarkable achievements of our students and faculty."
            button="Explore More"
          />
        </div>
      </div>
    </section>
  );
};

export default RecentEventAchievementPage;
