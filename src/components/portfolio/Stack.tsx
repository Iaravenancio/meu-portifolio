import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

type StackGroup = {
  title: string;
  color: string;
  items?: string[];
  subgroups?: { label: string; items: string[] }[];
};

const stack: StackGroup[] = [
  { title: "Desenvolvimento Web", color: "from-neon-blue to-neon-cyan", items: ["HTML5", "CSS3", "JavaScript", "Git", "GitHub"] },
  { title: "Backend", color: "from-neon-purple to-neon-blue", subgroups: [
    { label: "Tecnologias", items: ["Java", "JDBC", "Spring Boot", "APIs REST"] },
    { label: "Conceitos", items: ["Lógica de Programação"] },
  ]},
  { title: "Banco de Dados", color: "from-neon-cyan to-neon-blue", subgroups: [
    { label: "Tecnologias", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL"] },
    { label: "Conceitos", items: ["Modelagem de Dados", "Consultas e Relatórios"] },
  ]},
  { title: "IA & Automação", color: "from-neon-purple to-neon-pink", subgroups: [
    { label: "Inteligência Artificial", items: ["IA Generativa", "Engenharia de Prompts", "Replit", "Lovable"] },
    { label: "Automação", items: ["n8n", "Make", "Power Automate"] },
  ]},
];

function BulletItem({ item, color }: { item: string; color: string }) {
  return <li className="flex items-center gap-2 text-sm text-muted-foreground transition group-hover:text-foreground"><span className={`h-1 w-1 rounded-full bg-gradient-to-r ${color}`} />{item}</li>;
}

export function Stack() {
  return (
    <section id="stack" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="stack tecnológica" title="Tecnologias que uso em estudos, projetos e automações." />
        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((group, i) => <motion.div key={group.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: .5, delay: i * .1 }}
            data-spot className="group relative flex self-start flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1">
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${group.color}`} />
            <div className="flex items-center gap-2"><span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${group.color} shadow-[0_0_9px_currentColor]`} /><span className="font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">0{i + 1}</span></div>
            <h3 className="mt-3 font-display text-lg font-semibold text-white">{group.title}</h3>
            {group.items ? <ul className="mt-5 space-y-2">{group.items.map(item => <BulletItem key={item} item={item} color={group.color} />)}</ul> :
              <div className="mt-5 space-y-4">{group.subgroups!.map(sub => <div key={sub.label}><div className="mb-2 font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground/70">{sub.label}</div><ul className="space-y-2">{sub.items.map(item => <BulletItem key={item} item={item} color={group.color} />)}</ul></div>)}</div>}
            <div className={`pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${group.color} opacity-0 blur-3xl transition group-hover:opacity-20`} />
          </motion.div>)}
        </div>
      </div>
    </section>
  );
}