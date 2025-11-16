"use client";

import Link from "next/link";
import Image from "next/image";
import Menu from "../Menu";
import { EMAIL, PHONE, SOCIALS } from "@/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { HeaderProps } from "@/types";
import LanguageSwitcher from "@/components/elements/LanguageSwitcher";

export default function Header1({ scroll, handleOffCanvas }: HeaderProps) {
  const { isRTL } = useLanguage();
  const logo = isRTL
    ? "/assets/img/albarq/logos/logo_ar.png"
    : "/assets/img/albarq/logos/logo_en.png";

  const altLogo = isRTL ? "شركة البرق الرائدة للنقليات" : "Al Barq Transport";

  return (
    <header className="header-section-22">
      <div className="header-top-sectionss top-style-2 fix">
        <div className="container-fluid">
          <div className="header-top-wrappers style-2">
            <ul className="contact-list">
              <li>
                <i className="far fa-envelope" />
                <Link href={`mailto:${EMAIL}`} className="link">
                  {EMAIL}
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-phone-volume" />
                <Link
                  href={`tel:${PHONE.replaceAll(" ", "")}`}
                  className="link"
                >
                  {PHONE}
                </Link>
              </li>
            </ul>
            <div className="top-right">
              <div className="social-icon d-flex align-items-center">
                <span>Follow Us:</span>
                {SOCIALS.map((socialIcons) => (
                  <Link href={socialIcons.url} key={socialIcons.id}>
                    {typeof socialIcons.icon === "string" ? (
                      <i className={socialIcons.icon} />
                    ) : (
                      <socialIcons.icon />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="header-sticky" className={`header-1 ${scroll ? "sticky" : ""}`}>
        <div className="px-4 mega-menu-wrapper">
          <div className="header-main">
            <div className="logo d-none">
              <Link href="/" className="header-logo">
                <Image src={logo} width={250} height={100} alt={altLogo} />
              </Link>
            </div>
            <div className="header-left">
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <Menu />
                </div>
              </div>
            </div>
            <div className="header-right d-flex justify-content-end align-items-center">
              <div className="hidden md:block">
                <LanguageSwitcher />
              </div>
              <div className="header__hamburger d-xl-none my-auto">
                <div className="sidebar__toggle" onClick={handleOffCanvas}>
                  <i className="fas fa-bars text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
