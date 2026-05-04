export default function Services() {
  const services = [
    {
      title: "Frontend Development",
      description: "Building responsive, fast, and beautiful user interfaces that work seamlessly across all devices.",
      features: [
        "React.js single-page apps",
        "Responsive HTML & CSS layouts",
        "Interactive UI components",
        "Performance optimization"
      ]
    },
    {
      title: "Backend Development",
      description: "Developing robust server-side applications and business logic that power your digital products.",
      features: [
        "Node.js & Express.js APIs",
        "Authentication & authorization",
        "Third-party integrations",
        "Server architecture design"
      ]
    },
    {
      title: "API Development",
      description: "Designing and building clean, well-documented REST APIs that connect your frontend and backend seamlessly.",
      features: [
        "RESTful API design",
        "API documentation",
        "Security",
        "Testing & validation"
      ]
    },
    {
      title: "Database Design",
      description: "Structuring and optimizing databases to store your data efficiently, safely, and at scale.",
      features: [
        "PostgreSQL schema design",
        "MongoDB database modeling",
        "Query optimization",
        "Data migration support"
      ]
    }
  ];

  return (
    <section id="services" className="bg-[#020c1b] text-white px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            I've documented everything I've learned from years of personal study.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-cyan-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-cyan-400">▹</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}