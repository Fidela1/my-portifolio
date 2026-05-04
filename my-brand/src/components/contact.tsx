import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#020c1b] text-white px-6 md:px-10 py-16">
      <div className="max-w-6xl mx-auto">
        
       

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
           
           <h2 className="text-2xl md:text-4xl font-bold mb-8">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
             <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          I'd love to hear from you. Whether you have a question <br/> or just want to say hello, feel free to send me a message.
        </p>
            {/* Email */}
            <div className="flex items-center gap-4">
              <MdEmail className="text-cyan-400 text-2xl" />
              <a 
                href="mailto:fccletaylor@gmail.com"
                className="text-gray-300 hover:text-cyan-400 transition-colors"
              >
                fidelatuyizere4@gmail.com
              </a>
            </div>
            
            {/* Phone */}
            <div className="flex items-center gap-4">
              <FiPhone className="text-cyan-400 text-2xl" />
              <span className="text-gray-300">
                +250 791017472
              </span>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-400 transition-colors font-medium"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}