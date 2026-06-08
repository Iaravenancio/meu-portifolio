import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-4 pt-28 sm:px-6">
      <div className="mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" />
          </span>
          Disponível para novas oportunidades
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Iara Venâncio
          <br />
          <span className="text-gradient">Ribeiro</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
            Analista & Desenvolvedora de Sistemas
          </span>
          <br />
          <span className="mt-3 inline-block">
            Transformando ideias em soluções digitais inovadoras com engenharia
            de software, automação e cloud computing.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projetos"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 text-sm font-semibold text-background shadow-glow transition hover:scale-[1.03]"
          >
            <Sparkles className="h-4 w-4" />
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 glass px-6 py-3 text-sm font-semibold transition hover:border-white/30 hover:bg-white/5"
          >
            <Download className="h-4 w-4" />
            Currículo
          </a>
          <a
            href="https://www.linkedin.com/in/iara-venancio/"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 glass transition hover:border-neon-blue hover:text-neon-blue"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Iaravenancio"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 glass transition hover:border-neon-purple hover:text-neon-purple"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <span className="font-mono uppercase tracking-[0.3em]">scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
