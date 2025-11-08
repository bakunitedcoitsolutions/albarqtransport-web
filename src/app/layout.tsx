import type { Metadata } from "next";
import { ReactNode } from "react";
import "@/css/bootstrap.min.css";
import "@/css/all.min.css";
import "@/css/animate.css";
import "@/css/magnific-popup.css";
import "@/css/meanmenu.css";
import "@/css/swiper-bundle.min.css";
import "@/css/nice-select.css";
import "@/css/color.css";
import "@/css/main.css";
import { tanseekArabic } from "@/lib/font";

export const metadata: Metadata = {
  title: "Al barq Transport",
  description: "Transportation and logistics company",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <html lang="en" className={`${tanseekArabic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
