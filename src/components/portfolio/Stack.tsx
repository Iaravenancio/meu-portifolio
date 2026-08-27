import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const stack = [
  {
    title: "Desenvolvimento Web",
    color: "from-neon-blue to-neon-cyan",
    items: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
  },
  {
    title: "Backend",
    color: "from-neon-purple to-neon-pink",
    items: ["Java", "JDBC", "APIs REST ", "Lógica de Programação", "Spring Boot "],
  },
  {
    title: "Banco de Dados",
    color: "from-neon-cyan to-neon-blue",
    items: ["PostgreSQL", "MySQL", "Modelagem de Dados", "Consultas e Relatorios", "Novo item"],
  },
  {
    title: "Automação & Ferramentas",
    color: "from-neon-pink to-neon-purple",
    items: ["Power Automate", "Power BI ", "Pacote Office", "Inteligência Artificial Generativa", "N8N", "Make"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="stack tecnológica"
          title={<>Ferramentas que uso para <span className="text-gradient">construir</span>.</>}
          description="Tecnologias e ferramentas que utilizo nos meus estudos, projetos e automações. Uma combinação de desenvolvimento, banco de dados e soluções que me ajudam a transformar ideias em aplicações reais."
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
