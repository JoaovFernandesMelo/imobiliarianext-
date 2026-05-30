export function Footer() {
  return (
    <footer id="contato" className="bg-ink text-background/85">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-3xl">NEXT</span>
            <span className="text-[0.65rem] tracking-[0.3em] uppercase opacity-70">
              Soluções Imobiliárias
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/65">
            Consultoria imobiliária personalizada para famílias que valorizam
            discrição, critério e atendimento humano.
          </p>
        </div>

        <div className="md:col-span-4 text-sm space-y-4">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[color:var(--color-gold)]">Contato</p>
          <p>WhatsApp · <a href="https://wa.me/5519971250995" className="hover:text-[color:var(--color-gold)] transition-colors">(19) 97125-0995</a></p>
          <p>E-mail · <a href="mailto:walter.nextim@gmail.com" className="hover:text-[color:var(--color-gold)] transition-colors">walter.nextim@gmail.com</a></p>
        </div>


        <div className="md:col-span-3 text-sm space-y-4">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[color:var(--color-gold)]">Atendimento</p>
          <p className="text-background/75">Segunda a sexta<br />09h às 19h</p>
          <p className="text-background/65">Av. das Acácias, 1200<br />Campinas — SP</p>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-[0.7rem] uppercase tracking-[0.22em] text-background/50">
          <span>© {new Date().getFullYear()} NEXT Soluções Imobiliárias</span>
        </div>
      </div>

    </footer>
  );
}
