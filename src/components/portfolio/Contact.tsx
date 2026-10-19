import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const contacts = [
    { icon: Linkedin, label: "LinkedIn", value: "iara-venancio", href: "https://www.linkedin.com/in/iara-venancio/" },
    { icon: Github, label: "GitHub", value: "Iaravenancio", href: "https://github.com/Iaravenancio" },
    { icon: Mail, label: "E-mail", value: "iara.ven4nci0@gmail.com", href: "mailto:iara.ven4nci0@gmail.com" },
  ];
  return <section id="contato" className="relative px-4 py-32 sm:px-6"><div className="mx-auto max-w-2xl">
    <SectionHeading eyebrow="contato" align="center" />
    <div className="contact-cards space-y-3">{contacts.map((c, i) => <motion.a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: i * .08 }} data-spot className="contact-card group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 p-4 transition hover:-translate-y-0.5 hover:border-white/20">
      <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-neon-cyan"><c.icon className="h-4 w-4" /></div><div className="min-w-0 flex-1"><div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</div><div className="truncate text-sm font-medium text-white">{c.value}</div></div><ArrowHint />
    </motion.a>)}
    <motion.a href="https://wa.me/5512996780772" target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .4, delay: contacts.length * .08 }} data-spot className="contact-card group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 p-4 transition hover:-translate-y-0.5 hover:border-neon-cyan/40" aria-label="Entrar em contato pelo WhatsApp">
      <div className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-neon-cyan"><MessageCircle className="h-4 w-4" /></div><div className="min-w-0 flex-1"><div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">WhatsApp</div><div className="text-sm font-medium text-white">Enviar mensagem</div></div>
    </motion.a></div>
  </div></section>;
}

function ArrowHint() {
  return <span className="font-mono text-xs text-neon-cyan" aria-hidden="true">↗</span>;
}