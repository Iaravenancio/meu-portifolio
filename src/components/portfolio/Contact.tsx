import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="contato" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="contato" align="center" />

        <div className="space-y-3">
          {[
            { icon: Linkedin, label: "LinkedIn", value: "iara-venancio", href: "https://www.linkedin.com/in/iara-venancio/" },
            { icon: Github, label: "GitHub", value: "Iaravenancio", href: "https://github.com/Iaravenancio" },
            { icon: Mail, label: "E-mail", value: "iara.ven4nci0@gmail.com", href: "mailto:iara.ven4nci0@gmail.com" },
            { icon: MessageCircle, label: "WhatsApp", value: "+55 12 99678-0772", href: "https://wa.me/5512996780772" },
          ].map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex items-center gap-4 rounded-2xl glass p-4 transition hover:-translate-y-0.5 hover:border-white/20"
            >
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 text-neon-cyan ring-1 ring-white/10">
                <c.icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {c.label}
                </div>
                <div className="truncate text-sm font-medium">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
