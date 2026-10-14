import { createFileRoute } from "@tanstack/react-router";
import { NeuralBackground } from "@/components/portfolio/NeuralBackground";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Stack } from "@/components/portfolio/Stack";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iara Venâncio Ribeiro | Estudante de Análise e Desenvolvimento de Sistemas" },
      {
        name: "description",
        content:
          "Portfólio de Iara Venâncio Ribeiro, estudante de Análise e Desenvolvimento de Sistemas, com projetos em Java, APIs, bancos de dados, desenvolvimento web e automação.",
      },
      { property: "og:title", content: "Iara Venâncio Ribeiro · Portfólio" },
      {
        property: "og:description",
        content:
          "Projetos acadêmicos e pessoais em desenvolvimento de software, bancos de dados e automação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="dark relative min-h-screen bg-background text-foreground">
      <NeuralBackground />
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
