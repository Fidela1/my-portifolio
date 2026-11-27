import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaNodeJs, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact, SiNextdotjs, SiTypescript, SiPostgresql, SiMongodb,
  SiTailwindcss, SiPrisma, SiExpress, SiPython, SiDjango,
  SiLaravel, SiMysql
} from "react-icons/si";

import busImage from "../assets/bus.jpg";
import chatImage from "../assets/chat.jpg";

const TECH = {
  "React.js":    { Icon: SiReact,       color: "#61DAFB" },
  "Next.js":     { Icon: SiNextdotjs,   color: "#FFFFFF" },
  "TypeScript":  { Icon: SiTypescript,  color: "#3178C6" },
  "Node.js":     { Icon: FaNodeJs,      color: "#5FA04E" },
  "Express":     { Icon: SiExpress,     color: "#FFFFFF" },
  "PostgreSQL":  { Icon: SiPostgresql,  color: "#6E93E8" },
  "MongoDB":     { Icon: SiMongodb,     color: "#47A248" },
  "MySQL":       { Icon: SiMysql,       color: "#4479A1" },
  "Prisma":      { Icon: SiPrisma,      color: "#FFFFFF" },
  "Tailwind CSS":{ Icon: SiTailwindcss, color: "#06B6D4" },
  "Python":      { Icon: SiPython,      color: "#4B8BBE" },
  "Django":      { Icon: SiDjango,      color: "#44B78B" },
  "Laravel":     { Icon: SiLaravel,     color: "#FF2D20" },
};

const isLink = (url) => typeof url === "string" && url.startsWith("http");

const getUrlLabel = (url) => {
  try {
    return new URL(url).host;
  } catch {
    return "localhost:3000";
  }
};

function ProjectCard({ project, featured = false, reverse = false, badge = null }) {
  // Each card gets its own visibility state and ref
  const [cardVisible, setCardVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle visibility so it animates every time you scroll past
        setCardVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const status = project.status ?? (isLink(project.liveDemo) ? "Live" : null);
  const isLive = status === "Live";

  return (
    <article
      ref={cardRef} // Attach the ref to the article
      className={`group relative flex flex-col rounded-2xl border backdrop-blur-sm overflow-hidden transition-all duration-1000 ease-out hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] ${
        cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${
        featured
          ? `${reverse ? "md:flex-row-reverse" : "md:flex-row"} bg-gradient-to-br from-[#0b2038] to-[#0a192f]/60 border-cyan-500/30`
          : "bg-[#0a192f]/60 border-gray-800"
      }`}
    >
      {/* Screenshot stage */}
      <div
        className={`p-5 md:p-6 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 ${
          featured ? "md:w-[55%]" : ""
        }`}
      >
        <div className="rounded-xl overflow-hidden border border-gray-700/60 bg-[#0a192f] shadow-[0_20px_60px_-20px_rgba(6,182,212,0.35)]">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#0d1f3a] border-b border-gray-700/60">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70"></span>
            <div className="ml-3 flex-1 truncate rounded-md bg-[#071428] px-3 py-1 text-xs text-gray-400">
              {getUrlLabel(project.liveDemo)}
            </div>
            {status && (
              <span
                className={`inline-flex items-center gap-1.5 text-[11px] font-semibold ${
                  isLive ? "text-green-400" : "text-amber-400"
                }`}
              >
                <span className="relative flex h-1.5 w-1.5">
                  {isLive && (
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  )}
                  <span
                    className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                      isLive ? "bg-green-500" : "bg-amber-400"
                    }`}
                  ></span>
                </span>
                {status}
              </span>
            )}
          </div>

          <div className="relative aspect-[16/10] overflow-hidden bg-[#071428]">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              loading="lazy"
              className="w-full h-full object-cover object-top group-hover:object-bottom transition-[object-position] duration-[4000ms] ease-in-out"
            />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className={`flex flex-col p-7 md:p-8 ${featured ? "md:w-[45%] md:justify-center" : "flex-1"}`}>
        {badge && (
          <span className="self-start mb-4 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
            {badge}
          </span>
        )}

        <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-gray-300 text-base leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2.5 mb-8">
          {project.technologies.map((tech) => {
            const entry = TECH[tech];
            return (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#112240]/80 border border-cyan-500/15 text-gray-200 text-xs font-medium"
              >
                {entry && <entry.Icon size={14} style={{ color: entry.color }} />}
                {tech}
              </span>
            );
          })}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3">
          <a
            href={project.liveDemo}
            {...(isLink(project.liveDemo) ? { target: "_blank", rel: "noreferrer" } : {})}
            className="inline-flex items-center gap-2 bg-cyan-500 text-[#020c1b] px-5 py-2.5 rounded-full font-bold text-sm hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
          >
            Live demo
            <FaExternalLinkAlt size={12} />
          </a>
          <a
            href={project.github}
            {...(isLink(project.github) ? { target: "_blank", rel: "noreferrer" } : {})}
            className="inline-flex items-center gap-2 border border-gray-500 text-gray-200 px-5 py-2.5 rounded-full font-medium text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            <FaGithub size={16} />
            Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  // Observer for the Header only
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Smart Bus Booking",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      technologies: ["React.js", "Node.js", "PostgreSQL"],
      liveDemo: "#",
      github: "#",
      image: busImage,
    },
    {
      title: "Real-Time Chat App",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      liveDemo: "#",
      github: "#",
      image: chatImage,
    },
  ];

  const [first, ...rest] = projects;

  return (
    <section id="projects" className="relative bg-[#020c1b] text-white px-6 md:px-10 py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header with its own Ref */}
        <div ref={headerRef} className="flex flex-col items-center mb-16 text-center">
          <div 
            className={`flex items-center gap-4 mb-4 transition-all duration-700 ease-out ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="h-[2px] w-8 bg-cyan-500"></div>
            <span className="text-cyan-400 font-semibold tracking-widest text-xs uppercase">
              Featured Work
            </span>
            <div className="h-[2px] w-8 bg-cyan-500"></div>
          </div>
          <h2 
            className={`text-3xl md:text-5xl font-bold transition-all duration-700 delay-150 ease-out ${
              headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projects
            </span>
          </h2>
        </div>

        {/* Cards Container - Notice we no longer pass isVisible here, the card handles it itself */}
        <div className="flex flex-col gap-8">
          <ProjectCard project={first} featured badge="Featured" />

          {rest.length === 1 && <ProjectCard project={rest[0]} featured reverse />}

          {rest.length > 1 && (
            <div
              className={`grid gap-8 md:grid-cols-2 ${
                rest.length >= 3 ? "lg:grid-cols-3" : ""
              }`}
            >
              {rest.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          )}
        </div>

        {/* Button remains static or can get its own observer, keeping it simple here */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/Fidela1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-gray-500 text-gray-200 px-8 py-3.5 rounded-full font-medium hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 bg-[#0a192f]/50"
          >
            <FaGithub size={18} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}