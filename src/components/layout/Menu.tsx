"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SERVICES } from "@/utils";

const getMenuLinks = (t: (key: string) => string) => [
  {
    href: "/",
    name: t("menu.home"),
    navItemClass: "active menu-thumb",
  },
  {
    href: "/about-us",
    name: t("menu.aboutUs"),
  },
  {
    href: "/services",
    name: t("menu.services"),
    navItemClass: "has-dropdown",
    submenu: SERVICES.map((service) => ({
      href: service.href,
      name: t(service.translationKey),
    })),
  },
  {
    href: "/our-clients",
    name: t("menu.ourClients"),
  },
  {
    href: "/certificates",
    name: t("menu.certificates"),
  },
  {
    href: "/contact-us",
    name: t("menu.contactUs"),
  },
];

export default function Menu() {
  const { t } = useLanguage();
  const menuLinks = getMenuLinks(t);
  return (
    <>
      <nav id="mobile-menu" className="d-none d-xl-block">
        <ul>
          {menuLinks.map((link) => (
            <li key={link.href} className={link.navItemClass}>
              <Link href={link.href} className="rtl:text-2xl!">
                {link.name}
                {link?.submenu && link?.submenu?.length > 0 && (
                  <i className="fa-regular fa-plus rtl:pr-2! rtl:text-base!" />
                )}
              </Link>
              {link?.submenu && link?.submenu?.length > 0 && (
                <ul className="submenu">
                  {link?.submenu?.map((sublink) => (
                    <li key={sublink.href}>
                      <Link
                        href={sublink.href}
                        className="rtl:text-2xl! rtl:text-right!"
                      >
                        {sublink.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
