import { Code, Database, Globe } from "lucide-react";
import React from "react";

const SkillSection = ({skills}) => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="bg-gray-800/50 rounded-2xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  {category === "frontend" && <Code className="w-5 h-5" />}
                  {category === "backend" && <Database className="w-5 h-5" />}
                  {category === "others" && <Globe className="w-5 h-5" />}
                </div>
                <h3 className="text-xl font-semibold capitalize">{category}</h3>
              </div>

              <div className="space-y-4 ml-1.5">
                {skillList.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5.5 h-5.5 flex justify-center items-center bg-gray-200 rounded-full">
                      <div className="w-2.5 h-2.5 bg-black rounded-full"></div>
                    </div>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
