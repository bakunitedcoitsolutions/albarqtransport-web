"use client";

import ServiceSidebar from "@/components/elements/ServiceSidebar";
import Layout from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HeavyEquipmentRentalServicesPage(): React.ReactElement {
  const { t } = useLanguage();

  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={1}
        breadcrumbText="menu.heavyEquipmentRental"
        breadcrumbTitle="menu.heavyEquipmentRentalTitle"
      >
        <section className="service-details-section section-padding">
          <div className="container">
            <div className="service-details-wrapper">
              <div className="row g-4">
                <div className="col-12 col-lg-8">
                  <div className="service-details-image">
                    <img
                      src="/assets/img/albarq/services/individual/heavy-equipment-1.jpg"
                      alt={t("service.heavyEquipmentRental.name")}
                    />
                  </div>
                  <div className="service-details-content">
                    <h2 className="rtl:text-3xl! rtl:md:text-4xl! rtl:xl:text-5xl!">
                      {t("service.heavyEquipmentRental.details.title")}
                    </h2>
                    <p className="rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!">
                      {t("service.heavyEquipmentRental.details.paragraph1")}
                    </p>
                    <p className="mt-4 mb-4 rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!">
                      {t("service.heavyEquipmentRental.details.paragraph2")}
                    </p>
                    <div className="row g-4">
                      <div className="col-lg-7">
                        <div className="service-details-image">
                          <img
                            src="/assets/img/albarq/services/home/heavy-equipment.jpg"
                            alt={t("service.heavyEquipmentRental.name")}
                          />
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div className="content">
                          <h3 className="rtl:text-2xl! rtl:md:text-3xl! rtl:xl:text-4xl!">
                            {t(
                              "service.heavyEquipmentRental.details.benefitsTitle"
                            )}
                          </h3>
                          <p className="mt-2 mb-2 rtl:text-lg! rtl:md:text-xl!">
                            {t(
                              "service.heavyEquipmentRental.details.benefitsDescription1"
                            )}
                          </p>
                          <p className="rtl:text-lg! rtl:md:text-xl!">
                            {t(
                              "service.heavyEquipmentRental.details.benefitsDescription2"
                            )}
                          </p>
                        </div>
                        <ul className="details-list">
                          <li className="rtl:text-lg! rtl:md:text-xl!">
                            <i className="fa-solid fa-circle-check rtl:ml-3!" />
                            {t("service.heavyEquipmentRental.details.benefit1")}
                          </li>
                          <li className="rtl:text-lg! rtl:md:text-xl!">
                            <i className="fa-solid fa-circle-check rtl:ml-3!" />
                            {t("service.heavyEquipmentRental.details.benefit2")}
                          </li>
                          <li className="rtl:text-lg! rtl:md:text-xl!">
                            <i className="fa-solid fa-circle-check rtl:ml-3!" />
                            {t("service.heavyEquipmentRental.details.benefit3")}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h4 className="rtl:text-2xl! rtl:md:text-3xl! rtl:xl:text-4xl!">
                      {t("service.heavyEquipmentRental.details.processTitle")}
                    </h4>
                    <p className="mt-3 rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!">
                      {t(
                        "service.heavyEquipmentRental.details.processDescription"
                      )}
                    </p>
                    <div className="row g-4 mt-2">
                      <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-details-box">
                          <div className="icon">
                            <img src="/assets/img/icon/15.svg" alt="img" />
                            <h5 className="rtl:text-xl! rtl:md:text-2xl!">
                              {t(
                                "service.heavyEquipmentRental.details.step1Title"
                              )}
                            </h5>
                          </div>
                          <p className="rtl:text-base! rtl:md:text-lg!">
                            {t(
                              "service.heavyEquipmentRental.details.step1Description"
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-details-box">
                          <div className="icon">
                            <img src="/assets/img/icon/16.svg" alt="img" />
                            <h5 className="rtl:text-xl! rtl:md:text-2xl!">
                              {t(
                                "service.heavyEquipmentRental.details.step2Title"
                              )}
                            </h5>
                          </div>
                          <p className="rtl:text-base! rtl:md:text-lg!">
                            {t(
                              "service.heavyEquipmentRental.details.step2Description"
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="service-details-box">
                          <div className="icon">
                            <img src="/assets/img/icon/17.svg" alt="img" />
                            <h5 className="rtl:text-xl! rtl:md:text-2xl!">
                              {t(
                                "service.heavyEquipmentRental.details.step3Title"
                              )}
                            </h5>
                          </div>
                          <p className="rtl:text-base! rtl:md:text-lg!">
                            {t(
                              "service.heavyEquipmentRental.details.step3Description"
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-1 pt-4 rtl:text-lg! rtl:md:text-xl! rtl:xl:text-2xl!">
                      {t("service.heavyEquipmentRental.details.conclusion")}
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <ServiceSidebar activeIndex={10} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
