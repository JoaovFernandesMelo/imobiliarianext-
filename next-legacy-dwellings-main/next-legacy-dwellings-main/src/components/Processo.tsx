const etapas = [
  {
    n: "I",
    t: "Entendimento da necessidade",
    d: "Uma conversa reservada para compreender o seu momento, expectativas e prioridades.",
  },
  {
    n: "II",
    t: "Análise de perfil",
    d: "Cruzamos estilo de vida, localização desejada, perfil de investimento e objetivos familiares.",
  },
  {
    n: "III",
    t: "Seleção personalizada",
    d: "Curadoria criteriosa de imóveis que dialogam, de fato, com aquilo que importa para você.",
  },
  {
    n: "IV",
    t: "Apresentação das oportunidades",
    d: "Acompanhamento próximo, com análise comparativa, suporte técnico e total discrição.",
  },
];

export function Processo() {
  return (
    <section id="processo" className="bg-bone py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="eyebrow">O processo</span>
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Quatro etapas. Uma decisão tranquila.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Um método consultivo construído para respeitar o seu tempo e
            valorizar cada detalhe da sua escolha.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {etapas.map((e) => (
            <div
              key={e.n}
              className="bg-bone p-10 lg:p-12 min-h-[320px] flex flex-col"
            >
              <span className="font-serif text-3xl text-[color:var(--color-gold)]">
                {e.n}
              </span>
              <span className="hairline mt-6" />
              <h3 className="mt-8 font-serif text-2xl leading-snug">{e.t}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {e.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
