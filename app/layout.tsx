import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Culinary Realm",
  description: "A collection of every kind of food recipe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="https://www.svgrepo.com/show/276548/recipe.svg"
        type="image/x-icon"
      />
      <body className={playfair.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
