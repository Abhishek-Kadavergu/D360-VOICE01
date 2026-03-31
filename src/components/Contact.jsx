import { useNavigate } from "react-router-dom";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div
      id="contact"
      className="relative min-h-[70vh] w-screen px-6 sm:px-10 py-24 bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] sm:w-[50vw] sm:h-[50vw] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] sm:w-[30vw] sm:h-[30vw] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl rounded-3xl border border-white/10 glassmorphism p-10 sm:p-20 flex flex-col items-center text-center overflow-hidden">
        {/* Animated glowing border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 opacity-30 animate-pulse"></div>

        <div className="relative z-20 flex flex-col items-center">
          <p className="mb-6 font-general text-xs sm:text-sm uppercase tracking-[0.2em] text-blue-100/60 font-semibold inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Elevate Your Business
          </p>

          <AnimatedTitle
            title="Build the F<b>u</b>ture of <br/> Voice Intel<b>l</b>igence."
            containerClass="special-font !md:text-[5.5rem] w-full font-zentry !text-4xl sm:!text-5xl lg:!text-7xl !font-black !leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-blue-50 via-white to-blue-200"
          />

          <p className="mt-8 mb-12 max-w-2xl font-circular-web text-base sm:text-xl text-blue-100/80 leading-relaxed">
            Join us in redefining how businesses understand, automate, and act
            on conversations — powered by real-time AI.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
            <div
              onClick={() => navigate("/contact-us")}
              className="w-full sm:w-auto"
            >
              <Button
                title="Get Started"
                rightIcon={<TiLocationArrow />}
                containerClass="w-full justify-center !bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white border-0 hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* <button 
              onClick={() => navigate("/contact-us")}
              className="w-full sm:w-auto group relative z-10 cursor-pointer overflow-hidden rounded-full border border-blue-400/50 bg-black/40 backdrop-blur-sm px-8 py-3 text-blue-100 hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
            >
              <span className="relative inline-flex items-center gap-2 font-general text-xs sm:text-sm uppercase tracking-wider font-semibold">
                Contact Us
              </span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
