"use client";
import Link from "next/link";
import { SERVICES } from "@/utils";
import { cn } from "@/utils/helper";
import { useLanguage } from "@/contexts/LanguageContext";

const ServiceSidebar = ({ activeIndex }: { activeIndex: number }) => {
  const { t } = useLanguage();
  return (
    <div className="main-sidebar">
      <div className="single-sidebar-widget">
        <div className="wid-title">
          <h3 className="rtl:text-xl! rtl:md:text-2xl!">
            {t("serviceSidebar.services")}
          </h3>
        </div>
        <div className="news-widget-categories">
          <ul>
            {SERVICES.map((service, index) => (
              <li
                key={service.href}
                className={cn("cursor-pointer ", {
                  active: activeIndex === index,
                })}
              >
                <Link href={service.href}>{t(service.translationKey)}</Link>
                <span>
                  <i className="fa-regular fa-arrow-right-long" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="service-sidebar-widget">
        <div
          className="contact-bg text-center bg-cover relative w-full h-72!"
          style={{
            backgroundImage:
              'url("/assets/img/albarq/services/home/heavy-equipment.jpg")',
          }}
        >
          <div className="absolute px-10! flex! flex-col! justify-center! items-center! top-0 left-0 w-full h-full bg-black/60">
            <p className="mb-4! rtl:text-2xl! rtl:md:text-3xl! text-white! z-10">
              {t("serviceSidebar.needHelp")}
            </p>
            <Link
              href="/contact-us"
              className="theme-btn w-100 cursor-pointer rtl:text-xl! rtl:md:text-2xl!"
            >
              {t("serviceSidebar.contactUsNow")}
              <i className="fa-regular fa-arrow-right rtl:rotate-180! rtl:mr-3!" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSidebar;
