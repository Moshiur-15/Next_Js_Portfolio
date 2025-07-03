"use client";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Banner() {
  return (
    <section
      id="home"
      className="py-14 bg-slate-100 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Grid */}
      <RetroGrid />

      {/* Main Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center justify-between container mx-auto px-4">
        <div>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold uppercase text-gray-800 dark:text-white mb-2">
            HI, I'M <span className="text-blue-600">MOSHIUR</span>
          </h1>
          <h2 className="text-xl text-gray-700 dark:text-gray-300 mb-4">
            Junior MERN Stack Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm xl:text-lg mb-6">
            Skilled in building responsive and dynamic web applications with
            React, Next.Js, Firebase, and MongoDB, with a strong focus on user
            experience. Always eager to learn and explore modern technologies.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mb-6">
            <a
              href="mailto:masiurislam28@gmail.com"
              target="_blank"
              className="bg-red-500 hover:bg-red-600 p-3 rounded-full text-white transition duration-300"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://github.com/Moshiur-15"
              target="_blank"
              className="bg-gray-800 hover:bg-black p-3 rounded-full text-white transition duration-300"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/moshiur-islam28/"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-800 p-3 rounded-full text-white transition duration-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1x1vF0DVvh86hwBhrLC7vWfpv2SnapKa4/view?usp=sharing"
            target="_blank"
            className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 uppercase transition duration-300"
          >
            Open Resume
          </a>
        </div>

        {/* Image Section with BorderBeam */}
        <div className="relative w-full md:max-w-lg h-[350px] md:h-[420px] lg:h-[480px] mx-auto overflow-hidden">
          <img
            src="https://i.ibb.co.com/4ZKVw6V2/d077cfa1-cdc7-41db-b345-f5324992cc38.jpg"
            className="w-full h-full object-cover border border-slate-100"
            alt="Moshiur Islam"
          />
        </div>
      </div>
    </section>
  );
}
