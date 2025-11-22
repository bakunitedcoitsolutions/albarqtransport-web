"use client";
import Link from "next/link";

import { SERVICES } from "@/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AllServices() {
  const { isRTL, t } = useLanguage();

  return (
    <section
      className="service-section fix section-padding bg-cover"
      style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}
    >
      <div className="container-fluid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const serviceKey = service.translationKey.replace("menu.", "");
            return (
              <div key={service.href} className="flex! flex-col!">
                <div className="service-box-items">
                  <div className="service-thumb">
                    <img
                      src={service.homeImage}
                      alt={t(`service.${serviceKey}.name`)}
                    />
                  </div>
                  <div className="service-content">
                    <h2 className="number rtl:left-[30px]! rtl:right-[unset]!">
                      {index + 1}
                    </h2>
                    <h3 className="rtl:text-3xl!">
                      <Link href={service.href}>
                        {t(`service.${serviceKey}.name`)}
                      </Link>
                    </h3>
                    <p className="text-black! rtl:text-xl!">
                      {t(`service.${serviceKey}.description`)}
                    </p>
                    <Link
                      href={service.href}
                      className="link-btn rtl:text-base! rtl:xl:text-lg!"
                    >
                      {t("service.exploreMore")}{" "}
                      <i
                        className={`fa-solid fa-arrow-right rtl:mr-2! rtl:rotate-[260deg]!`}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
