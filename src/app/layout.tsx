import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './header'
import Footer from './footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./header'), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>

        {children}

        <Footer/>
      </body>
    </html>
  );
}
