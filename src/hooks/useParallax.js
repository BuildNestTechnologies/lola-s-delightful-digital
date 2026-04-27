import { useState, useEffect } from "react";

export const useParallax = (speed = 0.3) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) * speed;
      const y = (e.clientY - window.innerHeight / 2) * speed;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [speed]);

  return offset;
};
