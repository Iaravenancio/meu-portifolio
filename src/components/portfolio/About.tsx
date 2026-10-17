import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="sobre mim" title="Aprendendo e construindo na prática" />
        <div className="grid grid-cols-1 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}
            className="about-copy-wrap about-copy space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>Sou estudante de Análise e Desenvolvimento de Sistemas e gosto de transformar problemas reais em soluções digitais. Desde que iniciei a graduação, em fevereiro de 2025, venho unindo estudo e prática: desenvolvo projetos próprios e aprendo construindo.</p>
            <p>Meu foco é <strong className="font-semibold text-white">backend com Java e Spring Boot</strong>, além de <strong className="font-semibold text-white">bancos de dados</strong> (PostgreSQL, MySQL e MongoDB) e <strong className="font-semibold text-white">APIs REST</strong>. Também me interesso por <strong className="font-semibold text-white">automação de processos</strong> com n8n, Make e Power Automate e por aplicações de <strong className="font-semibold text-white">IA generativa</strong> que tornem o dia a dia de pessoas e empresas mais eficiente.</p>
            <p>Minha experiência vem do estágio em Tecnologia e Processos, onde organizei documentação, padronizei procedimentos e participei da automação de tarefas repetitivas, e de projetos como uma API de pontos de coleta com princípios ESG e o backend de uma plataforma de inovação corporativa.</p>
            <p>Meu diferencial é a curiosidade e a rapidez para aprender. Estou em busca de novas oportunidades para crescer em um time de tecnologia e continuar evoluindo.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}