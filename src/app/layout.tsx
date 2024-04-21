import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const kameron = localFont({
  src: "../font/Kameron-Regular.ttf",
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
      <body className={` ${kardia.variable} ${kameron.className}`}>{children}</body>
    </html>
  );
}
