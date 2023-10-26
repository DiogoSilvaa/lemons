import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Travel Genie",
  description: "Tell me about yourself, I'll tell you where to go",
};

interface RootLayoutProps {
  children: ReactNode;
}

// This layout applies to every page
// You can change the layout on a sub-page by adding a layout.tsx file in its folder
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
