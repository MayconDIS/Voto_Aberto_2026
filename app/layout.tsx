import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://voto-aberto-2026-mayco.flowy-cake-4407.chatgpt.site"),
  title: "Voto Aberto 2026 | Renan Santos x Flávio Bolsonaro",
  description:
    "Compare os planos de governo de Renan Santos e Flávio Bolsonaro por tema, com páginas e fontes oficiais.",
  openGraph: {
    title: "Voto Aberto 2026",
    description:
      "Dois projetos presidenciais comparados tema por tema, sem ranking e com fontes abertas.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
