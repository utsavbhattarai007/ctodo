import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Nav from "@/components/ui/nav"
import "./globals.css";

const poppins = Poppins({ weight:["400","500","600"],subsets: ["latin"], display: "swap",style: "normal",variable:"--font-poppins" });

export const metadata: Metadata = {
  title: "Ctodo",
  description: "The Cross Platform Todo App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
