import Link from "next/link";
import Image from "next/image";

import { ADDRESS, EMAIL, PHONE, SOCIALS } from "@/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer1() {
  const { isRTL } = useLanguage();
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
          <div className="w-full py-10!">
            <div className="grid! grid-cols-12! gap-12! items-start!">
              <div className="col-span-12! md:col-span-6! xl:col-span-4!">
                <Link
                  href="/"
                  className="wow fadeInUp d-block"
                  data-wow-delay=".2s"
                >
                  <Image src={logo} width={250} height={100} alt={altLogo} />
                </Link>
              </div>

              <div className="col-span-12! md:col-span-6! xl:col-span-4!">
                <div
                  className="contact-info-items wow fadeInUp d-flex align-items-start gap-3!"
                  data-wow-delay=".6s"
                >
                  <div className="icon-wrapper d-flex align-items-center justify-content-center w-10! h-10! bg-white! rounded-full! shrink-0!">
                    <i className="fa-solid fa-envelope text-theme! text-xl!" />
                  </div>
                  <div className="content">
                    <p className="mb-2! text-white!">Email</p>
                    <h3 className="m-0!">
                      <Link href={`mailto:${EMAIL}`} className="text-theme2!">
                        {EMAIL}
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-span-12! md:col-span-6! xl:col-span-4!">
                <div
                  className="contact-info-items wow fadeInUp d-flex align-items-start gap-3!"
                  data-wow-delay=".8s"
                >
                  <div className="icon-wrapper d-flex align-items-center justify-content-center w-10! h-10! bg-white! rounded-full! shrink-0!">
                    <i className="fa-solid fa-phone-volume text-theme! text-xl!" />
                  </div>

                  <div className="content">
                    <p className="mb-2! text-white!">Phone</p>
                    <h3 className="m-0!">
                      <Link
                        className="text-theme2!"
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
                    <h5>About Company</h5>
                  </div>
                  <div className="footer-content">
                    <p>
                      Al Barq Transport is a leading transportation and
                      logistics company in Saudi Arabia, providing reliable and
                      efficient transport solutions for businesses and
                      individuals.
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
                    <h5>Quick Link</h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/">
                        <i className="fa-solid fa-chevrons-right" />
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/our-company">
                        <i className="fa-solid fa-chevrons-right" />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/services">
                        <i className="fa-solid fa-chevrons-right" />
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects">
                        <i className="fa-solid fa-chevrons-right" />
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link href="/certificates">
                        <i className="fa-solid fa-chevrons-right" />
                        Certificates
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
                        <i className="fa-solid fa-chevrons-right" />
                        Contact Us
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
                    <h5>Our Services</h5>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/services/water">
                        <i className="fa-solid fa-chevrons-right" />
                        Water
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/transportation">
                        <i className="fa-solid fa-chevrons-right" />
                        Transportation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/lowbed">
                        <i className="fa-solid fa-chevrons-right" />
                        Lowbed
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h5>Address</h5>
                  </div>
                  <div className="footer-gallery">
                    <div className="gallery-wrap">
                      <p className="text-[#d9d9d9cc]!">{ADDRESS}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            {/* <p>
              {t("footer.copyrightText")} {year}{" "}
              <Link href="/">{t("footer.companyName")}</Link>{" "}
              {t("footer.allRightsReserved")}
            </p> */}
            <p className="text-center!">
              Copyright © {new Date().getFullYear()}{" "}
              <Link className="text-theme2!" href="/">
                Al Barq Transport
              </Link>{" "}
              All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
