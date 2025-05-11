"use client";
import { BorderBeam } from "@/components/magicui/border-beam";
import {
  FaBars,
  FaTimes,
  FaFolderOpen,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";

const NavBer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaTools /> },
    { name: "Project", href: "#project", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  return (
    <section className="container mx-auto pb-2">
      <header className="backdrop-blur bg-gray-50/10 rounded-full shadow-md">
        <div className="flex justify-between items-center mt-2 px-4 py-2 md:py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images-removebg-preview.png"
              alt="Logo"
              className="w-6 h-6 md:w-10 md:h-10"
            />
          </div>

          {/* Desktop Links with Icons */}
          <nav className="hidden md:flex space-x-8 font-medium text-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center space-x-2 hover:scale-125  hover:text-blue-600 duration-300"
              >
                {link.icon}
                <span>{link.name}</span>
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

        {/* Mobile Drawer with Icons */}
        {isOpen && (
          <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 text-xl font-medium text-black z-40">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 hover:text-blue-600 duration-200"
              >
                {link.icon}
                <span>{link.name}</span>
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
        <BorderBeam className="absolute inset-0 z-10" />
      </header>
    </section>
  );
};

export default NavBer;
