import Image from "next/image"
import { MapPin } from "lucide-react"

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center">
      {/* Profile photo with accent ring */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -inset-1 rounded-full bg-primary/30 blur-md"
        />
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-primary/60 bg-card shadow-2xl sm:h-32 sm:w-32">
          <Image
            src="/luis-felipe.jpg"
            alt="Foto de Luis Felipe"
            fill
            sizes="128px"
            className="object-cover"
            priority
          />
        </div>
        {/* Online indicator */}
        <span className="absolute bottom-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-background">
          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[color:var(--whatsapp)]" />
        </span>
      </div>

      {/* Name */}
      <h1 className="mt-6 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        Luis Felipe
      </h1>

      {/* Title */}
      <p className="mt-2 text-sm font-medium text-primary sm:text-base">
        Software Developer
      </p>

      {/* Location */}
      <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Campinas, SP, Brasil— Disponível para projetos</span>
      </div>

      {/* Bio */}
      <p className="mt-5 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
        Transformando ideias em produtos digitais. Do protótipo à produção, com
        código limpo, design cuidadoso e foco em resultados reais.
      </p>
    </section>
  )
}
