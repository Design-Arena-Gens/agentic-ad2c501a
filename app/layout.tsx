import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "రాగ రేఖలు | Telugu Poem",
  description: "An evocative Telugu poem presented with immersive visuals."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="te">
      <body>{children}</body>
    </html>
  );
}
