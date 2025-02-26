import type { Metadata } from "next";
import MainHeader from "@/components/MainHeader/main-header";
import "../globals.css"

export const metadata: Metadata = {
  title: "News ",
  description: "News home page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="page">
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
