import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type StackGroup = {
  title: string;
  color: string;
  items?: string[];
  subgroups?: { label: string; items: string[] }[];
};

const stack: StackGroup[] = [
  {
    title: "Desenvolvimento Web",
    color: "from-neon-blue to-neon-cyan",
    items: ["HTML5", "CSS3", "JavaScript","React", "TypeScript", "Tailwind CSS", "Consumo de APIs REST", "Git", "GitHub"],
  },
  {
    title: "Backend",
    color: "from-neon-purple to-neon-blue",
    items: ["Java", "JDBC", "Spring Boot", "APIs REST", "Lógica de Programação"],
  },
  {
    title: "Banco de Dados",
    color: "from-neon-cyan to-neon-blue",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "Modelagem de Dados", "Consultas e Relatórios"],
  },
  {
    title: "IA & Automação",
    color: "from-neon-purple to-neon-pink",
    subgroups: [
      { label: "IA", items: ["IA Generativa", "Engenharia de Prompts", "Replit", "Lovable"] },
      { label: "Automação", items: ["n8n", "Make", "Power Automate"] },
    ],
  },
];

function SkillChip({ item }: { item: string }) {
  return (
    <li className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs leading-4 text-muted-foreground transition-colors group-hover:border-white/15 group-hover:text-foreground">
      {item}
    </li>
  );
}

function SkillChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => <SkillChip key={item} item={item} />)}
    </ul>
  );
}

export function Stack() {
  return (
    <section id="stack" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="stack tecnológica" title="Tecnologias que uso em estudos, projetos e automações." />
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-spot
              className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-1"
            >
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${group.color}`} />
              <div className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${group.color} shadow-[0_0_9px_currentColor]`} />
                <span className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-2.5 font-display text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-3">
                {group.items ? (
                  <SkillChips items={group.items} />
                ) : (
                  <div className="space-y-3">
                    {group.subgroups!.map((sub) => (
                      <div key={sub.label}>
                        <h4 className="mb-1.5 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground/70">
                          {sub.label}
                        </h4>
                        <SkillChips items={sub.items} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className={`pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${group.color} opacity-0 blur-3xl transition group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
