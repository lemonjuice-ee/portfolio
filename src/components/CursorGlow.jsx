// components/CursorGlow.jsx
import React, { useEffect, useRef } from 'react';

const CursorGlow = () => {
  const glowRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const speed = 0.1; // lower = slower, smoother
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * speed;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * speed;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentPos.current.x - 75}px, ${
          currentPos.current.y - 75
        }px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed top-0 left-0 z-50 pointer-events-none"
      style={{ transition: 'transform 0.1s ease-out' }}
    >
      <div className="h-[400px] w-[400px] rounded-full bg-gray-300 opacity-5 blur-3xl mix-blend-lighten" />
    </div>
  );
};

export default CursorGlow;
