import sobre from "@/assets/sobre.jpg";

const pilares = [
  { t: "Escuta atenta", d: "Compreendemos sua história, seu momento e o que importa para sua família." },
  { t: "Análise de perfil", d: "Avaliamos estilo de vida, rotina, localização e horizonte de investimento." },
  { t: "Curadoria criteriosa", d: "Selecionamos apenas oportunidades alinhadas ao seu perfil e objetivos." },
  { t: "Decisão consciente", d: "Acompanhamos cada etapa com clareza, discrição e segurança." },
];

export function Sobre() {
  return (
    <section id="consultoria" className="relative bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        <div className="lg:col-span-5">
          <div className="sticky top-24">
            <span className="eyebrow">A consultoria</span>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Uma forma serena
              <br />
              de tomar a melhor decisão imobiliária.
            </h2>
            <span className="hairline mt-10" />
            <img
              src={sobre}
              alt="Ambiente de consultoria"
              width={1280}
              height={1600}
              loading="lazy"
              className="mt-10 w-full aspect-[4/5] object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <p className="font-serif text-2xl lg:text-3xl leading-relaxed text-ink/90 font-light">
            Na NEXT, acreditamos que escolher um imóvel é uma decisão que vai
            muito além de metros quadrados. É sobre rotina, vínculos, segurança
            e o lugar onde sua família construirá memórias.
          </p>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground max-w-2xl">
            Por isso, nosso trabalho começa pelo essencial: ouvir. Entendemos
            o seu momento de vida, mapeamos prioridades e analisamos com
            critério cada oportunidade. Atuamos como consultores — não como
            vendedores — para que cada apresentação faça sentido para você.
          </p>

          <div className="mt-16 grid sm:grid-cols-2 gap-x-10 gap-y-12">
            {pilares.map((p, i) => (
              <div key={p.t} className="border-t border-border pt-6">
                <span className="text-[0.65rem] tracking-[0.3em] text-[color:var(--color-gold)]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-serif text-2xl">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
