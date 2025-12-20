import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn/UI Components Demo",
  description: "Learn and integrate Shadcn/UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <Navbar />
          <main className="container mx-auto p-4 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}