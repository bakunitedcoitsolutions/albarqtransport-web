"use client";

import { PHONE } from "@/utils";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <section
        className="contact-section fix section-padding bg-cover"
        id="contact"
        style={{ backgroundImage: 'url("assets/img/contact-bg.jpg")' }}
      >
        <div className="container">
          <div className="contact-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="contact-items">
                  <h3
                    className="wow fadeInUp rtl:text-2xl! rtl:md:text-3xl! rtl:xl:text-4xl!"
                    data-wow-delay=".2s"
                  >
                    {t("contact.getInTouch")}
                  </h3>
                  <form
                    action="#"
                    id="contact-form"
                    method="POST"
                    className="mt-4 mt-md-0"
                  >
                    <div className="row g-4">
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder={t("contact.form.name")}
                            className="rtl:text-lg! rtl:md:text-xl!"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder={t("contact.form.email")}
                            className="rtl:text-lg! rtl:md:text-xl!"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="number"
                            id="number"
                            placeholder={t("contact.form.phone")}
                            className="rtl:text-lg! rtl:md:text-xl!"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-6 col-md-6 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder={t("contact.form.subject")}
                            className="rtl:text-lg! rtl:md:text-xl!"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".2s"
                      >
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder={t("contact.form.message")}
                            defaultValue={""}
                            className="rtl:text-lg! rtl:md:text-xl!"
                          />
                        </div>
                      </div>
                      <div
                        className="col-lg-7 wow fadeInUp"
                        data-wow-delay=".4s"
                      >
                        <button
                          type="submit"
                          className="theme-btn rtl:text-xl! rtl:md:text-2xl!"
                        >
                          {t("contact.form.sendMessage")}{" "}
                          <i
                            className={`fas fa-long-arrow-right rtl:rotate-180! rtl:mr-3!`}
                          />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title">
                    <h6 className="text-white wow fadeInUp">
                      <i className="fa-regular fa-arrow-left-long rtl:rotate-180! rtl:ml-3!" />
                      <span className="rtl:text-2xl!">
                        {t("contact.preHeader")}
                      </span>
                      <i className="fa-regular fa-arrow-right-long rtl:rotate-180! ltr:ml-3! rtl:mr-3!" />
                    </h6>
                    <h2
                      className="text-white wow fadeInUp rtl:text-3xl! rtl:md:text-4xl! rtl:xl:text-6xl!"
                      data-wow-delay=".3s"
                    >
                      {t("contact.title")}
                    </h2>
                  </div>
                  <p
                    className="text-white mt-3 mt-md-0 wow fadeInUp rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!"
                    data-wow-delay=".5s"
                  >
                    {t("contact.description")}
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="icon">
                      <i className="fa-solid fa-phone-volume rtl:rotate-180! text-center!" />
                    </div>
                    <div className="content">
                      <span className="rtl:text-lg! rtl:md:text-xl!">
                        {t("contact.callEmergency")}
                      </span>
                      <h4 className="rtl:text-xl! rtl:md:text-2xl! rtl:xl:text-3xl!">
                        <Link href={`tel:${PHONE.replaceAll(" ", "")}`}>
                          {PHONE}
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
