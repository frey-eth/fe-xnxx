import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./store-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevTruyen",
  description:
    "Read manga online for free with high-quality images at DevTruyen - the best manga site to read manga online for free. Enjoy reading manga online now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          <Header />
          <div className="min-h-screen pb-[10px]">{children}</div>
          <Footer />
          <Toaster position="top-right" />
        </body>
      </html>
    </StoreProvider>
  );
}
