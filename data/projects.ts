import type { LucideIcon } from "lucide-react"
import { ShoppingBag } from "lucide-react"

export type Project = {
  title: string
  description: string
  image: string
  imageAlt: string
  category: string
  icon: LucideIcon
  tags: string[]
  link: string
  badge?: string
}

export const projects: Project[] = [
  {
    title: "Shopping do Alimento",
    description:
      "Plataforma para comparar preços e facilitar compras inteligentes, unindo consumidores e supermercados em uma única experiência.",
    image: "/shopping-do-alimento.jpg",
    imageAlt: "Preview do projeto Shopping do Alimento",
    category: "Marketplace",
    icon: ShoppingBag,
    tags: ["SEO Local", "Mobile First", "Campinas, SP"],
    link: "https://shopping-do-alimento.vercel.app/#inicio",
    badge: "Primeiro projeto entregue — cliente em Campinas, SP",
  },
]
