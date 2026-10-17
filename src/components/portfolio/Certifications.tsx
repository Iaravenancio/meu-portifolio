import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const certs = [
  { name: "Lógica de Programação com JavaScript", issuer: "Desenvolvimento do raciocínio lógico, estruturas de decisão, repetição e resolução de problemas.", year: "Alura - 2025" },
  { name: "Git e GitHub", issuer: "Versionamento de código, colaboração em equipe e gerenciamento de projetos.", year: "Alura - 2025" },
  { name: "Desenvolvimento Web e Prototipação", issuer: "Certificado de Qualificação Profissional em Desenvolvimento e Designer Web 2.0.", year: "FIAP - 2025" },
  { name: "Análise de Sistemas e Prototipação Web", issuer: "Certificado de Qualificação Profissional em Análise de Sistemas e Prototipação Web.", year: "FIAP - 2025" },
  { name: "Banco de Dados MySQL", issuer: "Modelagem, consultas SQL, relacionamentos e manipulação de dados.", year: "Curso em Vídeo - 2025" },
  { name: "Engenharia de Prompt para IA", issuer: "Fundamentos de IA generativa, prompting e aplicações práticas.", year: "Curso em Vídeo - 2025" },
];

export function Certifications() {
  return <section id="certificacoes" className="relative px-4 py-32 sm:px-6"><div className="mx-auto max-w-6xl">
    <SectionHeading eyebrow="certificações" title="Aprendizado contínuo" />
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{certs.map((c, i) => <motion.div key={c.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .45, delay: i * .06 }} data-spot className="cert-card group relative overflow-hidden rounded-2xl border border-white/10 p-5 transition duration-300 hover:-translate-y-1">
      <div className="cert-card__spot pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" /><div className="cert-card__topline absolute inset-x-[14%] top-0 h-px" />
      <div className="relative"><div className="flex items-start justify-between"><div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-neon-cyan"><Award className="h-5 w-5" /></div><span className="font-mono text-[10px] text-muted-foreground">{c.year}</span></div>
      <h3 className="mt-4 font-display text-sm font-semibold leading-snug text-white">{c.name}</h3><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.issuer}</p></div>
    </motion.div>)}</div>
  </div></section>;
}