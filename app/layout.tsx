import type { Metadata } from "next";
import { Lato, DM_Sans } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato-loaded",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dmsans-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MelhoresPreçosAéreos – Passagens Baratas e Dicas de Viagem",
  description:
    "Compare preços de passagens aéreas, encontre ofertas imperdíveis e descubra dicas para viajar gastando menos. Seu guia de voos baratos no Brasil e no mundo.",
  keywords: "passagens aéreas baratas, voos baratos, promoções de passagens, milhas, LATAM, Gol, Azul",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${lato.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
