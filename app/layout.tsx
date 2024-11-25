import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
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

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${circularStd.variable} antialiased`}>
        <QueryClientProvider client={queryClient}>
        <Toaster position="bottom-right" reverseOrder={false} />
        {children}
        </QueryClientProvider>
    
      </body>
    </html>
  );
}
