import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "./header";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:4000"),
  title: {
    default: "Next Crash Course",
    template: `%s | Next Crash Course`,
  },
  description: "This is a NextJS 14 App Router Crash Course for beginners",
  verification: {
    google: "google-site-verification-123456",
    yahoo: "yahoo-site-verification-123456",
    yandex: "yandex-site-verification-123456",
    me: "me-site-verification-123456",
    other: {},
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} flex h-[100dvh] flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
