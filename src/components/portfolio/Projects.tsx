import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    name: "NeuralCRM",
    tag: "SaaS · IA",
    description:
      "Plataforma de CRM com classificação automática de leads usando modelos de linguagem.",
    problem: "Times comerciais perdiam horas qualificando leads manualmente.",
    result: "Redução de 60% no tempo de qualificação e +28% em conversão.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI"],
    accent: "from-neon-blue to-neon-purple",
  },
  {
    name: "CloudPay Gateway",
    tag: "Fintech · Microsserviços",
    description:
      "Gateway de pagamentos resiliente com fila de eventos e roteamento inteligente.",
    problem: "Falhas em adquirentes derrubavam o checkout em horários de pico.",
    result: "99,98% de disponibilidade e 3x mais throughput sob carga.",
    tech: ["Java", "Spring Boot", "Kafka", "AWS"],
    accent: "from-neon-purple to-neon-pink",
  },
  {
    name: "DataPulse Dashboard",
    tag: "Analytics · BI",
    description:
      "Dashboard em tempo real para acompanhar KPIs operacionais de e-commerce.",
    problem: "Decisões tomadas com base em relatórios atrasados em 24h.",
    result: "Tomada de decisão em tempo real e -18% de churn operacional.",
    tech: ["React", "Node.js", "MongoDB", "Docker"],
    accent: "from-neon-cyan to-neon-blue",
  },
  {
    name: "AutoFlow",
    tag: "Automação · RPA",
    description:
      "Engine de automação para integrar sistemas legados via API e web scraping.",
    problem: "Processos manuais consumiam 40h/semana do time financeiro.",
    result: "Automação de 92% das rotinas e ROI em menos de 3 meses.",
    tech: ["Python", "FastAPI", "Redis", "Azure"],
    accent: "from-neon-pink to-neon-cyan",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="projetos selecionados"
          title={<>Cases que entregam <span className="text-gradient">resultado real</span>.</>}
          description="Uma seleção de projetos onde combinei tecnologia e estratégia para resolver problemas concretos."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition hover:-translate-y-1.5 hover:border-white/20"
            >
              {/* visual */}
              <div className="relative mb-6 h-44 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,oklch(0.18_0.05_270),oklch(0.08_0.02_270))]">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-30 mix-blend-screen transition group-hover:opacity-60`} />
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-x-4 bottom-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/70">
                  <span>{p.tag}</span>
                  <span>0{i + 1}</span>
                </div>
                <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/60 backdrop-blur-md transition group-hover:bg-foreground group-hover:text-background">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>

              <dl className="mt-5 grid grid-cols-1 gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs sm:grid-cols-2">
                <div>
                  <dt className="font-mono uppercase tracking-widest text-neon-cyan">Problema</dt>
                  <dd className="mt-1 text-muted-foreground">{p.problem}</dd>
                </div>
                <div>
                  <dt className="font-mono uppercase tracking-widest text-neon-purple">Resultado</dt>
                  <dd className="mt-1 text-muted-foreground">{p.result}</dd>
                </div>
              </dl>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4 text-xs">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 font-semibold text-background transition hover:opacity-90"
                >
                  Ver case <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 font-medium text-muted-foreground transition hover:text-foreground"
                >
                  <Github className="h-3 w-3" /> Código
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
