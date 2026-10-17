import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const details = [
  ["Formação", "Análise e Desenvolvimento de Sistemas (desde fev/2025)"],
  ["Foco", "Backend com Java e Spring Boot"],
  ["Dados", "PostgreSQL · MySQL · MongoDB"],
  ["Automação e IA", "n8n · Make · Power Automate · IA generativa"],
  ["Experiência", "Estágio em Tecnologia e Processos (Fullbar)"],
];

export function About() {
  return (
    <section id="sobre" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="sobre mim" title="Aprendendo e construindo na prática" />
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,.8fr)] lg:gap-14">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}
            className="about-copy-wrap about-copy space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>Sou estudante de Análise e Desenvolvimento de Sistemas e gosto de transformar problemas reais em soluções digitais. Desde que iniciei a graduação, em fevereiro de 2025, venho unindo estudo e prática: desenvolvo projetos próprios e aprendo construindo.</p>
            <p>Meu foco é <strong className="font-semibold text-white">backend com Java e Spring Boot</strong>, além de <strong className="font-semibold text-white">bancos de dados</strong> (PostgreSQL, MySQL e MongoDB) e <strong className="font-semibold text-white">APIs REST</strong>. Também me interesso por <strong className="font-semibold text-white">automação de processos</strong> com n8n, Make e Power Automate e por aplicações de <strong className="font-semibold text-white">IA generativa</strong> que tornem o dia a dia de pessoas e empresas mais eficiente.</p>
            <p>Minha experiência vem do estágio em Tecnologia e Processos, onde organizei documentação, padronizei procedimentos e participei da automação de tarefas repetitivas, e de projetos como uma API de pontos de coleta com princípios ESG e o backend de uma plataforma de inovação corporativa.</p>
            <p>Meu diferencial é a curiosidade e a rapidez para aprender. Estou em busca de novas oportunidades para crescer em um time de tecnologia e continuar evoluindo.</p>
          </motion.div>
          <motion.aside initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .65, delay: .1 }}
            data-spot className="about-facts relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-6">
            <div className="absolute inset-x-[14%] top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
            <div className="space-y-0">
              {details.map(([label, value]) => <div key={label} className="border-b border-white/[0.07] py-4 last:border-0">
                <div className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">{label}</div>
                <div className="mt-1 text-sm leading-relaxed text-white/90">{value}</div>
              </div>)}
              <div className="pt-4">
                <div className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">Status</div>
                <div className="mt-2 flex items-center gap-2 text-sm text-white/90"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-60"/><span className="relative h-2 w-2 rounded-full bg-neon-cyan"/></span>Aberta a novas oportunidades</div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}