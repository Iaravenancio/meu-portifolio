import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2 font-display text-sm font-bold tracking-tight">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple text-background shadow-glow">
            IR
          </span>
          <span className="hidden sm:inline">Iara<span className="text-gradient">.dev</span></span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full border border-white/10 px-2 py-1.5 text-xs font-medium md:flex ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="group relative hidden overflow-hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold sm:inline-flex"
        >
          <span className="relative z-10">Fale comigo</span>
          <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 transition group-hover:opacity-100" />
        </a>
      </div>
    </motion.header>
  );
}
