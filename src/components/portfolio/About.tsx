import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="sobre mim"
          title={<>Construindo o <span className="text-gradient">futuro digital</span> com código.</>}
        />

        <div className="mx-auto max-w-3xl">
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
              Tenho grande interesse em <span className="text-foreground">desenvolvimento de software</span>, 
              automação de processos e criação de soluções que tornem o dia a dia das pessoas e empresas mais eficiente. 
              Acredito que a tecnologia é uma ferramenta poderosa para gerar valor e resolver desafios de forma inteligente.
            </p>
            <p>
              Meu diferencial está na curiosidade, na capacidade de aprender rapidamente e na dedicação para evoluir constantemente. Além da formação acadêmica, desenvolvo projetos próprios envolvendo <span className="text-foreground">Java, Banco de Dados, Inteligência Artificial e automações</span>, aplicando na prática os conhecimentos adquiridos durante meus estudos. Também venho estudando e explorando IA e suas aplicações no desenvolvimento de soluções e automações, buscando acompanhar as novas tecnologias e utilizá-las de forma estratégica. Estou construindo minha carreira com foco em desenvolvimento, inovação e crescimento profissional, sempre aberta a novos aprendizados e oportunidades.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
