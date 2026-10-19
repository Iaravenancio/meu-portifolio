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
            <p>Sou estudante de de{" "} <span className="font-semibold text-white"> Análise e Desenvolvimento de Sistemas (FIAP) </span>{" "} e gosto de usar a tecnologia para transformar problemas em soluções práticas. Tenho interesse em desenvolvimento de software, especialmente Java e Banco de Dados, além de automação de processos e Inteligência Artificial.</p>
            <p>Além da faculdade, desenvolvo projetos próprios para colocar meus conhecimentos em prática, explorar novas tecnologias e aprimorar minhas habilidades. Sou curiosa, gosto de aprender e estou sempre buscando maneiras de desenvolver soluções que facilitem tarefas e tornem processos mais eficientes.</p>
            <p>Estou construindo minha carreira na área de tecnologia, com foco em desenvolvimento e inovação, e busco uma oportunidade para contribuir com projetos reais, ampliar meus conhecimentos e crescer profissionalmente.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}