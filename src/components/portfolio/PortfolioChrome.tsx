import { useEffect, useState } from "react";
import "@/styles/portfolio-visual.css";

const sections = [
  { id: "top", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "stack", label: "Stack" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "certificacoes", label: "Certificações" },
  { id: "contato", label: "Contato" },
];

const flower = `<svg class="tech-flower-cursor__svg" viewBox="-20 -20 40 40" aria-hidden="true">
  <g class="tech-flower-cursor__outer">
    <ellipse cx="0" cy="-8.5" rx="3.6" ry="8" transform="rotate(0)"/>
    <ellipse cx="0" cy="-8.5" rx="3.6" ry="8" transform="rotate(60)"/>
    <ellipse cx="0" cy="-8.5" rx="3.6" ry="8" transform="rotate(120)"/>
    <ellipse cx="0" cy="-8.5" rx="3.6" ry="8" transform="rotate(180)"/>
    <ellipse cx="0" cy="-8.5" rx="3.6" ry="8" transform="rotate(240)"/>
    <ellipse cx="0" cy="-8.5" rx="3.6" ry="8" transform="rotate(300)"/>
  </g>
  <g class="tech-flower-cursor__inner">
    <ellipse cx="0" cy="-5" rx="2.2" ry="5" transform="rotate(30)"/>
    <ellipse cx="0" cy="-5" rx="2.2" ry="5" transform="rotate(90)"/>
    <ellipse cx="0" cy="-5" rx="2.2" ry="5" transform="rotate(150)"/>
    <ellipse cx="0" cy="-5" rx="2.2" ry="5" transform="rotate(210)"/>
    <ellipse cx="0" cy="-5" rx="2.2" ry="5" transform="rotate(270)"/>
    <ellipse cx="0" cy="-5" rx="2.2" ry="5" transform="rotate(330)"/>
  </g><circle r="2.2"/>
</svg>`;

export function PortfolioChrome() {
  const [bootVisible, setBootVisible] = useState(true);

  useEffect(() => {
    const bootTimer = window.setTimeout(() => setBootVisible(false), 1450);
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const cursor = document.createElement("div");
    cursor.className = "tech-flower-cursor";
    cursor.setAttribute("aria-hidden", "true");
    cursor.innerHTML = flower;
    if (finePointer) document.body.appendChild(cursor);

    const progress = document.createElement("nav");
    progress.className = "tech-section-progress";
    progress.setAttribute("aria-label", "Navegação por seções");
    progress.innerHTML = '<span class="tech-section-progress__fill"></span>' + sections.map(({ id, label }) =>
      `<a href="#${id}" data-section-link="${id}" aria-label="Ir para ${label}"><i></i><span>${label}</span></a>`
    ).join("");
    document.body.appendChild(progress);

    let x = 0, y = 0, targetX = 0, targetY = 0, frame = 0;
    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add("is-ready");
      cursor.classList.toggle("is-hovering", Boolean((event.target as Element | null)?.closest?.("a, button, [role='button'], .card")));
    };
    const animateCursor = () => {
      x += (targetX - x) * 0.24;
      y += (targetY - y) * 0.24;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = window.requestAnimationFrame(animateCursor);
    };
    const updateProgress = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      progress.style.setProperty("--progress", `${maxScroll > 0 ? Math.min(100, window.scrollY / maxScroll * 100) : 0}%`);
      let active = sections[0]?.id;
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top < window.innerHeight * .52) active = id;
      });
      progress.querySelectorAll<HTMLAnchorElement>("a[data-section-link]").forEach((link) => {
        const isActive = link.dataset.sectionLink === active;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };
    if (finePointer) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      frame = window.requestAnimationFrame(animateCursor);
    }
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      window.clearTimeout(bootTimer);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.cancelAnimationFrame(frame);
      cursor.remove();
      progress.remove();
    };
  }, []);

  return bootVisible ? (
    <div className="tech-boot" aria-hidden="true">
      <div>
        <div>&gt; iniciando <strong>iara.dev</strong></div>
        <div>&gt; carregando flora.canvas ... <strong>ok</strong></div>
        <div>&gt; conectando projetos ... <strong>ok</strong></div>
        <div>&gt; pronto.</div>
        <span className="tech-boot__cursor">▍</span>
      </div>
    </div>
  ) : null;
}
