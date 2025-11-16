import "../css/all.min.css";
import "../css/bootstrap.min.css";
import "../css/animate.css";
import "../css/magnific-popup.css";
import "../css/meanmenu.css";
import "../css/swiper-bundle.min.css";
import "../css/nice-select.css";
import "../css/color.css";
import "../css/main.css";
import "../css/language-switcher.css";
import "./globals.css";

import { ReactNode } from "react";
import type { Metadata } from "next";
import { tanseekArabic } from "@/lib/font";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title:
    "BAK United Contracting Co | Leading Construction Company in Saudi Arabia",
  description:
    "BAK United Contracting Co. - Premier construction company in Jeddah, Saudi Arabia. 30+ years expertise in excavation, structural work, MEP systems, waterproofing, and finishing. Delivering mega construction projects with excellence since 2008.",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement {
  return (
    <html lang="en" className={`${tanseekArabic.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
