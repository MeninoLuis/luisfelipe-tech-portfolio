import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Luis Felipe — Software Developer",
  description:
    "Transformando ideias em produtos digitais. Apps mobile, sistemas web e soluções desenvolvidos sob medida.",
  generator: "Luis Felipe Tech",
  icons: {
    icon: "/icon_pq.png",
    apple: "/icon_pq.png",
  },
  openGraph: {
    title: "Luis Felipe — Software Developer",
    description: "Transformando ideias em produtos digitais.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
