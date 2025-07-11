"use client";
import Link from "next/link";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

const IconStyle = "h-5 w-5 text-black"; // Heroicons ko size class se control karte hain

const Page = () => {
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[700px] h-full bg-[#FF6900] clip-diagonal" />
      </div>

      {/* Contact Section */}
      <div className="py-20 px-4 md:px-16">
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2">
          {/* Example Box */}
          {[
            {
              title: "Admission",
              email: "admission@ABVSU.ac.in",
              phone: "9821777618",
            },
            {
              title: "Enrollment",
              email: "enrollment@ABVSU.ac.in",
              phone: "9821777621",
            },
            {
              title: "Verification",
              email: "verification@ABVSU.ac.in",
              phone: "9821777617",
            },
            {
              title: "Collaboration",
              email: "collaboration@ABVSU.ac.in",
              phone: "8055337783",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-6"
            >
              <div className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-t-md mb-4">
                {item.title}
              </div>
              {item.email && (
                <p className="text-sm mb-2 flex items-center gap-2">
                  <EnvelopeIcon className={IconStyle} />
                  <a href={`mailto:${item.email}`}>{item.email}</a>
                </p>
              )}
              {/* <p className="text-sm flex items-center gap-2">
                <PhoneIcon className={IconStyle} />
                <a href={`tel:${item.phone}`} className="text-black no-underlin">
                  +91 {item.phone}
                </a>
              </p> */}
            </div>
          ))}
        </div>

        {/* Collaboration & Map */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {/* Collaboration Box */}
          <div className="bg-white rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-6">
            <div className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-t-md mb-4">
              General Enquiry
            </div>
            {/* <div className="mb-4">
              <p className="text-sm mb-1 flex items-center gap-2">
                <EnvelopeIcon className={IconStyle} />
                <a href="mailto:collaboration@ABVSU.ac.in">
                  collaboration@ABVSU.ac.in
                </a>
              </p>
              <p className="text-sm flex items-center gap-2">
                <PhoneIcon className={IconStyle} />
                <a href="tel:9818841348" className="text-black no-underlin">
                  +91 9818841348
                </a>
              </p>
            </div> */}
            <div>
              <h3 className="font-bold">General Enquiry</h3>
              <p className="text-sm flex items-center gap-2">
                <PhoneIcon className={IconStyle} />
                +91 8055337783
              </p>
            </div>
          </div>

          {/* Map (unchanged) */}
          <div className="rounded-xl overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.1)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d909121.8658580672!2d88.365707!3d27.116705!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e426fe28c52f2b%3A0xc30ad1692c87ce9f!2sRong%2C%20Sikkim%20737128!5e0!3m2!1sen!2sin!4v1730096650291!5m2!1sen!2sin"
              width="100%"
              height="350"
              allowFullScreen
              loading="lazy"
              className="rounded-xl w-full"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Info (last section) */}
      <div className="px-4 md:px-16 py-10 bg-white text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-2">Contact Info</h2>
            <p className="text-gray-600 mb-6">
              Welcome to our Website. We are glad to have you around.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4 border-b pb-4">
                <div className="bg-orange-500 text-white p-3 rounded-md">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-orange-600 font-semibold text-sm mb-1">
                    Address
                  </p>
                  <p>
                    Tharpu, Melli Road, District: Namchi,
                    <br />
                    Sikkim -737126
                  </p>
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex items-start space-x-4 border-b pb-4">
                <div className="bg-orange-500 text-white p-3 rounded-md">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-orange-600 font-semibold text-sm mb-1">
                    Phone Number
                  </p>
                  <p className="font-bold">
                    <a href="tel:9818841348" className="text-black no-underlin">
                      +91 9818 841 348, +91 8055337783
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 border-b pb-4">
                <div className="bg-orange-500 text-white p-3 rounded-md">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-orange-600 font-semibold text-sm mb-1">
                    Email ID
                  </p>
                  <p className="font-bold">
                    <a href="mailto:info@ABVSU.ac.in">info@ABVSU.ac.in</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Message Form */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-3xl font-bold mb-1">Send a Message</h2>
            <p className="text-gray-600 mb-6">
              Your email address will not be published. Required fields are
              marked.
            </p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="border rounded-md px-4 py-2 w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="Enter Email Id"
                  className="border rounded-md px-4 py-2 w-full"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Enter Subject"
                className="border rounded-md px-4 py-2 w-full"
              />
              <textarea
                placeholder="Message"
                className="border rounded-md px-4 py-2 w-full h-32 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition-all duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;