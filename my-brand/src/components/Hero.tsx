export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[#020c1b] text-white pt-30 px-6 md:px-10 py-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Text - This will align with About text */}
          <div>
            <h2 className="text-2xl md:text-3xl mb-4">
              Hello, I'm <span className="text-cyan-400 font-bold">Fidela</span>
            </h2>

            <p className="text-gray-400 mb-6 text-sm md:text-base">
              A passionate Web Developer building modern and <br /> responsive web applications
            </p>

            <div className="flex gap-4 flex-wrap">
                <a 
                href="#projects"
                className="bg-cyan-500 px-5 py-2 rounded hover:bg-cyan-400 transition-colors inline-block"
              >
                View my work
              </a>
              <a 
              href="#contact"
              className="border border-cyan-500 px-5 py-2 rounded hover:bg-cyan-500">
                Contact me
              </a>
            </div>
          </div>

          {/* Image - This will align with About image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-cyan-400 overflow-hidden">
              <img
                src="src/assets/profile.jpg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}