"use client";

import Link from "next/link";
import { OffcanvasProps } from "../../types";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "../elements/LanguageSwitcher";
import { ADDRESS, EMAIL, PHONE, SOCIALS } from "@/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Offcanvas({
  isOffCanvas,
  handleOffCanvas,
}: OffcanvasProps) {
  const { isRTL, t } = useLanguage();
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${isOffCanvas ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <LanguageSwitcher />
                </div>
                <div className="offcanvas__close">
                  <button onClick={handleOffCanvas}>
                    <i className="fa-regular fa-xmark" />
                  </button>
                </div>
              </div>
              <div className="offcanvas__content-inner">
                <div className="offcanvas__menu">
                  <MobileMenu />
                </div>
                <div className="offcanvas__contact">
                  <h4>{t("offcanvas.contactInfo")}</h4>
                  <ul className="text-black">
                    <li>
                      {!isRTL && <i className="fa-regular fa-phone" />}
                      <Link
                        className="pl-2 text-theme!"
                        href={`tel:${PHONE.replaceAll(" ", "")}`}
                      >
                        {PHONE}
                      </Link>
                      {isRTL && <i className="fa-regular fa-phone" />}
                    </li>
                    <li>
                      {!isRTL && <i className="fa-regular fa-envelope" />}
                      <Link
                        className="pl-2 lowercase text-theme!"
                        href={`mailto:${EMAIL}`}
                      >
                        {EMAIL}
                      </Link>
                      {isRTL && <i className="fa-regular fa-envelope" />}
                    </li>
                    <li>
                      <i className="fa-regular fa-location-dot rtl:pl-2!" />
                      <span className="pl-2 text-theme!">{ADDRESS}</span>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas__social mt-4">
                  <h4 className="rtl:text-3xl!">{t("offcanvas.followUs")}</h4>
                  <ul className="flex items-center mt-2 gap-4">
                    {SOCIALS.map((social) => (
                      <li key={social.id}>
                        <Link href={social.url}>
                          {typeof social.icon === "string" ? (
                            <i className={social.icon} />
                          ) : (
                            <social.icon />
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
