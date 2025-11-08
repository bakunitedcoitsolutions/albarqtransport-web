import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";

export const dM_Sans = DM_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--thm-font",
  display: "swap",
});

export const tanseekArabic = localFont({
  src: "../../public/assets/fonts/Tanseek-Modern-Pro-Arabic.ttf",
  variable: "--font-arabic",
  display: "swap",
});
