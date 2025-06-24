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

// Generate random animation paths
const randomPositions = Array.from({ length: triangles.length }, () => {
  const rand = () => [Math.random() * 110, Math.random() * 110];
  return [rand(), rand(), rand()];
});

const generateKeyframes = () => {
  return randomPositions
    .map(([start, mid, end], i) => `
      @keyframes floatMove${i} {
        0% { transform: translate(${start[0]}vw, ${start[1]}vh) rotate(0deg); }
        50% { transform: translate(${mid[0]}vw, ${mid[1]}vh) rotate(180deg); }
        100% { transform: translate(${end[0]}vw, ${end[1]}vh) rotate(360deg); }
      }
    `)
    .join("\n");
};

const BackgroundTriangles = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {triangles.map(({ size, stroke, opacity, duration, delay }, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            opacity,
            position: "absolute",
            top: 0,
            left: 0,
            animationName: `floatMove${i}`,
            animationDuration: `${duration}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDirection: "alternate",
            animationDelay: `${delay}s`,
            transformOrigin: "50% 50%",
          }}
        >
          <polygon points="12 2 22 20 2 20" />
        </svg>
      ))}
      <style>{generateKeyframes()}</style>
    </div>
  );
};

export default BackgroundTriangles;
