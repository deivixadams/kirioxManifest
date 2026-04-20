import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiriox GRI | Manifiesto",
  description:
    "El riesgo no es una lista. Es un sistema. Manifiesto de Kiriox GRI.",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
