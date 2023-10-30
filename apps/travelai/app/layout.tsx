import "@ui/styles/global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { FC, ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TravelAi",
  description: "AI travel agent",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>
);
export default RootLayout;
