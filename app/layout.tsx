import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seda Oruç — Language Lessons in Baku & Online",
  description:
    "Learn to speak English, German, Russian, and Turkish naturally and without stress. In-person at 8 Noyabr Metro, Baku and online worldwide with Coach Seda Oruç.",
  keywords: [
    "Seda Oruç",
    "English Coach Baku",
    "German Teacher Baku",
    "Russian Language Lessons Baku",
    "Turkish Lessons Baku",
    "8 Noyabr Metro Language Courses",
    "IELTS Preparation Baku",
    "Learn English Without Stress"
  ],
  authors: [{ name: "Seda Oruç" }],
  openGraph: {
    title: "Seda Oruç — Language Lessons in Baku & Online",
    description: "Learn to speak English, German, Russian, and Turkish naturally without stress.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#fbf9f5] text-stone-900 antialiased selection:bg-amber-200 selection:text-amber-950">
        {children}
      </body>
    </html>
  );
}
