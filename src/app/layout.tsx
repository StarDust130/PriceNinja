import type { Metadata } from "next";
import { Jersey_15 } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";


const jersey_15 =  Jersey_15({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Pricewise",
  description: "Price Wise is a price comparison website.",
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
      <body className={jersey_15.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
