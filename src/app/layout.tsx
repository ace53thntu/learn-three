import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

// https://panda-css.com/docs/guides/fonts#setup
const InterFont = Inter({
  weight: ["400", "500", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${InterFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
