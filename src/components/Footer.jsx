import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative w-screen overflow-hidden bg-black pt-16 pb-8 border-t border-white/5">

      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-20 flex flex-col items-center">
        {/* Powered By Section */}
        <div className="w-full flex flex-col items-center justify-center mb-12 sm:mb-16 gap-4 sm:gap-6 pb-12 sm:pb-16 bg-transparent">
          <p className="text-white text-lg sm:text-2xl font-bold tracking-[0.3em] uppercase opacity-80">
            Powered By
          </p>
          <a href="https://piazza-website-beta.vercel.app">
            <img
              src="/images/piazza-logo-bg.png"
              alt="Piazza Consulting Group"
              className="w-full max-w-[150px] sm:max-w-[250px] md:max-w-[300px] object-contain hover:scale-105 transition-transform duration-500 mix-blend-screen bg-transparent grayscale contrast-125 brightness-125"
            />
          </a>
        </div>

        {/* Top 4-column layout */}
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 pb-12 mb-12 border-b border-white/10">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white tracking-widest uppercase font-general">
              D360 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">VOICE</span>
            </h2>
            <p className="text-sm font-light text-white/60 leading-relaxed max-w-xs">
              Securely adopt AI with built-in data protection, governance, and compliance.
            </p>
          </div>

          {/* 2. Products Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Products</h3>
            <div className="flex flex-col gap-3">
              <a
                href="/#voice"
                className="text-sm font-light text-white/60 hover:text-white transition-colors duration-300 w-fit"
              >
                Voice
              </a>
              <a
                href="/#intelligence"
                className="text-sm font-light text-white/60 hover:text-white transition-colors duration-300 w-fit"
              >
                Intelligence
              </a>
              <Link
                to="/contact-us"
                className="text-sm font-light text-white/60 hover:text-white transition-colors duration-300 w-fit"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* 3. Company Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://piazza-website-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-300 hover:to-purple-300 transition-all duration-300 w-fit"
              >
                Piazza Consulting Group
              </a>
            </div>
          </div>

          {/* 4. Connect Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/piazzaconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glassmorphism text-white/80 hover:text-indigo-400 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/piazzaconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glassmorphism text-white/80 hover:text-indigo-400 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs font-light text-white/50 text-center md:text-left">
            © 2026 PCG. All rights reserved.
          </p>
          <p className="text-xs font-light text-white/50 text-center md:text-right">
            Designed for the <span className="font-medium text-white/70">AI Era.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
