import type { Metadata } from "next";
// import { Jersey_15 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

// const jersey15 = Jersey_15({
//   subsets: ["latin-ext"],
//   weight: "400",
// });

export const metadata: Metadata = {
  title: "PriceNinja",
  description: "PriceNinja is a price comparison website.",
  icons: {
    icon: "https://img.icons8.com/office/16/fire-element--v1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
