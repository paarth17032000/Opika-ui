import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import { GlobalContextProvider } from "@/context/useContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opika",
  description: "App created to view user, posts, balance and add posts.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
          <Navbar />
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  );
}
