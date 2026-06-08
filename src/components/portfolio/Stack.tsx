import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const stack = [
  {
    title: "Frontend",
    color: "from-neon-blue to-neon-cyan",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue"],
  },
  {
    title: "Backend",
    color: "from-neon-purple to-neon-pink",
    items: ["Java", "Spring Boot", "Node.js", "Python", "REST / GraphQL"],
  },
  {
    title: "Banco de Dados",
    color: "from-neon-cyan to-neon-blue",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Cloud & DevOps",
    color: "from-neon-pink to-neon-purple",
    items: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="stack tecnológica"
          title={<>Ferramentas que uso para <span className="text-gradient">construir</span>.</>}
          description="Um arsenal moderno selecionado para entregar produtos performáticos, escaláveis e resilientes."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1"
            >
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${group.color}`} />
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                0{i + 1}
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold">{group.title}</h3>
              <ul className="mt-5 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition group-hover:text-foreground"
                  >
                    <span className={`h-1 w-1 rounded-full bg-gradient-to-r ${group.color}`} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className={`pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${group.color} opacity-0 blur-3xl transition group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
