export default function About() {
  return (
    <section
      id="about"
      className="bg-[#020c1b] text-white px-6 md:px-10 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
     
          <div className="hidden md:flex justify-center md:justify-start">
  <div className="w-64 md:w-72 border-2 border-cyan-400 rounded-lg overflow-hidden">
    <img
      src="src/assets/about.jpeg"
      alt="profile"
      className="w-full h-full object-cover"
    />
  </div>
</div>
          <div>
            <h3 className="font-bold text-2xl mb-4">
              About <span className="text-cyan-400">Me</span>
            </h3>

            <p className="text-gray-400 mb-4 text-sm md:text-base">
              When I finished my High school I realised how much I had left to learn. A traditional education had given
               me specialised knowledge but hadn't set me up with the skills needed to succeed in an environment of 
               constant change.So I set out to 
            </p>

            <p className="text-gray-400 mb-6 text-sm md:text-base">
              When I finished my High school I realised how much I had left to learn. A traditional education had given
               me specialised knowledge but hadn't set me up with the skills needed to succeed in an environment of 
               constant change.So I set out to 
            </p>

            <button className="bg-cyan-500 px-5 py-2 rounded hover:bg-cyan-400 transition-colors">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}