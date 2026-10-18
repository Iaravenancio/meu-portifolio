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

      // Collects only the text nodes, so child elements (like the hero name spans) are never removed.
      const getTextNodes = (root: HTMLElement) => {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const nodes: Text[] = [];
        while (walker.nextNode()) {
          const node = walker.currentNode as Text;
          if (node.nodeValue?.trim()) nodes.push(node);
        }
        return nodes;
      };

      const scramble = (el: HTMLElement) => {
        const parts = getTextNodes(el).map((node) => ({ node, text: node.nodeValue ?? "" }));
        if (!parts.length) return;
        el.dataset.scrambleDone = "true";

        // starting offset of each node, so the text resolves in reading order
        let offset = 0;
        const items = parts.map((p) => {
          const item = { ...p, start: offset };
          offset += p.text.length;
          return item;
        });
        const total = offset;

        let frame = 0;
        const interval = window.setInterval(() => {
          items.forEach(({ node, text, start }) => {
            node.nodeValue = [...text].map((char, i) => {
              if (char === " " || start + i < frame) return char;
              return SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)];
            }).join("");
          });
          frame += 1.4;
          if (frame >= total) {
            items.forEach(({ node, text }) => { node.nodeValue = text; });
            window.clearInterval(interval);
          }
        }, 24);

        // if the component unmounts mid-animation, restore the original text
        cleanups.push(() => {
          window.clearInterval(interval);
          items.forEach(({ node, text }) => { node.nodeValue = text; });
        });
      };

      const textObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          scramble(el);
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