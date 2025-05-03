import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarPage from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Creative Web Pro",
  description: "CreativeWebPro offers top-tier web & appdevelopment, custom software and digital marketing solutions, all focused on delivering exceptional client satisfaction.",
  keywords: "creativewebpro, web development, app development, custom software, digital marketing, client satisfaction, client satisfaction, innovative solutions, high-quality services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div id="home" className="relative w-full">
            <NavbarPage />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
