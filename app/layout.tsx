import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Triandi Utama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/app/favicon.ico" />
        <title>Triandi Utama</title>
      </head>
      <body className={inter.className}>
        <div className="w-screen flex">

        {children}
        </div>
        </body>
    </html>
  );
}
