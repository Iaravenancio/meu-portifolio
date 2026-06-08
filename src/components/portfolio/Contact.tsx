import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contato" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="contato"
          title={<>Vamos construir algo <span className="text-gradient">incrível</span>.</>}
          description="Aberta para oportunidades, parcerias e conversas sobre tecnologia."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-[1fr_1.3fr]">
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

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="relative rounded-3xl glass-strong p-6 sm:p-8"
          >
            <div className="space-y-4">
              <Field label="Nome" id="name" type="text" placeholder="Seu nome" />
              <Field label="E-mail" id="email" type="email" placeholder="voce@email.com" />
              <div>
                <label htmlFor="msg" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  placeholder="Conte sobre seu projeto..."
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-neon-purple focus:ring-2 focus:ring-neon-purple/30"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple px-5 py-3 text-sm font-semibold text-background shadow-glow transition hover:scale-[1.01]"
              >
                {sent ? "Enviado!" : "Enviar mensagem"}
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type, placeholder }: { label: string; id: string; type: string; placeholder: string }) {
  return (
    <div>
      <label htmlFor={id} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/30"
      />
    </div>
  );
}
