import Image from 'next/image';
import React from 'react';
import img1 from '@/public/images/Events/event-img01.png';
import img2 from '@/public/images/Events/event-img02.png';
import img3 from '@/public/images/Events/event-img03.png';
import img4 from '@/public/images/Events/event-img04.png';
import { caveat } from '@/lib/fonts/Caveat';

const Events = () => {
  return (
    <div
      className="bg-[#f1f1e9] px-4 py-12 md:px-12 lg:px-16"
      style={{
        backgroundImage: "url('/Background/test.webp')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Heading */}
      <div className="text-center space-y-1 mb-12">
        <p className={`text-2xl md:text-3xl ${caveat.className}`}>Our Events</p>
        <p className="text-3xl md:text-5xl lg:text-6xl font-bold font-serif">Mesmerizing Events</p>
      </div>

      {/* Content Grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          {["https://placehold.co/600x400/FFFFFF/000000/png?text=event", "https://placehold.co/600x400/FFFFFF/000000/png?text=event", "https://placehold.co/600x400/FFFFFF/000000.png?text=event"].map((img, idx) => {
            const texts = [
              "Celebrating Diversity through Art and Performance",
              "Experience Sikkim: Where Nature Meets Culture",
              "Traditional Ritual Ceremony with Hon'ble Dignitaries",
            ];
            return (
              <div key={idx} className="rounded-2xl bg-white flex flex-col sm:flex-row">
                <div className="w-full sm:w-2/5">
                  <Image
                    src={img}
                    width={500}
                    height={100}
                    className="object-cover rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
                    alt="event"
                  />
                </div>
                <div className="w-full sm:w-3/5 flex justify-center items-center px-4 py-4 text-center font-bold font-serif text-xl md:text-2xl">
                  {texts[idx]}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <Image
            src={"https://placehold.co/600x400/FFFFFF/000000/png?text=event"}
            width={800}
            height={500}
            className="rounded-2xl w-full h-auto object-cover"
            alt="main event"
          />
          <div className="bg-white p-6 rounded-2xl text-center font-bold font-serif text-xl md:text-3xl xl:text-4xl">
            Atal Bihari Fest - Cultural Celebration Event.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
