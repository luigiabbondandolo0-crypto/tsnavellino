import type { Metadata } from "next";
import { Jost, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
    <html lang="it" className={`${jost.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-[#080808] text-[#f0ece4] antialiased">
        {children}
      </body>
    </html>
  );
}
