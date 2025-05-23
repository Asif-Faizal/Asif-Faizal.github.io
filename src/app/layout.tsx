import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asif - Mobile Application Developer",
  description: "Professional portfolio of Asif, Mobile Application Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{
          backgroundColor: 'white',
          width: '100vw',
          height: '100vh',
          boxSizing: 'border-box',
          padding: '2rem 3rem',
          margin: 0
        }}>
          {children}
        </div>
      </body>
    </html>
  );
}
