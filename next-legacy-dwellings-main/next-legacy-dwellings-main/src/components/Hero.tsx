import poster from "@/assets/hero-poster.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-ink text-background">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-aerial-view-of-a-mansion-3617/1080p.mp4"
          type="video/mp4"
        />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 lg:px-10 pb-20 pt-40">
        <div className="max-w-3xl">
          <span className="eyebrow text-[color:var(--color-gold)]">Consultoria Imobiliária</span>
          <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-background">
            Encontramos o imóvel ideal
            <br />
            para o seu momento de vida.
          </h1>
          <p className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-background/85 font-light">
            Mais do que apresentar imóveis, oferecemos uma consultoria personalizada
            para entender suas necessidades e encontrar as melhores oportunidades
            para você e sua família.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8">
            <a
              href="#atendimento"
              className="group inline-flex items-center gap-4 border border-[color:var(--color-gold)] px-8 py-4 text-xs uppercase tracking-[0.28em] text-background hover:bg-[color:var(--color-gold)] hover:text-ink transition-colors duration-500"
            >
              Solicitar atendimento
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a href="#consultoria" className="text-xs uppercase tracking-[0.28em] text-background/80 hover:text-[color:var(--color-gold)] transition-colors">
              Conheça nossa consultoria
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 hidden md:flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-background/70">
        <span className="hairline" />
        Vídeo institucional
      </div>
    </section>
  );
}
