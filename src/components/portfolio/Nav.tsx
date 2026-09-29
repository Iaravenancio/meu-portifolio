import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

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
        <motion.a
          href="#top"
          className="flex items-center gap-2 font-display text-sm font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple text-background shadow-glow">
            IR
          </span>
          <span className="hidden sm:inline">Iara<span className="text-gradient">.dev</span></span>
        </motion.a>

        <motion.nav
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className={`hidden items-center gap-1 rounded-full border border-white/10 px-2 py-1.5 text-xs font-medium md:flex ${
            scrolled ? "glass-strong" : "glass"
          }`}
          onHoverStart={() => {}}
          onMouseLeave={() => setHovered(null)}
        >
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              initial={{ y: -8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06, ease: "easeOut" }}
              onMouseEnter={() => setHovered(l.href)}
              className="relative rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
            >
              <AnimatePresence>
                {hovered === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
              </AnimatePresence>
              <span className="relative z-10">{l.label}</span>
            </motion.a>
          ))}
        </motion.nav>

        <motion.a
          href="#contato"
          className="group relative hidden overflow-hidden rounded-full border border-white/10 px-4 py-2 text-xs font-semibold sm:inline-flex"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
        >
          <span className="relative z-10">Fale comigo</span>
          <span className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 transition group-hover:opacity-100" />
        </motion.a>
      </div>
    </motion.header>
  );
}
