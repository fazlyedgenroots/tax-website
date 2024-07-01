import Navbar from "@/components/common/Navbar";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "@/styles/globals.css";
import "@/styles/animation.css";
import Footer from "@/components/common/Footer";
import { siteConfig } from "@/config/site";
import StartWithUs from "@/components/common/StartWithUs";

const fontFamily = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.metadata.defaultName,
  description: siteConfig.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={fontFamily.className}>
        <Navbar />
        <div className="md:mt-24 mt-24 min-h-screen">
          {children}
        </div>
        <StartWithUs />
        <Footer />
      </body>
    </html>
  );
}
