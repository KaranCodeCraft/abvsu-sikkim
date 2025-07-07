'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryImages = [
  '/images/Gallery/gallery-1.jpeg',
  '/images/Gallery/gallery-2.jpeg',
  '/images/Gallery/gallery-3.jpeg',
  '/images/Gallery/gallery-4.jpeg',
  '/images/Gallery/gallery-6.jpg',
  '/images/Highlight/01.jpg',
  '/images/Gallery/lab3.jpeg',
  '/images/Gallery/lab2.jpeg',
  '/images/Gallery/lab4.jpeg',
  '/images/Gallery/lab5.jpeg',
  '/images/Gallery/lab6.jpg',
  '/images/Gallery/lab.jpg',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function GalleryPage() {
  return (
    <section className="min-h-screen bg-white px-4 py-16 md:px-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-500 mb-10">
        Gallery
      </h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-lg hover:scale-[1.02] transition"
            variants={item}
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={300}
              height={300}
              className="w-full h-60 object-cover"
              priority={index < 3}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
