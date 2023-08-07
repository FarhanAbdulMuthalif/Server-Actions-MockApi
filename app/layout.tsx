import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MockApi Server Actions",
  description: "Creating server actions and mockapi integration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
