"use client";
import Image from "next/image";
import { useState } from "react";

export default function Project2() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="overflow-hidden shadow-md flex flex-col h-full">
      <div className="relative">
        <Image
          src="/nextera.png"
          alt="NextEra Blog"
          className="h-[330px] object-cover"
          layout="responsive"
          width={500}
          height={230}
        />
      </div>
      <div className="p-6 flex-grow">
        <h2 className="text-xl font-bold text-gray-700">
          NextEra Blog (Blog Website)
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          A responsive blog platform built with React, Firebase, and MongoDB,
          featuring authentication, blog creation, commenting, and a wishlist
          for an engaging user experience.
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
          href="https://nextera-blog-me.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white bg-green-500"
        >
          Live Demo
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-gray-950 bg-blur bg-opacity-10 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full relative max-h-screen overflow-y-auto pt-10">
            {/* Close Icon */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-3xl font-bold text-gray-800"
            >
              &times;
            </button>
            <h1 className="text-4xl font-bold text-gray-800">NextEra Blog</h1>
            <p className="text-lg text-gray-600 mt-2">
              A dynamic blog platform with authentication, post management, and
              an intuitive user experience.
            </p>

            {/* Image */}
            <div className="w-full overflow-hidden rounded-lg shadow-lg mb-8">
              <img
                src="/nextera.png"
                alt="NextEra Blog Screenshot"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Content */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Blog Platform Management
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              NextEra Blog offers a full-featured blog management system, with
              authentication and real-time post updates. Users can create,
              update, and comment on blog posts.
            </p>

            {/* Key Features */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Key Features
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>User Authentication (Email, Google, etc.)</li>
              <li>Blog Management (Create, Update, Delete)</li>
              <li>Wishlist Functionality</li>
              <li>Responsive Design (Mobile, Tablet, Desktop)</li>
              <li>Interactive UI with Framer Motion</li>
            </ul>

            {/* Highlighted Skills */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Skills Utilized
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                "React.js",
                "TailwindCSS",
                "Firebase",
                "MongoDB",
                "Framer Motion",
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
                href="https://nextera-blog-me.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-green-500"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Moshiur-15/nextra-blog-client"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-blue-500"
              >
                GitHub Repo (Client)
              </a>
              <a
                href="https://github.com/Moshiur-15/nextra-blog-server"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-blue-500"
              >
                GitHub Repo (Server)
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
