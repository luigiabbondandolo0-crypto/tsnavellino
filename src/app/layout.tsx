import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "T.S.N. Avellino — Dal 1892",
  description:
    "Tiro a Segno Nazionale sezione di Avellino. Dal 1892, la precisione è arte. Poligoni, corsi, rilascio e rinnovo porto d'armi.",
  keywords: ["tiro a segno", "avellino", "poligono", "porto d'armi", "TSN"],
  openGraph: {
    title: "T.S.N. Avellino — Dal 1892",
    description: "La più storica sezione di tiro a segno dell'Irpinia.",
    locale: "it_IT",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[#080808] text-[#f0ece4] antialiased">
        {children}
      </body>
    </html>
  );
}
