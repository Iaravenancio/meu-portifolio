import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const certs = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: "2024" },
  { name: "Azure Fundamentals AZ-900", issuer: "Microsoft", year: "2023" },
  { name: "Oracle Java SE 17 Developer", issuer: "Oracle", year: "2023" },
  { name: "Scrum Master Professional (PSM I)", issuer: "Scrum.org", year: "2022" },
  { name: "Especialização em Engenharia de Software", issuer: "USP", year: "2022" },
  { name: "MongoDB Developer Path", issuer: "MongoDB University", year: "2021" },
];

export function Certifications() {
  return (
    <section id="certificacoes" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="certificações"
          title={<>Aprendizado <span className="text-gradient">contínuo</span>.</>}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 via-neon-purple/0 to-neon-cyan/0 opacity-0 transition group-hover:from-neon-blue/10 group-hover:via-neon-purple/10 group-hover:to-neon-cyan/10 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 text-neon-cyan ring-1 ring-white/10">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">{c.year}</span>
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold leading-snug">
                  {c.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
