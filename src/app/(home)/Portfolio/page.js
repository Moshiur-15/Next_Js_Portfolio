"use client";
import React, { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Download,
  ChevronRight,
  Code,
  Palette,
  Database,
  Globe,
  Star,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Eye,
  ArrowUp,
} from "lucide-react";
import ContactForm from "@/app/components/ContactForm";
import ProjectSection from "@/app/components/ProjectSection";
import SkillSection from "@/app/components/SkillSection";
import HeroSection from "@/app/components/HeroSection";
import Nav from "@/app/components/Nav";
import AboutSection from "@/app/components/AboutSection";

const UniquePortfolio = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const skills = {
    frontend: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Next.js"],
    backend: [
      "Node.js (Intermediate)",
      "Express.js (Intermediate)",
      "MongoDB (Intermediate)",
      "Mongoose.js (Intermediate)",
    ],
    others: ["Firebase", "Git & GitHub", "NextAuth", "bcryptjs"],
  };

  const projects = [
    {
      id: 1,
      title: "HouseLease Platform",
      description:
        "A full-stack property rental platform with user roles, authentication, and Stripe payments.",
      image: "https://i.ibb.co/FZqBDrK/Screenshot-2025-07-13-101357.png",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn/UI",
        "Magic UI",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "NextAuth.js",
        "Bcrypt",
        "Stripe",
      ],
      github: "https://github.com/Moshiur-15/house-lease",
      live: "https://house-lease.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Medi Camp Management System",
      description:
        "A system for managing medical camp schedules, volunteers, and registration.",
      image: "/medicamp.png",
      tags: [
        "React.js",
        "React Hook Form",
        "Tailwind CSS",
        "flowbite-react",
        "Node.js",
        "Express.js",
        "Firebase Authentication",
        "Stripe",
        "Recharts",
      ],
      github: "https://github.com/Moshiur-15/Medi-Camp-Client",
      live: "https://mcms-me.netlify.app/",
      featured: true,
    },
    {
      id: 3,
      title: "NextEra Blog",
      description:
        "A modern blogging platform built with rich text editing, markdown support, and smooth UI.",
      image: "/blog.png",
      tags: [
        "React.js",
        "Tailwind CSS",
        "flowbite-react",
        "Swiper",
        "MongoDB",
        "Express.js",
        "ka-table",
        "Framer Motion",
      ],
      github: "https://github.com/Moshiur-15/nextra-blog-client",
      live: "https://nextera-blog-me.netlify.app/",
      featured: false,
    },
    {
      id: 4,
      title: "GameZone - Game Review App",
      description:
        "A game review app to explore games, view ratings, write reviews, and manage wishlists.",
      image: "/gamezone.png",
      tags: [
        "React.js",
        "Tailwind CSS",
        "daisyUI",
        "Node.js",
        "Express.js",
        "MongoDB Atlas",
      ],
      github: "https://github.com/Moshiur-15/game-zone",
      live: "https://gamezone-me.netlify.app/",
      featured: false,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Nav />

      {/* Hero Section */}
      <HeroSection />
      {/* about */}
      <AboutSection />
      {/* Skills Section */}
      <SkillSection skills={skills} />

      {/* Projects Section */}
      <ProjectSection projects={projects} />

      {/* Contact Section */}
      <ContactForm />

      {/* Scroll to Top Button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed cursor-pointer bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default UniquePortfolio;
