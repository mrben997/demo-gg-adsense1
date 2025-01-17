import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Adsense } from "./components/adsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Adsense
          className="adsbygoogle"
          style={{ display: "block" }}
          client="ca-pub-9643912173816808"
          slot="1480448417"
          format="auto"
          responsive="true"
        ></Adsense>
        {children}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9643912173816808"
          crossOrigin="anonymous"
        ></script>
        {/* <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
      </body>
    </html>
  );
}
