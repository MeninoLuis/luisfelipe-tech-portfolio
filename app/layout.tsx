import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
const title = "Luis Felipe Tech | Sites, Agendamentos e Sistemas";
const description =
  "Desenvolvedor em Campinas. Sites, catálogos, agendamentos, dashboards e sistemas para simplificar a rotina do seu negócio. Atendimento em todo o Brasil.";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg", apple: "/icon_pq.png" },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Luis Felipe Tech — Sites, agendamentos e sistemas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
};
export const viewport: Viewport = {
  themeColor: "#0b1629",
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
