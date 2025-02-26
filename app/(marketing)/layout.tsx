import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "All News ",
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
        {children}
      </body>
    </html>
  );
}
