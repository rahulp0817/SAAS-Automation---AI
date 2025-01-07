import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import ModalProvider from "@/providers/modal-providers";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FlowGen-Effortless Automation",
  description: "Automate the tasks you do every day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ModalProvider>
            {children}
            <Toaster />
          </ModalProvider>
        </Providers>
      </body>
    </html>
  );
}

// If change theme use this file
