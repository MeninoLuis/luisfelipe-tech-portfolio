import Link from "next/link"
import { MessageCircle, ArrowRight } from "lucide-react"

export function Cta() {
  // Replace with actual number in E.164 format (no + or spaces)
  const whatsappNumber = "5500000000000"
  const whatsappMessage = encodeURIComponent(
    "Olá Luis! Gostaria de tirar uma ideia do papel.",
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section aria-labelledby="cta-heading" className="w-full">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-10 h-64 w-64 rounded-full bg-[color:var(--whatsapp)]/10 blur-3xl"
        />

        <div className="relative text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Vamos conversar?
          </p>
          <h2
            id="cta-heading"
            className="mt-2 text-balance text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Vamos tirar seu projeto do papel?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Resposta rápida, orçamento sem compromisso.
          </p>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[color:var(--whatsapp)] px-5 py-4 text-base font-semibold text-[color:var(--whatsapp-foreground)] shadow-lg shadow-[color:var(--whatsapp)]/20 ring-1 ring-inset ring-white/10 transition-all hover:shadow-[color:var(--whatsapp)]/40 active:scale-[0.98] sm:text-[15px]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            <span>Falar no WhatsApp</span>
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <p className="mt-4 text-[11px] text-muted-foreground">
            Ou envie um e-mail para{" "}
            <a
              href="mailto:contato@luisfelipe.dev"
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              luisribeiroesilva@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
