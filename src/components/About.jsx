import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // help in making video into full screen
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative z-30 mb-16 mt-36 flex flex-col items-center gap-5 px-4">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Smart Conversations. Real Insights.
        </p>

        <AnimatedTitle
          title="Turn Every Call Into <br />Act<b>i</b>onable Intelligence"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>
            D360 Voice captures conversations, understands intent, and delivers
            structured insights — automatically.
          </p>
          {/* <p className="text-gray-500">
            24/7 AI call handling with human-like conversations. Real-time
            intent detection, insight extraction, CRM integration, IVR
            navigation, and scale — your AI voice agent that never misses a
            call.
          </p> */}
        </div>
      </div>

      <div className="relative z-10 h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="images/image08.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
