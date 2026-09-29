import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";

type Box = { x: number; y: number; width: number; height: number };

type Props = {
  text: string;
  strokeColor?: string;
  fillColor?: string;
  gradient?: [string, string];
  strokeWidth?: number;
  drawDuration?: number;
  fillDelay?: number;
  stagger?: number;
  delay?: number;
  fontSize?: number;
  fontWeight?: number;
  letterSpacing?: number;
  className?: string;
};

export function StrokeText({
  text,
  strokeColor = "#A78BFA",
  fillColor = "#F8FAFC",
  gradient,
  strokeWidth = 1.4,
  drawDuration = 1.6,
  fillDelay = 0.2,
  stagger = 0.05,
  delay = 0,
  fontSize = 128,
  fontWeight = 700,
  letterSpacing = -4,
  className = "",
}: Props) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const strokeTextRef = useRef<SVGTextElement>(null);
  const wipeRectRef = useRef<SVGRectElement>(null);
  const [box, setBox] = useState<Box | null>(null);

  const rawId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const wipeId = `stroke-wipe-${rawId}`;
  const gradId = `stroke-grad-${rawId}`;
  const characters = useMemo(() => Array.from(text), [text]);
  const dash = Math.max(fontSize * 7, 200);
  const fontStyle = useMemo(
    () => ({ fontSize: `${fontSize}px`, fontWeight, letterSpacing: `${letterSpacing}px` }),
    [fontSize, fontWeight, letterSpacing],
  );

  useLayoutEffect(() => {
    let cancelled = false;
    const measure = () => {
      const node = strokeTextRef.current;
      if (cancelled || !node) return;
      let b: DOMRect;
      try {
        b = node.getBBox();
      } catch {
        return;
      }
      if (!b.width) return;
      const pad = Math.max(strokeWidth, fontSize * 0.1);
      const next = { x: b.x - pad, y: b.y - pad, width: b.width + pad * 2, height: b.height + pad * 2 };
      setBox((prev) =>
        prev && Math.abs(prev.x - next.x) < 0.5 && Math.abs(prev.width - next.width) < 0.5 && Math.abs(prev.y - next.y) < 0.5
          ? prev
          : next,
      );
    };
    measure();
    document.fonts?.ready.then(measure).catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [characters, fontSize, fontWeight, letterSpacing, strokeWidth]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !box) return;
    const strokes = Array.from(root.querySelectorAll("[data-stroke-char]"));
    const wipe = wipeRectRef.current;
    if (!strokes.length) return;
    const targets = [...strokes, wipe].filter(Boolean) as Element[];

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(strokes, { strokeDasharray: dash, strokeDashoffset: 0 });
      if (wipe) gsap.set(wipe, { attr: { width: box.width } });
      return () => gsap.killTweensOf(targets);
    }

    gsap.set(strokes, { strokeDasharray: dash, strokeDashoffset: dash });
    if (wipe) gsap.set(wipe, { attr: { width: 0 } });
    const tl = gsap.timeline({ delay });
    tl.to(strokes, { strokeDashoffset: 0, duration: drawDuration, ease: "power2.out", stagger }, 0);
    if (wipe)
      tl.to(
        wipe,
        { attr: { width: box.width }, duration: Math.max(0.4, drawDuration * 0.5), ease: "power2.inOut" },
        drawDuration + fillDelay,
      );
    return () => {
      tl.kill();
      gsap.killTweensOf(targets);
    };
  }, [box, dash, drawDuration, fillDelay, stagger, delay]);

  const viewBox = box ? `${box.x} ${box.y} ${box.width} ${box.height}` : `0 ${-fontSize} 600 ${fontSize * 1.3}`;
  const fill = gradient ? `url(#${gradId})` : fillColor;

  return (
    <span ref={rootRef} className={`stroke-text ${className}`.trim()} aria-hidden="true">
      <svg className="stroke-text__svg" viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
        <defs>
          {box && (
            <clipPath id={wipeId} clipPathUnits="userSpaceOnUse">
              <rect ref={wipeRectRef} x={box.x} y={box.y} width="0" height={box.height} />
            </clipPath>
          )}
          {gradient && (
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={gradient[0]} />
              <stop offset="100%" stopColor={gradient[1]} />
            </linearGradient>
          )}
        </defs>
        <text
          ref={strokeTextRef}
          className="stroke-text__stroke"
          x="0"
          y="0"
          fill="none"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          style={fontStyle}
        >
          {characters.map((c, i) => (
            <tspan data-stroke-char key={`s-${i}`}>
              {c}
            </tspan>
          ))}
        </text>
        <text
          className="stroke-text__fill"
          x="0"
          y="0"
          fill={fill}
          style={fontStyle}
          clipPath={box ? `url(#${wipeId})` : undefined}
        >
          {characters.map((c, i) => (
            <tspan key={`f-${i}`}>{c}</tspan>
          ))}
        </text>
      </svg>
    </span>
  );
}
