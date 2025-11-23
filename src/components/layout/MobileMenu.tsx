"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SERVICES } from "@/utils";

const getMenuLinks = (t: (key: string) => string) => [
  {
    href: "/",
    name: t("menu.home"),
    navItemClass: "active d-xl-none",
  },
  {
    href: "/about-us",
    name: t("menu.aboutUs"),
  },
  {
    href: "/services",
    name: t("menu.services"),
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
    href: "/certifications",
    name: t("menu.certificates"),
  },
  {
    href: "/contact-us",
    name: t("menu.contactUs"),
    isLast: true,
  },
];

export default function MobileMenu() {
  const { t } = useLanguage();
  const menuLinks = getMenuLinks(t);
  const [isAccordion, setIsAccordion] = useState<number | null>(null);

  const handleAccordion = (key: number) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  return (
    <>
      <div className="mobile-menu fix mb-3 mean-container">
        <div className="mean-bar">
          <nav className="mean-nav">
            <ul>
              {menuLinks.map((link) => {
                const hasSubmenu = link.submenu && link.submenu.length > 0;
                let accordionKey: number | null = null;
                if (link.href === "/services") accordionKey = 1;
                const isOpen =
                  accordionKey !== null && isAccordion === accordionKey;

                return (
                  <li
                    key={link.href}
                    className={`${link.navItemClass} ${
                      link.isLast ? "mean-last" : ""
                    }`}
                  >
                    <Link
                      href={link.href}
                      className={link.href === "/about" ? "border-none" : ""}
                    >
                      {link.name}
                      {hasSubmenu && <i className="fa-regular fa-plus" />}
                    </Link>
                    {hasSubmenu && accordionKey !== null && (
                      <>
                        <ul
                          className="submenu"
                          style={{
                            display: isOpen ? "block" : "none",
                          }}
                        >
                          {link.submenu?.map((sublink) => (
                            <li key={sublink.href}>
                              <Link
                                href={sublink.href}
                                className="rtl:text-2xl!"
                              >
                                {sublink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <a
                          className="mean-expand"
                          onClick={() => handleAccordion(accordionKey!)}
                          style={{ fontSize: 18 }}
                        >
                          {isOpen ? (
                            <i className="fa-regular fa-minus" />
                          ) : (
                            <i className="fa-regular fa-plus" />
                          )}
                        </a>
                      </>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
