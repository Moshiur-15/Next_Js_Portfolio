import React from "react";
import Project1 from "./Project1";
import Project3 from "./Project3";
import Project2 from "./Project2";
import { FlipText } from "@/components/magicui/flip-text";

const Project = () => {
  return (
    <div className="py-12 lg:py-20 container mx-auto px-4" id="project">
      <h2 className="text-3xl font-bold uppercase lg:scale-y-125 text-gray-700 text-center mb-5 lg:mb-15">
        <FlipText>feature Projects</FlipText>
      </h2>
      <section className="grid md:grid-cols-2 lg:grid-cols-3  gap-6">
        <Project1 />
        <Project2 />
        <Project3/>
      </section>
    </div>
  );
};

export default Project;
