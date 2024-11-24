import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load Circular Std font
const circularStd = localFont({
  src: [
    {
      path: "./fonts/CircularStd-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CircularStd-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-circular-std", 
});

export const metadata: Metadata = {
  title: "My App",
  description: "My Next.js App with Circular Std Font",
  icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${circularStd.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
