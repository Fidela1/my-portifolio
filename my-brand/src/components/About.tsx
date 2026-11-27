import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animations when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#020c1b] text-white px-6 md:px-10 py-20 overflow-hidden"
    >
      {/* Background ambient glows */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto z-10 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- Left Side: Image (Slides in from Left) --- */}
          <div 
            className={`lg:col-span-5 relative flex justify-center lg:justify-start transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-70 pointer-events-none"></div>

            <div className="relative w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl border border-gray-700/50 ring-2 ring-cyan-500/20 group h-full max-h-[500px]">
              <img
                src="src/assets/about_me.jpg"
                alt="Fidela Tuyizere"
                className="w-full h-full object-cover object-top brightness-110 grayscale-[10%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_0_40px_rgba(0,0,0,0.3)] pointer-events-none"></div>
            </div>

            <div className="absolute -bottom-6 -right-4 bg-[#0a192f] border border-cyan-500/30 p-4 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.2)] hidden sm:block z-20">
              <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                FT
              </p>
            </div>
          </div>

          {/* --- Right Side: Text Content (Slides in from Right with a Delay) --- */}
          <div 
            className={`lg:col-span-7 flex flex-col justify-center transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="h-[2px] w-12 bg-cyan-500"></div>
              <span className="text-cyan-400 font-semibold tracking-widest text-xs uppercase">
                My Story
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Driven by purpose, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                defined by code.
              </span>
            </h3>

            <div className="space-y-4 text-gray-200 text-base md:text-lg leading-relaxed mb-6">
              <p>
                I am a passionate Full-Stack Developer driven to build innovative technology that solves real-world problems. I thrive on continuous learning and turning ideas into practical solutions.
              </p>
              <p>
                From creating intuitive, responsive user interfaces to developing robust backend systems, I enjoy working across the entire development process. I am always eager to tackle challenging problems and build solutions that make a meaningful impact.
              </p>
            </div>

            <div className="border-l-4 border-cyan-500 pl-4 py-1.5 mb-6 bg-gradient-to-r from-cyan-500/5 to-transparent">
              <p className="text-gray-300 italic text-sm md:text-base">
                "I believe the best software is built at the intersection of clean architecture and human empathy."
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <a 
                href="#contact"
                className="group inline-flex items-center gap-2 bg-cyan-500 text-[#020c1b] px-8 py-3.5 rounded-full font-bold hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              >
                Let's work together
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <p className="text-sm font-medium text-gray-400">
                Open to full-time roles & freelance projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}