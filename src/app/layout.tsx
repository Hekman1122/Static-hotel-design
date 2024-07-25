import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/Navbar,";
import FooterComponent from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "享樂酒店國際官方網站",
  description: "Build hotel booking website by nextjs and typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="relative w-full">
      <body className={inter.className}>
        <>
          <NavbarComponent />
          {children}
          <FooterComponent />
        </>
      </body>
    </html>
  );
}
