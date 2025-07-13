"use client";
import Image from "next/image";
import { useState } from "react";

export default function Project1() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="overflow-hidden shadow-lg hover:shadow-none duration-500 shadow-slate-400/50 hover:border border-gray-200 flex flex-col h-full">
      <div className="relative">
        <Image
          src="/medicamp.png"
          alt="Medi Camp"
          className="h-[330px] object-cover"
          layout="responsive"
          width={500}
          height={230}
        />
      </div>
      <div className="p-6 flex-grow">
        <h2 className="text-xl font-bold text-gray-700">Medi Camp (MCMS)</h2>
        <p className="text-sm text-gray-600 mt-2">
          MediCare is a web platform offering virtual medical consultations and
          health resources. It connects users with healthcare professionals for
          remote check-ups and appointment bookings.
        </p>
      </div>
      <div className="p-3 mt-auto flex space-x-3">
        <button
          onClick={openModal} // Open modal when clicked
          className="px-4 py-2 text-white bg-blue-500"
        >
          Details
        </button>
        <a
          href="https://mcms-me.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white bg-green-500"
        >
          Live Demo
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-gray-950 bg-blur bg-opacity-10 flex justify-center items-center z-50 overflow-x-auto">
          <div className="bg-white p-6 max-w-4xl w-full relative max-h-screen overflow-y-auto">
            {/* Close Icon */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-3xl font-bold text-gray-800"
            >
              &times;
            </button>
            <h1 className="lg:text-4xl font-bold text-gray-800 sm:text-3xl text-xl">
              Medical Camp
            </h1>
            <p className="lg:text-lg text-gray-600 mt-2 sm:text-base text-sm">
              Simplifying the management and organization of medical camps for a
              seamless experience.
            </p>

            {/* Image */}
            <div className="w-full overflow-hidden h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] mb-8">
              <img
                src="/medicamp.png"
                alt="Medical Camp Screenshot"
                className="w-full h-full border"
              />
            </div>

            {/* Content */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 sm:text-xl">
              Medical Camp Management System
            </h2>
            <p className="text-xl text-gray-600 mb-8 sm:text-lg">
              Medical Camp is a web-based platform designed to simplify the
              management and organization of medical camps. It provides an
              effortless and user-friendly experience for both organizers and
              participants.
            </p>

            {/* Key Features */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 sm:text-lg">
              Key Features
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6 text-sm sm:text-base">
              <li>User-Friendly Navigation</li>
              <li>Dynamic Homepage Banner with success stories</li>
              <li>Popular Camps Section</li>
              <li>Camp Details Page with Join Camp button</li>
              <li>Advanced Search and Sorting</li>
              <li>Payment Integration with Stripe</li>
              <li>Feedback and Ratings System</li>
            </ul>

            {/* Highlighted Skills */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4 sm:text-lg">
              Skills Utilized
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "React.js",
                "TailwindCSS",
                "Firebase",
                "Stripe Payment Integration",
                "MongoDB",
                "Responsive Design",
                "User Authentication",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-white bg-blue-600 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-3">
              <a
                href="https://mcms-me.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-green-500"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Moshiur-15/Medical-Camp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-blue-500"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
