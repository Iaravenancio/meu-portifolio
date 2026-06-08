import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const milestones = [
  { year: "2017", title: "Primeira linha de código", desc: "Início da jornada em programação. Foco em fundamentos." },
  { year: "2019", title: "Primeiro emprego em tech", desc: "Desenvolvedora de sistemas em ambiente corporativo." },
  { year: "2021", title: "Full Stack & Cloud", desc: "Especialização em React, Node.js e arquiteturas em AWS." },
  { year: "2023", title: "Liderança técnica", desc: "Tech lead em projetos de modernização e microsserviços." },
  { year: "2024", title: "IA aplicada", desc: "Integração de modelos de linguagem em produtos reais." },
  { year: "Futuro", title: "O que vem a seguir", desc: "Construir produtos que conectam IA, dados e pessoas." },
];

export function Journey() {
  return (
    <section id="jornada" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="diferencial"
          title={<>Minha jornada na <span className="text-gradient">tecnologia</span>.</>}
          description="Uma linha do tempo dos marcos que moldaram quem sou hoje como engenheira."
        />

        <div className="relative overflow-x-auto pb-4">
          <div className="flex min-w-[800px] gap-6 px-1">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative flex-1 min-w-[220px]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple font-mono text-[10px] font-bold text-background shadow-glow">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-neon-purple/60 to-transparent" />
                </div>
                <div className="rounded-2xl glass p-5">
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
                    {m.year}
                  </div>
                  <div className="mt-2 font-display text-base font-semibold">{m.title}</div>
                  <div className="mt-2 text-xs text-muted-foreground">{m.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
