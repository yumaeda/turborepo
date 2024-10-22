import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Admin | 酒場s",
  description: "酒場sの管理ページです。",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
