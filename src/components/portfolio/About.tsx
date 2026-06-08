import { motion } from "framer-motion";
import { Brain, Code2, Rocket, Target } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  { icon: Code2, title: "Engenharia", text: "Código limpo, escalável e testado." },
  { icon: Brain, title: "Inteligência", text: "IA aplicada a problemas reais." },
  { icon: Rocket, title: "Impacto", text: "Produtos que entregam valor real." },
  { icon: Target, title: "Foco", text: "Resultado mensurável a cada sprint." },
];

export function About() {
  return (
    <section id="sobre" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="sobre mim"
          title={<>Construindo o <span className="text-gradient">futuro digital</span> com código.</>}
        />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-lg leading-relaxed text-muted-foreground"
          >
            <p>
              Sou <span className="text-foreground font-medium">estudante de Análise e Desenvolvimento de Sistemas</span>,
              apaixonada por transformar problemas em soluções digitais. Minha trajetória é marcada pelo aprendizado contínuo em Java, Banco de Dados, automações e desenvolvimento de projetos próprios, sempre buscando unir tecnologia, inovação e impacto real.
            </p>
            <p>
              Trabalho na interseção entre <span className="text-foreground">desenvolvimento full stack</span>,
              cloud computing e inteligência artificial — entregando produtos
              que escalam, performam e encantam usuários.
            </p>
            <p>
              Meu diferencial está em traduzir requisitos de negócio em
              arquitetura técnica sólida, sempre com obsessão por
              <span className="text-foreground"> qualidade, performance e experiência</span>.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl glass p-5 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 text-neon-cyan ring-1 ring-white/10">
                  <p.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-sm font-semibold">{p.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{p.text}</div>
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neon-purple/10 blur-2xl transition group-hover:bg-neon-purple/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
