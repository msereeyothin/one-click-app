import "./globals.css";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import { NavBar } from "./components/NavBar";
import ClickTracker from "./components/ClickTracker";

const kanit = Kanit({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OneClick",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kanit.className} bg-slate-800 text-slate-100`}>
        <NavBar></NavBar>
        {children}
        <ClickTracker></ClickTracker>
      </body>
    </html>
  );
}
