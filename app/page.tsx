import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Cta } from "@/components/cta"
import { AnimatedBackground } from "@/components/animated-background"

export default function Page() {
  return (
    <main className="relative min-h-dvh">
      <AnimatedBackground />

      {/* Content container — mobile-first, max width for desktop */}
      <div className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-5 py-10 sm:py-14">
        <Hero />

        <div className="mt-10 space-y-10">
          <Services />
          <Portfolio />
          <Cta />
        </div>

        <footer className="mt-12 pt-6 text-center text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Luis Felipe · Feito com código e
            café.
          </p>
        </footer>
      </div>
    </main>
  )
}
