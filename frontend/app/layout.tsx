import { Inter } from "next/font/google";
import "./globals.css";
import ClientLoading from "./loading";
import { Toaster } from "react-hot-toast";

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className} font-inter text-base text-gray-200 antialiased`}
      >
        <ClientLoading>
          <Toaster position="bottom-center" />
          <main>{children}</main>
        </ClientLoading>
      </body>
    </html>
  );
}
