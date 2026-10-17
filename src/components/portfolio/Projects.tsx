import { motion } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  { name: "Reciclagem API", tag: "ESG · Spring Boot · REST", description: "API RESTful desenvolvida em Java com Spring Boot para gerenciamento de pontos de coleta de resíduos recicláveis, alinhada aos princípios ESG.", problem: "Falta de padronização e centralização no cadastro e consulta de pontos de coleta de resíduos recicláveis.", result: "CRUD completo de pontos de coleta com validação, segurança, documentação Swagger e respostas HTTP RESTful.", tech: ["Java 21", "Spring Boot", "Spring Data JPA", "Spring Security", "Swagger", "Flyway", "Docker"], accent: "from-neon-cyan to-neon-blue", repo: "https://github.com/Iaravenancio/reciclagem-api.git", demo: "" },
  { name: "Elegance Moda Feminina", tag: "E-commerce · React · Tailwind", description: "Website responsivo para uma boutique de moda feminina, com foco em experiência do usuário, apresentação de produtos, navegação intuitiva e identidade visual premium.", problem: "Necessidade de uma vitrine digital elegante que representasse a marca e facilitasse a navegação e conversão de clientes.", result: "Loja online responsiva com identidade visual premium, navegação intuitiva e apresentação otimizada de produtos.", tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Router", "shadcn/ui", "HTML5", "CSS3"], accent: "from-neon-purple to-neon-blue", repo: "", demo: "https://elegance-modafeminina.netlify.app" },
  { name: "Swift E-commerce · Challenge FIAP", tag: "E-commerce · JavaScript · GitHub Pages", description: "Aplicação web de e-commerce desenvolvida para o Challenge FIAP, simulando a experiência de compra da Swift com catálogo de produtos, carrinho, autenticação simulada e finalização de compra.", problem: "Criar uma experiência de e-commerce completa e responsiva utilizando apenas tecnologias web fundamentais.", result: "Site multi-páginas responsivo com navegação por categorias, carrinho persistido em localStorage, cadastro/login simulado e checkout, publicado no GitHub Pages.", tech: ["HTML5", "CSS3", "JavaScript", "localStorage", "Responsividade", "GitHub Pages"], accent: "from-neon-cyan to-neon-purple", repo: "https://github.com/Iaravenancio/Challenge_FIAP", demo: "https://iaravenancio.github.io/Challenge_FIAP/" },
  { name: "InovaGAB · Backend", tag: "Challenge Grupo Águia Branca · Spring Boot · MongoDB", description: "API REST desenvolvida em Java com Spring Boot para a plataforma InovaGAB, de gestão da inovação corporativa, permitindo registro e acompanhamento de ideias, gerenciamento de estratégias e projetos e visualização de indicadores.", problem: "Estruturar o fluxo de inovação corporativa com três perfis (Operador, Gestor e Líder), do registro de ideias à aprovação, projetos e indicadores.", result: "Backend independente com autenticação JWT, controle de acesso por perfil, persistência no MongoDB Atlas, validação de dados e integração com Gemini API para funcionalidades de IA.", tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MongoDB Atlas", "Bean Validation", "Gemini API", "Maven"], accent: "from-neon-purple to-neon-cyan", repo: "https://github.com/Iaravenancio/InovaGAB-Backend", demo: "" },
];

export function Projects() {
  return (
    <section id="projetos" className="relative px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="projetos selecionados" title="Do problema ao código" />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .6, delay: (i % 2) * .1 }}
              data-spot className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-500 hover:-translate-y-1.5 hover:border-white/20">
              <div className={`project-visual relative mb-6 h-44 overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_45%,oklch(0.17_0.04_270),oklch(0.07_0.02_270))]`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-20 mix-blend-screen transition duration-500 group-hover:opacity-40`} />
                <div className="absolute inset-0 grid-bg opacity-25" />
                <div className="project-flower" aria-hidden="true"><svg viewBox="-50 -50 100 100">
                  {p.tech.map((tech, j) => <ellipse key={tech} className="project-flower__petal" cx="0" cy="-15" rx="7" ry="14" style={{ transform: `rotate(${j * 360 / p.tech.length}deg)`, transitionDelay: `${j * 75}ms` }} />)}
                  <circle className="project-flower__core" r="3.2" />
                </svg></div>
                <div className="project-seed absolute left-4 top-4 font-mono text-[9px] uppercase tracking-[.2em] text-white/75"><span className="project-seed__seed">SEED</span><span className="project-seed__bloom">BLOOM</span> · {p.tech.length} techs</div>
                <div className="absolute inset-x-4 bottom-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-white/75"><span>{p.tag}</span><ArrowUpRight className="h-4 w-4" /></div>
              </div>
              <h3 className="font-display text-xl font-bold text-white">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <dl className="mt-5 grid grid-cols-1 gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4 text-xs sm:grid-cols-2">
                <div><dt className="font-mono uppercase tracking-widest text-neon-cyan">Problema</dt><dd className="mt-1 leading-relaxed text-muted-foreground">{p.problem}</dd></div>
                <div><dt className="font-mono uppercase tracking-widest text-neon-purple">Resultado</dt><dd className="mt-1 leading-relaxed text-muted-foreground">{p.result}</dd></div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-1.5">{p.tech.map(t => <span key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-muted-foreground transition hover:border-neon-cyan/30 hover:text-foreground">{t}</span>)}</div>
              <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4 text-xs">
                <a href={p.repo || p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 font-medium text-muted-foreground transition hover:border-neon-cyan/50 hover:text-white"><Github className="h-3 w-3" />Código ↗</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-1.5 font-semibold text-background transition hover:opacity-90"><Globe className="h-3 w-3" />Demo ↗</a>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}