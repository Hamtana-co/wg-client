import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/base/headers/main-haeder";

export const metadata: Metadata = {
  title: "We Gamers",
  description: "Gaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-[#12141C]">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
