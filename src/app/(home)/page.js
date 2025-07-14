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
import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactForm from "../components/ContactForm";

const Portfolio = () => {
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
        "HouseLease is a comprehensive full-stack property rental platform that allows users to list, search, and rent properties seamlessly. The platform includes robust role-based access for admins and renters, secure authentication with NextAuth.js, and payment integration through Stripe. It's designed with a clean, responsive UI and supports advanced features like property management, user dashboards, and secure password hashing using Bcrypt.",
      image: "https://i.ibb.co/FZqBDrK/Screenshot-2025-07-13-101357.png",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "Shadcn/UI",
        "Node.js",
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
        "This platform simplifies the management of medical camps by handling volunteer registration, scheduling, and participant coordination. Built with React and Express, it features a modern UI, secure data flow, form validation with React Hook Form, and real-time database updates via Firebase. It also includes payment functionality through Stripe and insightful visualizations using Recharts.",
      image: "/medicamp.png",
      tags: [
        "React.js",
        "React Hook Form",
        "Tailwind CSS",
        "flowbite-react",
        "Node.js",
        "Express.js",
        "Firebase",
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
        "NextEra is a sleek and modern blogging platform that offers rich text editing, markdown support, blog listing, and smooth user experience. It allows users to read, write, and manage blog posts with an intuitive interface. With Framer Motion animations and advanced tables via ka-table, this platform focuses on both aesthetics and performance for bloggers.",
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
        "GameZone is an interactive platform where users can discover popular games, rate them, write detailed reviews, and manage personal wishlists. Built with React and Express, the app delivers a seamless user experience with organized game listings, rating functionality, and user-specific data handling. It offers a clean, responsive layout and an intuitive review system tailored for gamers.",
      image: "/gamezone.png",
      tags: [
        "React.js",
        "Tailwind CSS",
        "daisyUI",
        "Node.js",
        "Express.js",
        "MongoDB",
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
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden ">
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
          className="fixed cursor-pointer bottom-8 right-8 w-12 h-12 bg-blue-600/70 hover:bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg active:scale-95 transition-all duration-200 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;
