import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next JS App",
  description: "Basic Next JS App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript/>
      </head>
      <body className={`${inter.className}
      flex flex-col gap-5
      justify-between items-center
      mx-auto max-w-5xl min-h-screen`}>
        <MantineProvider>
          <header>
            <nav>
              <Link href={"/"}>Home</Link>
            </nav>
          </header>
          {children}
          <footer>
            <h4>Footer</h4>
          </footer>
        </MantineProvider>
      </body>
    </html>
  );
}
