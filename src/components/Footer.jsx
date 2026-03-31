import { FaInstagram, FaLinkedin } from "react-icons/fa";

const socialLinks = [
  { href: "https://www.instagram.com/piazzaconsulting/", icon: <FaInstagram /> },
  { href: "https://www.linkedin.com/company/piazzaconsulting", icon: <FaLinkedin /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black py-8 text-white border-t border-white/5">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left text-white/80">
          © 2026 PCG. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 md:justify-start text-xl">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition-colors duration-300 ease-in-out hover:text-indigo-400"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:text-white transition-colors text-white/80 md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
