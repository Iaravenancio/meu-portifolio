import { motion } from "framer-motion";
import { ArrowDown, Mail, Github, Linkedin, Sparkles } from "lucide-react";
import { TechFlower } from "./TechFlower";

export function Hero() {
  return (
    <section id="top" className="hero-shell relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 sm:px-6">
      <div className="hero-flower" aria-hidden="true"><TechFlower /></div>
      <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
      <div className="hero-content relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-5 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 glass px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-cyan opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-neon-cyan" /></span>
          Disponível para novas oportunidades
        </motion.div>
        <motion.h1 aria-label="Iara Venâncio Ribeiro" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .15 }}
          className="hero-name w-full font-display">
          <span className="ln">Iara Venâncio</span><span className="ln">Ribeiro</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .25 }}
          className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Desenvolvedora em formação, focada em backend com Java e automação de processos. Transformo problemas em soluções digitais com impacto real.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .4 }}
          className="mt-3 flex flex-wrap items-center justify-center gap-3">
          <a href="#projetos" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple px-6 py-3 text-sm font-semibold text-background shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-glow-cyan">
            <Sparkles className="h-4 w-4 transition group-hover:rotate-12" />Ver projetos
          </a>
          <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-white/15 glass px-6 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:border-neon-cyan/50 hover:text-neon-cyan">
            <Mail className="h-4 w-4" />Entrar em contato
          </a>
          <a href="https://www.linkedin.com/in/iara-venancio/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 glass transition hover:border-neon-cyan hover:text-neon-cyan"><Linkedin className="h-4 w-4" /></a>
          <a href="https://github.com/Iaravenancio" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 glass transition hover:border-neon-purple hover:text-neon-purple"><Github className="h-4 w-4" /></a>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: .8 }} className="mt-7 flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <span className="h-px w-9 bg-gradient-to-r from-neon-cyan to-transparent" /><span className="font-mono uppercase tracking-[.3em]">Role para explorar</span><ArrowDown className="h-3.5 w-3.5 animate-bounce text-neon-cyan" />
        </motion.div>
      </div>
    </section>
  );
}