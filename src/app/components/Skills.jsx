import React from "react";
import { FlipText } from "@/components/magicui/flip-text";

const Skills = () => {
  return (
    <div className="bg-gray-100">
      
      <section className="sm:py-12 py-8 lg:py-28 container mx-auto px-4" id="skills">
        <h2 className="text-3xl font-bold uppercase text-gray-700 text-center mb-12">
          <FlipText>My Skills</FlipText>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend Skills */}
          <div className="bg-white p-6 shadow-lg hover:shadow-none duration-500 shadow-slate-400/50">
            <h2 className="text-xl font-bold text-gray-700 mb-3">Frontend</h2>
            <ul className="space-y-2 text-gray-700">
              {["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Next.Js"].map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  </div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Backend Skills */}
          <div className="bg-white p-6 shadow-lg hover:shadow-none duration-500 shadow-slate-400/50">
            <h2 className="text-xl font-bold text-gray-700 mb-3">Backend</h2>
            <ul className="space-y-2 text-gray-700">
              {["MongoDB (Intermediate)", "Node.js (Intermediate)", "Express.js (Intermediate)"].map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  </div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Skills */}
          <div className="bg-white p-6 shadow-lg hover:shadow-none duration-500 shadow-slate-400/50">
            <h2 className="text-xl font-bold text-gray-700 mb-3">Others</h2>
            <ul className="space-y-2 text-gray-700">
              {["Firebase", "Git & GitHub"].map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                    <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                  </div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
