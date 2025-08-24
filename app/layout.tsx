import "./styles/globals.css";
import type { Metadata, Viewport } from "next";

// ✅ Viewport para móviles
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover", // aprovecha toda el área en iPhone con notch
};

// ✅ Metadatos del sitio
export const metadata: Metadata = {
  metadataBase: new URL("https://calanda.com.co"),
  title: "CALANDA — Comunicación, incidencia y estrategia",
  description:
    "Convertimos mensajes en poder e ideas en acción. Narrativas, posicionamiento, incidencia y relacionamiento público.",
  applicationName: "CALANDA",
  keywords: [
    "comunicación estratégica",
    "incidencia",
    "relacionamiento",
    "free press",
    "storytelling",
    "Colombia",
  ],
  authors: [{ name: "CALANDA" }],
  creator: "CALANDA",
  publisher: "CALANDA",

  // Favicons / PWA básicos (asegúrate de tener estos archivos en /public)
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",

  // Colores del navegador
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],

  // Open Graph
  openGraph: {
    title: "CALANDA — Comunicación, incidencia y estrategia",
    description:
      "Narrativas, posicionamiento, incidencia y relacionamiento público.",
    url: "https://calanda.com.co",
    siteName: "CALANDA",
    images: [
      // idealmente sube /og.jpg a /public y usa esa ruta
      { url: "/og.jpg", width: 1200, height: 630, alt: "CALANDA" },
    ],
    locale: "es_CO",
    type: "website",
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "CALANDA — Comunicación, incidencia y estrategia",
    description:
      "Narrativas, posicionamiento, incidencia y relacionamiento público.",
    images: ["/og.jpg"], // misma imagen de OG
    creator: "@calanda", // opcional si tienen cuenta
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      {/* 
        Next.js añadirá <meta name="viewport"...> desde `export const viewport` 
      */}
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
