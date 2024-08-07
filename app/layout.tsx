import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corporate Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
        <PrelineScript />
      </body>
    </html>
  );
}
