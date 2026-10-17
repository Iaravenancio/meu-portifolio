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
  stagger = 0.05,
  delay = 0,
  fontSize = 128,
  fontWeight = 700,
  letterSpacing = -4,
  className = "",
}: Props) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<SVGTextElement>(null);
  const [box, setBox] = useState<Box | null>(null);
  const rawId = useId().replace(/[^a-zA-Z0-9_-]/g, "");
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
      const node = textRef.current;
      if (cancelled || !node) return;
      try {
        const b = node.getBBox();
        if (!b.width) return;
        const pad = Math.max(strokeWidth, fontSize * 0.1);
        const next = { x: b.x - pad, y: b.y - pad, width: b.width + pad * 2, height: b.height + pad * 2 };
        setBox((prev) =>
          prev && Math.abs(prev.x - next.x) < 0.5 && Math.abs(prev.width - next.width) < 0.5 && Math.abs(prev.y - next.y) < 0.5
            ? prev
            : next,
        );
      } catch {
        // SVG may not be measurable until the browser has laid it out.
      }
    };
    measure();
    document.fonts?.ready.then(measure).catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [characters, fontSize, fontWeight, letterSpacing, strokeWidth]);

  useEffect(() => {
    const node = textRef.current;
    if (!node || !box) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(node, { strokeDasharray: dash, strokeDashoffset: 0 });
      return;
    }
    gsap.set(node, { strokeDasharray: dash, strokeDashoffset: dash });
    const tween = gsap.to(node, {
      strokeDashoffset: 0,
      duration: drawDuration,
      delay,
      ease: "power2.out",
    });
    return () => {
      tween.kill();
      gsap.killTweensOf(node);
    };
  }, [box, dash, drawDuration, delay]);

  const viewBox = box ? `${box.x} ${box.y} ${box.width} ${box.height}` : `0 ${-fontSize} 600 ${fontSize * 1.3}`;
  const fill = gradient ? `url(#${gradId})` : fillColor;

  return (
    <span ref={rootRef} className={`stroke-text ${className}`.trim()} aria-hidden="true">
      <svg className="stroke-text__svg" viewBox={viewBox} preserveAspectRatio="xMidYMid meet">
        <defs>
          {gradient && (
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={gradient[0]} />
              <stop offset="100%" stopColor={gradient[1]} />
            </linearGradient>
          )}
        </defs>
        <text
          ref={textRef}
          className="stroke-text__stroke"
          x="0"
          y="0"
          fill={fill}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
          strokeLinecap="round"
          paintOrder="stroke fill"
          style={fontStyle}
        >
          {characters.map((character, index) => (
            <tspan key={`char-${index}`} data-stroke-char>{character}</tspan>
          ))}
        </text>
      </svg>
    </span>
  );
}
