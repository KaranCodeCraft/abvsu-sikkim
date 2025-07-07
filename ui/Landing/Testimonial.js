import Image from 'next/image';
import React from 'react';
import { caveat } from '@/lib/fonts/Caveat';
import student1 from '@/public/images/Testimonial/student.jpg';
import qua from '@/public/images/Testimonial/qua.png';

const Testimonial = () => {
  return (
    <div className="flex flex-col lg:flex-row px-4 py-12 md:px-12 lg:px-24 lg:py-20 gap-8 items-center bg-white" 
    style={{
        backgroundImage: "url('/Background/staff.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* Student Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          className="object-cover rounded-2xl w-[300px] md:w-[400px] lg:w-[540px]"
          src={student1}
          alt="Student"
        />
      </div>

      {/* Testimonial Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-between gap-8">
        <div className="space-y-2">
          <p className={`text-xl md:text-2xl italic ${caveat.className}`}>Our Student Stories</p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            Happy Student Feedback
          </p>
        </div>

        <div className="space-y-4">
          <Image src={qua} width={60} height={60} alt="quote" />
          <p className="text-lg md:text-xl text-gray-800/70 leading-relaxed">
            "The placement process was seamless. With the guidance from the placement cell,
            I landed an amazing role at a top company. It truly made a difference!"
          </p>
        </div>

        <div>
          <p className="font-bold text-xl md:text-2xl">Shena chettri</p>
          <p className="font-light text-gray-600 uppercase text-sm">Student</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
