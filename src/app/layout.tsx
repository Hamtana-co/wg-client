import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/base/headers/main-header";
import { Providers } from "./providers";
import MobileNavigation from "@/components/base/mobile-navigation";
import MobileHeader from "@/components/base/headers/mobile-header";

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
        <main>
          <Providers>
            <MainHeader />
            <MobileHeader />
            <div>{children}</div>
            <MobileNavigation />
          </Providers>
        </main>
      </body>
    </html>
  );
}
