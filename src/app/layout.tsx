import type { Metadata } from "next";
import "@/styles/globals.css";
import { TRPCReactProvider } from "@/server/trpc/react";

export const metadata: Metadata = {
  title: "Hell",
  description: "Bloody Hell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TRPCReactProvider>
        <body className={`antialiased`}>{children}</body>
      </TRPCReactProvider>
    </html>
  );
}
