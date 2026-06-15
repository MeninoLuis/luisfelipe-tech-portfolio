import { Quote } from "lucide-react"

type Testimonial = {
  quote: string
  author: string
  business: string
  location: string
}

// Substitua este placeholder pelo depoimento real do cliente
const testimonials: Testimonial[] = [
  {
    quote:
      "Em breve aqui — aguardando depoimento do cliente. Você pode substituir este texto pelo feedback real recebido após a entrega do projeto.",
    author: "Nome do Cliente",
    business: "Nome do Negócio",
    location: "Campinas, SP",
  },
]

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="w-full">
      <div className="mb-5 flex items-center justify-between">
        <h2
          id="testimonials-heading"
          className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
        >
          O que dizem
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent ml-4" />
      </div>

      <ul className="flex flex-col gap-4">
        {testimonials.map(({ quote, author, business, location }) => (
          <li key={author}>
            <figure className="relative overflow-hidden rounded-2xl border border-border bg-card p-5">
              {/* Decorative quote mark */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-3 -top-3 text-primary/10"
              >
                <Quote className="h-16 w-16 rotate-180" />
              </div>

              <blockquote className="relative text-sm leading-relaxed text-muted-foreground">
                &ldquo;{quote}&rdquo;
              </blockquote>

              <figcaption className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary ring-1 ring-primary/20">
                  {author.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-foreground">{author}</p>
                  <p className="text-[11px] text-muted-foreground">
                    {business} · {location}
                  </p>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
