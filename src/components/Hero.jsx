import React from "react";

// Triangle config
const triangles = [
  // 10 Large
  { size: 100, stroke: "#7f1d1d", opacity: 0.9, duration: 35, delay: 0 },
  { size: 90, stroke: "#991b1b", opacity: 0.85, duration: 33, delay: 3 },
  { size: 95, stroke: "#b91c1c", opacity: 0.9, duration: 38, delay: 1 },
  { size: 85, stroke: "#991b1b", opacity: 0.8, duration: 36, delay: 7 },
  { size: 80, stroke: "#b91c1c", opacity: 0.75, duration: 34, delay: 5 },
  { size: 75, stroke: "#7f1d1d", opacity: 0.7, duration: 30, delay: 2 },
  { size: 95, stroke: "#b91c1c", opacity: 0.8, duration: 32, delay: 15 },
  { size: 90, stroke: "#991b1b", opacity: 0.9, duration: 39, delay: 9 },
  { size: 85, stroke: "#7f1d1d", opacity: 0.6, duration: 37, delay: 14 },
  { size: 100, stroke: "#991b1b", opacity: 0.9, duration: 40, delay: 19 },

  // 10 Medium
  { size: 65, stroke: "#b91c1c", opacity: 0.65, duration: 35, delay: 4 },
  { size: 60, stroke: "#991b1b", opacity: 0.8, duration: 32, delay: 6 },
  { size: 55, stroke: "#7f1d1d", opacity: 0.7, duration: 30, delay: 8 },
  { size: 50, stroke: "#b91c1c", opacity: 0.6, duration: 33, delay: 10 },
  { size: 60, stroke: "#7f1d1d", opacity: 0.7, duration: 28, delay: 20 },
  { size: 45, stroke: "#991b1b", opacity: 0.7, duration: 29, delay: 16 },
  { size: 50, stroke: "#b91c1c", opacity: 0.7, duration: 27, delay: 18 },
  { size: 55, stroke: "#7f1d1d", opacity: 0.6, duration: 31, delay: 17 },
  { size: 40, stroke: "#991b1b", opacity: 0.8, duration: 30, delay: 21 },
  { size: 65, stroke: "#b91c1c", opacity: 0.7, duration: 33, delay: 22 },

  // 20 Small
  { size: 30, stroke: "#991b1b", opacity: 0.6, duration: 27, delay: 11 },
  { size: 25, stroke: "#b91c1c", opacity: 0.5, duration: 28, delay: 12 },
  { size: 20, stroke: "#7f1d1d", opacity: 0.4, duration: 25, delay: 13 },
  { size: 15, stroke: "#991b1b", opacity: 0.45, duration: 26, delay: 14 },
  { size: 28, stroke: "#b91c1c", opacity: 0.5, duration: 29, delay: 15 },
  { size: 22, stroke: "#7f1d1d", opacity: 0.55, duration: 23, delay: 16 },
  { size: 26, stroke: "#b91c1c", opacity: 0.6, duration: 24, delay: 17 },
  { size: 18, stroke: "#991b1b", opacity: 0.5, duration: 26, delay: 18 },
  { size: 24, stroke: "#7f1d1d", opacity: 0.45, duration: 23, delay: 19 },
  { size: 12, stroke: "#b91c1c", opacity: 0.4, duration: 20, delay: 23 },
  { size: 14, stroke: "#991b1b", opacity: 0.4, duration: 21, delay: 24 },
  { size: 16, stroke: "#7f1d1d", opacity: 0.45, duration: 24, delay: 25 },
  { size: 28, stroke: "#b91c1c", opacity: 0.55, duration: 27, delay: 26 },
  { size: 20, stroke: "#991b1b", opacity: 0.5, duration: 22, delay: 27 },
  { size: 25, stroke: "#7f1d1d", opacity: 0.6, duration: 28, delay: 28 },
  { size: 19, stroke: "#b91c1c", opacity: 0.5, duration: 22, delay: 29 },
  { size: 15, stroke: "#991b1b", opacity: 0.45, duration: 23, delay: 30 },
  { size: 10, stroke: "#7f1d1d", opacity: 0.4, duration: 20, delay: 31 },
  { size: 22, stroke: "#b91c1c", opacity: 0.5, duration: 25, delay: 32 },
  { size: 27, stroke: "#991b1b", opacity: 0.55, duration: 29, delay: 33 },
];

// Generate random but safe screen positions (not too close to edges)
const randomPositions = Array.from({ length: 40 }, () => {
  const rand = () => {
    const min = 5; // avoid spawning at the very edge
    const max = 95;
    return [Math.random() * (max - min) + min, Math.random() * (max - min) + min];
  };
  return [rand(), rand(), rand()];
});

// Create @keyframes for each triangle
const generateKeyframes = () => {
  return randomPositions
    .map(([start, mid, end], i) => `@keyframes floatMove${i} {
      0% { transform: translate(${start[0]}vw, ${start[1]}vh) rotate(0deg); }
      50% { transform: translate(${mid[0]}vw, ${mid[1]}vh) rotate(180deg); }
      100% { transform: translate(${end[0]}vw, ${end[1]}vh) rotate(360deg); }
    }`)
    .join("\n");
};

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-brand-darktop text-brand-lightbg min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
     <div className="text-center max-w-2xl animate-fade-in z-10">
  <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
     Hi, I'm Fritz<span className="text-brand-accent"> Yu</span>
  </h1>
  <div>
  <p className="text-xl md:text-2xl text-brand-lightbg mb-6 overflow-hidden whitespace-nowrap border-r-4 border-brand-lightbg inline-block animate-typewriter">
   <span className="font-semibold">Design</span> and <span className="font-semibold">Develop</span> the interface your users deserve.
  </p></div>
  <a
    href="#contact"
    className="text-lg inline-block bg-brand-accent hover:bg-brand-red text-white px-6 py-3 rounded-md font-semibold transition duration-300"
  >
    Contact Me
  </a>

  {/* Typewriter animation style */}
  <style jsx>{`
    @keyframes typewriter {
      0% {
        width: 0;
      }
      100% {
        width: 100%;
      }
    }
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
    .animate-typewriter {
      animation: typewriter 3s steps(30, end) 1s 1 normal both,
                 blink 0.8s step-end infinite;
    }
  `}</style>
</div>

      {/* Triangles */}
      <div className="absolute inset-0 pointer-events-none">
 {triangles.map(({ size, stroke, opacity, duration, delay }, i) => (
  <svg
    key={i}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="butt"
    strokeLinejoin="miter"
    style={{
      opacity,
      position: "absolute",
      top: 0,
      left: 0,
      transform: `translate(${randomPositions[i][0][0]}vw, ${randomPositions[i][0][1]}vh) rotate(0deg)`,
      animationName: `floatMove${i}`,
      animationDuration: `${duration}s`,
      animationTimingFunction: "ease-in-out",
      animationIterationCount: "infinite",
      animationDirection: "alternate",
      animationDelay: `-${delay}s`, // ✅ Start animation partway through
      transformOrigin: "50% 50%",
    }}
  >
    <polygon points="12 2 22 20 2 20" />
  </svg>
))}

      </div>

      {/* Keyframes style */}
      <style jsx>{generateKeyframes()}</style>
    </section>
  );
};

export default Hero;
