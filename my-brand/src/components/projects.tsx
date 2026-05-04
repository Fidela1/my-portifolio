export default function Projects() {
  const projects = [
    {
      title: "Smart Bus Booking",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      technologies: ["React.js", "Node.js", "PostgreSQL"],
      liveDemo: "#",
      github: "#",
      image: "src/assets/bus.jpg" // Add your image path
    },
    {
      title: "Real-Time Chat App",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      liveDemo: "#",
      github: "#",
      image: "/src/assets/chat.jpg" // Add your image path
    }
  ];

  return (
    <section id="projects" className="bg-[#0D1B2A] text-white px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex gap-6">
                  <a
                    href={project.liveDemo}
                    className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.github}
                    className="text-gray-400 hover:text-gray-300 font-medium text-sm transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}