import "./styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CALANDA — Comunicación, incidencia y estrategia",
  description: "Convertimos mensajes en poder e ideas en acción. Narrativas, posicionamiento, incidencia y relacionamiento público.",
  openGraph: {
    title: "CALANDA — Comunicación, incidencia y estrategia",
    description: "Narrativas, posicionamiento, incidencia y relacionamiento público.",
    url: "https://calanda.com.co",
    siteName: "CALANDA",
    images: [
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80&auto=format&fit=crop" }
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CALANDA — Comunicación, incidencia y estrategia",
    description: "Narrativas, posicionamiento, incidencia y relacionamiento público.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
