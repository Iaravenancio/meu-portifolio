import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    name: "Reciclagem API",
    tag: "ESG · Spring Boot · REST",
    description:
      "API RESTful desenvolvida em Java com Spring Boot para gerenciamento de pontos de coleta de resíduos recicláveis, alinhada aos princípios ESG.",
    problem:
      "Falta de padronização e centralização no cadastro e consulta de pontos de coleta de resíduos recicláveis.",
    result:
      "CRUD completo de pontos de coleta com validação, segurança, documentação Swagger e respostas HTTP RESTful.",
    tech: [
      "Java 21",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "Swagger",
      "Flyway",
      "Docker",
    ],
    accent: "from-neon-green to-neon-cyan",
    repo: "https://github.com/Iaravenancio/reciclagem-api.git",
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

        <div className={`grid gap-6 ${projects.length === 1 ? "place-items-center" : "md:grid-cols-2"}`}>
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition hover:-translate-y-1.5 hover:border-white/20 ${projects.length === 1 ? "w-full max-w-3xl" : ""}`}
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
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 font-semibold text-background transition hover:opacity-90"
                >
                  Ver repositório <ArrowUpRight className="h-3 w-3" />
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
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
