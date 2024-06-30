import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Theme } from "@radix-ui/themes";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MangaHub",
  description: "MangaHub is a website to read manga online for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Theme>
          <Header />
          <div className="min-h-screen pb-[10px]">{children}</div>
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
