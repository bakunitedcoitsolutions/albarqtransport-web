"use client";

import Link from "next/link";
import Image from "next/image";

import { ADDRESS, ADDRESS_AR, EMAIL, PHONE, SOCIALS, SERVICES } from "@/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer1() {
  const { isRTL, t } = useLanguage();
  const address = isRTL ? ADDRESS_AR : ADDRESS;
  const footerServices = SERVICES; // Show all services
  const logo = isRTL
    ? "/assets/img/albarq/logos/logo_ar.png"
    : "/assets/img/albarq/logos/logo_en.png";
  const altLogo = isRTL ? "شركة البرق الرائدة للنقليات" : "Al Barq Transport";
  return (
    <>
      <footer
        className="footer-section bg-cover"
        style={{ backgroundImage: 'url("/assets/img/footer/bg.jpg")' }}
      >
        <div className="container">
          <div className="w-full py-6! md:py-10!">
            <div className="grid! grid-cols-1! sm:grid-cols-2! lg:grid-cols-3! gap-6! md:gap-8! xl:gap-12! items-start!">
              <div className="w-full!">
                <Link
                  href="/"
                  className="wow fadeInUp d-block mb-4! md:mb-0!"
                  data-wow-delay=".2s"
                >
                  <Image
                    src={logo}
                    width={250}
                    height={100}
                    alt={altLogo}
                    className="w-full! max-w-[200px]! md:max-w-[250px]! h-auto!"
                  />
                </Link>
              </div>

              <div className="w-full!">
                <div
                  className="contact-info-items wow fadeInUp d-flex align-items-start gap-3!"
                  data-wow-delay=".6s"
                >
                  <div className="icon-wrapper d-flex align-items-center justify-content-center w-10! h-10! md:w-12! md:h-12! bg-white! rounded-full! shrink-0!">
                    <i className="fa-solid fa-envelope text-theme! text-lg! md:text-xl!" />
                  </div>
                  <div className="content flex-1!">
                    <p className="mb-2! text-white! text-sm! md:text-base! rtl:text-lg! rtl:md:text-xl! rtl:lg:text-3xl!">
                      {t("footer.email")}
                    </p>
                    <h3 className="m-0! text-sm! md:text-base! lg:text-lg! rtl:text-lg! rtl:md:text-xl! rtl:lg:text-2xl!">
                      <Link
                        href={`mailto:${EMAIL}`}
                        className="text-theme2! lowercase break-all!"
                      >
                        {EMAIL}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="w-full!">
                <div
                  className="contact-info-items wow fadeInUp d-flex align-items-start gap-3!"
                  data-wow-delay=".8s"
                >
                  <div className="icon-wrapper d-flex align-items-center justify-content-center w-10! h-10! md:w-12! md:h-12! bg-white! rounded-full! shrink-0!">
                    <i className="fa-solid fa-phone-volume text-theme! text-lg! md:text-xl!" />
                  </div>

                  <div className="content flex-1!">
                    <p className="mb-2! text-white! text-sm! md:text-base! rtl:text-lg! rtl:md:text-xl! rtl:lg:text-3xl!">
                      {t("footer.phone")}
                    </p>
                    <h3 className="m-0! text-sm! md:text-base! lg:text-lg! rtl:text-lg! rtl:md:text-xl! rtl:lg:text-2xl!">
                      <Link
                        className="text-theme2! break-all!"
                        href={`tel:${PHONE.replaceAll(" ", "")}`}
                      >
                        {PHONE}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-widgets-wrapper">
            <div className="row">
              <div
                className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5 className="rtl:text-xl! rtl:lg:text-2xl!">
                      {t("footer.aboutCompany")}
                    </h5>
                  </div>
                  <div className="footer-content">
                    <p className="rtl:text-lg! rtl:md:text-xl! rtl:lg:text-2xl!">
                      {t("footer.companyDescription")}
                    </p>
                    <div className="social-icon d-flex align-items-center">
                      {SOCIALS.map((social) => (
                        <Link
                          href={social.url}
                          className="flex! items-center! justify-center!"
                          key={social.id}
                        >
                          {typeof social.icon === "string" ? (
                            <i className={social.icon} />
                          ) : (
                            <social.icon />
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5 className="rtl:text-xl! rtl:lg:text-2xl!">
                      {t("footer.quickLinks")}
                    </h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/">
                        <i
                          className={`fa-solid fa-chevrons-right rtl:rotate-180! rtl:ml-2! rtl:text-base!`}
                        />
                        <span className="rtl:text-lg! rtl:md:text-xl! rtl:lg:text-2xl!">
                          {t("menu.home")}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us">
                        <i
                          className={`fa-solid fa-chevrons-right rtl:rotate-180! rtl:ml-2! rtl:text-base!`}
                        />
                        <span className="rtl:text-lg! rtl:md:text-xl! rtl:lg:text-2xl!">
                          {t("menu.aboutUs")}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <i
                          className={`fa-solid fa-chevrons-right rtl:rotate-180! rtl:ml-2! rtl:text-base!`}
                        />
                        <span className="rtl:text-lg! rtl:md:text-xl! rtl:lg:text-2xl!">
                          {t("menu.services")}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-clients">
                        <i
                          className={`fa-solid fa-chevrons-right rtl:rotate-180! rtl:ml-2! rtl:text-base!`}
                        />
                        <span className="rtl:text-lg! rtl:md:text-xl! rtl:lg:text-2xl!">
                          {t("menu.ourClients")}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/certifications">
                        <i
                          className={`fa-solid fa-chevrons-right rtl:rotate-180! rtl:ml-2!`}
                        />

                        <span className="rtl:text-lg! rtl:md:text-xl! rtl:lg:text-2xl!">
                          {t("menu.certificates")}
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
                        <i
                          className={`fa-solid fa-chevrons-right rtl:rotate-180! rtl:ml-2! rtl:text-base!`}
                        />
                        <span className="rtl:text-lg! rtl:md:text-xl! rtl:lg:text-2xl!">
                          {t("menu.contactUs")}
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5 className="rtl:text-xl! rtl:lg:text-2xl!">
                      {t("footer.ourServices")}
                    </h5>
                  </div>
                  <ul className="list-area">
                    {footerServices.map((service) => {
                      const serviceKey = service.translationKey.replace(
                        "menu.",
                        ""
                      );
                      return (
                        <li key={service.href}>
                          <Link href={service.href} className="">
                            <i
                              className={`fa-solid fa-chevrons-right rtl:rotate-180! rtl:ml-2! rtl:text-base!`}
                            />
                            <span className="rtl:text-lg! rtl:md:text-xl! rtl:lg:text-2xl!">
                              {t(`menu.${serviceKey}`)}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5 className="rtl:text-xl! rtl:lg:text-2xl!">
                      {t("footer.address")}
                    </h5>
                  </div>
                  <div className="footer-gallery">
                    <div className="gallery-wrap">
                      <p className="text-[#d9d9d9cc]! rtl:text-lg! rtl:md:text-xl! rtl:lg:text-2xl!">
                        {address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-center! rtl:text-lg! rtl:md:text-xl! rtl:lg:text-2xl!">
              {t("footer.copyright")} {new Date().getFullYear()}{" "}
              <Link className="text-theme2!" href="/">
                {t("footer.companyName")}
              </Link>{" "}
              {t("footer.allRightsReserved")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
