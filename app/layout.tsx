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
  title: "Tu Nombre | Desarrollador Full Stack",
  description: "Portafolio profesional de desarrollador Full Stack especializado en React, Next.js, Node.js y tecnologías modernas.",
  keywords: ["desarrollador", "full stack", "react", "next.js", "typescript", "portafolio"],
  authors: [{ name: "Tu Nombre" }],
  openGraph: {
    title: "Tu Nombre | Desarrollador Full Stack",
    description: "Portafolio profesional de desarrollador Full Stack",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}
