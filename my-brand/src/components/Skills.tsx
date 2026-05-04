export default function Skills() {
  const programmingLanguages = [
    { name: "JavaScript", percentage: 95 },
    { name: "Python", percentage: 95 },
    { name: "HTML", percentage: 95 },
    { name: "C++", percentage: 85 },
  ];

  const databasesCloud = [
    { name: "MongoDB", percentage: 80 },
    { name: "PostgreSQL", percentage: 80 },
    { name: "AWS", percentage: 75 },
    { name: "Firebase", percentage: 80 },
  ];

  const webTechnologies = [
    { name: "React", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "Tailwind CSS", percentage: 90 },
    { name: "TypeScript", percentage: 85 },
  ];

  // Circle progress component
  const CircularProgress = ({ percentage, size = 80, strokeWidth = 6 }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#1f2937"
            strokeWidth={strokeWidth}
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#06b6d4"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <span className="absolute text-lg font-bold text-cyan-400">
          {percentage}%
        </span>
      </div>
    );
  };

  return (
    <section id="skills" className="bg-[#0D1B2A] text-white px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Techinical <span className="text-cyan-400">Skills </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-[#020c1b] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-400 text-center mb-8">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {programmingLanguages.map((skill) => (
                <div key={skill.name} className="text-center">
                  <div className="flex justify-center mb-3">
                    <CircularProgress percentage={skill.percentage} size={80} />
                  </div>
                  <span className="text-gray-300 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Databases & Cloud */}
          <div className="bg-[#020c1b] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-400 text-center mb-8">
              Databases & Cloud
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {databasesCloud.map((skill) => (
                <div key={skill.name} className="text-center">
                  <div className="flex justify-center mb-3">
                    <CircularProgress percentage={skill.percentage} size={80} />
                  </div>
                  <span className="text-gray-300 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Web Technologies */}
          <div className="bg-[#020c1b] p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-cyan-400 text-center mb-8">
              Web Technologies
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {webTechnologies.map((skill) => (
                <div key={skill.name} className="text-center">
                  <div className="flex justify-center mb-3">
                    <CircularProgress percentage={skill.percentage} size={80} />
                  </div>
                  <span className="text-gray-300 text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}