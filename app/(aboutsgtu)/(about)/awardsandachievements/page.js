"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const Page = () => {
  const awards = [
    {
      id: 1,
      title:"Magical moments with Hon'ble Chief Minister of Sikkim Sh. Prem Singh Tamang",
      image: "/images/Award/award1.jpeg",
    },
    {
      id: 8,
      title: "Meeting with Hon'ble Governor of Sikkim – A Step Towards Educational Progress",
      image: "/images/News/news3.jpeg",
    },
     {
      id: 6,
      title: "Glimpse of Meeting with Minister of Education of Sikkim Shri. Raju Basnet",
      image: "/images/News/news1.jpeg",
    },
        {
      id: 4,
      title:
        "ABVSU received Letter of Appreciation from Minister - Kunga Nima Lepcha",
      image: "/images/Award/award4.jpg",
    },
    {
      id: 5,
      title:
        "ABVSU received Letter of Appreciation from Ministry of Rural Development & Panchayati Raj",
      image: "/images/Award/award5.jpg",
    },
    {
      id: 2,
      title:
        "ABVSU won Indian Glory Award 2024 under Best Emerging University Category",
      image: "/images/Award/award2.jpeg",
    },
    {
      id: 3,
      title:
        "ABVSU won International Excellence Award for Best Emerging University in North East",
      image: "/images/Award/award3.jpeg",
    },

  ];

  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open modal with clicked image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? awards.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === awards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, currentImageIndex]);

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="relative bg-[#2f2c2c] text-white py-10 px-4 md:px-16">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Awards & Achievements</h1>
          <div className="text-sm font-medium">
            <Link href="/" className="text-white hover:text-orange-400">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Awards & Achievements</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[700px] h-full bg-[#FF6900] clip-diagonal" />
      </div>

      {/* Main Content */}
      <div className="py-20 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={award.id}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="h-80 bg-gray-200 overflow-hidden">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h5 className="text-sm font-bold text-gray-800 mb-2">
                  {award.title}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-3xl hover:text-orange-400 focus:outline-none"
            aria-label="Close modal"
          >
            &times;
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-4xl hover:text-orange-400 focus:outline-none p-4"
            aria-label="Previous image"
          >
            &#10094;
          </button>

          <div className="max-w-4xl w-full max-h-[80vh] flex items-center justify-center">
            <img
              src={awards[currentImageIndex].image}
              alt={awards[currentImageIndex].title}
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-4xl hover:text-orange-400 focus:outline-none p-4"
            aria-label="Next image"
          >
            &#10095;
          </button>

          <div className="absolute bottom-8 left-0 right-0 text-center text-white px-4">
            <p className="text-lg font-bold bg-black bg-opacity-50 inline-block px-4 py-2 rounded">
              {awards[currentImageIndex].title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
