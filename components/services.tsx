import { Globe, UtensilsCrossed, CalendarCheck, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Service = {
  icon: LucideIcon
  title: string
  description: string
  tags: string[]
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Site Institucional",
    description:
      "Página profissional para o seu negócio aparecer no Google e passar confiança para novos clientes.",
    tags: ["SEO Local", "Mobile First", "Google", "Profissional"],
  },
  {
    icon: UtensilsCrossed,
    title: "Cardápio Digital",
    description:
      "Menu online com fotos e preços. Clientes pedem direto pelo WhatsApp, sem app para baixar.",
    tags: ["WhatsApp", "QR Code", "Mobile First", "Pedido Online"],
  },
  {
    icon: CalendarCheck,
    title: "Agendamento Online",
    description:
      "Agenda digital para salões, clínicas e prestadores de serviço. Clientes marcam horário 24 h por dia.",
    tags: ["Salões", "Clínicas", "Agendamento 24h", "WhatsApp"],
  },
  {
    icon: TrendingUp,
    title: "Landing Page de Vendas",
    description:
      "Página focada em conversão para promoções, lançamentos e campanhas nas redes sociais.",
    tags: ["Conversão", "Promoções", "Redes Sociais", "Mobile First"],
  },
]

export function Services() {
  return (
    <section aria-labelledby="services-heading" className="w-full">
      <div className="mb-5 flex items-center justify-between">
        <h2
          id="services-heading"
          className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Serviços
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent ml-4" />
      </div>

      <ul className="grid grid-cols-1 gap-4">
        {services.map(({ icon: Icon, title, description, tags }) => (
          <li
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
            {/* Decorative accent */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-opacity group-hover:bg-primary/10"
            />

            <div className="relative flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
