import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaDownload } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = ["home", "about", "skills", "services", "projects", "contact"];

  const handleDownloadCV = () => {
    const cvUrl = "src/assets/Fidela_Tuyizere_CV.pdf";
    
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Fidela_Tuyizere_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => document.getElementById(link));
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(links[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  const handleLinkClick = (link: string) => {
    setMenuOpen(false);
    setActiveSection(link);
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="bg-[#0a192f]/90 backdrop-blur-md text-white px-6 md:px-23 py-4 flex justify-between items-center sticky top-0 z-50 border-b border-gray-800">
        
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          Fidela
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className={`capitalize cursor-pointer transition-all relative group ${
                  activeSection === link 
                    ? "text-cyan-400 font-semibold" 
                    : "text-white hover:text-cyan-400"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
              >
                {link}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all ${
                  activeSection === link ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Download Button */}
        <button
          onClick={handleDownloadCV}
          className="hidden md:flex items-center gap-2 bg-purple-500 px-4 py-2 rounded text-sm hover:bg-purple-400 transition-all hover:scale-105"
        >
          <FaDownload className="w-3 h-3" />
          Download CV
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors relative z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Mobile Menu Panel */}
          <div className="fixed top-[65px] right-0 w-80 bg-gradient-to-b from-[#0a192f] to-[#061224] border-l border-t border-gray-800 rounded-l-2xl shadow-2xl z-40 md:hidden animate-slideIn">
            <div className="flex flex-col py-6">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className={`capitalize cursor-pointer px-6 py-3 transition-all mx-2 rounded-lg ${
                    activeSection === link 
                      ? "bg-cyan-500/20 text-cyan-400 font-semibold border-l-4 border-cyan-400" 
                      : "text-gray-300 hover:bg-white/5 hover:text-cyan-400"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link);
                  }}
                >
                  {link}
                </a>
              ))}
              <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-3 mx-4"></div>
              <button
                onClick={() => {
                  handleDownloadCV();
                  setMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 bg-purple-500 mx-4 mt-2 px-4 py-2.5 rounded-lg text-sm hover:bg-purple-400 transition-all hover:scale-105"
              >
                <FaDownload className="w-3 h-3" />
                Download CV
              </button>
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}