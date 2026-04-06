import {
  useState,
  useRef,
  useEffect,
  Children,
  cloneElement,
  isValidElement,
} from "react";
import clsx from "clsx";
import { useMedia } from "react-use";

/** Matches Tailwind `md` breakpoint (viewports smaller than `md` are treated as mobile here). */
const MOBILE_MEDIA = "(max-width: 767px)";

const MOBILE_TILT =
  "perspective(1000px) rotateX(3deg) rotateY(-3deg) scale3d(.98, .98, .98)";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const [isInView, setIsInView] = useState(false);
  const itemRef = useRef(null);
  const isMobile = useMedia(MOBILE_MEDIA);

  const handleMouseMove = (event) => {
    if (!itemRef.current || isMobile) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  useEffect(() => {
    if (!isMobile) {
      setIsInView(false);
      return;
    }
    const el = itemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  const effectiveTransform = isMobile
    ? isInView
      ? MOBILE_TILT
      : ""
    : transformStyle;

  const effectiveTransition = isMobile
    ? "transform 0.5s ease-out"
    : transformStyle
      ? "none"
      : "transform 0.5s ease-out";

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: effectiveTransform,
        transition: effectiveTransition,
      }}
    >
      {Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(child, { inView: isMobile && isInView })
          : child
      )}
    </div>
  );
};

export const BentoCard = ({
  src,
  title,
  description,
  isImage = false,
  inView = false,
}) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const cardRef = useRef(null);
  const isMobile = useMedia(MOBILE_MEDIA);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  const mobileActive = isMobile && inView;
  const glowOpacity = mobileActive ? 0.55 : hoverOpacity;

  return (
    <div
      ref={cardRef}
      className="relative size-full group overflow-hidden bg-black/40 rounded-2xl border border-white/5"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic Glow background */}
      <div
        className="pointer-events-none absolute -inset-px transition duration-500 z-20 mix-blend-screen"
        style={{
          opacity: glowOpacity,
          background: mobileActive
            ? "radial-gradient(400px circle at 50% 45%, rgba(99,102,241,0.2), transparent 80%)"
            : `radial-gradient(400px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(99,102,241,0.15), transparent 80%)`,
        }}
      />

      {isImage ? (
        <img
          src={src}
          alt={title ? "feature image" : ""}
          className={clsx(
            "absolute left-0 top-0 size-full object-cover object-center transition-transform duration-700",
            mobileActive
              ? "scale-105 opacity-100"
              : "scale-100 opacity-80 group-hover:scale-105 group-hover:opacity-100"
          )}
        />
      ) : (
        <video
          src={src}
          loop
          muted
          autoPlay
          playsInline
          className={clsx(
            "absolute left-0 top-0 size-full object-cover object-center transition-transform duration-700",
            mobileActive
              ? "scale-105 opacity-100"
              : "scale-100 opacity-80 group-hover:scale-105 group-hover:opacity-100"
          )}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-500"></div>

      <div className="relative z-30 flex size-full flex-col justify-end p-6 sm:p-8 text-blue-50 h-full">
        <div
          className={clsx(
            "transform transition-transform duration-500",
            mobileActive
              ? "translate-y-0"
              : "translate-y-4 group-hover:translate-y-0"
          )}
        >
          <h1 className="bento-title special-font tracking-tight leading-none mb-3 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-50 to-blue-200">
            {title}
          </h1>
          <p
            className={clsx(
              "max-w-md text-sm sm:text-base font-circular-web text-blue-100/70 transition-opacity duration-500 delay-100 drop-shadow-md",
              mobileActive
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section id="products" className="bg-black pb-32">
    <div className="container mx-auto px-4 sm:px-10">
      <div className="px-2 sm:px-5 py-24 sm:py-32">
        <p className="font-general uppercase tracking-[0.2em] text-sm text-indigo-400 font-semibold mb-4 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          Next-Gen Platform
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-general text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-200 leading-tight max-w-3xl">
          The Future of AI <br className="hidden sm:block md:hidden xl:block" />{" "}
          Communication Starts Here.
        </h2>
        <p className="max-w-2xl font-circular-web text-base sm:text-lg lg:text-lg text-blue-100/60 mt-4 leading-relaxed">
          Experience a new era of communication where every conversation becomes
          data, insights, and decisions — powered by self-improving AI
          primitives.
        </p>
      </div>

      <div className="flex flex-col gap-6 w-full lg:max-w-6xl xl:max-w-full mx-auto">
        {/* Top Full Width Feature */}
        <BentoTilt className="h-72 sm:h-80 lg:h-[45vh] xl:h-[55vh] w-full rounded-2xl shadow-[0_0_40px_rgba(99,102,241,0.1)] hover:shadow-[0_0_60px_rgba(99,102,241,0.2)] transition-shadow duration-500">
          <BentoCard
            src="/images/image12.png"
            isImage
            title={
              <>
                AI Vo<b>i</b>ce Agent
              </>
            }
            description="A human-like AI that answers calls, understands sentiment, and resolves complex inquiries in real-time."
          />
        </BentoTilt>

        <div className="grid h-auto lg:h-[45vh] xl:h-[55vh] w-full grid-cols-1 md:grid-cols-3 gap-6">
          <BentoTilt className="h-72 lg:h-full md:col-span-1 border-white/5 shadow-lg shadow-black">
            <BentoCard
              src="/images/image03.png"
              isImage
              title={
                <>
                  Ins<b>i</b>ght Engine
                </>
              }
              description="Extracts key information like user intent, sentiment, and core requirements from every single conversation."
            />
          </BentoTilt>

          <BentoTilt className="h-72 lg:h-full md:col-span-1 border-white/5 shadow-lg shadow-black">
            <BentoCard
              src="videos/video-3.mp4"
              title={
                <>
                  Smart R<b>o</b>uting
                </>
              }
              description="Automatically routes structured insights to the right team, CRM, or dynamic automated workflow."
            />
          </BentoTilt>

          <BentoTilt className="h-72 lg:h-full md:col-span-1 border-white/5 shadow-lg shadow-black">
            <BentoCard
              src="/images/image03.png"
              isImage
              title={
                <>
                  Analyt<b>i</b>cs
                </>
              }
              description="Track global performance, view AI call summaries, and unlock actionable business intelligence effortlessly."
            />
          </BentoTilt>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
