import { useState } from "react";

const fieldClass =
  "w-full bg-transparent border-0 border-b border-border focus:border-[color:var(--color-gold)] outline-none py-3 text-sm text-ink placeholder:text-muted-foreground/70 transition-colors";

const labelClass =
  "block text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground mb-2";

export function Formulario() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="atendimento" className="bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <span className="eyebrow">Atendimento</span>
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Conte-nos sobre o seu próximo passo.
          </h2>
          <span className="hairline mt-10" />
          <p className="mt-10 text-muted-foreground leading-relaxed">
            Suas informações são tratadas com absoluta discrição. Após o envio,
            um de nossos consultores entrará em contato no horário indicado para
            agendar uma conversa.
          </p>
          <dl className="mt-12 space-y-6 text-sm">
            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-gold)]">
                Sigilo
              </dt>
              <dd className="mt-2 text-muted-foreground">
                Conversas reservadas, sem listas, sem disparos.
              </dd>
            </div>
            <div>
              <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-[color:var(--color-gold)]">
                Resposta
              </dt>
              <dd className="mt-2 text-muted-foreground">
                Retorno em até um dia útil, no horário escolhido.
              </dd>
            </div>
          </dl>
        </div>

        <div className="lg:col-span-8">
          <form
            onSubmit={onSubmit}
            className="bg-card border border-border p-8 lg:p-14"
          >
            {sent ? (
              <div className="py-20 text-center">
                <span className="eyebrow">Recebido</span>
                <h3 className="mt-6 font-serif text-3xl">
                  Obrigado pela sua confiança.
                </h3>
                <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                  Um consultor da NEXT entrará em contato em breve, no horário
                  que você indicou.
                </p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Nome completo</label>
                    <input required type="text" className={fieldClass} placeholder="Como devemos chamá-lo(a)" />
                  </div>
                  <div>
                    <label className={labelClass}>WhatsApp</label>
                    <input required type="tel" className={fieldClass} placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className={labelClass}>Melhor horário para contato</label>
                    <select className={fieldClass} defaultValue="">
                      <option value="" disabled>Selecione</option>
                      <option>Manhã (09h — 12h)</option>
                      <option>Tarde (13h — 18h)</option>
                      <option>Início da noite (18h — 20h)</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Tipo de imóvel</label>
                    <select className={fieldClass} defaultValue="">
                      <option value="" disabled>Selecione</option>
                      <option>Apartamento</option>
                      <option>Casa em condomínio</option>
                      <option>Cobertura</option>
                      <option>Casa térrea</option>
                      <option>Terreno</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Cidade desejada</label>
                    <input type="text" className={fieldClass} placeholder="Ex.: Campinas, São Paulo" />
                  </div>
                  <div>
                    <label className={labelClass}>Número de suítes</label>
                    <select className={fieldClass} defaultValue="">
                      <option value="" disabled>Selecione</option>
                      <option>1</option><option>2</option><option>3</option><option>4 ou mais</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Número de vagas</label>
                    <select className={fieldClass} defaultValue="">
                      <option value="" disabled>Selecione</option>
                      <option>1</option><option>2</option><option>3</option><option>4 ou mais</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Faixa de investimento</label>
                    <select className={fieldClass} defaultValue="">
                      <option value="" disabled>Selecione</option>
                      <option>Até R$ 1.000.000</option>
                      <option>R$ 1.000.000 — R$ 2.500.000</option>
                      <option>R$ 2.500.000 — R$ 5.000.000</option>
                      <option>R$ 5.000.000 — R$ 10.000.000</option>
                      <option>Acima de R$ 10.000.000</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Possui imóvel para venda?</label>
                    <div className="flex gap-8 pt-2">
                      <label className="flex items-center gap-3 text-sm text-ink">
                        <input type="radio" name="venda" className="accent-[color:var(--color-gold)]" /> Sim
                      </label>
                      <label className="flex items-center gap-3 text-sm text-ink">
                        <input type="radio" name="venda" className="accent-[color:var(--color-gold)]" /> Não
                      </label>
                      <label className="flex items-center gap-3 text-sm text-ink">
                        <input type="radio" name="venda" className="accent-[color:var(--color-gold)]" /> Talvez
                      </label>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass}>Observações</label>
                    <textarea rows={4} className={`${fieldClass} resize-none`} placeholder="Conte-nos um pouco mais sobre o que procura." />
                  </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
                  <p className="text-xs text-muted-foreground max-w-sm">
                    Ao enviar, você concorda em ser contatado por nossa equipe de
                    consultoria. Nenhum dado é compartilhado com terceiros.
                  </p>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 bg-ink text-background px-10 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[color:var(--color-gold)] hover:text-ink transition-colors duration-500"
                  >
                    Enviar solicitação
                    <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
