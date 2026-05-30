import img from "@/assets/experiencia.jpg";
import consultor from "@/assets/consultor.jpg";

const valores = [
  { t: "Segurança familiar", d: "Lugares pensados para a tranquilidade de quem você ama." },
  { t: "Qualidade de vida", d: "Rotinas mais leves, ambientes que respiram, vizinhanças serenas." },
  { t: "Patrimônio", d: "Decisões fundamentadas que preservam e valorizam o seu investimento." },
  { t: "Legado", d: "Escolhas que atravessam gerações e constroem história." },
];

export function Experiencia() {
  return (
    <section className="bg-bone py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <img
            src={img}
            alt="Residência clássica de alto padrão"
            width={1600}
            height={1100}
            loading="lazy"
            className="w-full aspect-[5/4] object-cover"
          />
          <div>
            <span className="eyebrow">Uma escolha que permanece</span>
            <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Imóveis são, no fim, capítulos de uma vida.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed max-w-lg">
              Acompanhar famílias em decisões importantes exige sensibilidade,
              experiência e tempo. É esse o cuidado que oferecemos em cada
              atendimento — sem pressa, sem fórmula, sem ruído.
            </p>

            <dl className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {valores.map((v) => (
                <div key={v.t} className="border-t border-border pt-5">
                  <dt className="font-serif text-xl text-ink">{v.t}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-28 lg:mt-40 grid lg:grid-cols-12 gap-12 items-center border-t border-border pt-16">
          <img
            src={consultor}
            alt="Consultor NEXT"
            width={860}
            height={1280}
            loading="lazy"
            className="lg:col-span-4 w-full max-w-sm aspect-[3/4] object-cover"
          />
          <div className="lg:col-span-8">
            <span className="eyebrow">Palavra do consultor</span>
            <blockquote className="mt-6 font-serif text-2xl lg:text-3xl leading-relaxed text-ink/90 font-light">
              “Atender bem é, antes de tudo, escutar com atenção. Cada família
              tem uma história — e o nosso papel é encontrar o lugar onde essa
              história continua a ser bem contada.”
            </blockquote>
            <p className="mt-8 text-sm uppercase tracking-[0.22em] text-muted-foreground">
              NEXT Soluções Imobiliárias

            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
