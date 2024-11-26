import type { Metadata } from "next";
import localFont from "next/font/local";

// Load Circular Std font
const circularStd = localFont({
  src: [
    {
      path: "../fonts/CircularStd-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/CircularStd-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-circular-std", 
});

export const metadata: Metadata = {
  title: "Auth || Angels - Radar",
  description: "My Next.js App with Circular Std Font",
  icons: "/logo.svg",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className={`${circularStd.variable} antialiased`}>
      <div className="w-full h-full bg-form-bg bg-cover bg-no-repeat min-h-screen">
      {children}
      </div>
      </div>
  );
}
