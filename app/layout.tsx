import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shubham Kumar - Frontend Developer & UI/UX Designer",
  description: "Created with v0",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon link here */}
        <link rel="icon" href="/logo-portfolio.jpg" type="image/jpeg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
