import type { Metadata } from "next";
import { Kameron } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const kameron = Kameron({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-kameron",
});

const kardia = localFont({
  src: "../font/Kardia_fat.ttf",
  variable: "--font-kardia",
});

export const metadata: Metadata = {
  title: "$CROC",
  description:
    "Navigating the calm lakes of the blockchain, $CROC effortlessly glides past market foxes and bears, leaving a trail of memes in its wake.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kameron.className} ${kardia.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
