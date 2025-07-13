import { BorderBeam } from "@/components/magicui/border-beam";
import { RetroGrid } from "@/components/magicui/retro-grid";
import { Download, Mail } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen py-20 flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <RetroGrid />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium text-blue-300 mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Available for work
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Moshiur Islam
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Full-stack developer passionate about creating exceptional digital
            experiences. I specialize in modern web technologies and love
            turning ideas into reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105">
              <a
                href="https://drive.google.com/file/d/1qtjoVColjfNVBpPcskDO6LOCS7ydMILb/view?usp=sharing"
                target="_blank"
                className="relative z-10 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>

            <button className="group px-8 py-3 border-2 border-gray-600 rounded-full text-gray-300 font-medium hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
              <a
                href="mailto:masiurislam28@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
              </a>
            </button>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="relative">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-700">
              <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <img
                  src="https://i.ibb.co.com/4ZKVw6V2/d077cfa1-cdc7-41db-b345-f5324992cc38.jpg"
                  className="w-full h-full object-cover"
                  alt="Moshiur Islam"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
