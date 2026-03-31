import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from("#hero-content > *", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from("#hero-image", {
      x: 50,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power3.out",
    });
  });

  return (
    <div
      id="voice"
      className="relative min-h-dvh w-screen overflow-hidden bg-[#070B19] mesh-bg flex items-center pt-24 pb-12"
    >
      {/* Background glow effects */}
      <div className="glow-orb bg-indigo-500 w-[40vw] h-[40vw] top-[-10%] left-[-10%] blur-[120px]"></div>
      <div className="glow-orb bg-purple-600 w-[30vw] h-[30vw] bottom-[-10%] right-[10%] blur-[120px]"></div>
      <div className="glow-orb bg-pink-500 w-[20vw] h-[20vw] top-[20%] right-[-5%] blur-[100px]"></div>

      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        {/* Left Side Content */}
        <div
          id="hero-content"
          className="w-full lg:w-[55%] xl:w-[60%] flex flex-col justify-center gap-8 mt-10 lg:mt-0 text-left"
        >
          <div className="inline-flex items-center gap-3 glassmorphism px-4 py-2 rounded-full w-fit max-w-full">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            <p className="text-blue-100/80 text-xs sm:text-sm font-semibold tracking-wider uppercase whitespace-nowrap overflow-hidden text-ellipsis">
              AI-powered • Real-time • Secure
            </p>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black font-general text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-200 leading-tight tracking-tight">
            Smart <br className="hidden xl:block" /> Conversations. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Real Insights.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-100/90 font-medium max-w-xl mt-2 lg:max-w-2xl">
            Turn every call into actionable intelligence with AI-powered voice
            analysis.
          </p>

          <p className="text-base sm:text-lg text-blue-100/60 font-robert-regular max-w-lg lg:max-w-xl">
            Automate compliance, extract intelligence, and boost team efficiency
            in real-time.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-4">
            <div
              onClick={() => navigate("/contact-us")}
              className="w-full sm:w-auto"
            >
              <Button
                id="get-started"
                title="Get Started"
                rightIcon={<TiLocationArrow />}
                containerClass="w-full justify-center !bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white border-0 hover:scale-105 transition-transform duration-300 animate-pulse-glow"
              />
            </div>

            {/* <a
              href="#about"
              className="group relative w-full sm:w-auto z-10 flex items-center justify-center cursor-pointer overflow-hidden rounded-full border border-blue-400/50 bg-transparent px-7 py-3 text-blue-100 hover:bg-blue-400/10 transition-colors duration-300"
            >
              <span className="relative inline-flex items-center gap-2 font-general text-xs uppercase tracking-wider">
                Watch Demo
              </span>
            </a> */}
          </div>
        </div>

        {/* Right Side Visual */}
        <div
          id="hero-image"
          className="w-full lg:w-[45%] xl:w-[40%] flex justify-center lg:justify-end relative"
        >
          <div className="relative w-full max-w-[500px] aspect-square lg:aspect-auto lg:h-[600px] animate-float">
            {/* Premium Container glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-3xl transform rotate-3 scale-105 blur-lg"></div>

            <div className="relative w-full h-full glassmorphism rounded-3xl p-4 overflow-hidden shadow-[0_0_40px_rgba(99,102,241,0.2)] border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <img
                src="/images/image09.png"
                alt="AI Voice Interface"
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Overlay elements for 'AI' feel */}
              <div
                className="absolute bottom-10 left-[-20px] lg:left-[-40px] glassmorphism px-4 py-3 rounded-2xl border-l-4 border-l-purple-400 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <FiCheckCircle className="text-purple-400 text-xl" />
                  <div className="flex flex-col">
                    <span className="text-xs text-blue-100/60 font-general uppercase">
                      D360 VOICE
                    </span>
                    <span className="text-sm text-white font-bold">
                      BY PIAZZA CONSULTING GROUP
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
