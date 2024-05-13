import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import Image from "next/image";
import carlos_image from "../../public/imgs/carlos_think.png";
import Header from "./components/Header";

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
      <MantineProvider>
        <body className={`${inter.className}
          flex gap-5 mx-5`}>
          <aside className="hidden top-0 sticky h-screen sm:flex flex-col justify-center
                items-center min-w-64 max-w-64 border-r-2 border-black">
              <Image src={carlos_image}
                    alt="Image of Carlos in a thinking pose."
                    width={80}
                    height={80}/>
              <hgroup className="text-center">
                <h3>About Carlos Mendez</h3>
                <p>
                  An aspiring web developer with much to learn and much to share!
                </p>
              </hgroup>
          </aside>
          <div className="flex flex-col gap-5
            justify-between max-w-5xl
            items-stretch
            mx-auto min-h-screen">
            <Header/>
            {children}
            <footer>
              <h5>
                Created by Carlos Mendez
                <br/>
                For Deployment of Web Applications
              </h5>
            </footer>
          </div>
        </body>
      </MantineProvider>
    </html>
  );
}
