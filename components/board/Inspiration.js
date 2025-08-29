"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Leaf, Atom } from "lucide-react"; // Icons
import { useEffect } from "react";

export default function InspirationSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.3, // animate when 30% visible
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  const slogans = [
    { text: "Jai Jawan", icon: <Shield className="w-8 h-8 text-red-400" /> },
    { text: "Jai Kisan", icon: <Leaf className="w-8 h-8 text-green-400" /> },
    { text: "Jai Vigyan", icon: <Atom className="w-8 h-8 text-blue-400" /> },
  ];

  return (
    <section
      ref={ref}
      className="relative h-[400px] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/Banner/boardInspiration.png')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        {slogans.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={itemVariants}
            className="flex items-center justify-center gap-3"
          >
            {item.icon}
            <span className="text-3xl md:text-4xl font-bold tracking-wide drop-shadow-lg">
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
