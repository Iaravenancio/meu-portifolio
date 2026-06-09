import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    period: "2025 — ATUAL",
    role: "Início da Jornada em Tecnologia",
    company: ".",
    bullets: [
      "Iniciei minha graduação em Análise e Desenvolvimento de Sistemas com o objetivo de construir uma carreira voltada à tecnologia, desenvolvimento de software e inovação digital. Desde o início da formação, busquei complementar o aprendizado acadêmico com experiências práticas e projetos próprios.",
    ],
  },
  {
    period: "MARÇO/2025 - JULHO/2025",
    role: "Primeira Experiência Profissional",
    company: "Fullbar",
    bullets: [
      "Ainda nos primeiros meses da graduação, tive a oportunidade de atuar como estagiária, participando de atividades voltadas à organização de processos internos e documentação operacional. Contribuí na criação e padronização de procedimentos, facilitando o treinamento e a integração de novos colaboradores.",
    ],
  },
  {
    period: "2019 — 2021",
    role: "Desenvolvedora de Sistemas",
    company: "Software House",
    bullets: [
      "Sistemas internos em Java e PostgreSQL para clientes corporativos.",
      { text: "Automação de processos manuais com Python e RPA.", noIcon: true },
    ],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="experiência"
          title={<>Trajetória <span className="text-gradient">profissional</span>.</>}
        />

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent md:left-1/2" />

          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`relative mb-10 flex flex-col gap-4 pl-12 md:pl-0 md:flex-row md:items-start ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-2.5 top-2 grid h-3 w-3 place-items-center rounded-full bg-neon-purple shadow-[0_0_20px_var(--neon-purple)] md:left-1/2 md:-translate-x-1/2" />

              <div className="md:w-1/2 md:px-8">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
                  {it.period}
                </div>
                <h3 className="mt-1 font-display text-xl font-bold">{it.role}</h3>
                <div className="text-sm text-muted-foreground">{it.company}</div>
              </div>

              <div className="md:w-1/2 md:px-8">
                <div className="glass rounded-2xl p-5">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {it.bullets.map((b) => {
                      const text = typeof b === "string" ? b : b.text;
                      const noIcon = typeof b === "object" && b.noIcon;
                      return (
                        <li key={text} className={`flex gap-2 ${noIcon ? "pl-3" : ""}`}>
                          {!noIcon && (
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neon-cyan" />
                          )}
                          <span>{text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
