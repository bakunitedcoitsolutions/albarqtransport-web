"use client";
// import "swiper/css";
import Link from "next/link";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "@/contexts/LanguageContext";
import PreHeader from "../elements/PreHeader";
import { SERVICES } from "@/utils";

const getSwiperOptions = (isRTL: boolean) => ({
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 2000,
  loop: true,
  dir: isRTL ? "rtl" : "ltr",
  autoplay: {
    delay: 992000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".dot",
    clickable: true,
  },
  navigation: {
    nextEl: ".array-prev",
    prevEl: ".array-next",
  },
  breakpoints: {
    1399: {
      slidesPerView: 3,
    },
    1199: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

export default function Service1() {
  const { isRTL, t } = useLanguage();
  const swiperOptions = getSwiperOptions(isRTL);
  return (
    <>
      <section
        className="service-section fix section-padding bg-cover"
        style={{ backgroundImage: 'url("assets/img/service/service-bg.jpg")' }}
      >
        <div className="container">
          <div className="section-title text-center">
            <PreHeader text={t("service.whatWeDo")} />
            <h2
              className="wow fadeInUp text-white rtl:text-3xl! rtl:md:text-4xl!"
              data-wow-delay=".2s"
              dangerouslySetInnerHTML={{ __html: t("service.title") }}
            />
          </div>
          <div className="array-button">
            <button className="array-prev h1p">
              <i className="fa-regular fa-arrow-left-long" />
            </button>
            <button className="array-next h1n">
              <i className="fa-regular fa-arrow-right-long" />
            </button>
          </div>
        </div>
        <div className="container-fluid">
          <div className="swiper service-slider">
            <Swiper
              key={isRTL ? "rtl" : "ltr"}
              {...swiperOptions}
              className="swiper-wrapper"
            >
              {SERVICES.map((service, index) => {
                const serviceKey = service.translationKey.replace("menu.", "");
                return (
                  <SwiperSlide
                    key={service.href}
                    className="swiper-slide flex! flex-col!"
                  >
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
