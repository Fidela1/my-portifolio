import React from "react";
import {
  FaGithub, FaLinkedinIn, FaArrowRight, FaNodeJs, FaGitAlt
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiPostgresql, SiTailwindcss
} from "react-icons/si";
import profileHero from "../assets/profile_hero.jpg";

const ORBIT_ICONS = [
  { Icon: SiNextdotjs,    deg: 0,   color: "text-white",       glow: "rgba(255,255,255,0.5)", anim: "animate-float" },
  { Icon: SiTypescript,   deg: 60,  color: "text-[#3178C6]",   glow: "rgba(49,120,198,0.5)",  anim: "animate-float-delayed" },
  { Icon: SiTailwindcss,  deg: 120, color: "text-[#06B6D4]",   glow: "rgba(6,182,212,0.5)",   anim: "animate-bounce-slow" },
  { Icon: FaGitAlt,       deg: 180, color: "text-[#F05032]",   glow: "rgba(240,80,50,0.5)",   anim: "animate-float" },
  { Icon: SiPostgresql,   deg: 240, color: "text-[#4169E1]",   glow: "rgba(65,105,225,0.5)",  anim: "animate-float-delayed" },
  { Icon: FaNodeJs,       deg: 300, color: "text-[#339933]",   glow: "rgba(51,153,51,0.5)",   anim: "animate-bounce-slow" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[#020c1b] text-white pt-28 pb-20 px-6 md:px-10 min-h-[calc(100vh-70px)] flex items-center overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto w-full z-10 flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">

        <div className="w-full md:w-[55%] flex flex-col items-start animate-fade-up">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold tracking-wider text-xs uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for work · Remote or on-site
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight flex flex-wrap gap-x-3 leading-tight">
            Fidela <span className="text-white">Tuyizere</span>
          </h1>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-white leading-snug">
            Building Technology That <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Solves Real-World Problems.</span>
          </h2>

          <p className="text-gray-300 mb-6 max-w-lg text-lg leading-relaxed">
            I'm a Full-Stack Developer passionate about building innovative, scalable, and reliable software solutions that solve real-world problems and create meaningful impact.
          </p>

          <div className="flex flex-col gap-5 w-full">
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href="#projects"
                className="group bg-cyan-500 text-[#020c1b] px-8 py-3.5 rounded-full font-bold hover:bg-cyan-400 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
              >
                View my work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="border border-gray-500 px-8 py-3.5 rounded-full font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 bg-[#0a192f]/50 backdrop-blur-sm"
              >
                Contact me
              </a>

              <div className="flex items-center gap-3 ml-2">
                <a
                  href="https://github.com/Fidela1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="bg-[#112240] p-3.5 rounded-full hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all text-gray-300 border border-gray-600"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/tuyizere-fidela-04507b251/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="bg-[#112240] p-3.5 rounded-full hover:bg-cyan-500 hover:text-white hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all text-gray-300 border border-gray-600"
                >
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>

            
          </div>
        </div>

        <div className="w-full md:w-[45%] relative flex justify-center items-center h-[400px] md:h-[500px]">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] bg-cyan-500/25 rounded-full blur-[80px]"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] border border-cyan-500/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[440px] md:h-[440px] border border-cyan-500/10 rounded-full border-dashed animate-[spin_40s_linear_infinite]"></div>

          <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-[#0a192f] ring-2 ring-cyan-500/50">
            <img
              src={profileHero}
              alt="Fidela Tuyizere"
              className="w-full h-full object-cover object-[center_15%] scale-[1.6] brightness-105 contrast-105 saturate-[0.8]"
            />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] pointer-events-none"></div>
          </div>

          {ORBIT_ICONS.map(({ Icon, deg, color, glow, anim }) => (
            <div
              key={deg}
              className="absolute top-1/2 left-1/2 w-[300px] h-[300px] md:w-[380px] md:h-[380px] -ml-[150px] -mt-[150px] md:-ml-[190px] md:-mt-[190px] pointer-events-none"
              style={{ transform: `rotate(${deg}deg)` }}
            >
              <div className="absolute top-0 left-0 w-full flex justify-center">
                <div
                  className="-translate-y-1/2 pointer-events-auto z-20"
                  style={{ transform: `translateY(-50%) rotate(${-deg}deg)` }}
                >
                  <div className={`${anim} hover:scale-125 transition-transform cursor-pointer ${color}`} style={{ filter: `drop-shadow(0 0 10px ${glow})` }}>
                    <Icon size={34} />
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 5s ease-in-out infinite; animation-delay: 2s; }
        .animate-bounce-slow { animation: bounce-slow 3.5s ease-in-out infinite; }
        .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) {
          .animate-float, .animate-float-delayed, .animate-bounce-slow, .animate-fade-up { animation: none; }
        }
      `}</style>
    </section>
  );
}