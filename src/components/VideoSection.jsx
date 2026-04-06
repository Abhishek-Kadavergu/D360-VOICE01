import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  useGSAP(() => {
    gsap.from("#video-container", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: "#video-section",
        start: "top 85%",
      },
      ease: "power3.out",
    });
  });

  return (
    <section id="video-section" className="relative w-screen bg-[#070B19] flex justify-center items-center pb-24 pt-4 px-4 sm:px-8 lg:px-12 z-20">
      {/* Background glow effects to blend with hero */}
      <div className="glow-orb bg-indigo-500 w-[30vw] h-[30vw] bottom-[-10%] left-[20%] blur-[120px]"></div>
      
      <div 
        id="video-container" 
        className="relative w-full max-w-[60rem] mx-auto rounded-2xl md:rounded-[2rem] overflow-hidden glassmorphism p-2 sm:p-4 shadow-[0_0_40px_rgba(99,102,241,0.15)] border border-white/10 group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <video
          src="/videos/d360-video.webm"
          className="w-full h-auto rounded-xl md:rounded-[1.5rem] object-cover relative z-10"
          controls
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
};

export default VideoSection;
