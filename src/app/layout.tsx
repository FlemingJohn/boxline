import type { Metadata } from "next";
import type { ReactNode } from "react";
import { themeStartScript } from "@/lib/theme/themeStartScript";
import { bodyFont, codeFont, displayFont } from "@/styles/fonts";
import "@/styles/theme.css";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Boxline",
  description: "Make UML class and ER diagrams with a click and a drag. Your diagrams stay on your computer.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const fontClasses = `${displayFont.variable} ${bodyFont.variable} ${codeFont.variable}`;

  return (
    <html lang="en" className={fontClasses} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeStartScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
