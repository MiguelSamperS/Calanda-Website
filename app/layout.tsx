import "./styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Spectral, Inter } from "next/font/google";

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Viewport para móviles (themeColor va aquí, no en metadata)
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#0F1C2B",
};

// Metadatos del sitio
export const metadata: Metadata = {
  metadataBase: new URL("https://calanda.com.co"),
  title: "Calanda · Estrategia de Licencia Social para Operar",
  description:
    "Calanda diseña, construye y protege la Licencia Social para Operar de empresas e instituciones en territorios complejos de Colombia. Método ACUERDO: rigor estratégico para construir confianza.",
  applicationName: "Calanda",
  keywords: [
    "licencia social para operar",
    "gobernanza territorial",
    "negociación colaborativa",
    "relacionamiento estratégico",
    "asuntos públicos",
    "ESG social",
    "Colombia",
  ],
  authors: [{ name: "Calanda Consultores y Estrategia" }],
  creator: "Calanda Consultores y Estrategia",
  publisher: "Calanda Consultores y Estrategia",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/icon.png", sizes: "512x512" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",

  openGraph: {
    title: "Calanda · Estrategia de Licencia Social para Operar",
    description:
      "Diseñamos, construimos y protegemos la licencia social que permite operar con legitimidad, confianza y acuerdos duraderos.",
    url: "https://calanda.com.co",
    siteName: "Calanda",
    images: [
      { url: "/hero-territorio-dialogo.jpg", width: 1536, height: 1024, alt: "Calanda — Estrategia de Licencia Social para Operar" },
    ],
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Calanda · Estrategia de Licencia Social para Operar",
    description:
      "Diseñamos, construimos y protegemos la licencia social que permite operar con legitimidad, confianza y acuerdos duraderos.",
    images: ["/hero-territorio-dialogo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${spectral.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bone text-ink antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
