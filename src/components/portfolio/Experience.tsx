import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  { period: "Fev 2025 — Atual", role: "Início da Graduação em ADS", company: "FIAP", current: true, tools: ["Análise de Sistemas", "Desenvolvimento de Software"], bullets: ["Iniciei a graduação em Análise e Desenvolvimento de Sistemas.", "Complemento o aprendizado acadêmico com projetos próprios e prática."] },
  { period: "Mar 2025 — Jul 2025", role: "Estágio em Tecnologia e Processos", company: "Fullbar", current: false, tools: ["Power Automate", "Documentação", "Processos"], bullets: ["Organizei documentação operacional e padronizei procedimentos para apoiar o treinamento de novos colaboradores.", "Participei da automação de tarefas repetitivas com Power Automate.", "Apoiei atividades de processos internos e melhorias operacionais."] },
  { period: "Fev 2025 — Atual", role: "Desenvolvimento e Especialização", company: "Projetos próprios e acadêmicos", current: true, tools: ["Java", "Banco de Dados", "APIs REST", "Automação"], bullets: ["Aprofundo conhecimentos em Java, bancos de dados, APIs e automações.", "Desenvolvo projetos para aplicar o que aprendo e construir soluções úteis.", "Busco oportunidades para continuar evoluindo na área de tecnologia."] },
];

function Leaf({ open }: { open: boolean }) {
  return <svg viewBox="0 0 64 40" fill="none" aria-hidden="true" className={`experience-leaf-svg ${open ? "is-open" : ""}`}><path className="leaf-shape" d="M3 35C8 12 29 2 59 4C54 28 32 39 3 35Z" /><path d="M4 35C21 25 37 15 57 5" stroke="currentColor" strokeWidth="1.2" /><path d="M20 26L17 16M31 20L30 10M39 15L47 14" stroke="currentColor" strokeWidth=".8" opacity=".7" /></svg>;
}

export function Experience() {
  return (
    <section id="experiencia" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="experiência" title="Trajetória profissional" />
        <div className="experience-timeline relative">
          <div aria-hidden="true" className="experience-track"><span className="experience-track__fill" /></div>
          {items.map((it, i) => <motion.article key={it.role} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, delay: .05 }}
            className={`experience-item relative grid items-start gap-5 ${i % 2 === 0 ? "md:grid-cols-[1fr_64px_1fr]" : "md:grid-cols-[1fr_64px_1fr]"}`}>
            <div className={`experience-meta ${i % 2 === 0 ? "md:col-start-3 md:row-start-1" : "md:col-start-1 md:row-start-1 md:text-right"}`}>
              <div className="font-mono text-[11px] uppercase tracking-[.2em] text-neon-cyan">{it.period}</div>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">{it.role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.company}</p>
            </div>
            <div aria-hidden="true" className={`experience-node ${i % 2 === 0 ? "md:col-start-2 md:row-start-1" : "md:col-start-2 md:row-start-1"}`}><Leaf open={true} />{it.current && <span className="experience-node__pulse" />}</div>
            <div className={`experience-card group relative overflow-hidden rounded-2xl p-5 ${i % 2 === 0 ? "md:col-start-1 md:row-start-1" : "md:col-start-3 md:row-start-1"}`} data-spot>
              <div className="experience-card__topline" />
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">{it.bullets.map((b, j) => <li key={j} className="flex gap-2"><span className="mt-[.55rem] h-1 w-1 shrink-0 rounded-full bg-neon-purple" /><span>{b}</span></li>)}</ul>
              <div className="mt-4 flex flex-wrap gap-1.5">{it.tools.map(tool => <span key={tool} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-white/65">{tool}</span>)}</div>
            </div>
          </motion.article>)}
        </div>
      </div>
    </section>
  );
}