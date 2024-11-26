import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Providers from "./context/ReactQueryProvider";
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
  title: "Home || Angels - Radar",
  description: "Angels - Radar - Company Investoring  & Presentetion",
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
        <Providers>
        <Toaster position="bottom-right" reverseOrder={false} />
        {children}
   
        </Providers>
      
    
      </body>
    </html>
  );
}
