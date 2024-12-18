import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PaddleLift - Your Gateway to Career Success",
  description:
    "Find your dream job with JobHub, the premier job search platform.",
  icons: {
    icon: "/favicon_io/favicon.ico",
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon_io/apple-touch-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter}   font-inter text-base text-gray-200 antialiased`}
      >
        <div className="fixed inset-0 z-[-1]"></div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
