import type { Metadata } from "next";
import { ReactNode } from "react";
import "../src/css/bootstrap.min.css";
import "../src/css/all.min.css";
import "../src/css/animate.css";
import "../src/css/magnific-popup.css";
import "../src/css/meanmenu.css";
import "../src/css/swiper-bundle.min.css";
import "../src/css/nice-select.css";
import "../src/css/color.css";
import "../src/css/main.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
