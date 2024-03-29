import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDoList",
  description: "App criado para aprendizado e testes",
icons:{
  icon:[
    {
      media:"(prefers-color-scheme: ligth)",
      url: "./logo.svg",
      href: "./logo.svg",
    },
    {
      media:"(prefers-color-scheme: dark)",
      url: "/logo-dark.svg",
      href: "/logo-dark.svg",
    }
  ]
}
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
 attribute="class"
 defaultTheme="system"
 enableSystem
 disableTransitionOnChange
 storageKey="todoapp-theme-2"
>
{children}
</ThemeProvider>
      </body>
    </html>
  );
}
