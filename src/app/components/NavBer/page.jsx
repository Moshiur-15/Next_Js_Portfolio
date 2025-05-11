"use client"; // If you're using Next.js 13+ with App Router

import { useState } from "react";
import { FaBars, FaTimes, FaFolderOpen } from "react-icons/fa";

const NavBer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <section className="container mx-auto pb-2">
      <header className="backdrop-blur bg-gray-50/10 rounded-full shadow-md">
        <div className="flex justify-between items-center mt-2 px-4 py-2 md:py-3 ">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images-removebg-preview.png"
              alt="Logo"
              className="w-6 h-6 md:w-10 md:h-10"
            />
          </div>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-8 font-medium text-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Resume Button */}
          <div className="hidden md:flex">
            <a
              href="https://drive.google.com/file/d/1emzS0NbUunCv8F-ajEFM5Cqpac5ffWZV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 flex items-center transition"
            >
              <FaFolderOpen className="mr-2" />
              RESUME
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden z-50 flex">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black text-2xl"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 text-xl font-medium text-black z-40">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-600 duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1emzS0NbUunCv8F-ajEFM5Cqpac5ffWZV/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white font-bold px-6 py-2 rounded-none flex items-center hover:bg-blue-700 transition"
            >
              <FaFolderOpen className="mr-2" />
              RESUME
            </a>
          </div>
        )}
      </header>
    </section>
  );
};

export default NavBer;
