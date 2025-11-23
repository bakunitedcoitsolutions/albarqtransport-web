"use client";
// import "swiper/css"

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ALL_CLIENTS } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import PreHeader from "../elements/PreHeader";

const getSwiperOptions = (isRTL: boolean) => ({
  modules: [Autoplay, Pagination, Navigation],
  spaceBetween: 30,
  speed: 2500,
  loop: true,
  dir: isRTL ? "rtl" : "ltr",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1199: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

interface Brand1Props {
  alt?: boolean;
}

export default function Brand1({ alt }: Brand1Props): React.ReactElement {
  const { isRTL, t } = useLanguage();
  const swiperOptions = getSwiperOptions(isRTL);

  return (
    <>
      <div
        className={`brand-section fix section-padding ${
          alt ? "pt-0 section-bg-2" : ""
        }`}
      >
        <div className="container text-center">
          <div className="section-title">
            <PreHeader text={t("clients.preHeader")} />
            <h2
              className="wow fadeInUp rtl:text-4xl! rtl:md:text-5xl! rtl:xl:text-6xl!"
              data-wow-delay=".2s"
            >
              {t("clients.trustedPartner")}
            </h2>
          </div>
        </div>
        <div className="container mt-10!">
          <div className="swiper brand-slider">
            <Swiper
              key={isRTL ? "rtl" : "ltr"}
              {...swiperOptions}
              className="swiper-wrapper"
            >
              {ALL_CLIENTS.map((client) => {
                const clientName = t(client.translationKey);
                return (
                  <SwiperSlide key={client.id} className="swiper-slide">
                    <div className="brand-image center flex items-center justify-center">
                      <Link
                        href={client.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Image
                          src={client.image}
                          alt={clientName}
                          width={180}
                          height={120}
                          className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                          style={{ objectFit: "contain" }}
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
