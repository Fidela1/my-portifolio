import React, { useEffect, useRef, useState } from "react";
import { 
  SiJavascript, SiPython, SiNodedotjs, SiMongodb, SiPostgresql, 
  SiReact, SiTailwindcss, SiTypescript, SiNextdotjs,
  SiGit, SiGithub, SiFigma, SiPrisma, SiMysql, SiVercel,
  SiPostman, SiPhp, SiHtml5
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const coreStack = [
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#699ECA" },
    { name: "Prisma", icon: SiPrisma, color: "#ffffff" }, 
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  ];

  const alsoWorkedWith = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Python", icon: SiPython, color: "#4B8BBE" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "MySQL", icon: SiMysql, color: "#00758F" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  ];

  const tools = [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#ffffff" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative bg-[#020c1b] text-white px-6 md:px-10 py-24 overflow-hidden"
    >
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Header with Animation */}
        <div 
          className={`flex flex-col items-center mb-16 text-center transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-8 bg-cyan-500"></div>
            <span className="text-cyan-400 font-semibold tracking-widest text-xs uppercase">
              My Toolbox
            </span>
            <div className="h-[2px] w-8 bg-cyan-500"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-base md:text-lg">
            The core technologies I use daily, and the tools I've worked with.
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-6">
          
          {/* --- LARGE CARD: CORE STACK (Animates with a slight delay) --- */}
          <div 
            className={`lg:col-span-7 bg-gradient-to-br from-[#0a192f]/90 to-[#112240]/50 border border-cyan-500/30 rounded-3xl p-8 md:p-10 relative overflow-hidden group transition-all duration-1000 delay-150 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500"></div>

            <div className="mb-8 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                Core Stack
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-semibold tracking-wider uppercase">Daily Driver</span>
              </h3>
              <p className="text-gray-300 text-sm md:text-base font-medium">
                The stack I build with every day.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
              {coreStack.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div 
                    key={i} 
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#112240]/50 border border-gray-700/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:bg-[#112240] group/item cursor-default"
                  >
                    <Icon 
                      size={32} 
                      style={{ color: skill.color }} 
                      className="group-hover/item:scale-110 transition-transform duration-300 shrink-0" 
                    />
                    <span className="text-lg font-medium text-white group-hover/item:text-cyan-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- RIGHT SIDE: TWO SMALLER CARDS (Animates with a longer delay) --- */}
          <div 
            className={`lg:col-span-5 flex flex-col gap-6 transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            
            {/* SMALLER CARD 1: ALSO WORKED WITH */}
            <div className="bg-[#0a192f]/60 border border-gray-800 rounded-3xl p-6 md:p-8 flex-1 flex flex-col justify-center transition-colors duration-300 hover:border-gray-600">
              <h3 className="text-lg font-semibold text-white mb-4">Also worked with</h3>
              <div className="flex flex-wrap gap-2.5">
                {alsoWorkedWith.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#112240]/80 border border-gray-700/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:bg-[#112240] cursor-default"
                    >
                      <Icon size={16} style={{ color: skill.color }} className="shrink-0" />
                      <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SMALLER CARD 2: TOOLS */}
            <div className="bg-[#0a192f]/60 border border-gray-800 rounded-3xl p-6 md:p-8 flex-1 flex flex-col justify-center transition-colors duration-300 hover:border-gray-600">
              <h3 className="text-lg font-semibold text-white mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2.5">
                {tools.map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={i} 
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#112240]/80 border border-gray-700/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:bg-[#112240] cursor-default"
                    >
                      <Icon size={16} style={{ color: skill.color }} className="shrink-0" />
                      <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}