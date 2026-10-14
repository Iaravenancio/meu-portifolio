import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Sparkles } from "lucide-react";
import { StrokeText } from "./StrokeText";
import { TechFlower } from "./TechFlower";

const NAME_LINE_1 = "Iara Venâncio";
const NAME_LINE_2 = "Ribeiro";

export function Hero() {
  return (
    <section id="top" className="hero-shell relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:pb-10">
      <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--two" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-2 lg:grid-cols-[1.02fr_.98fr] lg:gap-0">
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 glass px-4 py-1.5 text-xs font-medium text-muted-foreground lg:mx-0"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
            </span>
            Disponível para novas oportunidades
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 font-mono text-[10px] uppercase tracking-[0.34em] text-neon-cyan sm:text-xs"
          >
            <span className="mr-2 text-neon-purple">01 /</span>
            Desenvolvendo o próximo passo
          </motion.div>

          <h1
            aria-label="Iara Venâncio Ribeiro"
            className="mt-3 font-display [--stroke-text-height:52px] sm:[--stroke-text-height:68px] md:[--stroke-text-height:82px] lg:[--stroke-text-height:96px]"
          >
            <StrokeText text={NAME_LINE_1} />
            <StrokeText text={NAME_LINE_2} gradient={["#38BDF8", "#A855F7"]} strokeColor="#38BDF8" delay={0.6} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/80 sm:text-sm">
              Estudante de Análise & Desenvolvimento de Sistemas
            </span>
            <br />
            <span className="mt-3 inline-block">
              Apaixonada por Java, automações e por transformar problemas em soluções digitais com impacto real.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <a
              href="#projetos"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 text-sm font-semibold text-background shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-glow-cyan"
            >
              <Sparkles className="h-4 w-4 transition group-hover:rotate-12" />
              Ver projetos
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 glass px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-neon-cyan/50 hover:text-neon-cyan"
            >
              <Download className="h-4 w-4" />
              Currículo
            </a>
            <a
              href="https://www.linkedin.com/in/iara-venancio/"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 glass transition duration-300 hover:-translate-y-0.5 hover:border-neon-cyan hover:text-neon-cyan"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Iaravenancio"
              target="_blank"
              rel="noreferrer"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 glass transition duration-300 hover:-translate-y-0.5 hover:border-neon-purple hover:text-neon-purple"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center justify-center gap-3 text-xs text-muted-foreground lg:justify-start"
          >
            <span className="h-px w-9 bg-gradient-to-r from-neon-cyan to-transparent" />
            <span className="font-mono uppercase tracking-[0.3em]">Role para explorar</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce text-neon-cyan" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
          className="pointer-events-none absolute -right-36 top-16 h-[26rem] w-[30rem] opacity-45 sm:-right-28 sm:top-8 sm:h-[35rem] sm:w-[38rem] lg:relative lg:right-auto lg:top-auto lg:h-[42rem] lg:w-full lg:opacity-100"
        >
          <TechFlower />
        </motion.div>
      </div>
    </section>
  );
}
