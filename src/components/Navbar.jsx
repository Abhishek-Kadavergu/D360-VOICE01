import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  ["Products", "/#products"],
  ["Voice", "/#voice"],
  ["Intelligence", "/#intelligence"],
  ["Contact", "/contact-us"],
];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // If not on home page, keep floating nav applied permanently for styling
    if (location.pathname !== "/") {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
      return;
    }

    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current?.classList.add("floating-nav");
      setIsMobileMenuOpen(false); // Close menu on scroll down
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY, location.pathname]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className={clsx(
        "fixed inset-x-0 top-4 z-50 transition-all duration-700 sm:inset-x-6",
        (currentScrollY > 0 || location.pathname !== "/") && "glassmorphism rounded-lg"
      )}
    >
      <header className="relative w-full">
        <nav className="flex w-full items-center justify-between p-4 px-6 md:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-black font-general tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-400">
              D360 VOICE
            </Link>
          </div>

          {/* Navigation Links Desktop */}
          <div className="hidden md:flex h-full items-center gap-8">
            {navItems.map(([label, href], index) => {
              // Special case for Contact which is a distinct page
              if (href.startsWith("/contact-us")) {
                return (
                  <Link key={index} to={href} className="nav-hover-btn !ms-0">
                    {label}
                  </Link>
                );
              }
              // Hash links for single page scroll
              return (
                <a key={index} href={href} className="nav-hover-btn !ms-0">
                  {label}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={clsx("w-6 h-0.5 bg-blue-100 transition-all duration-300", isMobileMenuOpen && "rotate-45 translate-y-2")} />
            <span className={clsx("w-6 h-0.5 bg-blue-100 transition-all duration-300", isMobileMenuOpen && "opacity-0")} />
            <span className={clsx("w-6 h-0.5 bg-blue-100 transition-all duration-300", isMobileMenuOpen && "-rotate-45 -translate-y-2")} />
          </button>
        </nav>

        {/* Mobile Dropdown */}
        <div className={clsx(
          "absolute top-full left-0 w-full mt-2 glassmorphism rounded-xl flex flex-col items-center gap-6 py-8 transition-all duration-300 md:hidden overflow-hidden",
          isMobileMenuOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 py-0"
        )}>
           {navItems.map(([label, href], index) => (
              href.startsWith("/contact-us") ? (
                <Link key={index} to={href} onClick={() => setIsMobileMenuOpen(false)} className="font-general uppercase text-sm tracking-widest text-blue-100 hover:text-purple-400">
                  {label}
                </Link>
              ) : (
                <a key={index} href={href} onClick={() => setIsMobileMenuOpen(false)} className="font-general uppercase text-sm tracking-widest text-blue-100 hover:text-purple-400">
                  {label}
                </a>
              )
            ))}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
