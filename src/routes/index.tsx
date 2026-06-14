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
      { title: "Iara Venâncio Ribeiro · Analista e Desenvolvedora de Sistemas" },
      {
        name: "description",
        content:
          "Portfólio de Iara Venâncio Ribeiro — Analista e Desenvolvedora de Sistemas. Engenharia de software, full stack, cloud computing e IA aplicada.",
      },
      { property: "og:title", content: "Iara Venâncio Ribeiro · Portfólio" },
      {
        property: "og:description",
        content:
          "Engenharia de software, full stack, cloud e IA. Transformando ideias em soluções digitais inovadoras.",
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
