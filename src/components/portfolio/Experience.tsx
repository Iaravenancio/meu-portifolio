import { useEffect } from "react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { period: "Fev 2025 — Atual", role: "Início da Graduação em ADS", company: "FIAP", current: true, tools: ["Análise de Sistemas", "Desenvolvimento de Software"], bullets: ["Iniciei a graduação em Análise e Desenvolvimento de Sistemas.", "Complemento o aprendizado acadêmico com projetos próprios e prática."] },
  { period: "Mar 2025 — Jul 2025", role: "Estágio em Tecnologia e Processos", company: "Fullbar", current: false, tools: ["Power Automate", "Documentação", "Processos"], bullets: ["Organizei documentação operacional e padronizei procedimentos para apoiar o treinamento de novos colaboradores.", "Participei da automação de tarefas repetitivas com Power Automate.", "Apoiei atividades de processos internos e melhorias operacionais."] },
  { period: "Fev 2025 — Atual", role: "Desenvolvimento e Especialização", company: "Projetos próprios e acadêmicos", current: true, tools: ["Java", "Banco de Dados", "APIs REST", "Automação"], bullets: ["Aprofundo conhecimentos em Java, bancos de dados, APIs e automações.", "Desenvolvo projetos para aplicar o que aprendo e construir soluções úteis.", "Busco oportunidades para continuar evoluindo na área de tecnologia."] },
];

function Leaf() {
  return <svg aria-hidden="true" viewBox="0 0 64 40" className="tl-leaf"><defs><linearGradient id="tl-leaf-fill" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#22d3ee" stopOpacity=".2"/><stop offset="100%" stopColor="#a855f7" stopOpacity=".2"/></linearGradient></defs><path className="tl-leaf__outline" d="M2 36C7 13 29 2 61 3C55 28 32 40 2 36Z"/><path className="tl-leaf__vein" d="M3 36C22 26 41 14 60 4"/></svg>;
}

export function Experience() {
  useEffect(() => {
    const tl = document.getElementById("timeline");
    if (!tl) return;
    const items = [...tl.querySelectorAll<HTMLElement>(".tl-item")];
    const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function update() {
      if (reducedMotion) {
        tl.style.setProperty("--fill", tl.scrollHeight + "px");
        items.forEach((item) => item.classList.add("is-active"));
        return;
      }
      const rect = tl.getBoundingClientRect();
      const trigger = window.innerHeight * 0.6;
      const fillPx = clamp(trigger - rect.top, 0, rect.height);
      tl.style.setProperty("--fill", fillPx + "px");
      items.forEach((item) => {
        const leafY = item.offsetTop + 26;
        item.classList.toggle("is-active", fillPx >= leafY);
      });
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  return (
    <section id="experiencia" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="experiência" title="Trajetória profissional" />
        <div id="timeline" className="tl-timeline">
          <div aria-hidden="true" className="tl-track"><span className="tl-fill" /><span className="tl-seiva" /></div>
          {items.map((item, index) => (
            <article key={item.role} className={`tl-item ${index % 2 ? "tl-item--left" : "tl-item--right"}`}>
              <div className="tl-node" aria-hidden="true"><span className="node" /> <Leaf />{item.current && <span className="tl-current-dot" />}</div>
              <div className="tl-card" data-spot>
                <div className="tl-card__topline" />
                <div className="tl-date">{item.period}</div>
                <h3 className="tl-role">{item.role}</h3>
                <p className="tl-company">{item.company}</p>
                <ul className="tl-bullets">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                <div className="tl-tools">{item.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
