import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ShoppingBag } from "lucide-react"

export function Portfolio() {
  return (
    <section aria-labelledby="portfolio-heading" className="w-full">
      <div className="mb-5 flex items-center justify-between">
        <h2
          id="portfolio-heading"
          className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
        >
          Portfólio em destaque
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent ml-4" />
      </div>

      <article className="group overflow-hidden rounded-2xl border border-border bg-card">
        {/* Project image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
          <Image
            src="/shopping-do-alimento.jpg"
            alt="Preview do projeto Shopping do Alimento"
            fill
            sizes="(max-width: 640px) 100vw, 480px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent"
          />
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Marketplace
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
              <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-foreground">
                Shopping do Alimento
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Plataforma para comparar preços e facilitar compras
                inteligentes, unindo consumidores e supermercados em uma única
                experiência.
              </p>
            </div>
          </div>

          <Link
            href="https://shopping-do-alimento.vercel.app/#inicio"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-secondary/80"
          >
            Ver Projeto
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </article>
    </section>
  )
}
