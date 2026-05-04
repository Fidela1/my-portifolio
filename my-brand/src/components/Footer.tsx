import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-2 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Left Column - Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Fidela</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming businesses through innovative web development solutions. 
              I help brands grow and unlock their digital edge.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Frontend Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Backend Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  API Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Database Design
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Stay Updated Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-3">
              Subscribe to my newsletter for the latest web development insights.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Submit your email"
                className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-400 transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Full Width Bottom Line - No max-width constraint */}
      <div className="w-full border-t border-purple-500/30">
        <div className="max-w-6xl mx-auto px-6 md:px-10 pt-6 pb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Fidela. All rights reserved.
            </p>
            
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:fccletaylor@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <MdEmail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}