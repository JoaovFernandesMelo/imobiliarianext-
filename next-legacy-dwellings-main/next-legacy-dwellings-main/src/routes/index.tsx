import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Processo } from "@/components/Processo";
import { Formulario } from "@/components/Formulario";
import { Experiencia } from "@/components/Experiencia";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NEXT Soluções Imobiliárias — Consultoria personalizada" },
      {
        name: "description",
        content:
          "Consultoria imobiliária de alto padrão. Entendemos seu perfil e apresentamos as melhores oportunidades, com discrição e atendimento humano.",
      },
      { property: "og:title", content: "NEXT Soluções Imobiliárias" },
      {
        property: "og:description",
        content:
          "Consultoria imobiliária personalizada para famílias que valorizam critério e discrição.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Sobre />
      <Processo />
      <Formulario />
      <Experiencia />
      <Footer />
    </main>
  );
}
