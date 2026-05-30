"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import PreHeader from "../elements/PreHeader";
import { SERVICES } from "@/utils";

const selectedServices = SERVICES.filter(
  (service) =>
    service.href === "/services/sand" ||
    service.href === "/services/aggregate" ||
    service.href === "/services/soil" ||
    service.href === "/services/stone",
);

export default function Materials() {
  const { t } = useLanguage();

  const serviceImages = [
    "/assets/img/albarq/material/sand.jpg", // Sand
    "/assets/img/albarq/material/aggregate.jpg", // Aggregate
    "/assets/img/albarq/material/stone.jpg", // Stone
    "/assets/img/albarq/material/soil.jpg", // Soil
  ];

  return (
    <>
      <section
        className="team-section fix section-padding bg-cover"
        id="services"
        style={{ backgroundImage: 'url("assets/img/team/bg-shape.png")' }}
      >
        <div className="container">
          <div className="section-title text-center">
            <PreHeader text={t("servicesSection.preHeader")} />
            <h2
              className="wow fadeInUp rtl:text-3xl! rtl:md:text-4xl! rtl:xl:text-6xl!"
              data-wow-delay=".2s"
            >
              {t("servicesSection.title")}
            </h2>
          </div>
          <div className="row">
            {selectedServices.map((service, index) => {
              const serviceKey = service.translationKey.replace("menu.", "");
              const delay = index === 0 ? undefined : `.${index * 2}s`;
              return (
                <div
                  key={service.href}
                  className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay={delay}
                >
                  <div className="team-card-items">
                    <div className="team-image">
                      <img
                        src={serviceImages[index]}
                        alt={t(`service.${serviceKey}.name`)}
                      />
                    </div>
                    <div className="team-content">
                      <span className="rtl:text-lg! rtl:md:text-xl!">
                        {t("servicesSection.materialType")}
                      </span>
                      <h3 className="rtl:text-xl! rtl:md:text-2xl! rtl:xl:text-3xl!">
                        <a>{t(`service.${serviceKey}.name`)}</a>
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
