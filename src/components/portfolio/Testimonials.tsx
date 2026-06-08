import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    quote:
      "Entrega de altíssimo nível técnico e visão de produto. Iara elevou nosso time como um todo.",
    name: "Rafael Lima",
    role: "CTO · Tech Innovation Co.",
  },
  {
    quote:
      "Profissional rara: une rigor de engenharia, comunicação clara e foco obsessivo em resultado.",
    name: "Camila Souza",
    role: "Head of Product · Digital Studio",
  },
  {
    quote:
      "Reescreveu nossa arquitetura crítica sem downtime. Confiança total para projetos complexos.",
    name: "Bruno Tavares",
    role: "Engineering Manager",
  },
];

export function Testimonials() {
  return (
    <section className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="depoimentos"
          title={<>O que dizem sobre <span className="text-gradient">o trabalho</span>.</>}
        />

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.figure
              key={it.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl glass p-6"
            >
              <Quote className="h-6 w-6 text-neon-purple/70" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                "{it.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-neon-blue to-neon-purple font-display text-sm font-bold text-background">
                  {it.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{it.name}</div>
                  <div className="text-xs text-muted-foreground">{it.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
