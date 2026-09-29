import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowDown, Download, Github, Linkedin, Sparkles } from "lucide-react";

const NAME_LINE_1 = "Iara Venâncio";
const NAME_LINE_2 = "Ribeiro";

function splitName(name: string) {
  return name.split("").map((char, i) => ({ char, key: `${i}-${char}` }));
}

export function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    const chars = el.querySelectorAll<HTMLElement>("[data-name-char]");
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from(chars, {
        y: 42,
        opacity: 0,
        rotateX: -70,
        filter: "blur(8px)",
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.035,
      })
        .to(
          chars,
          {
            textShadow:
              "0 0 18px rgba(56, 189, 248, 0.55), 0 0 42px rgba(168, 85, 247, 0.35)",
            duration: 0.5,
            ease: "power2.inOut",
            stagger: { each: 0.03, from: "start", yoyo: true, repeat: 1 },
          },
          "-=0.25",
        )
        .to(
          chars,
          { clearProps: "textShadow", duration: 0.6, ease: "power2.out", stagger: 0.02 },
          "+=0.1",
        );
    }, el);
    return () => ctx.revert();
  }, []);
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
          ref={nameRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          aria-label="Iara Venâncio Ribeiro"
          className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          <span aria-hidden="true" className="inline-block [perspective:600px]">
            {splitName(NAME_LINE_1).map(({ char, key }) => (
              <span
                key={key}
                data-name-char
                className="inline-block will-change-transform"
                style={{ transformOrigin: "50% 100%" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
          <br />
          <span aria-hidden="true" className="text-gradient inline-block [perspective:600px]">
            {splitName(NAME_LINE_2).map(({ char, key }) => (
              <span
                key={key}
                data-name-char
                className="inline-block will-change-transform"
                style={{ transformOrigin: "50% 100%" }}
              >
                {char}
              </span>
            ))}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
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
