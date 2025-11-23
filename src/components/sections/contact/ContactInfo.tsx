"use client";
import { ADDRESS, ADDRESS_AR, EMAIL, PHONE } from "@/utils";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactInfo() {
  const { t, isRTL } = useLanguage();
  return (
    <section className="contact-info-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp rtl:text-lg! rtl:md:text-xl!">
            <i className="fa-regular fa-arrow-left-long" />
            {t("contact.contactUsHeader")}
            <i className="fa-regular fa-arrow-right-long" />
          </h6>
          <h2
            className="wow fadeInUp rtl:text-3xl! rtl:md:text-4xl! rtl:xl:text-5xl!"
            data-wow-delay=".4s"
          >
            {t("contact.contactInformation")}
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp d-flex"
            data-wow-delay=".2s"
          >
            <div className="contact-box-items w-100 h-72! d-flex flex-column">
              <div className="icon flex items-center justify-center w-16 h-16 md:w-20 md:h-20 text-theme text-2xl md:text-3xl bg-transparent!">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="content grow text-center">
                <h3 className="rtl:text-xl! rtl:md:text-2xl!">
                  {t("contact.ourAddress")}
                </h3>
                <p className="rtl:text-base! rtl:md:text-lg!">
                  {isRTL ? ADDRESS_AR : ADDRESS}
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp d-flex"
            data-wow-delay=".4s"
          >
            <div className="contact-box-items w-100 h-72! d-flex flex-column">
              <div className="icon flex items-center justify-center w-16 h-16 md:w-20 md:h-20 text-theme text-2xl md:text-3xl bg-transparent!">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="content grow text-center">
                <h3 className="rtl:text-xl! rtl:md:text-2xl!">
                  {t("contact.emailAddress")}
                </h3>
                <p className="rtl:text-base! rtl:md:text-lg!">
                  <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 wow fadeInUp d-flex"
            data-wow-delay=".6s"
          >
            <div className="contact-box-items w-100 h-72! d-flex flex-column">
              <div className="icon flex items-center justify-center w-16 h-16 md:w-20 md:h-20 text-theme text-2xl md:text-3xl bg-transparent!">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="content grow text-center">
                <h3 className="rtl:text-xl! rtl:md:text-2xl!">
                  {t("contact.phone")}
                </h3>
                <p className="rtl:text-base! rtl:md:text-lg!">
                  <Link href={`tel:${PHONE.replaceAll(" ", "")}`}>{PHONE}</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
