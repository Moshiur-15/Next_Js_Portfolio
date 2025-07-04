"use client";

import { Particles } from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import NavBer from "../components/NavBer/page";
import Banner from "../components/Banner";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/project/Project";
import Contact from "../components/Contact";

export default function ParticlesPage() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    if (resolvedTheme) {
      setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    } else {
      setColor("#000000");
    }
  }, [resolvedTheme]);

  return (
    <div className="relative bg-gradient-to-r from-slate-100 to-white">
      <div className="sticky z-50 top-3">
        <NavBer />
      </div>
      <Banner />
      <section className="relative">
        <div className="bg-white">
          <About />
        </div>
        <Skills />
        <div className="bg-white">
          <Project />
        </div>
        <Contact />
        <Particles
          className="absolute inset-0 z-0 min-h-screen"
          quantity={150}
          speed={3}
          color={color}
          refresh={true}
        />
      </section>
    </div>
  );
}
