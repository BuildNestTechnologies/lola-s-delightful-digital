import { useEffect, useRef, useState } from "react";

/** Subtle gold cursor follower — desktop / fine-pointer only. */
export const CursorFollower = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    let x = 0, y = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[55] h-6 w-6 rounded-full border border-brand-gold/70 mix-blend-difference"
    />
  );
};
