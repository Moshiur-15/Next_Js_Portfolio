"use client";
import { useState, useEffect } from "react";
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

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navLinks = [
    { name: "Home", href: "#home", icon: <FaHome /> },
    { name: "About", href: "#about", icon: <FaUser /> },
    { name: "Skills", href: "#skills", icon: <FaTools /> },
    { name: "Project", href: "#project", icon: <FaProjectDiagram /> },
    { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
  ];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse movement listener for background animation
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Clean up when component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />
        <div
          className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * -0.01
            }px)`,
          }}
        />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://i.ibb.co/nMNDYpQ2/m-logo-letter-icon-monogram-m-letter-design-with-white-line-monogram-and-minimalist-modern-creative.png"
                alt="Logo"
                className="w-6 h-6 md:w-10 md:h-10"
              />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white hover:scale-110 transition duration-300"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            {/* Resume Button */}
            <div className="hidden md:flex">
              <a
                href="https://drive.google.com/file/d/1qtjoVColjfNVBpPcskDO6LOCS7ydMILb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 flex items-center transition"
              >
                <FaFolderOpen className="mr-2" />
                RESUME
              </a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-2xl"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden inset-0 min-h-screen bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 text-xl font-medium text-white z-40">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 hover:text-blue-400 transition duration-200"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1qtjoVColjfNVBpPcskDO6LOCS7ydMILb/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white font-bold px-6 py-2 flex items-center hover:bg-blue-700 transition"
            >
              <FaFolderOpen className="mr-2" />
              RESUME
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Nav;
