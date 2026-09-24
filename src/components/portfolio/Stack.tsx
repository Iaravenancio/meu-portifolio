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
    items: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
  },
  {
    title: "Backend",
    color: "from-neon-purple to-neon-pink",
    items: ["Java", "JDBC", "APIs REST\u00a0", "Lógica de Programação", "Spring Boot\u00a0"],
  },
  {
    title: "Banco de Dados",
    color: "from-neon-cyan to-neon-blue",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Modelagem de Dados", "Consultas e Relatorios", "SQL"],
  },
  {
    title: "IA & Automação",
    color: "from-neon-pink to-neon-purple",
    subgroups: [
      {
        label: "Inteligência Artificial",
        items: ["IA Generativa", "Engenharia de Prompts", "Replit", "Lovable"],
      },
      {
        label: "Automação",
        items: ["n8n", "Make", "Power Automate"],
      },
    ],
  },
];

function BulletItem({ item, color }: { item: string; color: string }) {
  return (
    <li className="flex items-center gap-2 text-sm text-muted-foreground transition group-hover:text-foreground">
      <span className={`h-1 w-1 rounded-full bg-gradient-to-r ${color}`} />
      {item}
    </li>
  );
}

export function Stack() {
  return (
    <section id="stack" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="stack tecnológica"
          title={<>Ferramentas que uso para <span className="text-gradient">construir</span>.</>}
          description="Tecnologias e ferramentas que utilizo nos meus estudos, projetos e automações. Uma combinação de desenvolvimento, banco de dados, inteligência artificial e soluções que me ajudam a transformar ideias em aplicações reais."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex h-full flex-col justify-center overflow-hidden rounded-2xl glass p-6 transition hover:-translate-y-1"
            >
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${group.color}`} />
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                0{i + 1}
              </div>
              <h3 className="mt-2 font-display text-lg font-semibold">{group.title}</h3>

              {group.items ? (
                <ul className="mt-5 space-y-2">
                  {group.items.map((item) => (
                    <BulletItem key={item} item={item} color={group.color} />
                  ))}
                </ul>
              ) : (
                <div className="mt-5 space-y-4">
                  {group.subgroups!.map((sub) => (
                    <div key={sub.label}>
                      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                        {sub.label}
                      </div>
                      <ul className="space-y-2">
                        {sub.items.map((item) => (
                          <BulletItem key={item} item={item} color={group.color} />
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              <div className={`pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${group.color} opacity-0 blur-3xl transition group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
