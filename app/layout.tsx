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
  title: "Транслітерація · Українська → Латиниця",
  description:
    "Онлайн-транслітератор українського алфавіту латиницею за офіційними правилами — Постанова Кабінету Міністрів України № 55 від 27 січня 2010 р.",
  keywords: [
    "транслітерація",
    "transliteration",
    "українська латиниця",
    "КМУ 55",
    "ukrainian latin",
  ],
  openGraph: {
    title: "Транслітерація · Українська → Латиниця",
    description:
      "Онлайн-конвертер транслітерації за офіційними правилами КМУ № 55 · 2010",
    type: "website",
    locale: "uk_UA",
  },
  twitter: {
    card: "summary",
    title: "Транслітерація · Українська → Латиниця",
    description:
      "Онлайн-конвертер транслітерації за офіційними правилами КМУ № 55 · 2010",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uk"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
