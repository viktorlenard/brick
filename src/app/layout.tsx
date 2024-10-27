import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Container } from "./components/Container";


export const metadata: Metadata = {
  title: "Brick",
  description: "SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'antialiased font-slab'}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
