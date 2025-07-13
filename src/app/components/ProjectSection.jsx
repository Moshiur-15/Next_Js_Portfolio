import { Eye, Github, Star } from "lucide-react";
import React from "react";

const ProjectSection = ({ projects }) => {
  return (
    <section id="project" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4 inline mr-1" />
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  {/* <Code className="w-16 h-16 text-gray-500" /> */}
                  <img
                    src={project.image}
                    className="w-full h-full object-cover"
                    alt="Moshiur Islam"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <a
                      href={project.live}
                      target="_blank"
                      className="flex items-center px-4 py-2 bg-blue-500 rounded-lg text-white text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center px-4 py-2 bg-gray-700 rounded-lg text-white text-sm font-medium hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 hover:bg-blue-500 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
