import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Container } from "./components/Container";


export const metadata: Metadata = {
  title: "Brick",
  description: "Something SaaS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'antialiased bg-light text-dark'}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
