import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Next.js UI Components",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
