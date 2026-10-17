import { useEffect } from "react";

const SCRAMBLE = "01<>/\\{}[]#$%";

/** Adds the lightweight reveal, text-scramble and pointer spotlight interactions from the visual reference. */
export function PortfolioEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>(
      "section > *, .hero-content > *, article, .card, [data-portfolio-reveal]"
    )).filter((el) => !el.closest("[data-no-reveal]"));

    revealTargets.forEach((el, index) => {
      if (!el.classList.contains("tech-reveal")) {
        el.classList.add("tech-reveal");
        el.style.transitionDelay = `${Math.min(index % 5, 4) * 65}ms`;
      }
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((el) => el.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });
      revealTargets.forEach((el) => observer.observe(el));
      cleanups.push(() => observer.disconnect());
    }

    const spots = Array.from(document.querySelectorAll<HTMLElement>(".card, [data-spot]"));
    const moveHandlers: Array<() => void> = [];
    spots.forEach((el) => {
      const onMove = (event: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      };
      el.addEventListener("pointermove", onMove);
      moveHandlers.push(() => el.removeEventListener("pointermove", onMove));
    });
    cleanups.push(...moveHandlers);

    if (!reducedMotion) {
      const textTargets = Array.from(document.querySelectorAll<HTMLElement>(
        "h1, h2, article h3"
      )).filter((el) => el.textContent?.trim() && !el.dataset.scrambleDone);
      const originalText = new Map<HTMLElement, string>();
      textTargets.forEach((el) => originalText.set(el, el.textContent ?? ""));
      const scramble = (el: HTMLElement, text: string) => {
        if (!text.trim()) return;
        el.dataset.scrambleDone = "true";
        let frame = 0;
        const total = text.length;
        const interval = window.setInterval(() => {
          el.textContent = [...text].map((char, i) => {
            if (char === " " || i < frame) return char;
            return SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)];
          }).join("");
          frame += 1.4;
          if (frame >= total) {
            el.textContent = text;
            window.clearInterval(interval);
          }
        }, 24);
        cleanups.push(() => window.clearInterval(interval));
      };
      const textObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const text = originalText.get(el) ?? "";
          scramble(el, text);
          textObserver.unobserve(el);
        });
      }, { threshold: .5 });
      textTargets.forEach((el) => textObserver.observe(el));
      cleanups.push(() => textObserver.disconnect());
    }

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  return null;
}
