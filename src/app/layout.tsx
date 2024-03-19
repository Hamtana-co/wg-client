import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "./providers";
import MainHeader from "@/components/headers/main-header";
import MobileHeader from "@/components/headers/mobile-header";
import MobileNavigation from "@/components/mobile-navigation";

export const metadata: Metadata = {
  icons:"/ico.png",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className="dark">
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
