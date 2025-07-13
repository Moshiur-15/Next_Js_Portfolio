"use client";
import Image from "next/image";
import { useState } from "react";

export default function Project4() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="overflow-hidden shadow-lg hover:shadow-none duration-500 shadow-slate-400/50 hover:border border-gray-200 flex flex-col h-full">
      {/* Thumbnail Image */}
      <div className="relative">
        <Image
          src="/houselease.png"
          alt="House Lease"
          className="h-[330px] object-cover"
          layout="responsive"
          width={500}
          height={230}
        />
      </div>

      {/* Short Info */}
      <div className="p-6 flex-grow">
        <h2 className="text-xl font-bold text-gray-700">
          HOUSELEASE – Full Stack Rental Platform
        </h2>
        <p className="text-sm text-gray-600 mt-2">
          Role-based platform for property listing, booking, and management with
          modern UI & secure authentication.
        </p>
      </div>

      {/* Buttons */}
      <div className="p-3 mt-auto flex space-x-3">
        <button
          onClick={openModal}
          className="px-4 py-2 text-white bg-blue-500"
        >
          Details
        </button>
        <a
          href="https://house-lease.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white bg-green-500"
        >
          Live Demo
        </a>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-gray-950 bg-opacity-10 flex justify-center items-center z-50">
          <div className="bg-white p-6 max-w-5xl w-full relative max-h-screen overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-3xl font-bold text-gray-800"
            >
              &times;
            </button>

            <h1 className="text-4xl font-bold text-gray-800 mb-2">HOUSELEASE</h1>
            <p className="text-lg text-gray-600 mb-6">
              A full-featured property rental platform with role-based dashboards, secure auth, Stripe payment, and admin management features.
            </p>

            {/* Image */}
            <div className="w-full h-[250px] sm:h-[350px] mb-8 overflow-hidden">
              <img
                src="/houselease.png"
                alt="House Lease Screenshot"
                className="w-full h-full object-cover border"
              />
            </div>

            {/* Dashboards */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🧑 Role-Based Dashboards</h3>
            <div className="mb-6 text-gray-700 text-sm space-y-2">
              <p><strong>1️⃣ Admin:</strong> Manage Users, Properties, Blogs, Add Blogs</p>
              <p><strong>2️⃣ Seller:</strong> Add/Edit/Delete Properties, View Bookings</p>
              <p><strong>3️⃣ Buyer:</strong> Browse, Wishlist, Bookings, Payments</p>
            </div>

            {/* Features */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">✅ Key Features</h3>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Role-based dashboards: Admin, Seller, Buyer</li>
              <li>Detailed property listings with filters</li>
              <li>Wishlist functionality for buyers</li>
              <li>Secure auth with NextAuth.js & Bcrypt</li>
              <li>Stripe payment integration</li>
              <li>Blog system with full CRUD</li>
              <li>Responsive UI with TailwindCSS + Shadcn/Magic UI</li>
            </ul>

            {/* Tech Stack */}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🛠️ Tech Stack</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Next.js", "Tailwind CSS", "Shadcn/UI", "Magic UI",
                "Node.js", "Express.js", "MongoDB", "Mongoose",
                "NextAuth.js", "Bcrypt", "Stripe", "Vercel"
              ].map((tech) => (
                <span key={tech} className="px-4 py-1 text-white bg-blue-600 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="https://house-lease.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-white bg-green-500"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/Moshiur-15/house-lease"
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
