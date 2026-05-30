export function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2 text-background">
          <span className="font-serif text-2xl tracking-wide">NEXT</span>
          <span className="text-[0.6rem] tracking-[0.3em] uppercase opacity-80">
            Soluções Imobiliárias
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.22em] text-background/90">
          <a href="#consultoria" className="hover:text-[color:var(--color-gold)] transition-colors">Consultoria</a>
          <a href="#processo" className="hover:text-[color:var(--color-gold)] transition-colors">Processo</a>
          <a href="#atendimento" className="hover:text-[color:var(--color-gold)] transition-colors">Atendimento</a>
          <a href="#contato" className="hover:text-[color:var(--color-gold)] transition-colors">Contato</a>
        </nav>
        <a
          href="#atendimento"
          className="hidden md:inline-block text-xs uppercase tracking-[0.22em] text-background border-b border-[color:var(--color-gold)] pb-1 hover:text-[color:var(--color-gold)] transition-colors"
        >
          Solicitar atendimento
        </a>
      </div>
    </header>
  );
}
